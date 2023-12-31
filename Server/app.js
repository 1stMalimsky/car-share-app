var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const apiRouter = require("./routes/api/api");
const chalk = require("chalk");
const { join } = require("path");

var app = express();

app.use(cors());
/* app.use(cors({ origin: 'http://localhost:8181' })); */
app.use(logger('request time: [:date[clf]] | method::method:url | request Status::status | Sent by::user-agent | response time: :response-time ms'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/static/css/main.19441af3.css', (req, res) => {
  res.type('text/css');
});

app.use("/api", apiRouter);
app.use("*", (req, res) => {
  res.sendFile(join(__dirname, "build", "index.html"))
})


app.use(express.static(join(__dirname, "build")));
app.use((err, req, res, next) => {
  console.error(chalk.magenta(err));
  res.status(500).json({ "error msg": err.message || err });
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


module.exports = app;
