var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listItemsRouter = require('./routes/list-items-router');
var questionsRouter = require('./routes/questions');

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// http://localhost:3000/api/list-items/
// http://localhost:3000/api/list-items/hey
app.use('/api/list-items', listItemsRouter);
app.use('/api/questions', questionsRouter);

module.exports = app;
