'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const PMD5 = middleware.passwordMd5(); // 加密密码
  
  router.post('/make/addMake', controller.make.addMake); // 用户预约
  router.get('/make/count', controller.make.count); // 查询多少人预约
  
  router.post('/user/login', PMD5, controller.user.login) // 用户登录
  router.post('/make/queryMakeInfo', app.jwt, controller.make.queryMakeInfo); // 查询预约用户的信息
};
