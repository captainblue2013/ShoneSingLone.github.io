<template>
  <header class="nav-top-bar">
    <div class="container">
      <div class="wrapper toggle-drawer right" v-if="isShowToggle" @click="toggleModal">
        <button-toggle-drawer />
      </div>
      <div class="avatar wrapper">
        <figure-avatar/>
      </div>
    </div>
    <nav class="wrapper nav">
      <nav-drawer/>
      <!-- <nav-pills/> -->
    </nav>

  </header>
</template>

<script type="text/ecmascript-6">
import ButtonToggleDrawer from "@cc/ButtonToggleDrawer";
import FigureAvatar from "./FigureAvatar";
import NavPills from "./NavPills";
import NavDrawer from "./NavDrawer";

export default {
  props: ["navbarTitle", "width", "toList", "isToggle"],
  data() {
    return {
      brand: this.navbarTitle || "Control panel"
    };
  },
  methods: {
    //触发modal
    toggleModal() {
      let vue = this;
      let command = vue.$store.state.mainState.isShowModal
        ? "SET_MODAL_HIDDEN"
        : "SET_MODAL_SHOW";
      vue.$store.commit(command);
      console.log(
        "vue.$store.state.mainState.isShowModal",
        vue.$store.state.mainState.isShowModal
      );
    }
  },
  components: {
    "button-toggle-drawer": ButtonToggleDrawer,
    "nav-pills": NavPills,
    "nav-drawer": NavDrawer,
    "figure-avatar": FigureAvatar
  },
  computed: {
    //根据视窗宽度决定是否显示ToggleButton
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
  }
}
</style>