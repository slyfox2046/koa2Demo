const koa = require('koa');
const app = new koa();

app.listen(3000, () => {
  console.log('server 3000 is running!');
});
