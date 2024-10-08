const express = require('express');
const User = require('./controllers/user.controller');
const validateNewUser = require('./middlewares/validateNewUser');
const validateJWT = require('./middlewares/validateJWT');
const Category = require('./controllers/category.controller');
const BlogPost = require('./controllers/BlogPost.controller');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', User.findUser);

app.post('/user', validateNewUser, User.createUser);

app.get('/user', validateJWT, User.getUser);

app.get('/user/:id', validateJWT, User.getUserById);

app.post('/categories', validateJWT, Category.createCategory);

app.get('/categories', validateJWT, Category.findCategories);

app.post('/post', validateJWT, BlogPost.createBlogPost);

module.exports = app;
