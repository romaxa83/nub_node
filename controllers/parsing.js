const request = require('request');
const needle = require('needle');
const cheerio = require('cheerio');
const log = require('../libs/log')(module);

var url = 'https://www.premierleague.com/';


var name = needle.get(url,function(err,res){

	if(err) throw(err);

	var $ = cheerio.load(res.body);
 	var team = $('.matchAbridged > .teamName > abbr').attr('title');
 	console.log(team);
	return team;
})

// function getParsing(team){
// request(url,function(err,response,body){
// 		if(err){
// 			return log.error(err);
// 		} else {

// 			var $ = cheerio.load(body);
// 			 var team = $('.matchAbridged > .teamName > abbr').attr('title');
// 			this.team = team;
// 		}
// 	})
// }

// var teams;
// var pass = request(url,function(err,response,body){
// 			var $ = cheerio.load(body);
// 			var team = $('.matchAbridged > .teamName > abbr').attr('title');
// 			teams = team;	
// 		})
	


// // var name = function(){
// // 	function(){
// // 		return 'Вася';
// // 	};
// // }

// var team;
// var name = function(){
// 	var e;
	
// 	request(url,function(err,res,body){
// 		var $ = cheerio.load(body);
// 		team = $('.matchAbridged > .teamName > abbr').attr('title');
// 		console.log(typeof team);
// 		e = team;
// 		return e;
// 	});
// 	console.log(`Команда ${e}`);
	
// }


// module.exports = name;

