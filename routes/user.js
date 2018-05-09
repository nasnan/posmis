const router=require('koa-router')();
const koaBody = require('koa-body');
const fs=require('fs');
const path=require('path');

//注册页

router.post('/register',(ctx,next)=>{
	let body=ctx.request.body;

	console.log(body,'body');
	ctx.response.tyle='json';
	ctx.body={'a':'a'}

})
router.get('/register',(ctx,next)=>{
	ctx.response.type='html';
	ctx.body=fs.createReadStream('views/welcome.html');
})

module.exports=router;