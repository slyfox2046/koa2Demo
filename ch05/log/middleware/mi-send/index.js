module.exports = () => {
  function render(json) {
    this.set('Content-Type', 'application/json');
    this.body = JSON.stringify(json);
  }
  return async (ctx, next) => {
    ctx.send = render.bind(ctx);
    // console.log("mi-send");
    // ctx.log.info("mi-send 设置json格式！")
    await next();
  };
};
