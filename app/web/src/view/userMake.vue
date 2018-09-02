<template>
	<div id="userMake">
		<div class="header">
			<div class="header-count">超过 <span>{{count}}</span> 人的选择</div>
			<div @click="goMore" class="header-more"></div>
		</div>
		<div class="slogan">我们将<span class="s-c1">免费上门</span>为您提供专属量身体验</div>
		<div class="from">
			<div class="from-input">
				<span class="fi-label">姓    名：</span>
				<input class="fi-input" v-model="name" type="text" placeholder="请问如何称呼您？">
			</div>
			<div class="from-input">
				<span class="fi-label">手   机：</span>
				<input maxlength="11" class="fi-input" v-model="mobile" type="text" placeholder="如何联系您，为您提供专属个人服务">
			</div>
			<div class="from-input">
				<span class="fi-label">地    址：</span>
				<input class="fi-input" v-model="address" type="text" placeholder="我们的顾问将上门为您提供量身服务">
			</div>
			<div class="from-input">
				<span class="fi-label">日    期：</span>
				<span @click="selExerciseTime" :class="time?'':'fi-placeholder'" class="fi-input fi-date">{{time?time:'请定一个时间，我们将准时到达'}}</span>
				<mt-datetime-picker ref="exerciseTime" type="date" :startDate="new Date()" @confirm="exerciseTimeConfirm"></mt-datetime-picker>
			</div>

		</div>
		<div class="flow">
			<span @click="selectHook" :class="isHook?'hook-isActive': ''" class="flow-hook">
				<i class="iconGou"></i>
			</span>
			<span>已了解我们的定制流程《用户协议》</span>
		</div>
		<div class="make" @click="onMake"></div>
		<div class="showFlow"></div>
	</div>
</template>

<script>
export default {
	name: "userMake",
	data(){
		return {
			count: 0,
			name: '',
			mobile: '',
			address: '',
			time: '',

			isHook: true
		}
	},
	methods: {
		selExerciseTime() {	
      this.$refs.exerciseTime.open();
		},
		exerciseTimeConfirm(value) {
			this.time = this.util.coverDate(value).split(' ')[0];
		},
		
		selectHook() {
			this.isHook = !this.isHook;
		},

		goMore() {
			location.href = 'http://a2.rabbitpre.com/m/QNRZJvo?lc=1&sui=UmB1bxlw&token=0u3V7kW6-3-O2RInvDQJI_aQnLYG1Nf0Ta_aCcc3PtChu-Ex4t2e3aTzNExpft_eckZ6m2q2cCqSkCdjY9NPUvusFW7eIFkGKPu1joXwRRBBWAy_fxwjh55ewcfN4QUH&from=groupmessage&isappinstalled=0#from=share';
		},

		async onMake() {
			if (!this.name){
				mintUi.MessageBox('提示', '用户名不能为空！');
				return;
			}

			if (!this.mobile || !this.util.isMobile(this.mobile)){
				mintUi.MessageBox('提示', '请输出正确的手机号码');
				return;
			}

			if (!this.address){
				mintUi.MessageBox('提示', '地址不能为空！');
				return;
			}

			if (!this.time){
				mintUi.MessageBox('提示', '上门时间不能为空！');
				return;
			}

			if (!this.isHook){
				mintUi.MessageBox('提示', '请了解我们的定制流程！');
				return;
			}

			mintUi.Indicator.open('加载中...');
			let res = await this.http.post(this.url.addMake, {
				name: this.name,
				mobile: this.mobile,
				address: this.address,
				time: this.time
			});
			mintUi.Indicator.close();

			if (res.Code === 200){
				this.count = res.data.count;
				mintUi.MessageBox('提示', '预约成功')
			}else{
				mintUi.MessageBox('提示', res.message)
			}
		}
	},
	created (){
		this.http.get(this.url.count, {}).then((res) => {
			if (res.Code === 200){
				this.count = res.data.count;
			}else{
				this.count = 11344;
			}
		})
	}
};
</script>

<style lang="less" scoped>
#userMake {
	.header{
		overflow: hidden;
		width: 100%;
		height: 640px;
		background-image: url('../assets/img/banner.jpeg');
		background-size: 100%;
		background-repeat: no-repeat;
		.header-count{
			margin-top: 266px;
			text-align: center;
			font-size: 40px;
			color: #fff;
			letter-spacing: 3px;
		}
		.header-more{
			width: 160px;
			height: 40px;
			margin: 40px auto 0 auto;
			background-image: url('../assets/img/more-btn.png');
			background-size: 100%;
			background-repeat: no-repeat;
		}
	}
	.slogan{
		text-align: center;
		margin-top: 42px;
		color: #aaaaaa;
		font-size: 22px;
	}
	.from{
		overflow: hidden;
		margin-top: 30px;
		.from-input{
			width: 650px;
			height: 90px;
			border: 1px solid #dcdde2; /*no*/
			border-radius: 10px;
			background-color: #ffffff;
			margin: 24px auto 0 auto;
			&:first-child{
				margin-top: 0;
			}
		}
		.fi-label{
			width: 135px;
			color: #2e3638;
			font-size: 26px;
			height: 88px;
			line-height: 88px;
			display: inline-block;
			vertical-align: middle;
			text-align: right;
		}
		.fi-input{
			font-size: 26px;
			width: 488px;
			display: inline-block;
			vertical-align: middle;
			color: #2e3638;
			border: 0;
		}
		.fi-date{
			height: 88px;
			line-height: 88px;
		}
		.fi-placeholder{
			color: #757575;
		}
	}
	.flow{
		margin-top: 20px;
		padding-left: 58px;
		color: #aaaaaa;
		span{
			font-size: 22px;
			display: inline-block;
			vertical-align: middle;
			line-height: 1.2;
		}
		.flow-hook{
			width: 26px;
			height: 24px;
			margin-right: 10px;
			border-radius: 5px;
			border: 1px solid #dcdde2; /*no*/
		}
		.hook-isActive{
			background-color: #00abe3;
			border: 0;
			position: relative;
		}
		.iconGou{
			display: inline-block;
			border: 2px solid #fff;
			border-left: 0;
			border-top: 0;
			width: 8px;
			height: 16px;
			top: 2px;
			left: 10px;
			position: absolute;
    	transform: rotate(45deg) scale(1);
		}
	}
	.make{
		width: 650px;
		height: 90px;
		margin: 50px auto 0 auto;
		background-image: url('../assets/img/make.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.showFlow{
		margin-top: 48px;
		width: 100%;
		height: 2352px;
		background-image: url("../assets/img/showFlow.jpg");
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.s-c1{
		color: #00abe3;
	}
}
</style>
