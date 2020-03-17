const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.type = 'html';
  let html = `
  <h1>
登录
</h1>
<form method="POST" action="/">
<p>用户名</p>
<input type="text" name="userName" /><br/>
<p>
密码
</p>
<input type="password" name="password" /><br/>
<button type="submit">submit</button>
</form>  
  
  `;

  ctx.body = html;
});

router.post('/', (ctx, next) => {
  let postData = ctx.request.body;
  ctx.body = postData;
});
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server 3000 is running!');
});
