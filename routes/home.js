const router=require('koa-router')();
const koaBody = require('koa-body');


router.get('/',async(ctx)=>{
	await ctx.render('home');
})



module.exports=router;