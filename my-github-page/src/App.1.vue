<template>
  <div id="app">
    <bs-navbar :toList="toList"  navbar-title="控制面板"/>
    <div id="view-wrapper"  class="container">
      <keep-alive>
        <router-view /> 
      </keep-alive>
    </div>
  </div>
</template>



<script>
import Navbar from "@/components/Bootstrap/Navbar";

export default {
  name: "App",
  data() {
    return {
      toList: [
        { name: "upload", title: "上传", params: { userId: 123 } },
        { name: "download", title: "下载", params: { userId: 123 } }
      ]
    };
  },
  components: {
    "bs-navbar": Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#view-wrapper {
  transform: translateY(150px);
}
</style>
