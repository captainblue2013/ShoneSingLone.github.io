<template>
  <layout-normal>
    <nav-top-bar slot="header" />
    <main id="main-content" slot="main">
      <div class="container">
        <!-- container start -->
        <div class="row">
          <!-- row start -->
          <div class="col-sm-8">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h2 class="" class="mdl-card__title-text">WII-chat</h2>
              </div>
              <div class="panel-body">
                <div class="mdl-card__supporting-text">learn WebSocket：a online multi-user chatroom based on socket.io
                  <p>感谢
                    <a href="https://leancloud.cn/">LeanCloud</a>提供的
                    <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。
                    <em> 尽管有
                      <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>，
                      <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a>
                    </em> 有概率用不了( ･´ω`･ ) </p>
                </div>
              </div>
              <div class="panel-footer">
                <a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h2 class="" class="mdl-card__title-text">elem-app</h2>
              </div>
              <div class="panel-body">
                <div class="mdl-card__supporting-text">Vue.js高仿饿了么外卖App 1.0到2.0版本完美升级
                  <a target="_blank" href="http://coding.imooc.com/class/74.html">mooc</a>
                </div>
              </div>
              <div class="panel-footer">
                <a class="btn btn-default" target="_blank" href="./dist/index.html" role="button">elem-app»</a>
                </a>
                <!-- <a class="btn btn-default" target="_blank" href="https://shonesinglone.github.io/mindmap/project/VuePractice/elem-app/dist/#/goods" role="button">elem-app»</a> </a> -->
              </div>
            </div>
          </div>
          <!-- row end -->
        </div>
        <div id="main-coontainer-row" class="row">
          <!-- row start -->
          <div class="col-sm-4">
            <div id="main-container-row-col1"></div>
          </div>
          <div class="col-sm-4">
            <div id="main-container-row-col2"></div>
          </div>
          <div class="col-sm-4">
            <div id="main-container-row-col3"></div>
          </div>
          <!-- row end -->
        </div>
        <!-- container end -->
      </div>
    </main>
    <footer id="footer" slot="footer">
      <div class="footer-container">
        <div class="row">
          <div class="col-sm-6">
            <div class="logo left-section">My microSite</div>
          </div>
          <div class="col-sm-6">
            <ul class="link-list right-section">
              <li>
                <a href="#">Nothing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </layout-normal>
</template>

<script>
import LayoutNormal from "@cc/LayoutNormal";
import NavTopBar from "@/pages/home/components/Nav";

export default {
  name: "HomePage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "layout-normal": LayoutNormal,
    "nav-top-bar": NavTopBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
