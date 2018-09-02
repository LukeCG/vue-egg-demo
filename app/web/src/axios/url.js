let host = '';

if (process.env.NODE_ENV === 'development'){
	host = 'http://localhost:8085'; // 开发环境
}else {
	host = document.location.protocol+'//' + window.location.host; // 非开发环境
}

export default {
	count: host + '/api/make/count', 
	addMake: host + '/api/make/addMake', 
	queryMakeInfo: host + '/api/make/queryMakeInfo', 
	login: host + '/api/user/login', // 用户名密码
}