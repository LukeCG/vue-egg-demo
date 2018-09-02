'use strict';

// 用于接口的参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 接入mysql数据库
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

// Token认证，JWT
exports.jwt = {
  enable: true,
  package: 'egg-jwt',
}

