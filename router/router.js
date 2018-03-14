'use strick';

const express = require('express');
const expressSession = require('express-session');
const router = express.Router();
const log = require('../libs/chalk');
const moment = require('moment');
const bodyParser = require('body-parser');
// const log = require('../libs/log')(module);
const parsing = require('../controllers/parsing');
const UserControllers = require('../controllers/user');

const User = require('../models/user');

var time = `(time: ${moment().format('H:mm:ss ,L')})`;
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

// router.use(function timeLog(req, res, next) {
// 	 console.log(moment.locale('us'));
//   	console.log('Time: ', moment().format('MMMM Do YYYY, H:mm:ss a'));
//   	next();
// });

router.get('/', function(req, res) {
    res.render('index',{title:'Стартовая страница'});
  	// console.log(log.green(`PATH: ${req.url} ${time}`));
      })
      // .post('/',urlencodedParser,(req,res) => {
      //     if(req.body){
      //       console.log(req.body);
      //         const user = new User(req.body);
      //         user.save((err,user) => {
      //           if(err) log.error(err);
      //           log.info(`Пользователь ${req.body.name} добавленн в базу данных`)
      //           res.send(`/user/${req.body.name}`);
      //           console.log(`/user/${req.body.name}`);
      //           res.end();
      //         })
      //     }
      // })

router.get('/blog', function(req, res) {
  	res.render('index',{title:'Blog'});
  	console.log(log.info(`PATH: ${req.url} ${time}`));
});

router.get('/about', function(req, res) {
  	res.render('index',{title:'About',condition:false});
  	// console.log(log.info(`PATH: ${req.url} ${time}`));
});

router.get('/add-user', UserControllers.showUsers)
      .post('/add-user',urlencodedParser,(req,res) => {
          if(req.body){
              const user = new User(req.body);
              user.save((err,user) => {
                if(err) {
                  consol.log(log.error(err));
                } else {
                  res.send(`/user/${req.body.name}`);
                }
              })
          }
      });     

router.get('/user', (req,res) => {
  User.find({},(err,user) => {
    res.render('users',{title:"Добавленные user\'s",users:user});
  });
});

router.get('/user/:name',(req,res) => {
    User.find({name:req.params.name},(err,user) => {
        console.log(user);
        res.render('users',{title:req.params.name,users:user});
    });
});

router.get('/parsing',(req,res) => {
  var team  = parsing;
  console.log(`команда ${parsing}`);
  console.log(parsing.team);
 res.render('parsing',{title:'Парсинг',team:parsing.team})
});

router.get('/login',(req,res) => {
  res.render('login');
})
  .post('/login',urlencodedParser,(req,res) => {
    User.find({name:req.body.name},(err,user) => {
        console.log(user['0'].name);
      if(user.length !== 0){
        req.session.userName = user['0'].name;
         console.log(req.session.userName);
      } else {
        console.log('not');
      }
    })
  })

module.exports = router;