const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());
app.use(async ctx => {
  console.log(ctx.url, ctx.method);
  if (ctx.url === '/' && ctx.method == 'GET') {
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
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body;
    ctx.body = postData;
  }
});

app.listen(3000, () => {
  console.log('server 3000 is running!');
});
