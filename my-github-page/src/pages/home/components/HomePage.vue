<template>
  <layout-normal>
    <nav-top-bar slot="header" />
    <main slot="main" id="main-content">
      <router-view></router-view>
      <!--  
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
                            <a class="btn btn-default" target="_blank" href="https://shonesinglone.github.io/mindmap/project/VuePractice/elem-app/dist/#/goods"
                                role="button">elem-app»</a>
                            </a>
                        </div>
                    </div>
                </div> 
                -->
      <!-- row end -->

      <!-- container end -->
      <footer id="footer" slot="footer" class="footer">
        <div class="container">
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
    </main>
  </layout-normal>
</template>

<script>
import LayoutNormal from "@cc/LayoutNormal";
import NavTopBar from "./NavTopBar";

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
main {
  display: flex;
  flex-flow: column nowrap;
  .container {
    flex-grow: 1;
  }
  footer {
    background-color: #42b983;
  }
}
</style>
