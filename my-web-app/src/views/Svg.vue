<template>
  <div class="contents-tree">
    <svg width="100%" height="100%" viewBox="0 0 1000 1000">
      <path :d="d" :style="path" />
    </svg>
  </div>
</template>
<script>
import { isJSPlumbOK } from "@/utils/isOk";
export default {
  name: "Demo",
  data() {
    return {
      d: ["M 50,50  C 600,70  80,90  100,100"],
      path: { stroke: "black", strokeWidth: 2, fill: "none" }
    };
  },
  methods: {},
  mounted() {
    isJSPlumbOK().then(() => {
      let {
        jsPlumb,
        jsPlumbInstance,
        jsPlumbListManager,
        jsPlumbUIComponent,
        jsPlumbUtil
      } = window;
      console.log(
        jsPlumb,
        jsPlumbInstance,
        jsPlumbListManager,
        jsPlumbUIComponent,
        jsPlumbUtil
      );
    });
  }
};
</script>
<style lang="scss">
</style>