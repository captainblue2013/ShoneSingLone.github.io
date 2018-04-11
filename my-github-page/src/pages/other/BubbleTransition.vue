<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/#__bubble__transition__">Home</router-link>
      <router-link class="router-link" to="/product#__bubble__transition__">Product</router-link>
      <router-link class="router-link" to="/contact#__bubble__transition__">Contact</router-link>
    </nav>
    <router-view class="page"></router-view>
  </div>
</template>

<script>
const BubbleTransitionComponent = Vue.component("bubble-transition", {});

const Home = { template: '<div class="page-home">Home</div>' };
const Product = { template: '<div class="page-product">Product</div>' };
const Contact = { template: '<div class="page-contact">Contact</div>' };

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    { path: "*", component: Home },
    { path: "/product", component: Product },
    { path: "/contact", component: Contact }
  ]
});

let instance = null;

function createServices(Comp) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  /* eslint-disable no-new */
  const component = new Vue({
    el: div,
    components: { Comp },
    template: "<Comp/>"
  }).$children[0];
  return component;
}

function getInstance() {
  instance = instance || createServices(BubbleTransitionComponent);
  return instance;
}

const BubbleTransition = {
  scaleIn: () => {
    return getInstance().animate("scaleIn", false);
  },
  fadeOut: () => {
    return getInstance().animate("fadeOut", true);
  }
};

const BUBBLE_TRANSITION_IDENTIFIER = "__bubble__transition__";

router.beforeEach((to, from, next) => {
  if (~to.hash.indexOf(BUBBLE_TRANSITION_IDENTIFIER)) {
    if (to.path === from.path) {
      next();
      return;
    }
    const redirectTo = Object.assign({}, to);
    redirectTo.hash = "";
    BubbleTransition.scaleIn().then(() => next(redirectTo));
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  BubbleTransition.fadeOut();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router
});

export default {
  name: "transition-bubble",
  template: `<div class="transition-bubble">
    <span v-show="animating" class="bubble" id="bubble">
    </span>
  </div>`,
  data() {
    return {
      animating: false,
      animeObjs: []
    };
  },
  methods: {
    scaleIn(selector = "#bubble", { duration = 800, easing = "linear" } = {}) {
      const base = Math.max(
        document.body.clientHeight,
        document.body.clientWidth
      );
      const scale = base * 2 * 1.4;
      const animeObj = anime({
        targets: selector,
        scale: scale,
        duration: duration,
        easing: easing
      });
      this.animeObjs.push(animeObj);
      return animeObj.finished;
    },
    fadeOut(selector = "#bubble", { duration = 300, easing = "linear" } = {}) {
      const animeObj = anime({
        targets: selector,
        opacity: 0,
        duration: duration,
        easing: easing
      });
      this.animeObjs.push(animeObj);
      return animeObj.finished;
    },
    resetAnimeObjs() {
      this.animeObjs.forEach(animeObj => {
        animeObj.reset();
      });
      this.animeObjs = [];
    },
    animate(action, thenReset) {
      if (!this[action]) {
        return Promise.resolve();
      }
      this.animating = true;
      return this[action]().then(() => {
        if (thenReset) {
          this.animating = false;
          this.resetAnimeObjs();
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang='scss'>
* {
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

nav {
  background: #2d3436;
  flex: 0 0 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.router-link {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 20px 20px;
  position: relative;
  z-index: 1;
  transition: 0.2s;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    background: white;
    top: 0;
    left: 0;
    transform: skewX(-30deg) scaleY(0);
    transition: 0.2s;
    transform-origin: center;
  }
  &:active,
  &:hover {
    color: #2d3436;
    &::after {
      transform: skewX(-30deg) scaleY(1);
    }
  }
}

.transition-bubble {
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 99;
}
.bubble {
  position: absolute;
  background: white;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  transform-origin: 50% 50%;
  transform: scale(0);
  display: inline-block;
}

.page {
  flex: 1 1 auto;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.page-home {
  background: #dfe6e9;
}
.page-product {
  background: #ffeaa7;
}
.page-contact {
  background: #ff7675;
}
</style>
