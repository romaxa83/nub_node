'use strick';

const express = require('express');
const router = express.Router();
const chalk = require ('chalk');
const moment = require('moment');
const bodyParser = require('body-parser');
const log = require('../libs/log')(module);

const User = require('../models/user');

const error = chalk.bold.red;
const info = chalk.bold.blue;
const green = chalk.bold.green;
var time = `(time: ${moment().format('H:mm:ss ,L')})`;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// router.use(function timeLog(req, res, next) {
// 	 console.log(moment.locale('us'));
//   	console.log('Time: ', moment().format('MMMM Do YYYY, H:mm:ss a'));
//   	next();
// });

router.get('/', function(req, res) {
    res.render('index',{title:'Стартовая страница'});
  	console.log(green(`PATH: ${req.url} ${time}`));
      })
      .post('/',urlencodedParser,(req,res) => {
          if(req.body){
              const user = new User(req.body);
              user.save((err,user) => {
                if(err) log.error(err);
                log.info(`Пользователь ${req.body.name} добавленн в базу данных`)
                res.send(`/user/${req.body.name}`);
                console.log(`/user/${req.body.name}`);
                res.end();
              })
          }
      })

router.get('/blog', function(req, res) {
  	res.render('index',{title:'Blog'});
  	console.log(green(`PATH: ${req.url} ${time}`));
});

router.get('/about', function(req, res) {
  	res.render('index',{title:'About',condition:false});
  	console.log(green(`PATH: ${req.url} ${time}`));
});

router.get('/add-user', function(req, res) {
    res.render('add_user',{title:'Добавить пользователя',condition:false});
    console.log(green(`PATH: ${req.url} ${time}`));
  })
      .post('/add-user',urlencodedParser,(req,res) => {
          if(req.body){
              const user = new User(req.body);
              user.save((err,user) => {
                if(err) log.error(err);
                log.info(`Пользователь ${req.body.name} добавленн в базу данных`)
                res.redirect(`/user/${req.body.name}`);
                console.log(`/user/${req.body.name}`);
              })
          }
      });

router.get('/user', (req,res) => {
  User.find({},(err,user) => {
    res.render('users',{title:'Users',users:user});
  });
});

router.get('/user/:name',(req,res) => {
    User.find({name:req.params.name},(err,user) => {
        console.log(user);
        res.render('users',{title:req.params.name,users:user});
    });
});

module.exports = router;