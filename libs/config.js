// const hbs = require('hbs');

const config = {
	url_mongo : 'mongodb://localhost/tester',
	port : 8080,
	secret : 'secretkey'
};

// ======= Настройки для Handlebars ==========
// config.hbs = hbs({
// 	extname:'hbs',
// 	defaultLayout:'layout',
// 	layoutDir:(__dirname + '/views')
// });
// ==========================================
module.exports = config;