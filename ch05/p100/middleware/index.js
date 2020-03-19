const bodyParser = require('koa-bodyparser');
const path = require('path');
const nunjucks = require('koa-nunjucks-2');

const staticFiles = require('koa-static');
const miSend = require('./mi-send');

module.exports =(app)  => {
  app.use(staticFiles(path.resolve(__dirname, '../public')));

  app.use(
    nunjucks({
      ext: 'html',
      path: path.join(__dirname, '../views'),
      nunjucksConfig: {
        trimBlocks: true, // 开启转义 防XSS攻击
      },
    }),
  );

  app.use(bodyParser());

  app.use(miSend());
};
