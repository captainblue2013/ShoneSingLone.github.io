<template>
  <div class="layout wrapper">
    <slot name="main" id="layout-main"></slot>
    <slot name="header" id="layout-header"></slot>
    <slot name="footer" id="layout-footer"></slot>
  </div>
</template>

<script>
/* 布局要求：使用 main header footer 标签 */
export default {
  name: "LayoutNormal"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.layout.wrapper {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
  max-height: 100vh;
  main {
    order: 20;
    flex: 1;
    margin: auto 0;
  }
  header {
    order: 10;
  }
  footer {
    order: 30;
  }
}
</style>
