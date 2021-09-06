<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 220px; padding-left: 30px; font-weight: bold; color: blue">欢迎使用图书馆自助服务</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-button type="text" @click="goBack()">返回</el-button>
    </div>
  </div>
  <div style="padding: 10px">
    <!--    功能区域-->
    <!--    <div style="margin: 10px 0">-->
    <!--      <el-button type="primary" @click="add">新增</el-button>-->
    <!--      <el-button type="primary">导入</el-button>-->
    <!--      <el-button type="primary">导出</el-button>-->
    <!--    </div>-->
    <!--搜索区域-->
    <div>
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load()">查询</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" sortable> </el-table-column>
      <el-table-column prop="number" label="书号"> </el-table-column>
      <el-table-column prop="name" label="书名"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="description" label="详情"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template #default="scope">
          <el-button @click="handleDisborrow(scope.row)" type="text" size="small">还书</el-button>
          <!--          <el-popconfirm title="确认删除吗？" @confirm="handleDelete(scope.row.id)">-->
          <!--            <template #reference>-->
          <!--              <el-button type="text" size="small">删除</el-button>-->
          <!--            </template>-->
          <!--          </el-popconfirm>-->
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

      <el-dialog
          title="提示"
          v-model="dialogVisible"
          width="30%">

        <el-form :model="form" label-width="120px">
          <el-form-item label="number">
            <el-input v-model="form.number" style="width: 80%" ></el-input>
          </el-form-item>
          <el-form-item label="书名">
            <el-input v-model="form.name" style="width: 80%" ></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="form.author" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="详情">
            <el-input v-model="form.description" style="width: 80%"></el-input>
          </el-form-item>
        </el-form>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save()">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "MyBook",
  data() {
    return {
      form: {},
      book: {},
      dialogVisible: false,
      search: "",
      currentPage: 1,
      total: 10,
      tableData: [],
    };
  },
  created(){
    this.load()
  },
  methods:{
    load(){
      request.get("/book/mybook", {
        params:{
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search,
          borrow: this.$route.query.username
        }}
      ).then(res=>{
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    goBack(){
      this.$router.go(-1)
    },
    handleDisborrow(row){
      console.log(row)
      this.book = row
      console.log(row)
      this.book.borrow = ''
      request.put("/book/borrow",this.book).then(res=>{
        if(res.code === '0'){
          this.$message({
            type: "success",
            message: "操作成功"
          })
        }else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
        this.load()
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.load()
    },
  }
}
</script>

<style scoped>

</style>