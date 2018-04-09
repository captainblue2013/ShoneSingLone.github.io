import {
  GET_BLOG_LIST,
  HOST_NAME
} from '../types';
import Vue from 'vue';


function BlogCard(
  heading = "WII-chat",
  body = 'learn WebSocket：a online multi-user chatroom based on socket.io <p>利用 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，部署Node 服务端应用。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) ，但是提供HTTPS，很棒。因为我懒。</p>',
  footer = '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
) {
  this.heading = {
    content: heading,
    url: ""
  };
  this.body = {
    content: "<p>" + body + "</p>"
  };
  this.footer = {
    content: `<a class="btn btn-default" target="_blank" href="./chat.html" role="button">${footer}</a> </a>`
  };
}






// initial state
const
  state = {
    blogArray: []
  },
  getters = {
    [GET_BLOG_LIST]: (state) => {
      if (state.blogArray && state.blogArray.length > 1) {
        let blogArray = [];
        state.blogArray.map((blog) => {
          let {
            title,
            id
          } = blog[1].article
          blogArray.push(new BlogCard(title, id, null));
        })
        return blogArray;
      }
      return state.blogArray
    }
  },
  actions = {
    [GET_BLOG_LIST]({
      commit
    }) {
      Vue.axios
        .get(HOST_NAME + "ajax/blog")
        .then(response => {
          if (200 === response.status) {
            commit('GET_BLOG_LIST', JSON.parse(response.data.blogMap))
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations = {
    [GET_BLOG_LIST](state, blogArray) {
      state.blogArray = blogArray;
    }
  };

/**
 * 
 *  return this.$store.getters["IS_MOBILE"];
 */

export default {
  state,
  getters,
  actions,
  mutations
}
