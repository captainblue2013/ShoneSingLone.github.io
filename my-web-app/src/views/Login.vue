<template>
  <div :class="['l_main',APP.page.sidebar?'no_sidebar':'']">
    <section class="post-list">
      <div class="post-wrapper">
        <article class="post reveal">
          <section class="meta">
            <div class="meta" id="header-meta">
              <div class="new-meta-box">
                <div class="new-meta-item author"></div>
                <div class="new-meta-item date">
                  <a class="notlink">
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                    <p>2018-06-22</p>
                  </a>
                </div>
                <div class="new-meta-item category">
                  <a href="/blog/categories/dev/cocoa/" rel="nofollow">
                    <i class="fas fa-folder-open" aria-hidden="true"></i>
                    <p>Dev&nbsp;/&nbsp;Cocoa</p>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </section>
          <section class="article typo">
            <div class="article-entry" itemprop="articleBody">
              <input type="text" class="input u-search-input" />
              <div class="readmore">
                <a href="/projects/noticeboard/" class="flat-box">
                  <i class="fas fa-book-open fa-fw" aria-hidden="true"></i> 阅读全文
                </a>
              </div>
            </div>
            <div class="full-width auto-padding tags">
              <a href="/blog/tags/开源库/" rel="nofollow">
                <i class="fas fa-hashtag fa-fw"></i>开源库
              </a>
              <a href="/blog/tags/开源库/" rel="nofollow">
                <i class="fas fa-hashtag fa-fw"></i>开源库
              </a>
              <a href="/blog/tags/开源库/" rel="nofollow">
                <i class="fas fa-hashtag fa-fw"></i>开源库
              </a>
            </div>
          </section>
        </article>
      </div>
    </section>
    <br />
    <div class="prev-next">
      <div class="prev-next">
        <p class="current">1 / 4</p>
        <a class="next" rel="next" href="/page/2/">
          <section class="post next">
            &nbsp;下一页&nbsp;
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </section>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  inject: ["APP"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
</style>

