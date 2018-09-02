const Controller = require('egg').Controller;

let addMakeRule = {
  name: {type: 'string', required: true, allowEmpty: true},
  mobile: {type: 'string', required: true},
  address: {type: 'string', required: true, allowEmpty: true},
  time: {type: 'date', required: true}
}

let queryMakeInfoRule = {
  startTime: {type: 'date', required: true},
  endTime: {type: 'date', required: true}
}

class MakeController extends Controller {
  // 一共有多少人预约了
  async count() {
    const {ctx, service} = this;

    // 调用 service 查询预约人数
    const res = await service.make.count();
    
    // 设置响应体和状态码
    ctx.helper.success({ctx, res})
  }

  // 用户预约
  async addMake() {
    const {ctx, service} = this;

    ctx.validate(addMakeRule);

    // 查询该电话号码今天是否预约过
    const getToDayMake = await service.make.getToDayMake(ctx.request.body);

    // 今天已经预约过的话，就不让他在预约
    if (getToDayMake && getToDayMake.UserId){
      ctx.helper.error({ctx, message:'该号码今天已预约成功，请等待商家与您联系！', Code: 400})
      return;
    }

    // 调用 service 新增预约
    const makeInfo = await service.make.addMake(ctx.request.body);

    // 调用 service 查询预约人数
    const makeCount = await service.make.count();

    let res = {
      count: makeCount.count
    }
    
    // 设置响应体和状态码
    ctx.helper.success({ctx, res})
  }

  // 根据时间段，查询预约用户的信息
  async queryMakeInfo() {
    const {ctx, service} = this;
    let res = null;
    
    // ctx.state.user.data 可以提取到JWT编码的data
    const _id = ctx.state.user.data._id

    ctx.validate(queryMakeInfoRule);

    // 调用 service 查询预约人数
    res = await service.make.queryMakeInfo(ctx.request.body);

    // 设置响应体和状态码
    ctx.helper.success({ctx, res})
  }
}
module.exports = MakeController;