const dbRegister=require('../mysql/dbRegister');

//登陆认证

exports.login=async (ctx,next)=>{
	let body=ctx.request.body;
	let data;
	await dbRegister.selectByCondition('name',body.userName).then(function(res){
		data=res;
	});
	if(data['ans'].length==0){	//用户不存在
		ctx.response.type='json';
		ctx.body={
			status: 1,
			message:'用户名错误'
		};
		
	} else{		//检查密码
		let truePwd=JSON.parse(data['ans'])['password'].toString();	//正确的密码
		body.password=body.password.toString();
		data.status=body.password==truePwd ? 0: 1;
		ctx.response.type='json';
		if(data.status==0){
			ctx.body={
				status: 0,
			};
		}else{
			ctx.body={
				status: 1,
				message: '密码错误'
			};
		}
	}
	next();
};

