<template>
  <div class="cover-wrapper" v-if="APP.showCover">
    <div id="cover" :class="['cover', APP.isHome?theme.cover.height:'half']">
      <c-search v-if="theme.cover.scheme === 'search'" />
    </div>
    <c-header />
    <c-aside />
  </div>
  <c-header v-else />
</template>
<script>
export default {
  name: "CCover",
  inject: ["APP"],
  props: ["theme"],
  components: {
    CHeader: () =>
      import(
        /* webpackChunkName: "header" */ "@/components/layout/_partial/CHeader.vue"
      ),
    CSearch: () =>
      import(
        /* webpackChunkName: "search" */ "@/components/layout/_cover/CSearch.vue"
      ),
    CAside: () =>
      import(
        /* webpackChunkName: "aside" */ "@/components/layout/_partial/CAside.vue"
      )
  },
  data() {
    return {
      path: "unknonw"
    };
  },

  methods: {},
  mounted() {}
};
</script>
