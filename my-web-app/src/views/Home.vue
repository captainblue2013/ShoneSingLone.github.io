<template>
  <div class='home'>
    <c-cover></c-cover>
  </div>
</template>

<script>
// @ is an alias to /src
import theme from "../components/layout/_configs";

export default {
  name: 'home',
  components: {
    CCover: () =>
      import(
        /* webpackChunkName: "cover" */ "@/components/layout/_partial/CCover.vue"
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
      page:{},
      theme,
      config: { title: "config默认title" },
      showCover: false
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'home';
    }
  },
  methods: {}
};
</script>

<style lang="scss">
</style>

