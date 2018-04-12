<template>
  <div class="comments">
    <form>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <textarea rows=1 class="mdl-textfield__input" id="comment"></textarea>
        <label for="comment" class="mdl-textfield__label">Join the discussion</label>
      </div>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
        <i class="material-icons" role="presentation">check</i>
        <span class="visuallyhidden">add comment</span>
      </button>
    </form>
    <div class="comment mdl-color-text--grey-700">
      <header class="comment__header">
        <img src="images/co1.jpg" class="comment__avatar">
        <div class="comment__author">
          <strong>James Splayd</strong>
          <span>2 days ago</span>
        </div>
      </header>
      <div class="comment__text">
        In in culpa nulla elit esse. Ex cillum enim aliquip sit sit ullamco ex eiusmod fugiat. Cupidatat ad minim officia mollit laborum magna dolor tempor cupidatat mollit. Est velit sit ad aliqua ullamco laborum excepteur dolore proident incididunt in labore elit.
      </div>
      <nav class="comment__actions">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i class="material-icons" role="presentation">thumb_up</i>
          <span class="visuallyhidden">like comment</span>
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i class="material-icons" role="presentation">thumb_down</i>
          <span class="visuallyhidden">dislike comment</span>
        </button>
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i class="material-icons" role="presentation">share</i>
          <span class="visuallyhidden">share comment</span>
        </button>
      </nav>
      <div class="comment__answers">
        <div class="comment">
          <header class="comment__header">
            <img src="images/co2.jpg" class="comment__avatar">
            <div class="comment__author">
              <strong>John Dufry</strong>
              <span>2 days ago</span>
            </div>
          </header>
          <div class="comment__text">
            Yep, agree!
          </div>
          <nav class="comment__actions">
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">thumb_up</i>
              <span class="visuallyhidden">like comment</span>
            </button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">thumb_down</i>
              <span class="visuallyhidden">dislike comment</span>
            </button>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i class="material-icons" role="presentation">share</i>
              <span class="visuallyhidden">share comment</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

export default {
  name: "PanelComments",
  props: {},
  data() {
    return {};
  },
  mounted: function() {},
  components: {},
  methods: {},
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/bootstrap/common";
@import "../../../common/scss/my_variables";
</style>