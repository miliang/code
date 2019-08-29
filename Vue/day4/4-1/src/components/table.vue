<template>
  <div>
    <el-table :data="tableData" border style="width:100%">
      <el-table-column prop="p_id" label="id" width="180"></el-table-column>
      <el-table-column prop="p_img" label="路径" width="180"></el-table-column>
      <el-table-column prop="p_subject" label="产品名称" width="180"></el-table-column>
      <el-table-column prop="p_price" label="产品价格" width="180"></el-table-column>
      <el-table-column prop="p_area" label="产品产地" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
  h2{
    color: red;
  }
</style>
<script>
  export default{
    data () {
      return {
        tableData: []
      }
    },
    watch:{
      '$route'(to,from){
        console.log('路由发生变化')
        console.log(this.$route.params.id)
        this.axios.get("/api/demo148c.do").then((data)=>{
          this.tableData = data.data
        })

      }
    },
    components: {},
    created(){
      this.axios.get('/api/demo148.do').then((data)=>{
        console.log(data.data)
        this.tableData = data.data
      })
    }
  }
</script>
