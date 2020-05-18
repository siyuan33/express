const createError = require('http-errors');
import express from 'express'
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: (arg0: any) => void) {
  next(createError(404));
});

// error handler
app.use(function (err: { message: any; status: any; }, req: { app: { get: (arg0: string) => string; }; }, res: { locals: { message: any; error: any; }; status: (arg0: any) => void; render: (arg0: string) => void; }, next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
console.log("这是更改的app.ts");
module.exports = app;
