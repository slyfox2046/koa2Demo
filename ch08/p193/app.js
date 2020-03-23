// 服务性能采集
const pidusage = require('pidusage');
setInterval(() => {
  pidusage(process.pid, (err, status) => {
    console.log(status);
  });
}, 1000);
