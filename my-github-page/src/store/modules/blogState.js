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
import jquery from 'jquery';

const repositoryContents = (path = "") => {
  return `https://api.github.com/repos/ShoneSingLone/GitBook/contents` + path + `?access_token=399234264a04c4f3765841b3e11f236c698393e8`;
}

// initial state
const
  state = {
    blogList: {},
    blogDetail: {}
  },
  getters = {
    blogList(state) {
      return state.blogList;
    },
    blogDetail(state) {
      return state.blogDetail;
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
      state.blogList[blogDetail.sha].mdCoentent = mdContent;
      let htmlContent = toHtml(mdContent);
      let $html = jquery(htmlContent);
      let htmlText = $html.text();
      let desc = htmlText.length > 120 ? htmlText.substring(0, 120) + "..." : htmlText;
      state.blogList[blogDetail.sha].desc = desc;
      console.log("state.blogList[blogDetail.sha].detail", state.blogList[blogDetail.sha]);
    }
  };

export default {
  state,
  getters,
  actions,
  mutations
}
