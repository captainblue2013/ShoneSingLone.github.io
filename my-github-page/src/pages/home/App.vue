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
        vue.$store.commit("SET_DW", window.innerWidth);
        // console.log(vue.$store.getters["IS_MOBILE"]);
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
  // min-width: 375px;
  font-size: 16px;
  color: #0b1c03;
}
</style>
