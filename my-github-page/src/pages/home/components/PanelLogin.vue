<template>
  <div class="login wrapper">
    <div method="post">
      <input type="text" name="" v-model="user.name">
      <input type="password" name="" v-model="user.pwd">
      <button type="submit" v-on:click="login($event)">Login</button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
// import BSModal from "@cc/bootstrap/Modal";

export default {
  data() {
    return {
      user: { name: "", pwd: "" },
      erroeTip: false
    };
  },
  methods: {
    login($event) {
      let vue = this;
      vue.axios
        .post(window.remotHost + "p/api", {
          type:"login",
          user: this.user
        })
        .then(response => {
          debugger;
          if (200 === response.status) {
            let info = response.data;
            console.log("info.sucess", info.sucess);
            $emit("login", $event);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../common/scss/bootstrap/common";
@import "../../../common/scss/my_variables";

$border-bottom-height: 0.4rem;
$border-radius: 1rem;

.login {
  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $zindex-modal-background + 1;
    background: linear-gradient(-45deg, whitesmoke, transparent 300%);
    // background: linear-gradient(-45deg, rgb(4, 8, 1), transparent);
    // opacity: 0.5;
  }
}
</style>