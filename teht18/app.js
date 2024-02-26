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
const arviointiRouter = require('./routes/arviointi.js');
app.use('/arviointi', arviointiRouter);

const opintojaksoRouter = require('./routes/opintojakso.js');
app.use('/opintojakso', opintojaksoRouter);

const opiskelijaRouter = require('./routes/opiskelija.js');
app.use('/opiskelija', opiskelijaRouter);
