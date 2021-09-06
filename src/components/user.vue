<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 220px; padding-left: 30px; font-weight: bold; color: blue">欢迎使用图书馆自助服务</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
      <el-button type="text" @click="exit()">退出</el-button>
    </div>
  </div>
  <center>
    <div>
      <el-button style="margin: 50px" @click="toInfo()">编辑信息</el-button> <br>
      <el-button style="margin: 50px" @click="toSearch()">查找/借阅图书</el-button> <br>
      <el-button style="margin: 50px" @click="toMyBook()">我的借阅</el-button> <br>
    </div>
  </center>
</template>

<script>
// @ is an alias to /src

import request from "../utils/request";
import router from "../router";
import Header from "./Header";
import Aside from "./Aside";
import form from "./form";

export default {
  name: "User",
  components: {Header,Aside,form},
  data() {
    return {
      form: {},
      confirmPassword: "",
      password: ""
    };
  },
  methods: {
    exit(){
      this.$router.push("/")
    },
    toInfo(){
      this.$router.push({path:"/user/info",query:{username: this.$route.query.username}})
    },
    toSearch(){
      this.$router.push({path:"/user/searchBook",query:{username: this.$route.query.username}})
    },
    toMyBook(){
      this.$router.push({path:"/user/mybook",query:{username: this.$route.query.username}})
    }
  }
};
</script>
