<template>
	<div id="makeInfo">
		<div><span class="s-c1">{{startTime}}</span>至<span class="s-c1">{{endTime}}</span> 的预约情况：</div>
		<div class="info" v-for="item in makeInfo" :key="item.UserId">
			<div>
				<span>姓名：</span>
				<span>{{item.UserName}}</span>
			</div>
			<div>
				<span>电话：</span>
				<span class="s-c1">{{item.Mobile}}</span>
			</div>
			<div>
				<span>地址：</span>
				<span>{{item.Address}}</span>
			</div>
			<div>
				<span>时间：</span>
				<span>{{item.Createdate}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "makeInfo",
  data() {
    return {
      startTime: "",
      endTime: "",
      makeInfo: []
    };
  },
  methods: {},
  created() {
    let today = new Date();
    let startTime = this.util.coverDate(today).split(" ")[0];
    let end = today.getTime() + 1000 * 60 * 60 * 24 * 30;
    let endTime = this.util.coverDate(new Date(end)).split(" ")[0];

    this.startTime = startTime;
    this.endTime = endTime;

    mintUi.Indicator.open("加载中...");
    this.http
      .post(this.url.queryMakeInfo, {
        startTime: startTime,
        endTime: endTime
      })
      .then(res => {
        mintUi.Indicator.close();
        if (res.Code === 200) {
          this.makeInfo = res.data;
        }
      });
  }
};
</script>

<style lang="less" scoped>
#makeInfo {
  background-color: #fff;
	padding: 10px;
	.info{
		margin-top: 15px;
	}
	.s-c1{
		color: #49abff;
	}
}
</style>
