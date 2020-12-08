Front-end Assessment Server
====================

> The stub server of front-end assessment project.

## Install
First make sure that [nodejs](https://nodejs.org/), [npm](https://www.npmjs.com/) and [yarn](https://yarnpkg.com/) have been installed. Then run:

```bash
yarn install
```

## Up and running


1. Initialize database by running:

```
yarn init:db
``` 

it will create a `db.sqlite` file in the root of the project.

2. Then you can run server with:

```
yarn start
```
the server will listening on port 3000 (you can change it by specifying `PORT` environment variable)

*NOTE: as long as db.sqlite file exist you don't need to reinitialize the database*

## APIs

### Create user

Method: POST\
Endpoint: /users\
Body: 
|property|type|example|
|-----|----|----|
| username | String | cafebazaar
| password | String | cafebazaar
| email | String | test@cafebazaar.ir
| title | String | CafeBazaar

Response:
|status code|message
|-----|----|
| 202 | success 
| 403 | user already exist 
| 500 | server error 

### Get user info

Method: GET\
Endpoint: /users/:username\
Response:
|status code|message
|-----|----|
| 200 | USER_INFO 
| 404 | user not found 

### Create Auth Token

Method: POST\
Endpoint: /sessions\
Body: 
|property|type|example|
|-----|----|----|
| username | String | cafebazaar
| password | String | cafebazaar

Response:
|status code|message
|-----|----|
| 200 | AUTH_TOKEN 
| 404 | user not found 
| 500 | server error 

### Create Post

Method: POST\
Endpoint: /posts\
Header: 
|name|value|example|
|-----|----|----|
| Authorization | Bearer AUTH_TOKEN  | Bearer eyJhbGc...

Body: 
|property|type|example|
|-----|----|----|
| title | String | test post
| date | String | 21 Azar 99
| body | String | Lorem ipsum...

Response:
|status code|message
|-----|----|
| 202 | CREATED_POST 
| 500 | server error 

### Get All Posts

Method: GET\
Endpoint: /posts\
Params:
|name|type|example|
|-----|----|----|
| q *(optional)* | String | test

Response:
|status code|message
|-----|----|
| 200 | POSTS 
| 500 | server error 

### Get Single Post

Method: GET\
Endpoint: /posts/:post_id

Response:
|status code|message
|-----|----|
| 200 | POST |
| 404 | post not found|
| 500 | server error 


### Create Post

Method: POST\
Endpoint: /posts/:post_id/comments

Body: 
|property|type|example|
|-----|----|----|
| author | String | cafebazaar
| date | String | 21 Azar 99
| parent_id | Number | 1
| body | String | Lorem ipsum...

Response:
|status code|message
|-----|----|
| 202 | CREATED_COMMENT 
| 404 | post not found 
| 500 | server error 

### Get Post's Comments

Method: GET\
Endpoint: /posts/:post_id/comments\
Response:
|status code|message
|-----|----|
| 200 | COMMENTS
| 500 | server error 
