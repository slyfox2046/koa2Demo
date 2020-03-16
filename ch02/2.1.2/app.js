const koa = require('koa');
const app = new koa();
app.use(async (ctx,next) => {
  await next()
  ctx.response.type = 'text.html'
  ctx.response.body = '<h1>Hello World </>'
})
app.listen(3000, () => { 
  console.log("Server is running at http://localhost:3000");
});

