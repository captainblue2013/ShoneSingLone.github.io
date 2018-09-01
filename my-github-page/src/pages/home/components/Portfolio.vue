<template>
  <div class="container">
    <template v-for="portfolio in portfolioArray">
      <panel-card :card="portfolio" />
    </template>
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
          heading: { content: "Brumaier", url: "" },
          body: { content: "let us chat free" },
          footer: {
            href: "/Brumaier",
            content: '<a class="btn btn-default" role="button">Brumaier » </a>'
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
