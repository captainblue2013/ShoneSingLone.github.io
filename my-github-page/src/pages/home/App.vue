<template>
  <div id="app" class="container">
    <navtopbar/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>



<script>
import navtopbar from "@cc/01header/Nav";

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

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  // width: 100%;
}
#app {
  // background: linear-gradient(cyan, transparent),
  //   linear-gradient(225deg, magenta, transparent),
  //   linear-gradient(45deg, yellow, transparent);
}
</style>
