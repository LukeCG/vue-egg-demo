<template>
	<div id="login">
		<img class='header-banner' src='../assets/img/banner.gif' />
		<div class="from">
			<div class="from-row">
				<span class="from-title">用户名</span>
				<input type="text" v-model="userName" placeholder="请输入用户名" class="from-ipt">
			</div>
			<div class="from-row">
				<span class="from-title">密码</span>
				<input type="password" v-model="password" placeholder="请输入密码" class="from-ipt">
			</div>
		</div>
		<mt-button type="primary" @click="onLigin()" class="login-btn">登录</mt-button>
	</div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      password: "",
      userName: ""
    };
  },
  methods: {
    async onLigin() {
      if (!this.userName) {
        mintUi.MessageBox("提示", "用户名不能为空");
        return;
      }

      if (!this.password) {
        mintUi.MessageBox("提示", "验证码不能为空");
        return;
      }

      let loginInfo = await this.http.post(this.url.login, {
        userName: this.userName,
        password: this.password
      });

      if (loginInfo.Code !== 200) {
        mintUi.MessageBox("提示", loginInfo.message);
        return;
      }

      if (loginInfo.data) {
        localStorage.setItem("token", loginInfo.data);
        this.$router.push({
          path: "/makeInfo"
        });
      } else {
        console.log("提示", "登录失败，token不能为空");
      }
    }
  },

  created() {
    document.title = "用户登录"; // 修改页面标题
  }
};
</script>

<style lang="less" scoped>
#login {
  .header-banner {
    width: 750px;
    height: 340px;
    display: block;
  }
  .from {
    background: #fff;
    overflow: hidden;
    border: 1px solid #e4e4e4; /*no*/
    padding: 0 30px;
    .from-row {
      width: 100%;
      height: 100px;
      line-height: 100px;
      border-bottom: 1px solid #e4e4e4; /*no*/
      span {
        display: inline-block;
        vertical-align: middle;
        height: 40px;
      }
      .from-title {
        width: 110px;
        border-right: 1px solid #e4e4e4; /*no*/
        font-size: 30px;
        color: #333333;
        line-height: 40px;
      }
      .from-ipt {
        border: 0;
        width: 300px;
        height: 40px;
        line-height: 40px;
        font-size: 30px;
        display: inline-block;
        vertical-align: middle;
        color: #333333;
        margin-left: 20px;
      }
      .from-btn {
        float: right;
        color: #4cb268;
        font-size: 30px;
        line-height: 1.5;
        margin-top: 30px;
      }
      .from-time {
        float: right;
        margin-top: 30px;
        font-size: 30px;
        line-height: 1.5;
      }
    }
    .from-row:last-child {
      border-style: none;
    }
  }
  .login-btn {
    width: 690px;
    margin: 50px auto 0 auto;
    background-color: #4cb268;
    display: block;
  }
}
</style>
