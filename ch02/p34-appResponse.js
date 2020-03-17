const koa = require('koa');
const app = new koa();
app.use(async ctx => {
  ctx.response.status = 200;
  if (ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello world' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.respond.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello world';
  }

  // ctx.response.redirect('http://www.baidu.com');
});

app.listen(3000, () => console.log('3000 is running!'));
