const koa = require('koa');
const router = require('koa-router')();
const app = new koa();

// p54
router.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>Index page</h1>';
  await next();
});

router.get('/todo/:category/:title', (ctx, next) => {
  console.log(ctx.params);
  // 参数解析 {"category":"shanghai","title":"cm"}
  ctx.response.body = ctx.params;
  // http://127.0.0.1:3000/todo/shanghai/cm
});

router.all('/', async (ctx, next) => {
  console.log('match "all" method');
  await next();
});

app.use(router.routes());
app.listen(3000, () => {
  console.log('server 3000 is running!');
});
