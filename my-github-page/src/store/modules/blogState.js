import {
  GET_BLOG_LIST,
  GET_BLOG_DETAIL,
  SET_BLOG_DETAIL,
  HOST_NAME
} from '../types';
import vue from 'vue';


function BlogCard(blogRecord) {

  let heading = "WII-chat",
    body = 'learn WebSocket：a online multi-user chatroom based on socket.io <p>利用 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，部署Node 服务端应用。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) ，但是提供HTTPS，很棒。因为我懒。</p>',
    footer = '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'

  let {
    date,
    id,
    introduction,
    md,
    title,
  } = blogRecord;

  this.heading = {
    content: heading,
    url: id
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
    blogArray: [],
    articleList: {}
  },
  getters = {
    [GET_BLOG_LIST]: (state) => {
      if (state.blogArray && state.blogArray.length > 1) {
        let blogArray = [];
        state.blogArray.map((blog) => {
          // 其实可以过滤掉一些不需要出回去的数据信息
          blogArray.push(blog[1]);
        })
        return blogArray;
      }
      return state.blogArray
    },
    [GET_BLOG_DETAIL]: (state) => (id) => {
      return state.articleList[id];
    }

  },
  actions = {
    [GET_BLOG_LIST]({
      commit
    }) {
      vue.axios
        .get(HOST_NAME + "ajax/blog")
        .then(response => {
          if (200 === response.status) {
            commit('GET_BLOG_LIST', JSON.parse(response.data));
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    [GET_BLOG_DETAIL]({
      commit
    }, id) {
      return new Promise((resolve, reject) => {
        vue.axios
          .post(window.remotHost + "p/blog", {
            id
          })
          .then(response => {
            if (200 === response.status) {
              let blogInfo = response.data;
              blogInfo.id = id;
              resolve(blogInfo);
            }
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });



      });
    },
  },
  mutations = {
    [GET_BLOG_LIST](state, blogArray) {
      state.blogArray = blogArray;
    },
    [SET_BLOG_DETAIL](state, articleInfo) {
      state.articleList[articleInfo.id] = articleInfo;
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
