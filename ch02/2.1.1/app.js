const koa = require('koa');
const app = new koa();
app.use(async ctx => {
  // await asyncFunction1(params);
  // await asyncFunction2(params);
  // await asyncFunction3(params);

  ctx.body = 'hello world';

});
app.listen(3000);