<template>
  <div>
    <template v-for="portfolio in portfolioArray">
      <panel-card :portfolio="portfolio" />
    </template>
  </div>
</template>

<script>
import PanelCard from "./PanelCard";

export default {
  name: "Portfolio",
  data() {
    return {
      portfolioArray: [
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        },
        {
          heading: { content: "WII-chat", url: "" },
          body: {
            content:
              'learn WebSocket：a online multi-user chatroom based on socket.io <p>感谢 <a href="https://leancloud.cn/">LeanCloud</a>提供的 <em>体验实例</em>，可以部署Node 服务端应用，而且提供HTTPS。 <em> 尽管有 <a href="https://leancloud.cn/docs/leanengine_plan.html#hash633315134">休眠策略</a>， <a href="https://leancloud.cn/docs/leanengine_plan.html#%E4%BC%91%E7%9C%A0%E7%AD%96%E7%95%A5">每天 6 小时的强制休眠时间</a> </em> 有概率用不了( ･´ω`･ ) </p>'
          },
          footer: {
            content:
              '<a class="btn btn-default" target="_blank" href="./chat.html" role="button">wii-chat»</a> </a>'
          }
        }
      ]
    };
  },
  components: {
    "panel-card": PanelCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
