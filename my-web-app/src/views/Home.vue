<template>
  <div class="home">
    <c-cover></c-cover>
    <div :class="['l_body',showCover?'':' nocover']">
      <div class="body-wrapper">{{body}}</div>
      <a class="s-top fas fa-arrow-up fa-fw" href="javascript:void(0)"></a>
    </div>
    <c-scripts></c-scripts>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from "../components/layout/_configs";
import loadJS from "@/utils/loadJS";
loadJS([
  ["jquey", "https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"]
]);

export default {
  name: "home",
  components: {
    CCover: () =>
      import(
        /* webpackChunkName: "cover" */ "@/components/layout/_partial/CCover.vue"
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
      page: {},
      theme,
      body: "body is other pages info",
      config: { title: "config默认title" },
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

<style lang="scss">
</style>

