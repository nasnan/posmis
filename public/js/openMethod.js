$("#openBtn").click(function(event){
	event.preventDefault();
	let bankNameVal=$("#bankName").text();
	let userName=$("#userName");
	let userNameVal=userName.val();
	let cardPwd=$("#cardPwd");
	let cardPwdVal=cardPwd.val();
	let range=$("#rangeSelect option:selected").text();
	let error=$(".error");
	//姓名认证



	//密码认证
	let pwdLen=parseInt(cardPwdVal.length);

	if(pwdLen<6){
		error.text("密码不能小于6位数").show();
		cardPwd.focus();
		return false;
	}

	if(pwdLen>8){
		error.text("密码不能大于8位数").show();
		cardPwd.focus();
		return false;
	}

	$.ajax({
		type: 'POST',
		url: '/home/open',
		dataType: 'json',
		data: {
			bank_name: bankNameVal,
			username: userNameVal,
			password: cardPwdVal,
			money: range
		},
		success: function(data){	
			if(data.status!=0){		//没注册或密码错误
				error.text(data.message).show();
			}
			else{
				location.href='/home';
			}
		},
		error: function(data){
			console.log(data);
		} 
	})

})