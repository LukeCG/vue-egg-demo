'use strict'

module.exports = (option, app) => {
  return async function (ctx, next) {
    try {
      await next()
    } catch (err) {
      const status = err.status || 500;

      // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      if (status === 500){
        ctx.helper.error({
          ctx,
          Code: 500,
          message: error
        })
      }
      
      // 如果是401状态码，让用户重新登陆，这里使用了jwt校验token
      if (status === 401) {
        ctx.helper.error({
          ctx,
          Code: 202,
          message: '登录态出错'
        })
      }

      // 如果是422状态码，前端传导服务端的参数错误
      if (status === 422) {
        ctx.helper.error({
          ctx,
          Code: 400,
          message: err.errors
        });
      }

      ctx.status = 200
    }
  }
}