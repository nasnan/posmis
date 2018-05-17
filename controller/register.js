const dbRegister=require('../mysql/dbRegister');


//验证注册
exports.register=async (ctx,next)=>{
	let body=ctx.request.body;
	let data;
	await dbRegister.selectByCondition('name',body.userName).then(function(res){
		data=res;
	});
	if(data['ans'].length==1){	//用户名已存在
		ctx.response.type='json';
		ctx.body={
			status: 1,
			message:'用户名已存在'
		};
		
	} else{		//注册
		let data;
		await dbRegister.addNew(body.userName,body.password).then(function(res){
			data=res;
			console.log(data);
		});
		ctx.response.type='json';
		if(data.status==0){
			ctx.body={
				status: 0,
			};
		}else{
			ctx.body={
				status: 1,
				message: data.err
			};
		}
	}
	next();
};