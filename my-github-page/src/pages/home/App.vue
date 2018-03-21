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
  beforeCreate: function() {
    let vue = this;
    (function(vue, $) {
      function debounce(method, delay) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function() {
          method.call(this);
        }, delay);
      }

      function consoleWindow() {
        // $screen-xs:                  480px !default;
        // $screen-sm:                  768px !default;
        // $screen-md:                  992px !default;
        // $screen-lg:                  1200px !default;
        // window.matchMedia IE9
        console.log(
          "before.deviceW,",
          vue.$store.state.mainState.deviceW,
          "isMobile",
          vue.$store.getters["mainState/isMobile"]
        );
        vue.$store.commit("mainState/SET_DW", window.innerWidth);
        console.log(
          "after.deviceW,",
          vue.$store.state.mainState.deviceW,

          "vue.$store.getters.isMobile",
          vue.$store.getters.isMobile /* 优先使用全局的 */
        );
      }
      $(window)
        .on("resize.mobile", function(e) {
          debounce(consoleWindow, 500);
        })
        .trigger("resize.mobile");
    })(vue, vue.jQuery);
  },
  data() {
    return {
      widthChangeTag: {}
    };
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100vh;
  font-size: 16px;
}
</style>
