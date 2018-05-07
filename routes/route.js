const route=require('koa-route');

route.get('/posmis',(ctx,next)=>{
	let temp={};
	temp.success=true;
	ctx.body=JSON.stringify(temp);
})

module.exports=route;