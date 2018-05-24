<template>
  <header class="nav-top-bar">
    <div class="container">
      <div class="wrapper toggle-drawer right" v-if="isMobile" @click="toggleModal">
        <button-toggle-drawer />
      </div>
      <div class="wrapper avatar" @click="toggleLoginModal">
        <figure-avatar/>
      </div>
    </div>
    <nav class="wrapper nav">
      <nav-drawer-pills :isMobile="isMobile " />
      <!-- <nav-pills/> -->
    </nav>
    <transition name="fade">
      <div v-show="isShow.loginPanel">
        <panel-login v-on:login="toggleLoginModal" />
      </div>
    </transition>

  </header>
</template>

<script type="text/ecmascript-6">
import ButtonToggleDrawer from "@cc/ButtonToggleDrawer";
import BSModal from "@cc/bootstrap/Modal";
import FigureAvatar from "./FigureAvatar";
import NavPills from "./NavPills";
import NavDrawerPills from "./NavDrawerPills";
import PanelLogin from "./PanelLogin";

export default {
  props: ["navbarTitle", "width", "toList", "isToggle"],
  data() {
    return {
      brand: this.navbarTitle || "Control panel",
      isShow: {
        loginPanel: false
      }
    };
  },
  methods: {
    //触发modal
    toggleModal() {
      let store = this.$store;
      store.commit(
        store.state.mainState.isShowModal
          ? "SET_MODAL_HIDDEN"
          : "SET_MODAL_SHOW"
      );
    },
    toggleLoginModal() {
      console.log("this.isShow.loginPanel", this.isShow.loginPanel);
      this.isShow.loginPanel = !this.isShow.loginPanel;
    },
    othertest(e) {
      console.log("$e", e);
      this.isShow.loginPanel = !this.isShow.loginPanel;
    }
  },
  components: {
    "button-toggle-drawer": ButtonToggleDrawer,
    "nav-pills": NavPills,
    "nav-drawer-pills": NavDrawerPills,
    "figure-avatar": FigureAvatar,
    "panel-login": PanelLogin,
    "bs-modal": BSModal
  },
  computed: {
    //根据视窗宽度决定是否显示ToggleButton
    isMobile() {
      return this.$store.getters["IS_MOBILE"];
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/my_variables";

.nav-top-bar {
  background: url(../../../common/assets/images/header-bg.jpg) top left/ cover
    no-repeat;
  // box-shadow: 0 1px 15px rgba(1, 0, 0, 0.5);
  @include box-shadow-up();
  // &:hover {
  //   @include box-shadow-down();
  // }
  .wrapper {
    &.toggle-drawer {
      position: absolute;
      top: 0.5rem;
      &.right {
        right: 0.5rem;
      }
    }
    &.avatar {
      display: flex;
      flex-flow: row nowrap;
    }
    &.nav {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
    }
  }
}
</style>