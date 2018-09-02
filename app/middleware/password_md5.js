const utility = require('utility');
module.exports = options => {
  // 为用户的密码加密，数据库不保存用户的真实密码
  return async function md5(ctx, next) {
    if (ctx.request.body.password) {
      ctx.request.body.password = utility.md5(ctx.request.body.password)
    }
    await next()
  };
};