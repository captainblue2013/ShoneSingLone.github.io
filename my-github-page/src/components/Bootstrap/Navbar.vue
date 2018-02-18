<template>
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">{{brand}}</a>
  <button id="navbar-toggler" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item" v-for="to in toList" @click="afterLinkTo" >
        <router-link class="nav-link" :to="to" >{{to.title}}</router-link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
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
      if (this.isToggle) {
        let $ = window.jQuery;
        $("#navbar-toggler").trigger("click");
      }
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