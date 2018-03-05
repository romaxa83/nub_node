$(document).ready(function(){

	$('.send').on('click',function(){
		var name = $('#name').val();
		var city = $('#city').val();
		var age = $('#age').val();
		var email = $('#email').val();
		var data = {
			name:name,
			city:city,
			age:age,
			emil:email	
		}
		$.post({
			url:'/',
			data:data,
			success:function(res,i){
				console.log(res);
				console.log(i);
				window.location.replace(res);
			}
		})
		console.log(data);
	})







})