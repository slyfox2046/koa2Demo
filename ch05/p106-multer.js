const koa = require('koa');
const multer = require('koa-multer');
const app = new koa();

const Router = require('koa-router');
const router = new Router();

const upload = multer({ dest: './uploads/' });
const types = upload.single('avatar');

const fs = require('fs');
const path = require('path');

router.get('/upload', async (ctx, next) => {
  ctx.response.body = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <form action="/profile" method="post" enctype="multipart/form-data">
    选择图片：<input name="avatar" id="upfile" type="file"/>
  <input type ="submit" value ="提交">
  
  </form>
  </body>
  </html>
  `;
});
router.post('/profile', types, async (ctx, next) => {
  const { originalname, path: out_path, mimetype } = ctx.req.file;
  console.log(ctx.req.file);
  let newName = out_path + path.parse(originalname).ext;
  console.log(newName);
  let err = fs.renameSync(out_path, newName);
  let result;
  if (err) {
    result = JSON.stringify(err);
  } else {
    result = '<h1>Upload success</h1>';
  }
  ctx.response.body = result;
});

app.use(router.routes());

app.listen(3000);
