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
@import "../scss/my_variables";

$color: rgb(66, 66, 66);
$background: rgba(151, 190, 168, 0.5803921568627451);
// $background: rgba(197, 197, 197, 0.44);
$border: $color;

div.toggle.btn {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  color: $color;
  background-color: $background;
  border: unset;
  padding: 0.6rem;
  width: 4rem;
  height: 3rem;
  border-radius: 0.5rem;
  @include box-shadow-up();

  &:active,
  &.active {
    color: $color;
    background-color: darken($background, 10%);
  }

  &:hover,
  &:focus,
  &.focus {
    color: $color;
    background-color: darken($background, 10%);
    border-color: darken($border, 12%);
    @include box-shadow-down();
  }

  .badge {
    display: block;
    height: 0.4rem;
    background-color: darken($background, 30%);
    border-radius: 0.5rem;
  }
}
</style>
