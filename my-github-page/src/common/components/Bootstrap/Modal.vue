<template>
  <transition name="fade">
    <div class="modal" @click="toggleModal" />
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["isShow"],
  data() {
    return { show: true };
  },
  methods: {
    toggleModal() {
      let vue = this;
      let command = vue.$store.state.mainState.isShowModal
        ? "SET_MODAL_HIDDEN"
        : "SET_MODAL_SHOW";
      vue.$store.commit(command);
    }
  },
  computed: {}
};
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
  // background: linear-gradient(90deg,, transparent);
  background: $modal-backdrop-bg;
  opacity: 0.5;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }
}
</style>