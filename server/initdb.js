const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const data = require('./db.json');

const DB_FILE = './db.sqlite'
if (fs.existsSync(DB_FILE)) {
    fs.unlinkSync(DB_FILE);
}
const db = new sqlite3.Database(DB_FILE);

db.serialize(function() {
    db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title NVARCHAR(200),
        email NVARCHAR(200),
        username NVARCHAR(100),
        password NVARCHAR(100)
    )`)
    console.log('users table created.');
      
    db.run(`CREATE TABLE posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        author_id INTEGER,
        date TEXT,
        visits INTEGET,
        body TEXT,
        FOREIGN KEY(author_id) REFERENCES users(id)
    )`);
    console.log('posts table created.');
  
    db.run(`CREATE TABLE comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author NVARCHAR(200),
        post_id INTEGER,
        parent_id INTEGER,
        date TEXT,
        body TEXT,
        FOREIGN KEY(post_id) REFERENCES posts(id),
        FOREIGN KEY(parent_id) REFERENCES comments(id)
    )`);
    console.log('comments table created.');

    db.run(
        `INSERT INTO users(title, username, password) VALUES (?, ?, ?)`,
        'cafebazaar', 
        'cafebazaar', 
        'cafebazaar'
    );
 
    const stmt = db.prepare("INSERT INTO users(title) VALUES (?)");
    for (let i = 0; i < 10; i++) {
        stmt.run("User " + i);
    }
    stmt.finalize();


    const pstmt = db.prepare("INSERT INTO posts(title, author_id, date, visits, body) VALUES (?,?,?,?,?)");
    for (const post of data.posts) {
        const randomUser = 1 + ((Math.random()*11)|0);
        pstmt.run(post.title, randomUser, post.date, post.visits, post.body);
    }
    pstmt.finalize();


    const cstmt = db.prepare("INSERT INTO comments(author, post_id, date, body) VALUES (?,?,?,?)");
    for (const comment of data.comments) {
        cstmt.run(comment.author, comment.post_id, comment.date, comment.body);
    }
    cstmt.finalize();

 
    db.each("SELECT * FROM users", function(err, row) {
        console.log(row);
    });
    db.each("SELECT * FROM posts", function(err, row) {
        console.log(row);
    });
    db.each("SELECT * FROM comments", function(err, row) {
        console.log(row);
    });
});
 
db.close();