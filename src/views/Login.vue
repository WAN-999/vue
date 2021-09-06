<template>
  <div style="width: 100%; height: 100vh; background-color: wheat;overflow: hidden">

    <div style="width: 400px; margin: 150px auto">
      <div style="color: #cccccc; font-size: 30px; text-align: center">欢迎登录</div>
      <el-form :model="userLogin" size="normal">
        <el-form-item >
          <el-input prefix-icon="el-icon-user-solid" v-model="userLogin.username" style="width: 100%"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input prefix-icon="el-icon-lock" type="password" v-model="userLogin.password" style="width: 100%" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="role">
            <el-radio v-model="userLogin.role" label=1>管理员</el-radio>
            <el-radio v-model="userLogin.role" label=0>学生</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login()">登录</el-button>
        </el-form-item>

      </el-form>
    </div>

  </div>

</template>

<script>
import request from "../utils/request";

export default {
  name: "Login",
  data(){
    return {
      userLogin:{
      }
    }
  },
  methods: {
    login(){
      if(this.userLogin.role != null) {
        request.post("/user/login", this.userLogin).then(res => {
          if (res.code === '0') {
            this.$message({
              type: "success",
              message: "登录成功"
            })
            sessionStorage.setItem("userJSON", this.userLogin.username)
            if (this.userLogin.role === '1') {
              this.$router.push("/manager")
            } else {
              this.$router.push({path: "/user", query: {username: this.userLogin.username}})   //页面跳转
            }
          } else {
            this.$message({
              type: "error",
              message: res.msg
            })
          }
        })
      }else{
        this.$message({
          type: "error",
          message: "请选择角色"
        })
      }
    }
  }
}
</script>