<template>
  <div id="app">
    <c-cover :theme="theme"></c-cover>
    <div :class="['l_body',showCover?'':' nocover']">
      <div class="body-wrapper">
        <router-view />
        <c-side></c-side>
        <c-footer></c-footer>
      </div>
      <a class="s-top fas fa-arrow-up fa-fw" href="javascript:void(0)"></a>
    </div>
    <c-scripts></c-scripts>
  </div>
</template>
<script>
import theme from "./components/layout/_configs";
import loadJS from "@/utils/loadJS";
/* components */
import CCover from "@/components/layout/_partial/CCover.vue";
import CSide from "@/components/layout/_partial/CSide.vue";
import CFooter from "@/components/layout/_partial/CFooter.vue";
import CScripts from "@/components/layout/_partial/CScripts.vue";

loadJS([
  [
    "backstretch",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"
  ],
  ["page", "//instant.page/1.2.2"],
  ["waves", "https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js"],
  [
    "fastclick",
    "https://cdn.jsdelivr.net/npm/fastclick@1.0.6/lib/fastclick.min.js"
  ],
  ["gitalk", "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"]
]);

// @ is an alias to /src
export default {
  name: "APP",
  mounted() {
    (() => import("@ventose/imgviewer"))().then(() => {
      let { $ } = window;
      $(".l_main").on("click", "img", event => {
        window.VueServer.imgViewer.setImgs(event.target.src).show();
      });
    });
    // 为给定 ID 的 user 创建请求
    /*  this.$http
      .get("https://api.github.com/repos/ShoneSingLone/GitBook/contents")
      .then(function(response) {
        console.log(JSON.stringify(response,null,2));
      })
      .catch(function(error) {
        console.log(error);
      });
    this.$http
      .get("https://raw.githubusercontent.com/ShoneSingLone/GitBook/master/Canvas.md")
      .then(function(response) {
        debugger;
        console.log(JSON.stringify(response,null,2));
      })
      .catch(function(error) {
        debugger;
        console.log(error);
      }); */
  },
  components: { CCover, CSide, CFooter, CScripts },
  provide() {
    let APP = this;
    return {
      APP
    };
  },
  created() {
    if (theme.cover) {
      // 否则，如果是首页，只有首页的第一页显示
      if (this.isHome) {
        this.showCover = true;
      } else {
        this.showCover = true;
      }
    }
  },
  data() {
    return {
      page: { sidebar: false },
      theme,
      body: "body is other pages info",
      config: { title: "config title" },
      showCover: false
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    }
  },
  methods: {}
};
</script>
