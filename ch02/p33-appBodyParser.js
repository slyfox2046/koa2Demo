const koa = require('koa');
const app = new koa();
app.use(async ctx => {
  if (ctx.request.method == 'POST') {
  } else if ((ctx.request.method = 'GET')) {
    if (ctx.request.path !== '/') {
      ctx.response.type = 'html';
      ctx.response.body = "<a href='/'>Go to Index</a>";
    } else {
      ctx.response.body = 'Hello world!';
    }
  }
});

app.listen(3000, () => console.log('3000 is running!'));

//  curl -d "param1=value1&param=2=value2" http://localhost:3000/
