<template>
  <div class="scripts"></div>
</template>
<script>
import loadJS from "@ventose/utils-loadjs";
import clipboard from "@/components/layout/_third-party/clipboard";
import theme from "../_configs";
import $ from "jquery";
let { FastClick } = window;
let page, config;
// let runSocketIO = () => import( /* webpackChunkName: "SocketIO" */ "./scripts/scrollreveal.min.js" );

export default {
  name: "scripts",
  inject: ["APP"],
  mounted() {
    page = this.APP.page;
    config = this.APP.config;
    /*  */
    setTimeout(() => {
      this.initSearch();
      this.initScrollreveal();
      this.initNodewaves();
      this.initBusuanzi();
      this.initFastclick();
      this.initBackstretch();
      this.initComments();
      this.initOthers();
    }, 1000 * 1);
  },
  data() {
    return {};
  },
  methods: {
    initSearch() {
      if (theme.search && theme.search.enable) {
        window.GOOGLE_CUSTOM_SEARCH_API_KEY = theme.search.google_api_key;
        window.GOOGLE_CUSTOM_SEARCH_ENGINE_ID = theme.search.google_engine_id;
        window.ALGOLIA_API_KEY = theme.search.algolia_api_key;
        window.ALGOLIA_APP_ID = theme.search.algolia_app_id;
        window.ALGOLIA_INDEX_NAME = theme.search.algolia_index_name;
        window.AZURE_SERVICE_NAME = theme.search.azure_service_name;
        window.AZURE_INDEX_NAME = theme.search.azure_index_name;
        window.AZURE_QUERY_KEY = theme.search.azure_query_key;
        window.BAIDU_API_ID = theme.search.baidu_api_id;
        window.SEARCH_SERVICE = theme.search.service || "hexo";
        window.ROOT = this.APP.config.root || "/";
        if (!window.ROOT.endsWith("/")) window.ROOT += "/";
      }
    },
    initScrollreveal() {
      if (theme.scrollreveal === true) {
        loadJS([["scrollreveal", "./plugins/scrollreveal.min.js"]]).then(
          function() {
            let { ScrollReveal } = window;
            const $reveal = $(".reveal");
            if ($reveal.length === 0) return;
            const sr = ScrollReveal({ distance: 0 });
            sr.reveal(".reveal");
          }
        );
      }
    },
    initNodewaves() {
      if (theme.nodewaves == true) {
        loadJS([["waves", "./pulugins/waves.min.js"]]).then(function() {
          let { Waves } = window;
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
    },
    initBusuanzi() {
      if (theme.busuanzi == true) {
        console.log("busuanzi是干嘛用的？", theme.busuanzi);
      }
    },
    initFastclick() {
      if (theme.fastclick == true) {
        document.addEventListener(
          "DOMContentLoaded",
          () => FastClick.attach(document.body),
          false
        );
      }
    },
    initBackstretch() {
      if (theme.backstretch && (theme.backstretch.images || page.images)) {
        var imgs = theme.backstretch.images || page.images;
        var posi = null;
        if (theme.backstretch.position == "cover") {
          posi = ".cover";
        }
        if (imgs != undefined && theme.backstretch.position != undefined) {
          if (posi) {
            $(posi).backstretch(imgs, {
              duration: theme.backstretch.duration,
              fade: theme.backstretch.fade
            });
          } else {
            $("#cover").backstretch(
              [
                "https://img.vim-cn.com/6d/a0c9e6f9efad8b731cb7376504bd10d79d2053.jpg"
              ],
              { duration: "6000", fade: "2500" }
            );
            /*  $.backstretch(imgs, {
                duration: theme.backstretch.duration,
                fade: theme.backstretch.fade
              }); */
          }
        }
      }
    },
    initComments() {
      window.enableDisqus = false;
      window.enableLivere = false;
      window.enableGitalk = false;
      window.enableValine = false;
      var result = [];
      if (page && page.comments == true) {
        if (this.APP.config.disqus_shortname) {
          window.enableDisqus = true;

          var disqus_shortname = this.APP.config.disqus_shortname;
          if (page.permalink) {
            window.disqus_url = page.permalink;
          }
          result.push(
            loadJS([
              [
                "disqus",
                "//" + disqus_shortname + ".disqus.com/" + page.comments
                  ? "embed.js"
                  : "count.js"
              ]
            ])
          );
        }
        if (this.APP.config.livere_uid) {
          window.enableLivere = true;
          result.push(
            loadJS([["livere", "https://cdn-city.livere.com/js/embed.dist.js"]])
          );
        }
        if (this.APP.config.gitalk) {
          window.enableGitalk = true;
          let options = {
            clientID: this.APP.config.gitalk.clientID,
            clientSecret: this.APP.config.gitalk.clientSecret,
            repo: this.APP.config.gitalk.repo,
            owner: this.APP.config.gitalk.owner,
            admin: this.APP.config.gitalk.admin,
            distractionFreeMode: false // Facebook-like distraction free mode
          };
          options.id =
            page.gitalk && page.gitalk.id ? page.gitalk.id : location.pathname;
          var gitalk = new Gitalk(options);
          gitalk.render("gitalk-container");
        }
        if (theme.valine.enable && this.APP.config.leancloud) {
          window.enableValine = true;
          loadJS([["av-min", "//cdn1.lncld.net/static/js/3.0.4/av-min.js"]])
            .then(() => {
              if (theme.valine.volantis == true) {
                let src =
                  theme.info &&
                  theme.info.cdn &&
                  theme.info.cdn.js &&
                  theme.info.cdn.js.volantis
                    ? theme.info.cdn.js.volantis
                    : "js/volantis.js";
                return loadJS([["volantis", src]]);
              } else {
                return loadJS([
                  [
                    "volantis",
                    "https://cdn.jsdelivr.net/gh/xaoxuu/cdn-valine@1.3.4/js/valine.min.js"
                  ]
                ]);
              }
            })
            .then(() => {
              var GUEST_INFO = ["nick", "mail", "link"];
              var guest_info = theme.valine.guest_info
                .split(",")
                .filter(function(item) {
                  return GUEST_INFO.indexOf(item) > -1;
                });
              var notify = theme.valine.notify == true;
              var verify = theme.valine.verify == true;
              let { Valine } = window;
              var valine = new Valine();
              let options = {
                el: "#valine_container",
                notify: notify,
                verify: verify,
                guest_info: guest_info,
                appId: config.leancloud.app_id,
                appKey: config.leancloud.app_key,
                placeholder:
                  page.valine && page.valine.placeholder
                    ? page.valine.placeholder
                    : theme.valine.placeholder,
                pageSize: theme.valine.pageSize,
                avatar: theme.valine.avatar,
                lang: theme.valine.lang,
                highlight: theme.valine.highlight
              };

              if (page.valine && page.valine.path) {
                options.path = page.valine.path;
              }
              valine.init(options);
            });
        }
      }
    },
    initOthers() {
      let searchSrc =
        theme.info &&
        theme.info.cdn &&
        theme.info.cdn.js &&
        theme.info.cdn.js.search
          ? theme.info.cdn.js.search
          : "js/search.js";
      loadJS([["search", searchSrc]]).then(() => {
        let mainSrc =
          theme.info &&
          theme.info.cdn &&
          theme.info.cdn.js &&
          theme.info.cdn.js.app
            ? theme.info.cdn.js.app
            : "js/app.js";
        return loadJS([["main-app", mainSrc]]);
      });

      if (page.layout == "links") {
        loadJS([
          [
            "echo",
            "https://cdn.jsdelivr.net/gh/toddmotto/echo@1.7.3/src/echo.js"
          ]
        ]).then(() => {
          let { echo } = window;
          echo.init({
            offset: 100,
            throttle: 250,
            unload: false,
            callback: function(element, op) {
              console.log(element, "has been", op + "ed");
            }
          });
        });
      }
      if (config.import && config.import.script) {
        (config.import.script || []).forEach(function(item) {
          console.log(item);
        });
      }
    },
    initClipboard() {
      loadJS([
        [
          "clipboard",
          "https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"
        ]
      ]).then(() => {
        clipboard();
      });
    }
  }
};
</script>
<style lang="scss">
</style>