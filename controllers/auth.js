const User = require('../models/user');

module.exports.signup = async (req,res,next) => {
	const credentials = req.body;
	let user;

	try	{
		user = await User.create(credentials); 
	} catch(e) {
		return next(e);
	}

	res.json(user);
};

module.exports.signin = async (req,res,next) => {
	res.send('signin');
};