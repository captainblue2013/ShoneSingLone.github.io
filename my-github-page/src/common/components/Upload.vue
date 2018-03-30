<template>
  <div>
    <div class="hello row">
      <div class="col-xs-6">
        <div class="form-group">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="file" required @change="whenChangeShowImage($event)">
        </div>
        <button type="" class="btn btn-primary" @click="upload">Submit</button>
      </div>
      <div class="col-xs-6" v-if="imgSrc">
        <img :src="imgSrc" :alt="msg">
        <upload-progress :width="progressWidth"></upload-progress>
      </div>
    </div>
  </div>
</template>


<script>
import Progress from "@cc/Bootstrap/Progress";

export default {
  name: "HelloWorld",
  data: function data() {
    return {
      msg: "上传下载文件",
      imgSrc: "",
      progress: {
        total: 100,
        loaded: 0
      }
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
      } else {
        this.imgSrc = "";
      }
      this.progress.loaded = 0;
    },
    upload() {
      // let form = $("#upload-form");
      let self = this;
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function(progressEvent) {
          self.progress.total = progressEvent.total;
          self.progress.loaded = progressEvent.loaded;
        }
      }; //添加请求头
      // form = new FormData(form);
      let formData = new FormData();
      formData.append("file", self.$jq("#file")[0].files[0]);
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
    },
    download() {
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      let formData = new FormData();
      formData.append("file", jQuery("#file")[0].files[0]);
      console.dir(formData);
      let isLocal = ~location.href.indexOf("localhost");
      let reqURL =
        (isLocal
          ? "http://localhost:3000"
          : "https://shonesinglone.leanapp.cn") + "/ajax/download";
      this.$http.post(reqURL, formData, config).then(res => {
        if (res.data.status) {
          this.msg = res.data.msg;
        }
      });
    }
  },
  computed: {
    progressWidth() {
      return Math.floor(
        (this.progress.loaded / this.progress.total).toFixed(2) * 100
      );
    }
  },
  components: {
    "upload-progress": Progress
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
img {
  width: 150px;
}
</style>
