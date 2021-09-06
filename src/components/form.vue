<template>
  <el-form :model="form" label-width="120px">
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
</template>

<script>
export default {
  name: "form"
}

</script>