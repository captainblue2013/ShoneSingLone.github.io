<template>
  <div :class="['l_main',APP.page.sidebar?'no_sidebar':'']">
    <section class="post-list">
      <div class="post-wrapper">
        <article class="post reveal">
          <section class="meta">
            <div class="meta" id="header-meta">
              <h2 class="title">
                <a href="/projects/vim-cn.sh/">vim-cn.sh</a>
              </h2>
              <div class="new-meta-box">
                <div class="new-meta-item author">
                  <a href="https://xaoxuu.com" rel="nofollow">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC9UExURVlZWdPT07KysmRkZIWFhfT09JmZmWZmZm9vb39/fxkZGUxMTDMzM3p6epCQkKamppubm729venp6cjIyN7e3tbW1s/Pz8LCwnx8fLS0tFZWVoiIiI+Pj6GhoeTk5Glpabu7u93d3evr66CgoJSUlKqqqsnJyeDg4Hd3d8PDw+Xl5bi4uNHR0dvb26Ojo6urq+fn51hYWDg4OCgoKHBwcK2traenp0FBQe7u7vHx8U5OTre3t8zMzHV1df///7GrnpQAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAUGSURBVHja7NoJb6M4GMZxY0NCD64kve/pMZ2d3Z297+X7f6zFNmBAMUXa6URl/q9UJSWPUPzrizFWRUlNLgEBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYn6cCIcRXgvX/h9qcIVBqDdbEM8RCxGCB9QqXYRwHYDHBgwXWl8eKZKiESHI3Ba1kWs3fKixcaJUl1YyeBm7Ocq+yLItUiVBGnXxenSHJolIKEcwHq6ikbOX1YGVzQCTN8LPmSLreghUl9sN4Uw7yajMrLC0TZ1ImzqY6FEop0+pIaEN5HaoOxVuwEqFyc4I46uSlzOLqgxlh6UaR9l3VYWl9Fdoxb1Q90KJtu41pwwFW/WHhTtW8i7TafLCqRsk6bsGw63L9qurXRmuIlbT9lDQnlXU+nBFW1Q2qnZbDprWa2tjR90LZFqx1/+Td/HpGWLlrLDvIwTcx6dQ1Vrntbig68cDms3JwbA5Y1azs1ger6sNV/bbIw1jU81MvNAGrl58RVn8ozW+btF08iGFoAlYvP3csfVur1gJBEIA1uBmue5dhZDOyO2epbmgCVi8/I6x0MMHH9pjsTfBhNzQBq5uPZoQlB0uH3DZG4EZqQ26fL3sZq5uf09Ih6qw3i/pm6BZO0qZX7rrUS68Xsbr5ZE4rePMk08pk9aUZugfqppvs6AM1Acvlo/StP+6EbW06z8hJqxbYp2BZPQUnFsLsKuhQdaHqn5ewbF7KXIn0jWO5MqOQ7RaNLPtbNMmmhimj0GUmYLl8Gs0Lq4wyPbTu1l2QKqHSouzs3OlDIslW5SQsnY/NXmFplyNvEuuLV/Tau9BzwiraDUSwXmysztYWWNtL1psXeumgIrDGaqXvBfUuvtqUYI3V2t1wk1e2msFluJJm6zDJXv/fIfjPP7DAAgsssCiwwAILLLDAosACCyywwAKLAgsssMACC6zt9fDz/v75tyOB+98PD2+ORgKffjw4OP1uJPDxl+Xy8v1I4MPF3t7VNyOB4/vF4uzdzrG+39f1kz/w66Guv/yBvw90KX/gZKkr8Qf+2dOV+gNHC12/7RxrabD2/a31bLAO/a11YbAO/K21MFhLf2s9Gqw9f2vdGqzFu11jnVusE2/gxmI9eQOnFuvYG7i0WH7uK4t15w2cWazrXWP9a7H8f/bQYvm/6IPF+sF/pVssf19Ii/WH/0K2WH/uGuvEWC39gSdj9Twy+Rqri5EZx1gt/IE7Y/XoD1wbq9vd3w1PlufnD2OBp+ebm/uxwPHF6emnscDR4vLy41jg7vHq6sNY4Pr27OyYdRaLUrDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssL6u+k+AAQCR9eHtLKvLfwAAAABJRU5ErkJggg=="
                      data-original="https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png"
                    />
                    <p>xaoxuu</p>
                  </a>
                </div>
                <div class="new-meta-item date">
                  <a class="notlink">
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                    <p>2018-09-22</p>
                  </a>
                </div>
                <div class="new-meta-item category">
                  <a href="/blog/categories/dev/shell-scripts/" rel="nofollow">
                    <i class="fas fa-folder-open" aria-hidden="true"></i>
                    <p>Dev&nbsp;/&nbsp;Shell Scripts</p>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </section>
          <section class="article typo">
            <div class="article-entry" itemprop="articleBody">
              <p>
                <a
                  href="https://img.vim-cn.com"
                  rel="external nofollow noopener noreferrer"
                  target="_blank"
                >img.vim-cn.com</a>是一个十分干净好用的图床，本站以及博客中的所有图片都是使用的这个图床。
              </p>
              <p>
                所以，这是一个快速批量
                <strong>上传图片</strong>的脚本。
              </p>
              <p>
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC9UExURVlZWdPT07KysmRkZIWFhfT09JmZmWZmZm9vb39/fxkZGUxMTDMzM3p6epCQkKamppubm729venp6cjIyN7e3tbW1s/Pz8LCwnx8fLS0tFZWVoiIiI+Pj6GhoeTk5Glpabu7u93d3evr66CgoJSUlKqqqsnJyeDg4Hd3d8PDw+Xl5bi4uNHR0dvb26Ojo6urq+fn51hYWDg4OCgoKHBwcK2traenp0FBQe7u7vHx8U5OTre3t8zMzHV1df///7GrnpQAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAUGSURBVHja7NoJb6M4GMZxY0NCD64kve/pMZ2d3Z297+X7f6zFNmBAMUXa6URl/q9UJSWPUPzrizFWRUlNLgEBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYn6cCIcRXgvX/h9qcIVBqDdbEM8RCxGCB9QqXYRwHYDHBgwXWl8eKZKiESHI3Ba1kWs3fKixcaJUl1YyeBm7Ocq+yLItUiVBGnXxenSHJolIKEcwHq6ikbOX1YGVzQCTN8LPmSLreghUl9sN4Uw7yajMrLC0TZ1ImzqY6FEop0+pIaEN5HaoOxVuwEqFyc4I46uSlzOLqgxlh6UaR9l3VYWl9Fdoxb1Q90KJtu41pwwFW/WHhTtW8i7TafLCqRsk6bsGw63L9qurXRmuIlbT9lDQnlXU+nBFW1Q2qnZbDprWa2tjR90LZFqx1/+Td/HpGWLlrLDvIwTcx6dQ1Vrntbig68cDms3JwbA5Y1azs1ger6sNV/bbIw1jU81MvNAGrl58RVn8ozW+btF08iGFoAlYvP3csfVur1gJBEIA1uBmue5dhZDOyO2epbmgCVi8/I6x0MMHH9pjsTfBhNzQBq5uPZoQlB0uH3DZG4EZqQ26fL3sZq5uf09Ih6qw3i/pm6BZO0qZX7rrUS68Xsbr5ZE4rePMk08pk9aUZugfqppvs6AM1Acvlo/StP+6EbW06z8hJqxbYp2BZPQUnFsLsKuhQdaHqn5ewbF7KXIn0jWO5MqOQ7RaNLPtbNMmmhimj0GUmYLl8Gs0Lq4wyPbTu1l2QKqHSouzs3OlDIslW5SQsnY/NXmFplyNvEuuLV/Tau9BzwiraDUSwXmysztYWWNtL1psXeumgIrDGaqXvBfUuvtqUYI3V2t1wk1e2msFluJJm6zDJXv/fIfjPP7DAAgsssCiwwAILLLDAosACCyywwAKLAgsssMACC6zt9fDz/v75tyOB+98PD2+ORgKffjw4OP1uJPDxl+Xy8v1I4MPF3t7VNyOB4/vF4uzdzrG+39f1kz/w66Guv/yBvw90KX/gZKkr8Qf+2dOV+gNHC12/7RxrabD2/a31bLAO/a11YbAO/K21MFhLf2s9Gqw9f2vdGqzFu11jnVusE2/gxmI9eQOnFuvYG7i0WH7uK4t15w2cWazrXWP9a7H8f/bQYvm/6IPF+sF/pVssf19Ii/WH/0K2WH/uGuvEWC39gSdj9Twy+Rqri5EZx1gt/IE7Y/XoD1wbq9vd3w1PlufnD2OBp+ebm/uxwPHF6emnscDR4vLy41jg7vHq6sNY4Pr27OyYdRaLUrDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssL6u+k+AAQCR9eHtLKvLfwAAAABJRU5ErkJggg=="
                    data-original="https://img.vim-cn.com/0d/e463788b9eb82f82b551d8da1cd4cbae9d64cb.png"
                    alt
                  />
                  <div></div>
                </div>
              </p>
              <div class="readmore">
                <a href="/projects/vim-cn.sh/" class="flat-box">
                  <i class="fas fa-book-open fa-fw" aria-hidden="true"></i> 阅读全文
                </a>
              </div>
            </div>
            <div class="full-width auto-padding tags">
              <a href="/blog/tags/图床/" rel="nofollow">
                <i class="fas fa-hashtag fa-fw"></i>图床
              </a>
            </div>
          </section>
        </article>
      </div>
      <div class="post-wrapper">
        <article class="post reveal">
          <section class="meta">
            <div class="meta" id="header-meta">
              <h2 class="title">
                <a href="/projects/noticeboard/">NoticeBoard</a>
              </h2>
              <div class="new-meta-box">
                <div class="new-meta-item author">
                  <a href="https://xaoxuu.com" rel="nofollow">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAC9UExURVlZWdPT07KysmRkZIWFhfT09JmZmWZmZm9vb39/fxkZGUxMTDMzM3p6epCQkKamppubm729venp6cjIyN7e3tbW1s/Pz8LCwnx8fLS0tFZWVoiIiI+Pj6GhoeTk5Glpabu7u93d3evr66CgoJSUlKqqqsnJyeDg4Hd3d8PDw+Xl5bi4uNHR0dvb26Ojo6urq+fn51hYWDg4OCgoKHBwcK2traenp0FBQe7u7vHx8U5OTre3t8zMzHV1df///7GrnpQAAAA/dFJOU///////////////////////////////////////////////////////////////////////////////////AI4mfBcAAAUGSURBVHja7NoJb6M4GMZxY0NCD64kve/pMZ2d3Z297+X7f6zFNmBAMUXa6URl/q9UJSWPUPzrizFWRUlNLgEBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYYIEFAVhggQUWWGBBABZYYIEFFlgQgAUWWGCBBRYEYIEFFlhggQUBWGCBBRZYYEEAFlhggQUWWBCABRZYYIEFFgRggQUWWGCBBQFYYIEFFlhgQQAWWGCBBRZYEIAFFlhggQUWBGCBBRZYn6cCIcRXgvX/h9qcIVBqDdbEM8RCxGCB9QqXYRwHYDHBgwXWl8eKZKiESHI3Ba1kWs3fKixcaJUl1YyeBm7Ocq+yLItUiVBGnXxenSHJolIKEcwHq6ikbOX1YGVzQCTN8LPmSLreghUl9sN4Uw7yajMrLC0TZ1ImzqY6FEop0+pIaEN5HaoOxVuwEqFyc4I46uSlzOLqgxlh6UaR9l3VYWl9Fdoxb1Q90KJtu41pwwFW/WHhTtW8i7TafLCqRsk6bsGw63L9qurXRmuIlbT9lDQnlXU+nBFW1Q2qnZbDprWa2tjR90LZFqx1/+Td/HpGWLlrLDvIwTcx6dQ1Vrntbig68cDms3JwbA5Y1azs1ger6sNV/bbIw1jU81MvNAGrl58RVn8ozW+btF08iGFoAlYvP3csfVur1gJBEIA1uBmue5dhZDOyO2epbmgCVi8/I6x0MMHH9pjsTfBhNzQBq5uPZoQlB0uH3DZG4EZqQ26fL3sZq5uf09Ih6qw3i/pm6BZO0qZX7rrUS68Xsbr5ZE4rePMk08pk9aUZugfqppvs6AM1Acvlo/StP+6EbW06z8hJqxbYp2BZPQUnFsLsKuhQdaHqn5ewbF7KXIn0jWO5MqOQ7RaNLPtbNMmmhimj0GUmYLl8Gs0Lq4wyPbTu1l2QKqHSouzs3OlDIslW5SQsnY/NXmFplyNvEuuLV/Tau9BzwiraDUSwXmysztYWWNtL1psXeumgIrDGaqXvBfUuvtqUYI3V2t1wk1e2msFluJJm6zDJXv/fIfjPP7DAAgsssCiwwAILLLDAosACCyywwAKLAgsssMACC6zt9fDz/v75tyOB+98PD2+ORgKffjw4OP1uJPDxl+Xy8v1I4MPF3t7VNyOB4/vF4uzdzrG+39f1kz/w66Guv/yBvw90KX/gZKkr8Qf+2dOV+gNHC12/7RxrabD2/a31bLAO/a11YbAO/K21MFhLf2s9Gqw9f2vdGqzFu11jnVusE2/gxmI9eQOnFuvYG7i0WH7uK4t15w2cWazrXWP9a7H8f/bQYvm/6IPF+sF/pVssf19Ii/WH/0K2WH/uGuvEWC39gSdj9Twy+Rqri5EZx1gt/IE7Y/XoD1wbq9vd3w1PlufnD2OBp+ebm/uxwPHF6emnscDR4vLy41jg7vHq6sNY4Pr27OyYdRaLUrDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssMCiwAILLLDAAosCCyywwAILLAossMACCyywKLDAAgsssL6u+k+AAQCR9eHtLKvLfwAAAABJRU5ErkJggg=="
                      data-original="https://cdn.jsdelivr.net/gh/xaoxuu/assets@master/avatar/avatar.png"
                    />
                    <p>xaoxuu</p>
                  </a>
                </div>
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
              <p>这是一个仿原生UI的消息通知控件。暂时没有图片，demo提供了详细的功能介绍使用方法，赶快下载源码运行demo查看一下效果吧。</p>
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

