<template>
  <figure>
    <img class="img-circle" src="./assets/avatar.png" alt="my GitHub avatar">
    <figcaption>
      <span id="portfolio-title">ShoneSingLone's MicroSite</span>
    </figcaption>
  </figure>
</template>

<script type="text/ecmascript-6">
import ButtonToggleDrawer from "@cc/ButtonToggleDrawer";

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
    "button-toggle-drawer": ButtonToggleDrawer
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
img {
  width: 10rem;
  height: 10rem;
  padding: 0.4rem;
}
figure {
  margin: auto;
  padding: 0.4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
</style>