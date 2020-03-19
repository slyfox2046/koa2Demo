module.exports = () => {
  function render(json) {
    this.set('Content-Type', 'application/json');
    this.body = JSON.stringify(json);
  }
  return async (ctx, next) => {
    ctx.send = render.bind(ctx);
    // console.log("mi-send");
    ctx.log.error("这个是logger中间件的测试！")
    await next();
  };
};
