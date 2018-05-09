const Koa = require('koa');
const app = new Koa();
const path=require('path');
const server=require('koa-static');
const router = require('koa-router')();
const koaBody = require('koa-body');
const user=require('./routes/user');


router.use('/user',user.routes());


app.use(server(path.join(__dirname)));
app.use(koaBody());
app.use(router.routes(), router.allowedMethods());


app.listen(3000);

console.log('listening');