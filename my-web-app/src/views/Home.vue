<template>
  <div :class="['l_main',APP.page.sidebar?'no_sidebar':'']">
    <section class="post-list">
      <c-meta-article v-for="(item, index) in articleList" :key="index" :article="item"></c-meta-article>
    </section>
    <br />
    <div class="prev-next">
      <div class="prev-next">
        <p class="current">1 / 4</p>
        <a class="next" rel="next" href="/page/2/">
          <section class="post next">
            &nbsp;下一页&nbsp;
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </section>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CMetaArticle from "@/components/layout/_partial/CMetaArticle";
export default {
  name: "home",
  inject: ["APP"],
  components: {
    CMetaArticle
  },
  created() {
    this.$http("/articles")
      .then(res => {
        if (res.isSuccess) {
          this.articleList = res.data;
          console.table(this.articleList);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return { articleList: [] };
  },
  methods: {}
};
</script>

<style lang="scss">
</style>

