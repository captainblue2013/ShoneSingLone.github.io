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
            content:
              '<a class="btn btn-default" target=" href="/messidor" role="button">wii-chat»</a> </a>'
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
