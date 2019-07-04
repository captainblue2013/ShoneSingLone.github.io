<template>
  <div class="header">
    <header :class="'l_header '+APP.page.sidebar == false ? ' no_sidebar' : ' '+ APP.theme.style">
      <div id="loading-bar-wrapper">
        <div id="loading-bar" :class="APP.theme.style"></div>
      </div>

      <div class="wrapper">
        <div class="nav-main container container--flex">
          <a class="logo flat-box" href="/">
            <img v-if="APP.config.logo" class="logo" :src="APP.config.logo" />
            <span v-else>{{APP.config.title}}</span>
          </a>
          <div class="menu navgation">
            <ul class="h-list">
              <li v-for="(value, index) in APP.theme.menu_desktop" :key="index">
                <a
                  class="nav flat-box"
                  :href="value.url"
                  :rel="value.rel"
                  :target="value.target"
                  :id="value.url.replace(/\/|%/g, '')?value.url.replace(/\/|%/g, ''):'home'"
                >
                  <i :class="value.icon +' fa-fw'"></i>
                  &nbsp;{{value.name}}
                </a>
              </li>
            </ul>
          </div>

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
          <ul class="switcher h-list">
            <li v-if="APP.theme.search.enable === true" class="s-search">
              <a class="fas fa-search fa-fw" href="javascript:void(0)"></a>
            </li>
            <li class="s-menu">
              <a class="fas fa-bars fa-fw" href="javascript:void(0)"></a>
            </li>
          </ul>
        </div>

        <div class="nav-sub container container--flex">
          <a class="logo flat-box"></a>
          <ul class="switcher h-list">
            <li class="s-comment">
              <a class="flat-btn fas fa-comments fa-fw" href="javascript:void(0)"></a>
            </li>
            <li v-if="APP.page.sidebar == undefined || APP.page.sidebar != false" class="s-toc">
              <a class="flat-btn fas fa-list fa-fw" href="javascript:void(0)"></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <aside class="menu-phone">
      <header>
        <nav class="menu navgation">
          <ul>
            <li v-for="(value, index) in APP.theme.menu_mobile" :key="index">
              <a
                :id="value.url.replace(/\/|%/g, '')?value.url.replace(/\/|%/g, ''):'home'"
                class="nav flat-box"
                :href="value.url"
                :rel="value.rel"
                :target="value.target"
              >
                <i :class="value.icon+' fa-fw'"></i>
                &nbsp;
                {{'navbar.'+value.name}}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </aside>
    <!-- <script> setLoadingBarProgress(40); </script> -->
  </div>
</template>
<script>
export default {
  name: "CHeader",
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