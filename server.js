const express = require ('express');
const log = require('./libs/log')(module);
const mongoose = require('mongoose');
const router = require('./router/router');
const config = require('./libs/config');
const path = require('path');
var hbs = require('express-handlebars');

const app = express();

// app.use(favicon(__dirname + '/public/img/nodejs.png'));

app.engine('hbs',hbs({
	extname:'hbs',
	defaultLayout:'layout',
	layoutDir:(__dirname + '/views/layouts')
}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',router);

const startServer = () => {
	app.listen(config.port);
	log.info(`Сервер стартовал по порту - ${config.port} со своим ДЕМОНОМ!!`);
};

const connectDB = () => {
	mongoose.Promise = require('bluebird');
	const options = {
		useMongoClient:true
	};

	mongoose.connect(config.url_mongo,options);
	log.info(`MongoDb подключенна`);
	return mongoose.connection
};

connectDB()
	.on('error',console.log)
	.on('disconnected',connectDB)
	.once('open',startServer)