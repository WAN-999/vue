<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 220px; padding-left: 30px; font-weight: bold; color: blue">欢迎使用图书馆自助服务</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-button type="text" @click="goBack()">返回</el-button>
    </div>
  </div>
<div >
  <el-form :model="form" label-width="120px" >
    <el-form-item label="">
      <el-input v-model="form.id" style="width: 80%" v-show="false"></el-input>
    </el-form-item>
    <el-form-item label="用户名">
      <el-input v-model="form.username" style="width: 50%" disabled></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="form.age" style="width: 50%"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio v-model="form.sex" label="男">男</el-radio>
      <el-radio v-model="form.sex" label="女">女</el-radio>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address" style="width: 50%"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="form.password" style="width: 50%" show-password></el-input>
    </el-form-item>
    <el-form-item label="请再次输入密码">
      <el-input type="password" v-model="confirmPassword" style="width: 50%" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="save()">保存</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import request from "../utils/request";

export default {
  name: "Info",
  data(){
    return{
      form:{},
      confirmPassword: ""
    }
  },
  created() {
    this.load()
  },
  methods:{
    save(){

      console.log(this.$route.query.username)
      if(this.password === this.form.password){
        request.put("/user", this.form).then(res=>{
          console.log(res)
          if(res.code === '0'){
            this.$message({
              type : "success",
              message : "更新成功"
            })
          }else{
            this.$message({
              type : "error",
              message : res.msg
            })
          }
          this.load()
        })
      }else{
        if(this.confirmPassword === this.form.password){
          this.form.password = this.confirmPassword
          request.put("/user", this.form).then(res=>{
            console.log(res)
            if(res.code === '0'){
              this.$message({
                type : "success",
                message : "更新成功"
              })
            }else{
              this.$message({
                type : "error",
                message : res.msg
              })
            }
            this.load()
          })
        } else{
          this.$message({
            type : "error",
            message : "两次密码不一致"
          })
        }
      }
    },
    load(){
      request.get("/user", {params: {username: this.$route.query.username}}).then(res=>{
        console.log(res)

        this.form = res.data
        this.password = this.form.password
        this.confirmPassword = ""
      })

    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>