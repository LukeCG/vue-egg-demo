import Vue from 'vue'
import App from './App'
import router from './router'

// 引入mint-ui组件库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
window.mintUi = MintUI; // 引入mint-ui的方法
Vue.use(MintUI)




// 后端接口数据模拟
// import './mock.js';

// 引入移动端调试工具，测试服务器上用到
if (process.env.NODE_ENV === 'test'){
	require('./assets/js/vconsole')
}

import './assets/css/rest.css'; // 引入rest样式
import './assets/css/base.css'; // 引入公共CSS样式

// 解决click时间延迟300ms的问题
import FastClick from 'fastclick'
FastClick.attach(document.body);

// 引入lib-flexible
import './assets/js/lib-flexible-2.0/index';

// 引入常用的工具函数
import util from '@/util/util.js'
Vue.prototype.util = util;


// 引入请求接口必要文件
import url from './axios/url.js';
import http from './axios/http.js';
Vue.prototype.url = url;
Vue.prototype.http = http;

// 引入微信分享代码，需要在html页面以引入：https://res.wx.qq.com/open/js/jweixin-1.2.0.js
import {initWxShare} from './assets/js/wxShare'; 
Vue.prototype.initWxShare = initWxShare;

// 阻止 vue 在启动时生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
