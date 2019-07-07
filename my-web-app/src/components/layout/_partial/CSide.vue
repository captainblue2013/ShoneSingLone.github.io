<template>
  <aside class="l_side">
    <section class="widget author">
      <div class="content pure">
        <div class="avatar">
          <img
            class="avatar"
            src="https://shonesinglone.github.io/public/static/img/avatar.f10518b.png"
          />
        </div>
        <div class="social-wrapper">
          <a
            href="/atom.xml"
            class="social fas fa-rss flat-btn"
            target="_blank"
            rel="external nofollow noopener noreferrer"
          ></a>
          <a
            href="mailto:me@xaoxuu.com"
            class="social fas fa-envelope flat-btn"
            target="_blank"
            rel="external nofollow noopener noreferrer"
          ></a>
          <a
            href="https://github.com/xaoxuu"
            class="social fab fa-github flat-btn"
            target="_blank"
            rel="external nofollow noopener noreferrer"
          ></a>
          <a
            href="https://music.163.com/#/user/home?id=63035382"
            class="social fas fa-headphones-alt flat-btn"
            target="_blank"
            rel="external nofollow noopener noreferrer"
          ></a>
        </div>
      </div>
    </section>
    <section class="widget grid">
      <header class="pure">
        <div>
          <i class="fas fa-map-signs fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;站内导航
        </div>
      </header>
      <div class="content pure">
        <ul class="grid navgation">
          <li>
            <a class="flat-box" title="/" href="/" id="home">
              <i class="fas fa-clock fa-fw" aria-hidden="true"></i>
              近期文章
            </a>
          </li>
          <li>
            <a
              class="flat-box"
              title="/blog/archives/"
              href="/blog/archives/"
              rel="nofollow"
              id="blogarchives"
            >
              <i class="fas fa-archive fa-fw" aria-hidden="true"></i> 文章归档
            </a>
          </li>
          <li>
            <a class="flat-box" title="/projects/" href="/projects/" id="projects">
              <i class="fas fa-code-branch fa-fw" aria-hidden="true"></i> 开源项目
            </a>
          </li>
          <li>
            <a class="flat-box" title="/music/" href="/music/" rel="nofollow" id="music">
              <i class="fas fa-compact-disc fa-fw" aria-hidden="true"></i> 歌单分享
            </a>
          </li>
          <li>
            <a class="flat-box" title="/friends/" href="/friends/" rel="nofollow" id="friends">
              <i class="fas fa-link fa-fw" aria-hidden="true"></i> 我的友链
            </a>
          </li>
          <li>
            <a
              class="flat-box"
              title="https://xaoxuu.com/wiki/material-x/"
              href="https://xaoxuu.com/wiki/material-x/"
              rel="nofollow"
              id="https:xaoxuu.comwikimaterial-x"
            >
              <i class="fas fa-book fa-fw" aria-hidden="true"></i> 主题文档
            </a>
          </li>
          <li>
            <a class="flat-box" title="/about/" href="/about/" rel="nofollow" id="about">
              <i class="fas fa-info-circle fa-fw" aria-hidden="true"></i> 关于小站
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="widget category">
      <header class="pure">
        <div>
          <i class="fas fa-folder-open fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;文章分类
        </div>
        <a class="rightBtn" rel="nofollow" href="/blog/categories/" title="blog/categories/">
          <i class="fas fa-expand-arrows-alt fa-fw"></i>
        </a>
      </header>
      <div class="content pure">
        <ul class="entry">
          <li>
            <a class="flat-box" title="/blog/categories/dev/" href="/blog/categories/dev/">
              <div class="name">Dev</div>
              <div class="badge">(30)</div>
            </a>
          </li>
          <li>
            <a
              class="flat-box child"
              title="/blog/categories/dev/cocoa/"
              href="/blog/categories/dev/cocoa/"
            >
              <div class="name">Cocoa</div>
              <div class="badge">(21)</div>
            </a>
          </li>
          <li>
            <a
              class="flat-box child"
              title="/blog/categories/dev/git/"
              href="/blog/categories/dev/git/"
            >
              <div class="name">Git</div>
              <div class="badge">(2)</div>
            </a>
          </li>
          <li>
            <a
              class="flat-box child"
              title="/blog/categories/dev/hexo/"
              href="/blog/categories/dev/hexo/"
            >
              <div class="name">Hexo</div>
              <div class="badge">(3)</div>
            </a>
          </li>
          <li>
            <a
              class="flat-box child"
              title="/blog/categories/dev/shell-scripts/"
              href="/blog/categories/dev/shell-scripts/"
            >
              <div class="name">Shell Scripts</div>
              <div class="badge">(2)</div>
            </a>
          </li>
          <li>
            <a
              class="flat-box child"
              title="/blog/categories/dev/windows/"
              href="/blog/categories/dev/windows/"
            >
              <div class="name">Windows</div>
              <div class="badge">(2)</div>
            </a>
          </li>
          <li>
            <a class="flat-box" title="/blog/categories/life/" href="/blog/categories/life/">
              <div class="name">Life</div>
              <div class="badge">(2)</div>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="widget tagcloud">
      <header class="pure">
        <div>
          <i class="fas fa-fire fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;热门标签
        </div>
        <a class="rightBtn" rel="nofollow" href="/blog/tags/" title="blog/tags/">
          <i class="fas fa-expand-arrows-alt fa-fw"></i>
        </a>
      </header>
      <div class="content pure">
        <a href="/blog/tags/axkit/" style="font-size:20px;color:#707070">AXKit</a>
        <a href="/blog/tags/alamofire/" style="font-size:14px;color:#999">Alamofire</a>
        <a href="/blog/tags/cocoapods/" style="font-size:16px;color:#8b8b8b">CocoaPods</a>
        <a href="/blog/tags/gcd/" style="font-size:14px;color:#999">GCD</a>
        <a href="/blog/tags/hexo/" style="font-size:18px;color:#7e7e7e">Hexo</a>
        <a href="/blog/tags/reactivecocoa/" style="font-size:14px;color:#999">ReactiveCocoa</a>
        <a href="/blog/tags/shell-scripts/" style="font-size:14px;color:#999">Shell Scripts</a>
        <a href="/blog/tags/strava/" style="font-size:16px;color:#8b8b8b">Strava</a>
        <a href="/blog/tags/swift/" style="font-size:14px;color:#999">Swift</a>
        <a href="/blog/tags/architecture/" style="font-size:14px;color:#999">architecture</a>
        <a href="/blog/tags/blog/" style="font-size:14px;color:#999">blog</a>
        <a href="/blog/tags/cooldown/" style="font-size:14px;color:#999">cooldown</a>
        <a href="/blog/tags/fit/" style="font-size:16px;color:#8b8b8b">fit</a>
        <a href="/blog/tags/framework/" style="font-size:14px;color:#999">framework</a>
        <a href="/blog/tags/git/" style="font-size:16px;color:#8b8b8b">git</a>
        <a href="/blog/tags/ios/" style="font-size:24px;color:#555">iOS</a>
        <a href="/blog/tags/objc/" style="font-size:14px;color:#999">objc</a>
        <a href="/blog/tags/podspec/" style="font-size:14px;color:#999">podspec</a>
        <a href="/blog/tags/runtime/" style="font-size:14px;color:#999">runtime</a>
        <a href="/blog/tags/sandbox/" style="font-size:14px;color:#999">sandbox</a>
        <a href="/blog/tags/响应式编程/" style="font-size:14px;color:#999">响应式编程</a>
        <a href="/blog/tags/图床/" style="font-size:14px;color:#999">图床</a>
        <a href="/blog/tags/图表/" style="font-size:14px;color:#999">图表</a>
        <a href="/blog/tags/实用工具/" style="font-size:14px;color:#999">实用工具</a>
        <a href="/blog/tags/应用程序/" style="font-size:14px;color:#999">应用程序</a>
        <a href="/blog/tags/开源库/" style="font-size:22px;color:#636363">开源库</a>
        <a href="/blog/tags/架构/" style="font-size:14px;color:#999">架构</a>
        <a href="/blog/tags/沙盒/" style="font-size:14px;color:#999">沙盒</a>
        <a href="/blog/tags/缓存/" style="font-size:14px;color:#999">缓存</a>
        <a href="/blog/tags/随笔/" style="font-size:16px;color:#8b8b8b">随笔</a>
        <a href="/blog/tags/静态库/" style="font-size:14px;color:#999">静态库</a>
      </div>
    </section>
    <section class="widget music">
      <header class="pure">
        <div>
          <i class="fas fa-compact-disc fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;最近在听
        </div>
        <a
          class="rightBtn"
          rel="external nofollow noopener noreferrer"
          target="_blank"
          href="https://music.163.com/#/user/home?id=63035382"
          title="https://music.163.com/#/user/home?id=63035382"
        >
          <i class="far fa-heart fa-fw"></i>
        </a>
      </header>
      <div class="content pure">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/aplayer@1.7.0/dist/APlayer.min.css"
        />
        <div
          class="aplayer"
          data-theme="#1BCDFC"
          data-mode="circulation"
          data-server="netease"
          data-type="playlist"
          data-id="2615636388"
          data-volume="0.7"
        ></div>
      </div>
    </section>
  </aside>
</template>
<script>
export default {
  name: "CSide",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style lang="scss">
</style>