const express = require('express');
const User = require('./controllers/user.controller');
const validateNewUser = require('./middlewares/validateNewUser');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', User.findUser);

app.post('/user', validateNewUser, User.createUser);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
