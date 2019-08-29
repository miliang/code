<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu :router="true" default-active="/day3" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>主题游</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">亲子游</template>
              <el-menu-item  index="/day3">
                一日游
              </el-menu-item>
              <el-menu-item   index="/index">
                 两日游
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">蜜月旅行</template>
              <el-menu-item index="1-2-1">一日游</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">自由行</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  a{
    text-decoration: none;
  }
  a:active{
    color: black;
  }
  a:visited{
    color: black;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {},
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
