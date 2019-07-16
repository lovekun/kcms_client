<style scoped lang="less">
    /*@import "~@/views/index.less";*/
    .el-row {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
    }
    .bg-purple-dark {
      background: #99a9bf;
    }
    .bg-purple {
      background: #d3dce6;
    }
    .bg-purple-light {
      background: #e5e9f2;
    }
    .grid-content {
      border-radius: 4px;
      min-height: 36px;
    }
    .row-bg {
      padding: 10px 0;
      background-color: #f9fafc;
    }
</style>
<template>
  <div class="index" style="">
    <el-row>
      <el-col :span="6">
        <Card class="index-row1-col1-card" :bordered="false">
        <div slot="title">
        <img src="../images/avator.png">
        <p>{{ user.username }}</p>
        </div>
        <div>最近登录时间: {{ user.lastLoginTime }}</div>
        </Card>
      </el-col>
      <el-col :span="6">
        <Card class="index-row1-col2-card" :bordered="false">
        <p slot="title">当前在线人数:</p>
        <ICountUp class="index-row1-col2-card-countup"
        :startVal="startVal"
        :endVal="endVal"
        :decimals="decimals"
        :duration="duration"
        :options="options"
        @ready="onReady"
        />
        </Card>
      </el-col>
      <el-col :span="6">
        <Card class="index-row1-col2-card" :bordered="false">
        <p slot="title">当前在线人数:</p>
        <ICountUp class="index-row1-col2-card-countup"
        :startVal="startVal"
        :endVal="endVal"
        :decimals="decimals"
        :duration="duration"
        :options="options"
        @ready="onReady"
        />
        </Card>
      </el-col>
      <el-col :span="6">
        <Card class="index-row1-col2-card" :bordered="false">
        <p slot="title">当前在线人数:</p>
        <ICountUp class="index-row1-col2-card-countup"
        :startVal="startVal"
        :endVal="endVal"
        :decimals="decimals"
        :duration="duration"
        :options="options"
        @ready="onReady"
        />
        </Card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <Card :bordered="false">
        <chart></chart>
        </Card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ICountUp from "vue-countup-v2";
import chart from "@/views/chart.vue";
export default {
	components: {
		ICountUp,
		chart
	},
	data () {
		return {
			startVal: 0,
			endVal: 120500,
			decimals: 0,
			duration: 2.5,
			options: {
				useEasing: true,
				useGrouping: true,
				separator: ",",
				decimal: ".",
				prefix: "",
				suffix: ""
			}
		};
	},
	computed: {
		user () {
			return JSON.parse(this.$cookie.get("user"));
		}
	},
	methods: {
		onReady: function (instance, CountUp) {
			const that = this;
			instance.update(that.endVal + 100);
		}
	},
	mounted: function () {

	}
};
</script>
