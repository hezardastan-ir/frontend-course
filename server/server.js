const fs = require('fs')
const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const jwt = require('jwt-express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(require('cors')());
app.use(express.json());
app.use(jwt.init('secret', {
    cookies: false,
}));


const DB_FILE = './db.sqlite'
if (!fs.existsSync(DB_FILE)) throw new Error(
    "Database file not found.\n Refer to \"Up and running\" section in README or if you think it's a bug create an issus\n"
    )



const db = new sqlite3.Database(DB_FILE);

function authorize(req, res, next) {
    const {userId} = req.jwt.payload;
    if (!userId) {
        res.status(401).json({
            message: "The token is invalid"
        });
        return;
    }
    next();
}

const INVALID_VALUE_MESSAGE = 'value is not valid'

function errorMessageFormatter({msg,param,value}) {
    return `${param}: ${msg}. got ${value}` 
}

function checkValidation(req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({
            message: 'Invalid Body',
            errors: errors.formatWith(errorMessageFormatter).array()
        });
        return;
    }
    next()
}




app.get('/', (req, res) => {
  res.send(`Assessments API`);
});

app.get('/users/:username', (req, res) => {
    const {username} = req.params;
    db.get('select title, username, email from users where username=?', username, (err, row) => {
        if (err || !row) {
            res.status(404).json({message: 'User not found.'});
            return;
        }

        res.json(row);
    });
});

app.post('/users', [
    body('username', INVALID_VALUE_MESSAGE).isString(),
    body('password',INVALID_VALUE_MESSAGE).exists({checkFalsy: true, checkNull: true}),
    body('email','value is not valid, example: test@test.xyz ').isEmail(),
    body('title',INVALID_VALUE_MESSAGE).exists({checkFalsy: true, checkNull: true}),
    checkValidation
],(req, res) => {
    const {username, password, email, title} = req.body;
    db.get('select count(*) as cnt from users where username=?', username, (err, row) => {
        if (row.cnt > 0) {
            res.status(403).json({message: 'User already exists'});
            return;
        }

        db.run(
            `INSERT INTO users(username, password, email, title) VALUES (?, ?, ?, ?)`,
            username,
            password,
            email,
            title,
            err => {
                if (err) {
                    res.status(500).json({message: 'Unknown error'});
                    return;
                }

                res.status(202).json({status: 'success'});
            }
        );
    });
});

// Login api
app.post('/sessions',[
    body('username',INVALID_VALUE_MESSAGE).exists({checkNull: true}),
    body('password',INVALID_VALUE_MESSAGE).exists({checkNull: true}),
    checkValidation
], (req, res) => {
    const { username, password } = req.body;
    
    db.get('select id from users where username=? and password=?', username, password, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Unexpected error" });
        }
        else if (result && result.id) {
            const jwt = res.jwt({ userId: result.id });
            res.json({access_token: jwt.token});
        }
        else {
            res.status(404).json({ message: "User not found" });
        }
    });
});

// Get all Posts
app.get('/posts', (req, res) => {
    const {q} = req.query;
    if (q) {
        const p = '%' + q + '%';
        db.all(`select posts.*, users.title as author 
                from posts, users on posts.author_id = users.id
                where posts.title like ? or posts.body like ?
                order by posts.id DESC`, p, p, (err, rows) => {
            if (err) console.log(err);
            res.json(rows);
        });
    }
    else {
        db.all(`select posts.*, users.title as author 
                from posts, users on posts.author_id = users.id
                order by posts.id DESC`, (err, rows) => {
            res.json(rows);
        });
    }
});

// Get single Posts
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    db.get('select posts.*, users.title as author from posts, users on posts.author_id = users.id where posts.id=?', postId, (err, row) => {
        if (!row) {
            res.status(404).json({message: "Post not found."});
            return;
        }
        row.visits++;
        res.json(row);
        db.run(`update posts set visits=visits+1 where id=?`, postId);
    });
    // TODO: update post's visits count
});

// Create a Post
app.post('/posts', [authorize,
    body('title', INVALID_VALUE_MESSAGE).isString(),
    body('date',INVALID_VALUE_MESSAGE).isString(),
    body('body', INVALID_VALUE_MESSAGE).isString(),
    checkValidation
], (req, res) => {
    const {userId} = req.jwt.payload;
    const {title, date, body} = req.body;

    db.run(
        `INSERT INTO posts(author_id, title, date, visits, body) VALUES (?,?,?,?,?)`,
        userId,
        title,
        date,
        1,
        body,
        function(err) {
            if (err) {
                res.status(500).json({message: 'Unknown error'});
                return;
            }

            db.get(`select posts.*, users.title as author from posts, users 
                        on posts.author_id = users.id 
                        where posts.rowid=?`, this.lastID, (err, row) => {
                res.status(202).json(row);
            });
        }
    );
});

// Get a Post's Comments
app.get('/posts/:id/comments', (req, res) => {
    const postId = req.params.id;
    db.all('select * from comments where post_id=?', postId, (err, rows) => {
        res.json(rows);
    });
});

// Create a Comment for a Post
app.post('/posts/:id/comments',[
    body('author',INVALID_VALUE_MESSAGE).exists({checkNull: true}),
    body('parent_id',INVALID_VALUE_MESSAGE).isNumeric(),
    body('date', INVALID_VALUE_MESSAGE).isString(),
    body('body',INVALID_VALUE_MESSAGE).exists({checkNull: true}),
    checkValidation
], (req, res) => {
    const post_id = req.params.id;
    const {author, parent_id, date, body} = req.body;

    db.get('select count(*) as cnt from posts where posts.id=?', post_id, (err, row) => {
        if (!row || !row.cnt) {
            res.status(404).json({ message: 'post not found. '});
            return;
        }

        db.run(
            `INSERT INTO comments(author, post_id, parent_id, date, body) VALUES (?,?,?,?,?)`,
            author,
            post_id,
            parent_id,
            date,
            body,
            function(err) {
                if (err) {
                    res.status(500).json({message: 'Unknown error'});
                    return;
                }

                db.get(`select * from comments where rowid=?`, this.lastID, (err, row) => {
                    res.status(202).json(row);
                });
            }
        );
    });
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
