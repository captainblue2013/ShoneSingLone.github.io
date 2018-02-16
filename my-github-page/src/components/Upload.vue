<template>
  <div class="hello">
    <!-- <img src="../assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <form enctype="multipart/form-data" method="post" name="fileinfo" id="upload-form">
      <!-- <label>Your email address:</label>
      <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
      <label>Custom file label:</label>
      <input type="text" name="filelabel" size="12" maxlength="32" /><br />
      <label>File to stash:</label> -->
      <input type="file" id="file" required  @change="whenChangeShowImage($event)"/>
    </form>
    <input type="button" value="提交"  @click="upload"> 
    <img :src="imgSrc" style="width:150px">
    <div class="progress">progress</div>
    <!-- :style="{backgroundImage:'linear-gradient(to right,#C0C7CB 0%,#C0C7CB '+progress+',#E1E6E9 '+progress+',#E1E6E9 100%)'}" -->
  </div>
</template>


<script>
export default {
  name: "HelloWorld",
  data: function data() {
    return {
      msg: "上传下载文件",
      imgSrc: ""
    };
  },
  methods: {
    whenChangeShowImage(event) {
      let files = event.target.files;
      let reader = new FileReader();
      if (files && files[0]) {
        reader.addEventListener("load", ev => {
          this.imgSrc = ev.target.result;
        });
        reader.readAsDataURL(files[0]);
      }
    },
    upload() {
      // let form = $("#upload-form");
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      // form = new FormData(form);
      let formData = new FormData();
      formData.append("file", $("#file")[0].files[0]);
      console.dir(formData);
      let isLocal = ~location.href.indexOf("localhost");
      let reqURL =
        (isLocal
          ? "http://localhost:3000"
          : "https://shonesinglone.leanapp.cn") + "/ajax/upload";
      this.$http.post(reqURL, formData, config).then(res => {
        if (res.data.status) {
          this.msg = res.data.msg;
        }
      });
    }
  },
  computed: {
    imgURL() {
      return this.imgSrc;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
