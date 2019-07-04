<template>
  <div class="search">
    <img v-if="APP.theme.cover.logo" class="logo" src="APP.theme.cover.logo" />
    <h1 v-else class="title">{{APP.theme.cover.title ? APP.theme.cover.title : APP.config.title}}</h1>
    <div v-if="APP.theme.search.enable === true" class="m_search">
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
<style lang="scss">
</style>