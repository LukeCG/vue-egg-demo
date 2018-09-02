import axios from 'axios'
import qs from 'qs' // 在发送请求之前对请求数据做处理（这个模块在安装axios的时候就已经安装了，不需要另外安装）

import util from '@/util/util.js'

axios.interceptors.request.use(config => {
	// 接口请求之前request拦截

	config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
	config.headers.language = 'zh-cn';

	return config
}, error => {
	return Promise.reject(error)
})

axios.interceptors.response.use(response => {
	// 接口数据返回之后response拦截
	
	// 登录过期，重新登录
	if ((response.status === 200 && response.data.Code === 202)){
		window.location.replace('http://localhost:8085/#/login');
	}

	let result = response.data;
	return result;
}, error => {
	return Promise.resolve(error.response)
})

export default {
	post(url, data) {
		return axios({
			method: 'post',
			url,
			data: data || {},
			timeout: 10000,
		}).then(response => {
			return response;
		}).catch(error => {
			return Promise.reject(error);
		})
	},
	get(url, data) {
		return axios({
			method: 'get',
			url,
			data: data || {},
			timeout: 10000,
		}).then(response => {
			return response;
		}).catch(error => {
			return Promise.reject(error);
		})
	},
	all(...array) {
		return Promise.all(array).then(resList => {
			return resList;
		}).catch(error => {
			return Promise.reject(error);
		})
	}
}