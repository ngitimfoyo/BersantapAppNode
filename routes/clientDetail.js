var mongoose = require('mongoose');
var ClientDetail = mongoose.model('ClientDetail');

exports.index = function(req,res){
	var query = ClientDetail.find();
	query.exec(function(error, clientDetails){
		if(!error){
			return res.json(clientDetails);
		}else{
			return res.send("ERROR");
		}
	});
};

exports.store = function(req,res){
	//need explanation about relation among Client Detail and others table.
};