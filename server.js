const Koa = require('koa');
const path=require('path');
const server=require('koa-static');
const koaBody = require('koa-body');
const route = require('koa-route');

const app = new Koa();
const selectAll = require('./public/js/dbMethod');



const test = (ctx, next) => {

  selectAll().then((data)=>console.log(data))
}


app.use(server(path.join(__dirname)));
app.use(koaBody());
app.use(route.get('/posmis',test));


app.listen(3000);

console.log('listening');