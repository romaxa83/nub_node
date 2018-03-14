const express = require ('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const log = require('./libs/chalk');

// const log = require('./libs/log')(module);
const router = require('./router/router');
const AuthRouter = require('./router/auth');
const config = require('./libs/config');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// app.use(favicon(__dirname + '/public/img/nodejs.png'));

// подключение handlebars
app.engine('hbs',hbs({
	extname:'hbs',
	defaultLayout:'layout',
	layoutDir:(__dirname + '/views/layouts')
}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
// подключение статических файлов
app.use(express.static(path.join(__dirname, 'public')));
// подключение зависимостей
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Настройки сессии
app.use(session({
  resolve:true,
  saveUninitialized:true,
  secret:config.secret
}));

app.use('/',router);
app.use('/',AuthRouter);

const startServer = () => {
	app.listen(config.port);
	console.log(log.green(`Server listening  on port - ${config.port}`));
};

const connectDB = () => {
	mongoose.Promise = require('bluebird');
	const options = {
		useMongoClient:true
	};

	mongoose.connect(config.url_mongo,options);
	console.log(log.green(`MongoDb connected`));
	return mongoose.connection
};

connectDB()
	.on('error',console.log)
	.on('disconnected',connectDB)
	.once('open',startServer)