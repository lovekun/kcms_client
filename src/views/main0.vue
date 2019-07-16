<style scoped lang="less">
  /*@import "~@/views/layout/main0.less";*/

  .main0 {
  width: 100%;
  height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
<template>
  <div class="main0">
    <el-container style="height: 100%;">
      <el-header style="padding: 0 0;background: #2d8cf0;line-height: 60px;">
        vue-client 演示系统
      </el-header>
      <el-container style="height: 100%">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">组件</span>
              </template>
              <el-menu-item index="tree" route="tree">树形组件</el-menu-item>
              <el-menu-item index="dragComponent">滑动列表</el-menu-item>
              <el-menu-item index="list">基本组件</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">表格</span>
              </template>
              <el-menu-item index="editableList">可编辑表格</el-menu-item>
              <el-menu-item index="horizontalScrollList">水平滑动表格</el-menu-item>
              <el-menu-item index="exportableList">可导出表格</el-menu-item>
              <el-menu-item index="multiShowList">多种显示方式展示</el-menu-item>
            </el-submenu>
            <el-menu-item index="setting">
              <i class="el-icon-menu"></i>
              <span slot="title">设置</span>
            </el-menu-item>
            <el-menu-item index="4" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">测试页面</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import treeShow from "@/views/treeShow.vue";

  export default {
    components: {
      treeShow
    },
    data() {
      return {
      };
    },
    computed: {

    },
    methods: {
      handleSelect(key, keypath) {
        this.$router.push({
          name: key
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    mounted: function () {
      this.$router.push({
        name: "index"
      });
    },
    watch: {
    }
  };
</script>

