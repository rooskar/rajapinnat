var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;

//database
const bookRouter = require('./routes/book.js');
app.use('/book', bookRouter);

const borrowerRouter = require('./routes/borrower.js');
app.use('/borrower', borrowerRouter);

const userRouter = require('./routes/users.js');
app.use('/user', userRouter);

const loginRouter = require('./routes/login.js');
app.use('/login', loginRouter);