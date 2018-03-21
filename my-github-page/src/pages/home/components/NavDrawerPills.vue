<template>
  <div class="container show-toggle">
    <transition name="drawer-fade">
      <div class="row" v-show="isShowDrawer">
        <div class="col-sm-3">
          <a href="#portfolio">Portfolio</a>
        </div>
        <div class="col-sm-3">
          <a href="#blog">Blog</a>
        </div>
        <div class="col-sm-3">
          <a target="_blank" href="https://github.com/ShoneSingLone">GitHub</a>
        </div>
        <div class="col-sm-3">
          <a href="mailto:SingLone@foxmail.com">SingLone@foxmail.com</a>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <bs-modal v-if="isShowDrawer" /></bs-modal>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import BSModal from "@cc/bootstrap/Modal";

export default {
  name: "NavDrawer",
  props: {
    isShowToggle: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  components: {
    "bs-modal": BSModal
  },
  computed: {
    isShowDrawer() {
      return this.$store.state.mainState.isShowModal;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/bootstrap/common";

.show-toggle {
  .row {
    position: absolute;
    top: 0;
    left: 0;
    right: 40%;
    bottom: 0;
    background: linear-gradient(white, transparent),
      linear-gradient(225deg, #0b1c03, transparent),
      linear-gradient(180deg, rgb(6, 206, 156), transparent);
    // background: linear-gradient(white, transparent),
    //   linear-gradient(225deg, rgb(6, 206, 156), transparent),
    //   linear-gradient(45deg, yellow, transparent);
    border-top-right-radius: 1rem 1rem;
    border-bottom-right-radius: 1rem 1rem;
    transform: translate3d(0.5rem, -0.5rem, 0);
    box-shadow: 0.5rem 0.5rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
    z-index: $zindex-modal;
    padding: 2rem 1rem;
  }

  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transition: transform 0.5s;
  }
  .drawer-fade-enter,
  .drawer-fade-leave-to {
    // opacity: 0;
    transform: translateX(-100%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s;
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