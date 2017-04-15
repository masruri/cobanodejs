var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var students = require('/routes/students');

var app = express();

//view engine setup
app.set('view',path.join(__dirname, 'views'));
app.set('view eingine','jade');

//app.use favicon
app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',routes);
app.use('/users',users);
app.use('/students',students);

//catch 404 adn forward to error handler
app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// development error handler
//will print stacktrace
if(app.get('env') === 'development'){
	app.use(function(err,req,next){
		res.status(err.status || 500);
		res.render('error',{
			message: err.message,
			error:err
		});
	});
}

//production error handler
//nod stacktraces leaked to user
app.use(function(err,req,next) {
	res.status(err.status || 500);
	res.render('error',{
		message:err.message,
		error:{}
	});
});

module.exports = app;
app.listen('1234');
console.log('server berjalan di port 1234');
