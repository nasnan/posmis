const router=require('koa-router')();
const koaBody = require('koa-body');
const fs=require('fs');
const path=require('path');
const dbRegister=require('../mysql/dbRegister');
// const render=require('ejs');




//注册页
//先判断是否注册，是则提示，否则注册
router.post('/register',async(ctx,next)=>{
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
})
router.get('/register',async(ctx)=>{
	// ctx.response.type='html';
	// ctx.body=fs.createReadStream('views/welcome.html');
	await ctx.render('loag',{title: '注册界面', signSubmitBtnName: '注册'});
})

module.exports=router;