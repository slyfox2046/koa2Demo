const koa = require('koa');
const app = new koa();

const logger = async function (ctx, next) { 
  console.log(ctx.method,ctx.host+ctx.url);
  await next();
}

app.use(logger);
app.use(async ctx => { 
  ctx.body ="Hello world!"

})
app.listen(3000, () => {
  console.log("3000 is running!");
})