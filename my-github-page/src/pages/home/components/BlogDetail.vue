<template>
  <div class="blog-detail ">
    <!--  -->
    <main class="container content">
      <!--  -->
      <div class="row back-blog">
        <div class="col-md-12">
          <div class="wrapper" @click="setActiveAnchor">
            <i class="glyphicon glyphicon-menu-left"> </i>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="row posts">
        <div class="col-md-8">
          <div class="title">
            <h3 class="text">{{blogDetailCurrent.title}}</h3>
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
          <article id="blog-html-content" class="" v-html="blogDetailCurrent.contentHtml">
          </article>
        </div>
        <div class="col-md-4">
          <aside class="post-widget">
            <nav class="post-toc-wrap" id="post-toc">
              <h4>TOC</h4>
              <ol class="post-toc">
                <li class="post-toc-item post-toc-level-2 active">
                  <a class="post-toc-link" href="#">
                    <span class="post-toc-number">1.</span>
                    <span class="post-toc-text">stamp</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="#">
                    <span class="post-toc-number">2.</span>
                    <span class="post-toc-text">stamp</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="#">
                    <span class="post-toc-number">3.</span>
                    <span class="post-toc-text">stamp</span>
                  </a>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="#">
                    <span class="post-toc-number">4.</span>
                    <span class="post-toc-text">stamp</span>
                  </a>
                  <ol class="post-toc-child post-toc-shrink">
                    <li class="post-toc-item post-toc-level-3">
                      <a class="post-toc-link" href="#">
                        <span class="post-toc-number">4.1.</span>
                        <span class="post-toc-text">stamp</span>
                      </a>
                    </li>
                  </ol>
                </li>
                <li class="post-toc-item post-toc-level-2">
                  <a class="post-toc-link" href="#">
                    <span class="post-toc-number">5.</span>
                    <span class="post-toc-text">stamp</span>
                  </a>
                  <ol class="post-toc-child post-toc-shrink">
                    <li class="post-toc-item post-toc-level-3">
                      <a class="post-toc-link" href="#">
                        <span class="post-toc-number">5.1.</span>
                        <span class="post-toc-text">stamp</span>
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
import { repositoryContents } from "@c/js/remote.config";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Blog",
  data() {
    return { msg: "BlogDetail" };
  },
  computed: { ...mapGetters(["blogDetailCurrent"]) },
  components: {
    "comment-chat": PanelComments
  },
  created() {
    console.log("BlogDetail created");
  },
  mounted() {
    console.log("BlogDetail mounted");
  },
  methods: {
    ...mapActions(["getBlogDetailCurrent"]),
    setActiveAnchor() {
      this.$router.push({ name: "home.blog", query: { userId: 123 } });
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log("BlogDetail beforeRouteEnter");
    next(vm => {
      vm.getBlogDetailCurrent(to.query.path);
    });
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log("BlogDetail beforeRouteUpdate");
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log("BlogDetail beforeRouteLeave");
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
        @include click-base();

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
      @include shadow-base(true, false);
      .title {
        @include shadow-base(true, false);
        border-radius: 1rem 1rem 0 0;
        position: relative;
        background: url(./assets/blog-title2.jpg) left bottom / 100% no-repeat;
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
          font-size: 1.4rem;
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
        @include click-base();
      }
    }
    .nav-back-forward {
      .wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 1rem 0;

        .newer,
        .older {
          margin: 0;
          padding: 1rem;
          list-style: none;

          color: $main-color;
          text-decoration: none;
          @include shadow-base();
          @include click-base();

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

<style lang='scss'>
#blog-html-content {
  img {
    width: 100%;
  }
}
</style>
