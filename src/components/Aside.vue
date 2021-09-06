<template>
<div>
  <el-menu
      style="width: 200px; min-height: calc(100vh - 50px)"
      default-active="test"
      router
      class="el-menu-vertical-demo">
    <el-menu-item index="test">
        <i class="el-icon-info"></i>
        <template #title>个人信息</template>
    </el-menu-item>
    <el-menu-item index="searchBook">
      <i class="el-icon-menu"></i>
      <template #title>查找/借阅图书</template>
    </el-menu-item>

    <el-menu-item index="myBook">
      <i class="el-icon-setting"></i>
      <template #title>我的借阅</template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>