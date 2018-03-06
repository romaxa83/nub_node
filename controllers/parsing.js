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
 	module.exports.team = team;
})

