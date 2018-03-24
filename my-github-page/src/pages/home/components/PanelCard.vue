<template>
  <div class="col-sm-8">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2 class="" class="heading-text">{{hContent}}</h2>
      </div>
      <div class="panel-body">
        <div class="body-text">
          {{bContent}}
        </div>
      </div>
      <div class="panel-footer">
        {{fContent}}
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

export default {
  name: "PanelCard",
  props: {
    portfolio: {
      type: Object,
      required: true,
      default: {}
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
  components: {
    /* 
    // "bs-modal": BSModal
   */
  },
  methods: {
    getHTML(htmlString) {
      let html = this.jQuery(htmlString);
      console.log(html);
      return html;
    }
    /* 
    setActiveAnchor(index) {
      this.whichActiveAnchor = index;
    }
   */
  },
  computed: {
    hContent() {
      return this.portfolio.heading.content;
    },
    bContent() {
      return this.portfolio.body.content;
    },
    fContent() {
      return this.portfolio.footer.content;
    }
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
$border-radius: 1rem;
</style>