

$('button').click(function(event){
	//登陆认真
	//1.检查用户名是否存在
	//2.检查密码是否正确

	event.preventDefault();
	let userName=$('#userName');
	let userPwd=$('#userPwd');
	let error=$('.signError');

	let user=$.trim(userName.val());
	let userlen=user.length;
	let pwd=$.trim(userPwd.val());
	let pwdlen=pwd.length;

	if(userlen<4){
		error.text('用户名不能少于4位数！').show();
		userName.focus();
		return false;
	}
	if(userlen>20){
		error.text('用户名不能大于20位数！').show();
		userName.focus();
		return false;
	}
	if(userlen==0){
		error.text('用户名不能为空！').show();
		userName.focus();
		return false;
	}
	
	if(pwdlen<6){
		error.text('密码不能小于6位数！').show();
		userPwd.focus();
		return false;
	}
	if(pwdlen>8){
		error.text('密码不能大于8位数！').show();
		userPwd.focus();
		return false;
	}
	if(pwdlen==0){
		error.text('密码不能为空！').show();
		userPwd.focus();
		return false;
	}

	$.ajax({
		type: 'POST',
		url: '/user/login',
		
		dataType: 'json',
		data: {
			userName: user,
			password: pwd
			
		},
		success: function(data){	
			if(data.status!=0){		//没注册或密码错误
				error.text(data.message).show();
			}
			else{
				console.log("res suc")
				location.href='/';
			}
		},
		error: function(data){
			console.log(data);
		}


	})


})