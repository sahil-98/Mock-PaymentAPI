var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
const mongoose = require('mongoose');

//var indexRouter = require('./routes/index');
var PaymentRouter = require('./routes/payment');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Router calling API
app.use('/api', PaymentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Database connect
mongoose.connect('mongodb://localhost:27017/payment', {       
  useNewUrlParser: true, 
  useUnifiedTopology: true ,
  useCreateIndex: true
}) .then(() => {
      console.log("DB Connected")
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Port number and app listner
const port = 8000;  
app.listen(port,() =>{
    console.log(`app is running at ${port}`);
});

module.exports = app;
