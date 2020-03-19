const HomeService = require('../service/p83-home');

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page<h1>`;
  },

  home: async (ctx, next) => {
    console.log(ctx.request);
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = `<h1>Home page</h1>`;
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    let { id, name } = ctx.params;
    ctx.response.body = `<h1>Home page  /${id}/${name} </h1>`;
  },
  user: async (ctx, next) => {
    ctx.response.body = `
    <form action="/user/login" method="POST" >
  <input type="text" name="name" placeholder="请输入用户名：ikcamp">
  <input type ="text" name="password" placeholder="请输入密码：123456">
  <br/>
  <button>GOGOGO</button>
</form>
    `;
  },
  login: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let data = await HomeService.login(name, password);
    ctx.response.body = data;
  },
};
