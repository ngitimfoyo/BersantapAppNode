/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , db = require('./model/db')
  , userRoute = require('./routes/user')
  , about = require('./routes/about')
  , clientDetail = require('./routes/clientDetail');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/users/create',userRoute.create);
app.get('/about',about.index);

//client detail
app.get('/manage/clientdetail',clientDetail.index);
app.post('/manage/clientdetail',clientDetail.store);

app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
