// const hbs = require('hbs');

const config = {};

config.port = 8080;

config.url_mongo = 'mongodb://localhost/testun';


// ======= Настройки для Handlebars ==========
// config.hbs = hbs({
// 	extname:'hbs',
// 	defaultLayout:'layout',
// 	layoutDir:(__dirname + '/views')
// });
// ==========================================
module.exports = config;