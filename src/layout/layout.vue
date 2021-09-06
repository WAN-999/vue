<template>
  <div>
    <Header/>
    <!--    主体-->
    <div style="display: flex">
      <!--      侧边栏-->
      <Aside/>
      <router-view style="flex: 1px"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Aside from "../components/Aside";
export default {
  name: "layout",
  components:{
    Header,
    Aside
  }
}
</script>

<style scoped>

</style>