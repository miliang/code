<template>
  <div>
    <div>
      <h3>day4内容</h3>
      <div id="mynav">
        <router-link to="/shafa/0">
          <el-button  type="primary">沙发</el-button>
        </router-link>
        <router-link to="/chuang/1">
          <el-button  type="primary">床</el-button>
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
#mynav{
  border:1px solid pink;
}
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
