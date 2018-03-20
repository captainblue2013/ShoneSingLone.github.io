<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  name: "App",
  beforeCreate: function() {
    function throttle(method, context) {
      clearTimeout(method.tId);
      method.tId = setTimeout(function() {
        method.call(context);
      }, 500);
    }
    function consoleWindow(e) {
      console.dir(e);
      console.log(
        "outerHeight: ",
        window.outerHeight,
        "outerWidth: ",
        window.outerWidth
      );
      // if (window.matchMedia("(max-width: 415px)").matches) {
      // } else {
      // }
    }
    (function(vue, $) {
      $(window)
        .on("resize.mobile", function(e) {
          throttle(consoleWindow);
        })
        .trigger("resize.mobile");
    })(this, this.jQuery);
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100vh;
}
</style>
