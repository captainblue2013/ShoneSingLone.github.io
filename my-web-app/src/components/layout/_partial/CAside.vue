<template>
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
</template>
<script>
export default {
  name: "CAside",
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