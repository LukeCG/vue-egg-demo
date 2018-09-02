const Service = require('egg').Service;

class UserService extends Service {
  // 根据登录名查找用户
  getUserByLoginName(userName) {
    return this.app.mysql.query('SELECT * FROM account WHERE user_name=?', [userName]);
  }
}

module.exports = UserService;