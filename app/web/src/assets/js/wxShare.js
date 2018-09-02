
// html页面需要先引入：https://res.wx.qq.com/open/js/jweixin-1.2.0.js
		 
import http from '@/axios/http';

let dataSourcesAPI = document.location.protocol+'//' + window.location.host + '/api/';
let wxConfigParams = '';

/**
 * 微信分享接口
 * @param {String} appid(必填) 微信的appid
 * @param {function} wxcallback(可选) 分享成功后的回调函数
 * @param {String} shareTitle(可选)  分享窗口的标题
 * @param {String} shareUrl(可选) 分享窗口的Url
 * @param {String} shareIcon(可选) 分享窗口的icon
 * @param {String} shareDesc(可选) 分享窗口的描述
 */
export const initWxShare = (option) => {
	let wx = window.wx || '';
	let url = window.location.href;
	let appid = option.appid;
	let wxcallback = option.wxcallback;

	if (wx) {
		http.post(dataSourcesAPI + "wx/wxGetJsApiConfig?url=" + encodeURIComponent(url) + "&appId=" + appid, {}).then((res)=>{
			if (res.Code == "200" && res.Content){
				//返回结果:  appId,timestamp,nonceStr,signature
				var configparams = res.Content.split(',');

				wx.config({
					// debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: configparams[0], // 必填，公众号的唯一标识
					timestamp: configparams[1], // 必填，生成签名的时间戳
					nonceStr: configparams[2], // 必填，生成签名的随机串
					signature: configparams[3], // 必填，签名，见附录1
					jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'uploadImage', 'chooseImage', 'previewImage', 'downloadImage', 'scanQRCode', 'closeWindow', 'hideMenuItems'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
				wxConfigParams = configparams;
			}
		})

		//验证成功
		wx.ready(function () {
			var title = option.shareTitle ||'';
			var url = option.shareUrl || window.location.href;
			var icon = option.shareIcon;
			var keywords = option.shareDesc;

			//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
			wx.onMenuShareTimeline({
				title: title, // 分享标题
				link: url, // 分享链接
				imgUrl: icon, // 分享图标
				success: function () {
					// 用户确认分享后执行的回调函数
					if (typeof (wxcallback) == 'function') {
						wxcallback('ShareTimeline');
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			});

			//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
			wx.onMenuShareAppMessage({
				title: title, // 分享标题
				link: url, // 分享链接
				imgUrl: icon, // 分享图标
				desc: keywords,
				success: function () {
					// 用户确认分享后执行的回调函数
					if (typeof (wxcallback) == 'function') {
						wxcallback('ShareAppMessage');
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			});

			//获取“分享到QQ”按钮点击状态及自定义分享内容接口
			wx.onMenuShareQQ({
				title: title, // 分享标题
				link: url, // 分享链接
				imgUrl: icon, // 分享图标
				desc: keywords,
				success: function () {
					// 用户确认分享后执行的回调函数
					if (typeof (wxcallback) == 'function') {
						wxcallback('ShareQQ');
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			});

			//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
			wx.onMenuShareWeibo({
				title: title, // 分享标题
				link: url, // 分享链接
				imgUrl: icon, // 分享图标
				desc: keywords,
				success: function () {
					// 用户确认分享后执行的回调函数
					if (typeof (wxcallback) == 'function') {
						wxcallback('ShareWeibo');
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			});

			//获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
			wx.onMenuShareQZone({
				title: title, // 分享标题
				link: url, // 分享链接
				imgUrl: icon, // 分享图标
				desc: keywords,
				success: function () {
					// 用户确认分享后执行的回调函数
					if (typeof (wxcallback) == 'function') {
						wxcallback('ShareQZone');
					}
				},
				cancel: function () {
					// 用户取消分享后执行的回调函数
				}
			});
		});

		//验证失败
		wx.error(function (res) {});
	}
}