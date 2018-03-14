

const User = require('../models/user');

module.exports.showUsers = (req,res) => {
	res.render('add_user',{title:'Добавить пользователя',condition:false});
};		