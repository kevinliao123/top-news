var passport = require('passport');
var bodyParser = require('body-parser');
var createError = require('http-errors');
var config = require('./config/config.json');
var cors = require('cors');
var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var newsRouter = require('./routes/news');
var authRouter = require('./routes/auth');

var app = express();
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, '../client/build/'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, '../client/build/static/')));

// app.all('*', function(req, res, next) {
//   res.header("Access_Control-Allow-Origin","*");
//   res.header("Access_Control-Allow-Headers","X-Request");
//   next();
// });

// TODO: remove thsi after development is done.
app.use(cors());

require('./models/main.js').connect(config.mongoDburi);


app.use(passport.initialize());
var localSignupStrategy = require('./passport/signup_passport');
var localLoginStrategy = require('./passport/login_passport');
passport.use('local-signup',localSignupStrategy);
passport.use('local-login',localLoginStrategy);

const authCheckMiddleware = require('./middleware/auth_checker');
app.use('/news', authCheckMiddleware);

app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/news', newsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var error = new Error('Not Found');
    error.status = 404;
    res.render('404 not found');
});

module.exports = app;
