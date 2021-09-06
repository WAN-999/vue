<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex">
    <div style="width: 220px; padding-left: 30px; font-weight: bold; color: blue">欢迎使用图书馆自助服务</div>
    <div style="flex: 1"></div>
    <div style="width: 100px">
<!--      <el-dropdown>-->
<!--        <span class="el-dropdown-link">-->
<!--          张三<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--        </span>-->
<!--        <template #dropdown>-->
<!--          <el-dropdown-menu>-->
<!--            <el-dropdown-item>个人信息</el-dropdown-item>-->
<!--            <el-dropdown-item>退出</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </template>-->
<!--      </el-dropdown>-->
      <el-button type="text" @click="exit()">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  date:{

  },
  methods: {
    exit(){
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>