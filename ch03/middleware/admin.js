module.exports = () => {
  return async (ctx, next) => {
    console.log(ctx.state);
    if (ctx.state.user.username === 'admin') {
      console.log('This is admin user');
      next();
    } else {
      ctx.body = {
        code: -1,
        message: 'Authentication Error',
      };
    }
  };
};
