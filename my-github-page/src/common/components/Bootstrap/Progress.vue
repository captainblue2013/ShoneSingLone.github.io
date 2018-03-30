<template>
  <div class="progress">
    <div class="bar" role="progressbar" :style="{width: width+'%'}" :aria-valuenow="width" aria-valuemin="0" aria-valuemax="100">{{width}}%</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["width"]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/bootstrap/common";

.progress {
  overflow: hidden;
  width: 100%;
  height: $line-height-computed;
  margin-bottom: $line-height-computed;
  background-color: $progress-bg;
  border-radius: $progress-border-radius;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  .bar {
    float: left;
    width: 0%;
    height: 100%;
    font-size: $font-size-small;
    line-height: $line-height-computed;
    color: $progress-bar-color;
    text-align: center;
    background-color: $progress-bar-bg;
    transition: width 1s ease;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
    animation: progress-bar-stripes 2s linear infinite;
  }
}
</style>