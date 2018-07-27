import {
  GET_BLOG_LIST,
  GET_BLOG_DETAIL,
  SET_BLOG_DETAIL,
  HOST_NAME
} from '../types';
import vue from 'vue';
import {
  decode as DECODE
} from '@c/js/base64';
import {
  toHtml
} from '@c/js/4markdown';
import {
  repositoryContents
} from '@c/js/remote.config';

import jquery from 'jquery';

// 讲道理就是没有设计好，应该是blogList带有desc，进入到detail的时候只需要带有必要的唯一标识符如sha、id；这里写成处理同样的数据两遍是错误的

// initial s tate
const
  state = {
    blogList: {},
    blogDetail: {},
    blogDetailCurrent: {}
  },
  getters = {
    blogList(state) {
      return state.blogList;
    },
    blogDetail(state) {
      return state.blogDetail;
    },
    blogDetailCurrent(state) {
      return state.blogDetailCurrent;
    },
  },
  actions = {
    async getBlogList({
      commit
    }, params) {
      try {
        let res = await vue.axios(repositoryContents(), {
          method: 'get'
        });
        if (res.status === 200) {
          let contents = res && res.data || [];
          let blogs = {
            length: 0
          };
          contents.forEach((content, index, array) => {
            let result = /\.[^\.]+$/.exec(content.name);
            if ("file" === content.type && ".md" === result[0]) {
              blogs[content.sha] = content;
              blogs.length++;
            }
          });
          Object.defineProperty(blogs, "length", {
            writable: true,
            enumerable: false,
            configurable: true
          });
          console.log("blogs", blogs);
          commit("setBlogList", {
            blogs,
            params
          });
        }
      } catch (e) {}
    },
    async getBlogDetail({
      commit
    }, params) {
      let path = params.path;
      try {
        let res = await vue.axios(repositoryContents(`/` + path), {
          method: 'get'
        });
        if (res.status === 200) {
          let blogDetail = res.data;
          commit("setBlogDetail", {
            blogDetail
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getBlogDetailCurrent({
      commit
    }, path) {
      try {
        let res = await vue.axios(repositoryContents(`/` + path), {
          method: 'get'
        });
        if (res.status === 200) {
          let blogDetail = res.data;
          commit("setBlogDetailCurrent", {
            blogDetail
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations = {
    setBlogList(state, {
      blogs
    }) {
      state.blogList = blogs;
    },
    setBlogDetail(state, {
      blogDetail
    }) {
      let mdContent = DECODE(blogDetail.content);
      let contentHtml = toHtml(mdContent);
      let $html = jquery(contentHtml);
      let htmlText = $html.text();
      let desc = htmlText.length > 120 ? htmlText.substring(0, 120) + "..." : htmlText;
      state.blogList[blogDetail.sha].desc = desc;
      console.log("state.blogList[blogDetail.sha].detail", state.blogList[blogDetail.sha]);
    },
    setBlogDetailCurrent(state, {
      blogDetail
    }) {
      let mdContent = DECODE(blogDetail.content);
      let contentHtml = toHtml(mdContent);
      state.blogDetailCurrent = {
        title: blogDetail.name,
        contentHtml
      }
      console.log("state.blogDetailCurrent", state.blogDetailCurrent);
    }
  };

export default {
  state,
  getters,
  actions,
  mutations
}
