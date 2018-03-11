$(document).ready(function(){
// добавление пользователя
	$('.send').on('click',function(){
		var name = $('#name').val();
		var city = $('#city').val();
		var age = $('#age').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var data = {
			name:name,
			city:city,
			age:age,
			password:password,
			email:email	
		}
		$.post({
			url:'/add-user',
			data:data,
			success:function(res,i){
				console.log(res);
			 	window.location.replace(res);
			}
		})
		console.log(data);
	})

// Форма логина
	$('.login-send').on('click',function(){
		var name = $('#userName').val();
		var password = $('#userPassword').val();
		var data = {
			name:name,
			password:password
		}
		$.post({
			url:'/login',
			data:data
		})
	})




})