<template>
  <div class="modal" />
</template>

<script type="text/ecmascript-6">
export default {};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/bootstrap/common";

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $zindex-modal-background;
  background: linear-gradient(-45deg, whitesmoke, transparent 300%);
  // background: linear-gradient(-45deg, rgb(4, 8, 1), transparent);
  // opacity: 0.5;
}
</style>