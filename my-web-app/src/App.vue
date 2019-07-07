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
loadJS([
  ["jquey", "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"]
]);

// @ is an alias to /src
export default {
  name: "APP",
  mounted() {
    (() => import("@/utils/vueEasyLightbox.umd.min.js"))().then(() => {
      let { $ } = window;
      $(".l_main").on("click", "img", event => {
        window.VueServer.imgViewer.setImgs(event.target.src).show();
      });
    });
  },
  components: {
    CCover: () =>
      import(
        /* webpackChunkName: "cover" */ "@/components/layout/_partial/CCover.vue"
      ),
    CSide: () =>
      import(
        /* webpackChunkName: "side" */ "@/components/layout/_partial/CSide.vue"
      ),
    CFooter: () =>
      import(
        /* webpackChunkName: "cover" */ "@/components/layout/_partial/CFooter.vue"
      ),
    CScripts: () =>
      import(
        /* webpackChunkName: "cover" */ "@/components/layout/_partial/CScripts.vue"
      )
  },
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


<style lang="scss" src="./style.scss">
</style>
