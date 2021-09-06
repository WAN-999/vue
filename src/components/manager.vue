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
      <el-button style="margin: 50px" @click="userManage()">用户管理</el-button> <br>
      <el-button style="margin: 50px" @click="bookManage()">图书管理</el-button> <br>
    </div>
  </center>
</template>

<script>
export default {
  name: "manager",
  data(){

  },
  methods:{
    userManage(){
      this.$router.push('/manager/userManage')
    },
    bookManage(){
      this.$router.push('/manager/bookManage')
    },
    exit(){
      this.$router.push("/")
    },
  }
}
</script>

<style scoped>

</style>