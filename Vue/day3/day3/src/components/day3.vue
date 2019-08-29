<template>
  <div>
    <el-table :data="currentPageData" style="width: 100%">
      <el-table-column label="编号" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.id }}</span>

        </template>
      </el-table-column>
      <el-table-column label="国家名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.v_visaname}}</span>
        </template>
      </el-table-column>
      <el-table-column label="签证价格" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.v_price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="国旗" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.v_imgLogo}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @current-change="changeNum" :page-size="pageNum" layout="prev, pager, next" :total="tableData.length">
      </el-pagination>
    </div>
  </div>


</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        pageNum:4,
        currentPageData:[]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
//        第一步拿到id将这个id传到服务器
//        第二步将渲染数组 tabledata修改
        this.axios.get("/api/demo146.do",{
          params:{
            myid:row.id
          }
        }).then((data)=>{
          console.log(data)
        })
        this.tableData.splice(index,1)
      },
      changeNum(val){
        this.currentPageData=[]
        console.log(val)
        for(var i = (val-1)*4;i<val*4;i++){
          this.currentPageData.push(this.tableData[i])
        }

      }
    },
    created(){
      this.axios.get("/api/LCF_visa.do").then((data)=>{
        console.log(data.data)
        this.tableData = data.data
        for(var i=0;i<4;i++){
          this.currentPageData.push(this.tableData[i])
        }
      })
    }
  }
</script>
<style scoped>

</style>
