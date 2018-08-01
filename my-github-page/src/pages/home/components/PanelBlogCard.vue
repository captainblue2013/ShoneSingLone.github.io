<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="panel">
        <div class="heading" @click="readMore(blog.path)">
          <h2 class="title" ref="heading">
            <span>{{blog.name}}</span>
          </h2>
        </div>
        <div class="body">
          <p class="desc">{{blog.desc}}</p>
        </div>
        <div class="panel-footer" ref="footer">
          <div class="minilogo"></div>
          <div>
            <strong>创建时间</strong>
            <!-- <span class="time">{{createdDate}}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "PanelCard",
  props: ["blog"],
  data() {
    /*用作对详细信息的缓存，如果*/
    return {
      detail: {
        available: false,
        articleInfo: {}
      }
    };
  },
  mounted: function() {
    this.$nextTick(function() {});
  },
  components: {},
  methods: {
    ...mapActions(["getBlogDetail"]),
    readMore(path) {
      this.$router.push({
        name: "blog.detail",
        query: { path },
        params: this.blog
      });
    }
  },
  watch: {
    detail: function(newInfo, oldInfo) {
      if (newInfo.available) {
      }
    }
  },
  computed: {
    createdDate() {
      var articleDate = new Date(this.article.date);
      return articleDate.toLocaleString("zh");
    }
  },
  beforeCreate() {},
  created() {
    this.getBlogDetail(this.blog);
    // console.log("this && this.blog", this && this.blog);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/bootstrap/common";
@import "../../../common/scss/my_variables";

$border-bottom-height: 0.4rem;

.panel {
  @include shadow-base();
  word-wrap: break-word;

  .heading {
    background: url("./assets/panel.jpg") 10% 25% / 100% no-repeat;
    .title {
      position: relative;
      color: aliceblue;
      text-shadow: 0.5rem 0.5rem 1rem $main-color;

      cursor: pointer;
      // width: 100%;
      height: 10rem;
      border-radius: $border-radius;
      span {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
      }
    }
  }
  .body {
    .desc {
      text-indent: 2rem;
    }
  }
  .btn {
    @include box-shadow-up();
    &:hover {
      @include box-shadow-down();
    }
  }
}
</style>