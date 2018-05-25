<template>
  <div class="login wrapper">
    <div class="cont">
      <input type="text" name="" v-model="user.name">
      <input type="password" name="" v-model="user.pwd">
      <a class="btn-login" type="submit" v-on:click="login($event)">Login</a>
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
          type: "deploy",
          data: this.user
        })
        .then(response => {
          if (200 === response.status) {
            let info = response.data;
            console.log("info.sucess", info.sucess);
            if (info.sucess) {
              this.$emit("login", $event);
            } else {
              this.erroeTip = info.msg;
            }
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
@import "../scss/bootstrap/common";
@import "../scss/my_variables";

$border-bottom-height: 0.4rem;
$border-radius: 1rem;

.login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $zindex-modal-background;
  background: linear-gradient(-45deg, whitesmoke, transparent 300%);
  // background: linear-gradient(-45deg, rgb(4, 8, 1), transparent);
  // opacity: 0.5;

  &.wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $zindex-modal-background + 1;
    background: linear-gradient(-45deg, whitesmoke, transparent 300%);
    // background: linear-gradient(-45deg, rgb(4, 8, 1), transparent);
    // opacity: 0.5;
    .cont {
      display: flex;
      flex-flow: column nowrap;
      /* margin: 50px; */
      /* padding: 50px; */
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
      input[type="text"],
      input[type="password"] {
        &:focus {
          outline: none;
          border-bottom: 0.3rem solid #9bbaa5;
        }
        border: none;
        border-bottom: 0.1rem solid #9bbaa5;
        display: block;
        margin: 0;
        background: none;
        text-align: left;
        color: $main-color;
      }
      .btn-login {
        margin: 0;
        padding: 1rem;
        color: $main-color;
        text-decoration: none;
        @include shadow-base();
        @include click-base();
        i {
          background-color: white;
          color: $main-color;
        }
      }
    }
  }
}
</style>