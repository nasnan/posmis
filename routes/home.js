const router=require('koa-router')();
const koaBody = require('koa-body');


router.get('/',async(ctx)=>{
	await ctx.render('home');
})

router.get('/open',async(ctx)=>{
	await ctx.render('open');
})


module.exports=router;