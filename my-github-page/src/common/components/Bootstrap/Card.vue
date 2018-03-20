<template>
  <div class="mdc-card demo-card">
    <a class="mdc-card__primary-action mdc-ripple-upgraded" href="#" style="--mdc-ripple-fg-size:210px; --mdc-ripple-fg-scale:2.3477;">
      <div class="mdc-card__media mdc-card__media--16-9 demo-card__media demo-card__media--16-9"></div>
      <div class="demo-card__primary">
        <h2 class="demo-card__title mdc-typography--title">Our Changing Planet</h2>
        <h3 class="demo-card__subtitle mdc-typography--subheading1">by Kurt Wagner</h3>
      </div>
      <div class="demo-card__secondary mdc-typography--body1"> Visit ten places on our planet that are undergoing the biggest changes today. </div>
    </a>
    <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
        <button class="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded" style="--mdc-ripple-fg-size:38.4px; --mdc-ripple-fg-scale:2.17266;">Read</button>
        <button class="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded" style="--mdc-ripple-fg-size:58.0425px; --mdc-ripple-fg-scale:1.95062;">Bookmark</button>
      </div>
      <div class="mdc-card__action-icons">
        <i class="mdc-icon-toggle material-icons mdc-card__action mdc-card__action--icon mdc-ripple-upgraded mdc-ripple-upgraded--unbounded" tabindex="0" role="button" aria-pressed="false" aria-label="Add to favorites" title="Add to favorites" data-toggle-on="{&quot;content&quot;: &quot;favorite&quot;, &quot;label&quot;: &quot;Remove from favorites&quot;}" data-toggle-off="{&quot;content&quot;: &quot;favorite_border&quot;, &quot;label&quot;: &quot;Add to favorites&quot;}" style="--mdc-ripple-fg-size:28.8px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">favorite_border</i>
        <i class="material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" tabindex="0" role="button" data-mdc-ripple-is-unbounded="" title="Share" style="--mdc-ripple-fg-size:28.8px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">share</i>
        <i class="material-icons mdc-card__action mdc-card__action--icon mdc-ripple-surface mdc-ripple-upgraded--unbounded mdc-ripple-upgraded" tabindex="0" role="button" data-mdc-ripple-is-unbounded="" title="More options" style="--mdc-ripple-fg-size:28.8px; --mdc-ripple-fg-scale:1.66667; --mdc-ripple-left:10px; --mdc-ripple-top:10px;">more_vert</i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["navbarTitle", "width", "toList", "isToggle"],
  data() {
    return {
      brand: this.navbarTitle || "Control panel"
    };
  },
  methods: {
    afterLinkTo() {
      return false;
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.progress {
  width: 100%;
}
</style>