const log4js = require('log4js');

module.exports = (app) => { 
  return async (ctx, next) => { 
    const start = +new Date();
    log4js.configure({
      appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
      categories: { default: { appenders: ['cheese'], level: 'info' } }
    });
    
    const logger = log4js.getLogger('cheese');
    // logger.trace('Entering cheese testing');
    // logger.debug('Got cheese.');
    // logger.info('Cheese is Comté.');
    // logger.warn('Cheese is quite smelly.');
    // logger.error('Cheese is too ripe!');
    // logger.fatal('Cheese was breeding ground for listeria.');
    await next();

    const end = +new Date();
    const responseTime = end - start;
    logger.info(`响应时间为${responseTime/1000}s`)

  }
}

