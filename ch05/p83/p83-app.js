
const Koa = require('koa');
const router = require('./p83-router')
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());
router(app)

app.listen(3001, () => { console.log("3000 is running!");})