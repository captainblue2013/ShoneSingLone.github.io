<template>
  <div class="layout wrapper">
    <slot name="main" id="layout-main"></slot>
    <slot name="header" id="layout-header"></slot>
    <slot name="footer" id="layout-footer"></slot>
  </div>
</template>

<script>
export default {
  name: "LayoutNormal",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}
main {
  order: 20;
  flex: 1;
}
header {
  order: 10;
}
footer {
  order: 30;
  margin: auto 0;
}
</style>
