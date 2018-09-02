let Service = require('egg').Service;
const uuid = require('uuid');

class MakeService extends Service {
  async count() {
    const {app, ctx} = this;

    let countArr = await this.app.mysql.select('makeuser');

    // 最少有11365个人预定了
    let result = {
      count: 11365 + countArr.length
    }

    return result;
  }

  async addMake(options) {
    const {app, ctx} = this;

    let result = await this.app.mysql.insert('makeuser', {
      UserId: uuid.v4().replace(/-/ig, ''),
      UserName: options.name,
      address: options.address,
      Mobile: options.mobile,
      createdate: options.time + ' 00:00:00'
    });

    return result;
  }

  async getToDayMake(options) {
    const {app, ctx} = this;
    let makeArr = await this.app.mysql.get('makeuser', {
      Mobile: options.mobile,
      createdate: options.time + ' 00:00:00'
    });
    return makeArr;
  }

  async queryMakeInfo(options) {
    const {app, ctx} = this;
    let $sql = `select date_format(Createdate,'%Y-%m-%d') as Createdate, UserId, UserName, Mobile, Address from makeuser where Createdate>="`+ options.startTime +`" and Createdate<="`+ options.endTime +`" Order By Createdate`;
    let makeInfoArr = await this.app.mysql.query($sql);
    return makeInfoArr;
  }
}

module.exports = MakeService;