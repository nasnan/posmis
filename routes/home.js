const router=require('koa-router')();
const koaBody = require('koa-body');
const open=require('../controller/open');


router.get('/',async(ctx)=>{
	await ctx.render('home');
})

router.get('/open',async(ctx)=>{
	await ctx.render('open');
})

router.post('/open',open.open);

module.exports=router;