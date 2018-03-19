<template>
  <div id="app" class="container">
    <navtopbar/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>



<script>
import navtopbar from "@c/Bootstrap/NavTopBar";

export default {
  name: "App",
  data() {
    return { navigatorList: [] };
  },
  components: {
    navtopbar
  }
};
</script>

<style>

</style>
