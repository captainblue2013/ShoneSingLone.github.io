<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      widthChangeTag: {}
    };
  }
};
</script>

<style lang="scss">
@import "../../common/scss/my_variables";

html,
body,
#app {
  min-height: 100vh;
  // min-width: 375px;
  font-size: 16px;
  color: $main-color;
}
</style>
