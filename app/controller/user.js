const Controller = require('egg').Controller;
// const uuid = require('uuid');

let loginRule = {
  userName: {type: 'string', required: true, allowEmpty: false},
  password: {type: 'password', required: true, allowEmpty: false}
}

class UserController extends Controller {
  async login () {
    const { ctx, service } = this;

    // 在创建用户的时候，用于生产user_id，当前还用不上
    // let user_id = uuid.v1().replace(/-/ig, '');

    // 校验`ctx.request.body`的值，如果参数校验未通过，将会抛出异常
    ctx.validate(loginRule);

    // 获取登录信息
    const userInfo = await service.user.getUserByLoginName(ctx.request.body.userName);
    
    // 验证登录信息
    if (userInfo.length === 0 || userInfo[0].user_password !== ctx.request.body.password){
      ctx.helper.error({
        ctx,
        Code: 400,
        message: '用户名或密码错误'
      })
      return;
    }

    // 得到token
    const token = await service.actionToken.apply(userInfo[0].user_id);

    // 设置响应体和状态码
    ctx.helper.success({ctx, res: token})
  }
}

module.exports = UserController;