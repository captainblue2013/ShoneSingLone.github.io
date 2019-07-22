<template>
  <div :class="['l_main',APP.page.sidebar?'no_sidebar':'']">
    <section class="post-list">
      <c-meta-article v-for="(item, index) in articleList" :key="index" :article="item"></c-meta-article>
    </section>
    <br />
    <div class="prev-next">
      <div class="prev-next">
        <a class="prev" @click="getArticleList(-1)" v-show="pageCurrent!==1">
          <section class="post prev">
            <i class="fas fa-chevron-left" aria-hidden="true"></i>&nbsp;上一页&nbsp;
          </section>
        </a>
        <p class="current">{{pageCurrent}}/{{pageTotal}}</p>
        <a class="next" @click="getArticleList(1)"  v-show="pageCurrent!==pageTotal">
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
    this.getArticleList(1);
  },
  data() {
    return { articleList: [], articleTotal: 0, pageSize: 6, pageCurrent: 1 };
  },
  computed: {
    pageTotal() {
      return Math.ceil(this.articleTotal / this.pageSize);
    }
  },
  methods: {
    getArticleList(tag) {
      if (tag === 1 && this.pageCurrent !== this.pageTotal) {
        this.pageCurrent++;
      } else if (tag === -1 && this.pageCurrent !== 1) {
        this.pageCurrent--;
      } else {
        return false;
      }

      this.$http("/articles", {
        params: {
          pageSize: this.pageSize,
          pageCurrent: this.pageCurrent
        }
      })
        .then(res => {
          if (res.isSuccess) {
            debugger;
            this.articleList = res.data;
            this.articleTotal = res.articleTotal;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss">
</style>

