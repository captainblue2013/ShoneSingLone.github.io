<template>
  <div class="toggle btn">
    <span class="sr-only">Toggle navigation</span>
    <span class="badge"></span>
    <span class="badge"></span>
    <span class="badge"></span>
  </div>
</template>


<script>
export default {
  name: "ToggleDrawer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../scss/bootstrap/common";
$color: rgb(66, 66, 66);
$background: rgba(197, 197, 197, 0.44);
$border: $color;

div.toggle.btn {
  display: inline-block;
  color: $color;
  background-color: $background;
  border: unset;
  padding: 0.4rem;
  width: 2rem;

  &:active,
  &.active {
    color: $color;
    background-color: darken($background, 10%);
  }

  &:focus,
  &.focus {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 25%);
  }

  &:hover {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 12%);
  }

  .badge {
    display: block;
    width: 1.2rem;
    height: 0.2rem;
    background-color: darken($background, 30%);
  }
  .badge + .badge {
    margin-top: 0.14rem;
  }
}
</style>
