<template>
  <div class="container">
    <template v-for="article in blogArray">
      <panel-card :article="article" />
    </template>
  </div>
</template>

<script>
import PanelBlogCard from "./PanelBlogCard";

export default {
  name: "Blog",
  data() {
    return {};
  },
  computed: {
    panelTitle() {
      return this.$route.query.userId;
    },
    blogArray() {
      return this.$store.getters["GET_BLOG_LIST"];
    }
  },
  components: {
    "panel-card": PanelBlogCard
  },
  mounted() {},
  methods: {},
  beforeRouteEnter(to, from, next) {
    // import(/* webpackChunkName: "show" */ './show').then((show) => {
    //   show('Webpack');
    // })

    next(vue => {
      let dispatchAction = {
        "home.blog": function(vue) {
          vue.$store.dispatch("GET_BLOG_LIST");
        }
      };
      dispatchAction[to.name](vue);
    });

    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    next();
    debugger;
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
