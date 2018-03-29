<template>
  <ul>
    <li>不可思议的CSS</li>
    <li>导航栏</li>
    <li>光标下划线跟随</li>
    <li>PURE CSS</li>
    <li>Coco</li>
  </ul>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Follow"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  display: flex;
  position: absolute;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

li {
  position: relative;
  padding: 20px;
  font-size: 24px;
  color: #000;
  line-height: 1;
  transition: 0.2s all linear;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    width: 0;
    height: 100%;
    border-bottom: 2px solid #000;
    transition: 0.2s all linear;
  }
  &:hover {
    &:before {
      width: 100%;
      top: 0;
      left: 0;
      transition-delay: 0.1s;
      border-bottom-color: #000;
    }
  }
  &:active {
    background: #000;
    color: #fff;
  }
}

li:hover ~ li::before {
  left: 0;
}
</style>