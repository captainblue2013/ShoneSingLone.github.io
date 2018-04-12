<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="panel">
        <div class="heading">
          <h2 class="title" ref="heading" @click="toDetail(article.id)">
            <span>{{article.title}}</span>
          </h2>
        </div>
        <div class="body">
          <p class="introduction" ref="body">
            <span> {{article.introduction.trim()}}
            </span>
          </p>
        </div>
        <div class="panel-footer" ref="footer">
          <div class="minilogo"></div>
          <div>
            <strong>创建时间</strong>
            <span class="time">{{createdDate}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

export default {
  name: "PanelCard",
  props: {
    article: {
      type: Object,
      required: true,
      default: {
        date: Date.now(),
        id: "",
        introduction: "",
        md: "md",
        title: "title"
      }
    }
  },
  data() {
    return {
      /* 
      anchorArray,
      whichActiveAnchor: 0
     */
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      /* 
      (($, panel) => {
        if (panel.card.heading && panel.card.body && panel.card.footer) {
          $(panel.$refs["heading"]).html(panel.card.heading.content);
          $(panel.$refs["body"]).html(panel.card.body.content);
          $(panel.$refs["footer"]).html(panel.card.footer.content);
        }
      })(this.jQuery, this);
     */
    });
  },
  components: {
    /* 
    // "bs-modal": BSModal
   */
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: "blog.detail", query: { id } });
    },
    getHTML(htmlString) {
      let html = this.jQuery(htmlString);
      return html;
    }
    /* 
    setActiveAnchor(index) {
      this.whichActiveAnchor = index;
    }
   */
  },
  computed: {
    createdDate() {
      var articleDate = new Date(this.article.date);
      return articleDate.toLocaleString("zh");
    }
    // hContent() {
    //   return this.card.heading.content;
    // }
    /* 
    isShowNav() {
      if (!this.isMobile) return true;
      return this.$store.state.mainState.isShowModal;
    },
    isShowModal() {
      return this.$store.state.mainState.isShowModal && this.isMobile;
    }
   */
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
      width: 100%;
      height: 10rem;
      border-radius: $border-radius;
      span {
        position: absolute;
        bottom: 1rem;
        right:1rem;
        left: 1rem;
      }
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