const router=require('koa-router')();
const koaBody = require('koa-body');
const fs=require('fs');
const path=require('path');
const dbRegister=require('../mysql/dbRegister');

//注册页
//先判断是否注册，是则提示，否则注册
router.post('/register',async(ctx,next)=>{
	let body=ctx.request.body;
	let data;
	await dbRegister.selectByCondition('name',body.userName).then(function(res){
		data=res;
	});
	if(data['ans'].length==1){	//用户名已存在
		ctx.response.tyle='json';
		ctx.body={
			status: 1,
			message:'用户名已存在'
		};
		
	} else{		//注册
		ctx.response.tyle='json';
		ctx.body={status:0}
	}
	
	next();
})
router.get('/register',(ctx,next)=>{
	ctx.response.type='html';
	ctx.body=fs.createReadStream('views/welcome.html');
})

module.exports=router;