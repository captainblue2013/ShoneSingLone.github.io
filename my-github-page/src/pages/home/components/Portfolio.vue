<template>
  <div class="container">
    <div class="row">
      <template v-for="portfolio in portfolioArray">
        <panel-card :card="portfolio" />
      </template>
    </div>
  </div>
</template>

<script>
import PanelCard from "./PanelCard";

export default {
  name: "Portfolio",
  data() {
    return {
      portfolioArray: [
        {
          heading: { content: "News", url: "" },
          body: { content: "FCC weekly issue => 周刊" },
          footer: {
            href: "/messidor",
            content: '<a class="btn btn-default" role="button">News » </a>'
          }
        },
        {
          heading: { content: "Shop", url: "" },
          body: { content: "practice transition animate" },
          footer: {
            href: "/shop",
            content: '<a class="btn btn-default" role="button">shop » </a>'
          }
        },
        {
          heading: { content: "Brumaire", url: "" },
          body: { content: "let us chat free" },
          footer: {
            href: "https://shonesinglone.github.io/brumaire/#/login",
            content: '<a class="btn btn-default" role="button">Brumaire » </a>'
          }
        }
      ]
    };
  },
  components: {
    "panel-card": PanelCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
