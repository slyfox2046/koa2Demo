const koa = require('koa')
const app = new koa();
app.use(async ctx => { 
  let postdata = '';
  ctx.req.on('data', (data) => { 
    postdata += data;
  })
  ctx.req.on('end', () => { 
    console.log(postdata);
  })
})

app.listen(3000, () => console.log("3000 is running!"));

//  curl -d "param1=value1&param=2=value2" http://localhost:3000/