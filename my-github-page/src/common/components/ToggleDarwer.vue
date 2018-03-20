<template>
  <div type="button" class="toggle">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </div>
</template>


<script>
// let isLocal = ~location.href.indexOf("localhost");
// const reqURLCurrent = isLocal
//   ? "http://localhost:3000"
//   : "https://shonesinglone.leanapp.cn";

// let refreshList = function() {
//   let reqURL = reqURLCurrent + "/ajax/list/img";
//   this.$http.get(reqURL).then(res => {
//     if (res.data.status) {
//       this.imgList = res.data.imgList;
//     }
//   });
// };

export default {
  name: "ToggleDarwer",
  data: function data() {
    return {
      imgList: ""
    };
  },
  computed: {},
  beforeCreate() {
    // refreshList.call(this);
  },
  methods: {
    /* 
    download(img) {
      let reqURL = reqURLCurrent + "/ajax/download?";
      let searchParams = new URLSearchParams();
      searchParams.append("id", img.id);
      searchParams.append("name", img.name);
      return reqURL + searchParams.toString();
      // this.$http.get(reqURL, { data: { row } }).then(res => {
      //   if (res.data.status) {
      //     debugger;
      //     this.msg = res.data.msg;
      //   }
      // });
    },
    rmfile(img, index) {
      let reqURL = reqURLCurrent + "/ajax/delete?";
      let searchParams = new URLSearchParams();
      searchParams.append("id", img.id);
      searchParams.append("name", img.name);

      this.$http
        .delete(reqURL + searchParams.toString())
        .then(res => {
          if (res.data.status) {
            refreshList.call(this);
          } else {
            console.log("err", res.data.err);
          }
        })
        .catch(err => {
          console.log("err", err);
        });
    }
   */
  },
  computed: {
    imgURL() {
      return this.imgSrc;
    }
  },
  components: {
    // Progress
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
