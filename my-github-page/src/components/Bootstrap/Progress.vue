<template>
<div class="progress">
  <div class="progress-bar" role="progressbar" :style="{width: width+'%'}" :aria-valuenow="width" aria-valuemin="0" aria-valuemax="100">{{width}}%</div>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ["width"]
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.progress{
  width:100%;
}
</style>