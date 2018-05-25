const router=require('koa-router')();
const koaBody = require('koa-body');
const open=require('../controller/open');
const saving=require('../controller/saving');


router.get('/',async(ctx)=>{
	await ctx.render('home');
})

router.get('/open',async(ctx)=>{
	await ctx.render('open');
})
router.post('/open',open.open);

router.get('/saving',async(ctx)=>{
	await ctx.render('saving');
})
router.post('/saving',saving.saving);

module.exports=router;