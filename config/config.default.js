'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530519679484_6269';

  // add your config here
  config.middleware = ['errorHandler'];

  // 接入mysql数据库
  exports.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'test1234',
      database: 'kaibinchi'
    },
    app: true, // 是否加载到 app 上，默认开启（true）
    agent: false // 是否加载到 agent 上，默认关闭（false）
  }

  // 防csrf威胁，暂时关闭
  exports.security = {
    csrf: {
      enable: false
    },
  };

  // 配置登录认证参数
  config.jwt = {
    secret: 'Aocc44-D',
  }

  return config;
};
