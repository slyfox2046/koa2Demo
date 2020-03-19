const bodyParser = require('koa-bodyparser');
const path = require('path');

const ip = require('ip');
const nunjucks = require('koa-nunjucks-2');

const staticFiles = require('koa-static');
const miSend = require('./mi-send');
const miLog = require('./mi-log');
module.exports = app => {
  // 将配置中间件的参数在注册中间件时作为参数传入
  app.use(
    miLog({
      env: app.env, // koa 提供的环境变量
      projectName: 'koa2-tutorial',
      appLogLevel: 'debug',
      dir: 'logs',
      serverIp: ip.address(),
    }),
  );

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
