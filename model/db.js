/**
 * http://usejsdoc.org/
 */ 

var mongoose = require('mongoose');

var database = {
		'user':'bersantap',
		'pass':'bersantap',
		'server':'localhost',
		'db_name':'bersantap'
};

//var dbUri = 'mongodb://' + database['user'] + ':'+database['pass']+'@'+database['server']+'/'+database['db_name'];

var dbUri = 'mongodb://'+database['server']+'/'+database['db_name'];
mongoose.connect(dbUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbUri);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

var users = new mongoose.Schema({
	'id': mongoose.Schema.Types.ObjectId,
	'username': {type: String, unique: true},
	'email': String,
	'password': String,
	'remember_token':String,
	'created_at': {type: Date, 'default': Date.now},
	'updated_at':{type: Date, 'default': Date.now}	
});

var client_details = new mongoose.Schema({
	'id': mongoose.Schema.Types.ObjectId,
	'guid':String,
	'name':String,
	'latitude':String,
	'longitude':String,
	'type_id':Number,
	'status_id':Number,
	'created_at': {type: Date, 'default': Date.now},
	'updated_at':{type: Date, 'default': Date.now}
});

	
mongoose.model( 'User', users );
mongoose.model('ClientDetail', client_details);