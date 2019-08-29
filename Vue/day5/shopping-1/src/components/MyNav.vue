<template>
  <div>
    <el-menu theme="dark" default-active="/Products" class="el-menu-demo" mode="horizontal" :router="true">
      <el-menu-item index="/Products">产品罗列</el-menu-item>
      <el-submenu index="2">
        <template slot="title">个人中心</template>
        <el-menu-item index="/ShoppingCar">购物车</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>
<style scoped>

</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
