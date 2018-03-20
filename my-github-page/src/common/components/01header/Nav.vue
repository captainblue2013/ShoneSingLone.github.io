<template>
  <header id="nav-top-bar" class="navbar navbar-default">
    <div class="container">
      <div id="wrap-toggle-darwer">
        <button id="toggle-darwer" type="button" class="navbar-toggle">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div id="myavatar">
        <div>
          <span id="portfolio-title">ShoneSingLone's MicroSite</span>
        </div>
      </div>
    </div>
    <nav id="drawer">
      <div class="container">
        <div class="nav nav-pills">
          <div class="col-sm-3 active">
            <a href="#portfolio">Portfolio</a>
          </div>
          <div class="col-sm-3">
            <a href="#blog">Blog</a>
          </div>
          <div class="col-sm-3">
            <a target="_blank" href="https://github.com/ShoneSingLone">GitHub</a>
          </div>
          <div class="col-sm-3">
            <a href="mailto:SingLone@foxmail.com">SingLone@foxmail.com</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
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
#nav-top-bar {
  // background-image: url(../../../views/material/mdl-template-portfolio/images/header-bg.jpg);
  box-shadow: 0 1px 15px rgba(1, 0, 0, 0.5);
  .navbar-header {
    float: unset;
  }
}
.navbar-toggle:focus {
  outline: 0;
}

.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}

@media (min-width: 768px) {
  .navbar-toggle {
    display: none;
  }
}

.navbar-default .navbar-toggle {
  border-color: #ddd;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
</style>