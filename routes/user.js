const router=require('koa-router')();
const koaBody = require('koa-body');
const register=require('../controller/register');
const login=require('../controller/login');


//注册页
router.get('/register',async(ctx)=>{
	await ctx.render('register',{title: '注册界面'});
});
router.post('/register',register.register);


router.get('/login',async(ctx)=>{
	await ctx.render('login',{title: '登陆界面'});
});
router.post('/login',login.login);



module.exports=router;