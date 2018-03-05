const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name:{
  		type: String,  		// тип поля
    	required: true, 	// обезательно к заполнению
    	unique: true,       // уникальное значение
    	minlength:3,    	// минимальное кол-во символов
    	maxlength:20,		// максимальное кол-во символов
    	default: "NoName"	// имя по умолчанию
  	},
  email:{
      type: String,
      // required:true,
      unique:true    
  },  
  age:{
  		type: Number,
  		required: true,
  		min: 1,				//минимальное кол-во
  		max : 100			//максимальное кол-во
  	},
  city:{
  		type: String,
  		required: true,
  },
  created: { 
    	type: Date,
    	default: Date.now
    }
},
{ versionKey: false })      //отключает версию документа(__v)

userSchema.statics.findUserByName = function(err,cb){
	return this.findOne({name:new RegExp('vova','i')},cb);
};

const User = mongoose.model('User', userSchema)

module.exports = User