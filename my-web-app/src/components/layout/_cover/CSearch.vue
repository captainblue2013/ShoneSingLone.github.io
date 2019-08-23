<template>
  <div class="search">
    <img v-if="APP.theme.cover.logo" class="logo" src="APP.theme.cover.logo" />
    <h1 v-else class="title">
      <svg class="login-brand-svg" width="600" height="80" viewBox="0 0 600 80">
        <defs>
          <linearGradient id="linear" x1="0%" y1="0%" x2="1" y2="1">
            <stop offset="0%" stop-color="#adc8ae" />
            <stop offset="100%" stop-color="#0f2303" />
          </linearGradient>
        </defs>
        <text font-size="60" x="300" y="1em" style="text-anchor: middle; ">
          <tspan
            fill="url(#linear)"
          >{{APP.theme.cover.title ? APP.theme.cover.title : APP.config.title}}</tspan>
        </text>
      </svg>
    </h1>
    <div v-if="APP.theme.search.enable === true" class="m_search m_search_this">
      <form name="searchform" class="form u-search-form">
        <input
          type="text"
          class="input u-search-input"
          :placeholder="APP.theme.cover.search_placeholder"
        />
        <i class="icon fas fa-search fa-fw"></i>
      </form>
    </div>
    <div class="menu navgation">
      <ul class="h-list">
        <li v-for="(value, index) in APP.theme.cover.features" :key="index">
          <a
            :id="value.url.replace(/\/|%/g, '')?value.url.replace(/\/|%/g, ''):'home'"
            class="nav home"
            :href="value.url"
            :rel="value.rel"
            :target="value.target"
          >
            <i :class="value.icon+' fa-fw'"></i>
            <!-- {{__('navbar.'+value.name) == ('navbar.'+value.name) ? value.name : __('navbar.'+value.name) }} -->
            {{value.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "CSearch",
  inject: ["APP"],
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.cover-wrapper .cover .m_search {
  &.m_search_this {
    margin-top: calc(2vh + 2 * 16px);
    position: relative;
    max-width: calc(100% - 1 * 16px);
    width: 100%;
    line-height: 48px;
    vertical-align: middle;
  }
}
</style>