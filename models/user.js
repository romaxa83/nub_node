const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  name:{
  		type: String,  		// тип поля
    	// required: true, 	// обезательно к заполнению
    	unique: true,       // уникальное значение
    	minlength:3,    	// минимальное кол-во символов
    	maxlength:20,		// максимальное кол-во символов
    	// default: "NoName",	// имя по умолчанию
      lovercase:true,     //переводит в нижний регистр
      index:true
  	},
  email:{
      type: String,
      // required:true,
      unique:true    
  },  
  age:{
  		type: Number,
  		// required: true,
  		min: 1,				//минимальное кол-во
  		max : 100			//максимальное кол-во
  	},
  city:{
  		type: String,
  		// required: true,
  },
  password:{
    type:String,
    minlength:4
  },
  role:{
    type:String,
    default:'user',
  },
  created: { 
    	type: Date,
    	default: Date.now
    }
})
// { versionKey: true })      //отключает версию документа(__v)

// userSchema.pre('save',function(next){
//   // проверяем изменялся ли пароль
//   if (!this.isModified('password')) {
//     return next();
//   }
// генерируем соль для пароля и хеш
//   const salt = bcrypt.genSalt(10);
//   const hash = bcrypt.hash(this.password,salt);
//   this.password = hash;
// });

// userSchema.methods.comaprePassword = function(password){
//   return bcrypt.comapre(password,this.password);
// }

// userSchema.statics.findUserByName = function(err,cb){
// 	return this.findOne({name:new RegExp('vova','i')},cb);
// };

const User = mongoose.model('User', userSchema)

module.exports = User