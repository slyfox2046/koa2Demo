const log4js = require('log4js');
// 引入日志输出信息的封装文件
const access = require('./access.js');

const methods = ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark'];


module.exports = options => {
  let contextLogger = {};

  const defaultInfo = {
    appLogLevel: 'info',
    dir: 'logs',
    env: 'dev',
  };
  const opts = Object.assign({}, defaultInfo, options || {});
  const { env, appLogLevel, dir} = opts;
  const appenders = {
    cheese: {
      // type: 'file',
      // filename: 'cheese.log'

      type: 'dateFile', // 日志类型
      filename: `${dir}/task`, // 输出的文件名
      pattern: '-yyyy-MM-dd.log', // 文件名增加后缀
      alwaysIncludePattern: true, // 是否总是有后缀名
    },
  };
  // 环境变量为dev local development 认为是开发环境
  if (env === 'dev' || env === 'local' || env === 'development') {
    appenders.out = {
      type: 'console',
    };
  }
  const config = {
    appenders: appenders,

    categories: { default: { appenders: Object.keys(appenders), level: appLogLevel } },
  };

  return async (ctx, next) => {
    const start = +new Date();
    log4js.configure(config);

    const logger = log4js.getLogger('cheese');


    methods.forEach((method, i) => {
      contextLogger[method] = message => {
        logger[method](access(ctx, message, opts));
      };
    });
    ctx.log = contextLogger;

    await next();

    const end = +new Date();
    const responseTime = end - start;
    logger.info(access(ctx, `响应时间为${responseTime / 1000}s`, opts));
  };
};
