<template>
  <div class="blog-detail ">
    <!--  -->
    <main class="container content">
      <!--  -->
      <div class="row back-blog">
        <div class="col-md-12">
          <div class="wrapper">
            <i class="glyphicon glyphicon-menu-left" href="index.html" title="go back"> </i>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="row posts">
        <div class="col-md-8">
          <div class="title">
            <h3 class="text">{{blogDetail.title}}</h3>
          </div>
          <div class="meta">
            <div class="minilogo">
              <strong>The Newist</strong>
              <span>2 days ago</span>
            </div>

            <div class="section-spacer">
              <div class="favorites">
                425
                <i class="glyphicon glyphicon-heart"></i>
                <span class="hidden">favorites</span>
              </div>
              <div class="bookmark">
                <i class="glyphicon glyphicon-bookmark"></i>
                <span class="hidden">bookmark</span>
              </div>
              <div class="share">
                <i class="glyphicon glyphicon-share"></i>
                <span class="hidden">share</span>
              </div>
            </div>

          </div>
          <article class="" v-html="blogDetail.fileContentHTML">
          </article>
        </div>
        <div class="col-md-4">
          <aside class="post-widget">
            <nav class="post-toc-wrap" id="post-toc">
              <h4>TOC</h4>
              <ol class="post-toc">
                <li class="post-toc-item post-toc-level-2 active">
                  <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#W3C-%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B-amp-IE-%E6%80%AA%E5%BC%82%E7%9B%92%E6%A8%A1%E5%9E%8B">
                    <span class="post-toc-number">1.</span>
                    <span class="post-toc-text">W3C 标准盒模型 &amp; IE 怪异盒模型</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-box-sizing">
                    <span class="post-toc-number">2.</span>
                    <span class="post-toc-text">解决方案 box-sizing</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#JS-%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E7%9B%92%E6%A8%A1%E5%9E%8B%E5%AF%B9%E5%BA%94%E7%9A%84%E5%AE%BD%E5%92%8C%E9%AB%98">
                    <span class="post-toc-number">3.</span>
                    <span class="post-toc-text">JS 如何获取盒模型对应的宽和高</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#BFC">
                    <span class="post-toc-number">4.</span>
                    <span class="post-toc-text">BFC</span>
                  </a>
                  <ol class="post-toc-child post-toc-shrink">
                    <li class="post-toc-item post-toc-level-3">
                      <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#BFC-%E5%8E%9F%E7%90%86">
                        <span class="post-toc-number">4.1.</span>
                        <span class="post-toc-text">BFC 原理</span>
                      </a>
                    </li>
                  </ol>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#%E5%A6%82%E4%BD%95%E5%88%9B%E5%BB%BA-BFC">
                    <span class="post-toc-number">5.</span>
                    <span class="post-toc-text">如何创建 BFC</span>
                  </a>
                  <ol class="post-toc-child post-toc-shrink">
                    <li class="post-toc-item post-toc-level-3">
                      <a class="post-toc-link" href="http://www.lovebxm.com/2017/08/27/css-box/#BFC-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF">
                        <span class="post-toc-number">5.1.</span>
                        <span class="post-toc-text">BFC 使用场景</span>
                      </a>
                    </li>
                  </ol>
                </li>
              </ol>
            </nav>
          </aside>
        </div>
      </div>

      <!-- nav newer or older -->
      <div class="row nav-back-forward">
        <nav class="col-md-12">
          <ul class="wrapper">
            <li class="newer">
              <i class="glyphicon glyphicon-arrow-left"></i>
              Newer
            </li>
            <li class="older">
              Older
              <i class="glyphicon glyphicon-arrow-right"></i>
            </li>
          </ul>
        </nav>
      </div>

      <!-- comment begin -->
      <div class="row comments">
        <div class="col-md-12">
          <comment-chat></comment-chat>
        </div>
      </div>
      <!-- comment end -->

    </main>
    <!--  -->
  </div>

</template>

<script>
import PanelComments from "./PanelComments";

export default {
  name: "Blog",
  data() {
    return { blogDetail: {} };
  },
  computed: {},
  components: {
    "comment-chat": PanelComments
  },
  created() {
    /* 
    let id = this.$route.query.id;
    console.log(this.$store.state.blogState.articleList);
    this.blogDetail = this.$store.getters["GET_BLOG_DETAIL"](id);

    if (!this.blogDetail) {
      let id = this.$route.query.id;
      console.log(this.$store.state.blogState.articleList);
      this.$store.dispatch("GET_BLOG_DETAIL", id);
      this.blogDetail = this.$store.getters["GET_BLOG_DETAIL"](id);
    }

    console.log(this.blogDetail);
   */
  },
  mounted() {
    /* 
    let id = this.$route.query.id;
    console.log(this.$store.state.blogState.articleList);
    this.blogDetail = this.$store.getters["GET_BLOG_DETAIL"](id);
   */
  },
  methods: {},
  beforeRouteEnter(to, from, next) {
    next(vue => {
      debugger;
      if (to.params && to.params.id) {
        vue.blogDetail = to.params;
      } else {
        let id = to.query.id;
        let article = vue.$store.getters["GET_BLOG_DETAIL"](id);
        if (!article) {
          vue.$store.dispatch("GET_BLOG_DETAIL", id).then(blogInfo => {
            if (blogInfo) {
              debugger;
              vue.blogDetail = blogInfo;
            }
          });
        }
      }
    });

    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    next();
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
@import "../../../common/scss/bootstrap/common";
@import "../../../common/scss/my_variables";

.blog-detail {
  background-attachment: fixed;
  background-image: url(../../../common/assets/images/header-bg.jpg);
  background-size: cover;

  height: 100%;
  overflow: auto;
  .content {
    padding-top: 1rem;
    // background: linear-gradient(white 20%, transparent 40%, white);

    .back-blog {
      .wrapper {
        @include shadow-base();
        color: $main-color;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        i {
          font-size: 2rem;
          font-weight: 600;
        }
      }
    }
    .posts {
      @include shadow-base(false);
      .title {
        @include shadow-base(false);

        position: relative;
        background-image: url(http://localhost:5000/templates/blog/images/bg_2048.jpg);
        color: whitesmoke;
        font-size: 2rem;
        line-height: 3rem;
        height: 10rem;
        .text {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
        }
      }
      .meta {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-bottom: 0.2rem;
        padding: 0.5rem 0.2rem;
        align-items: center;

        .minilogo {
          display: flex;
          flex-flow: column nowrap;
        }
        .section-spacer {
          display: flex;
          flex-flow: row nowrap;
          .favorites {
            padding: 0 0.2rem;
          }
          .bookmark {
            padding: 0 0.2rem;
          }
          .share {
            padding: 0 0.2rem;
          }
        }
      }

      .post-widget {
        @include shadow-base();
      }
    }
    .nav-back-forward {
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        // @include shadow-base();
        padding: 1rem 0;

        .newer,
        .older {
          margin: 0;
          padding: 1rem;
          list-style: none;

          color: $main-color;
          text-decoration: none;
          @include shadow-base();

          i {
            background-color: white;
            color: $main-color;
          }
        }
      }
    }
  }
}
</style>
