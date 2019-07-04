<template>
  <div class="cover-wrapper" v-if="APP.showCover">
    <div :class="['cover', APP.isHome?APP.theme.cover.height:'half']">
      <c-search v-if="APP.theme.cover.scheme === 'search'" />
    </div>
    <c-header />
  </div>
  <c-header v-else />
</template>
<script>
export default {
  name: "CCover",
  inject: ["APP"],
  components: {
    CHeader: () =>
      import(
        /* webpackChunkName: "header" */ "@/components/layout/_partial/CHeader.vue"
      ),
    CSearch: () =>
      import(
        /* webpackChunkName: "search" */ "@/components/layout/_cover/CSearch.vue"
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
