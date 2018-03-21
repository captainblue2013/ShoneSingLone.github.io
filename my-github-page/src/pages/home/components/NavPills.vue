<template>
  <div class="container">
    <div class="nav-pills">
      <div class="col-sm-3 active">
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
  </div>
</template>

<script type="text/ecmascript-6">
import ButtonToggleDrawer from "@cc/ButtonToggleDrawer";
import FigureAvatar from "./FigureAvatar";

export default {
  props: ["navbarTitle", "width", "toList", "isToggle"],
  data() {
    return {
      brand: this.navbarTitle || "Control panel"
    };
  },
  methods: {
    afterLinkTo() {
      if (this.isToggle) {
        let $ = window.jQuery;
        $("#navbar-toggler").trigger("click");
      }
      return false;
    }
  },
  components: {
    "button-toggle-drawer": ButtonToggleDrawer,
    "figure-avatar": FigureAvatar
  },
  computed: {
    isShowToggle() {
      return this.$store.getters["IS_MOBILE"];
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-top-bar {
  background: url(../../../common/assets/images/header-bg.jpg) top left/ cover
    no-repeat;
  box-shadow: 0 1px 15px rgba(1, 0, 0, 0.5);
  .wrapper {
    .toggle-drawer {
      position: absolute;
      top: 0.5rem;
      &.right {
        right: 0.5rem;
      }
    }
    .avatar {
      display: flex;
      flex-flow: row nowrap;
    }
  }
}
</style>