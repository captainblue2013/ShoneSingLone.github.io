<template>
  <div class="col-md-3 col-sm-4">
    <div class="panel">
      <div class="panel-heading">
        <h2 class="heading-text" v-html="card.heading.content"></h2>
      </div>
      <div class="panel-body">
        <div class="body-text" v-html="card.body.content">
        </div>
      </div>
      <div class="panel-footer" v-html="card.footer.content" @click="readMore(card.footer)">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

export default {
  name: "PanelCard",
  props: {
    card: {
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
  mounted: function() {},
  components: {
    /* 
    // "bs-modal": BSModal
   */
  },
  methods: {
    readMore(route) {
      window.open(route.href);
    }
  },
  computed: {
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
$border-radius: 1rem;

.panel {
  background-color: #f9fdfc;
  @include shadow-base();
  @include click-base();
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: $border-radius;

  .heading-text {
    width: 100%;
    height: 10rem;
    background: url("./assets/panel.jpg") 10% 25% / 100% no-repeat;
    border-radius: $border-radius;
  }
  .btn {
    @include box-shadow-up();
    &:hover {
      @include box-shadow-down();
    }
  }
}
</style>