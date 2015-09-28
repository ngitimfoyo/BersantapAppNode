/**
 * http://usejsdoc.org/
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = function(req, res){
	var username = req.body.username;
	var email = req.body.email;
	var password = '1234';
	var remember_token = '1';
	var userArr = {'username': username, 'email':email};
	var newUser = new User();
	newUser.username = username;
	newUser.email = email;
	newUser.password = password;
	newUser.remember_token = remember_token;
	newUser.save(function(err){
		if(!err){
			return res.send(JSON.stringify(userArr));
		}else{
			return res.send("Error");
		}
	});
	
};