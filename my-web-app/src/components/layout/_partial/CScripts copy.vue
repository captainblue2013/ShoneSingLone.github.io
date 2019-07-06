<template>
  <div class="scripts"></div>
</template>
<script>
import loadJS from "@/loadJS";
let { $, ScrollReveal, Waves, FastClick } = window;

export default {
  name: "scripts",
  inject: ["APP"],
  beforeCreate() {
    Promise.all([this.initJQuery()]).catch(console.error.bind(console));
  },
  data() {
    return {};
  },
  methods: {
    initJQuery() {
      return loadJS([
        [
          "jquey",
          "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"
        ]
      ]);
    },
    initSearch() {
      if (this.APP.theme.search && this.APP.theme.search.enable) {
        window.GOOGLE_CUSTOM_SEARCH_API_KEY = this.APP.theme.search.google_api_key;
        window.GOOGLE_CUSTOM_SEARCH_ENGINE_ID = this.APP.theme.search.google_engine_id;
        window.ALGOLIA_API_KEY = this.APP.theme.search.algolia_api_key;
        window.ALGOLIA_APP_ID = this.APP.theme.search.algolia_app_id;
        window.ALGOLIA_INDEX_NAME = this.APP.theme.search.algolia_index_name;
        window.AZURE_SERVICE_NAME = this.APP.theme.search.azure_service_name;
        window.AZURE_INDEX_NAME = this.APP.theme.search.azure_index_name;
        window.AZURE_QUERY_KEY = this.APP.theme.search.azure_query_key;
        window.BAIDU_API_ID = this.APP.theme.search.baidu_api_id;
        window.SEARCH_SERVICE = this.APP.theme.search.service || "hexo";
        window.ROOT = this.APP.config.root || "/";
        if (!window.ROOT.endsWith("/")) window.ROOT += "/";
      }
    },
    initInstant() {
      return loadJS([
        [
          "jquey",
          "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"
        ]
      ]);
    },
    initScrollreveal() {
      if (this.APP.theme.scrollreveal === true) {
        $(function() {
          const $reveal = $(".reveal");
          if ($reveal.length === 0) return;
          const sr = ScrollReveal({ distance: 0 });
          sr.reveal(".reveal");
        });
      }
    },
    initBackstretch() {
      if (
        this.APP.theme.backstretch &&
        (this.APP.theme.backstretch.images || this.APP.page.images)
      ) {
        var imgs = this.APP.theme.backstretch.images || this.APP.page.images;
        var posi = null;
        if (this.APP.theme.backstretch.position == "cover") {
          posi = ".cover";
        }
        if (
          imgs != undefined &&
          this.APP.theme.backstretch.position != undefined
        ) {
          $(function() {
            if (posi) {
              $(posi).backstretch(imgs, {
                duration: this.APP.theme.backstretch.duration,
                fade: this.APP.theme.backstretch.fade
              });
            } else {
              $.backstretch(imgs, {
                duration: this.APP.theme.backstretch.duration,
                fade: this.APP.theme.backstretch.fade
              });
            }
          });
        }
      }
    },
    initFastclick() {
      if (this.APPtheme.fastclick == true) {
        document.addEventListener(
          "DOMContentLoaded",
          function() {
            FastClick.attach(document.body);
          },
          false
        );
      }
    },
    initNodewaves() {
      if (this.APP.theme.nodewaves == true) {
        $(function() {
          Waves.attach(".flat-btn", ["waves-button"]);
          Waves.attach(".float-btn", ["waves-button", "waves-float"]);
          Waves.attach(".float-btn-light", [
            "waves-button",
            "waves-float",
            "waves-light"
          ]);
          Waves.attach(".flat-box", ["waves-block"]);
          Waves.attach(".float-box", ["waves-block", "waves-float"]);
          Waves.attach(".waves-image");
          Waves.init();
        });
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
</style>