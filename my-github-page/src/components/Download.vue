<template>
  <div class="row">
    <div class="col-md-12">
      <h2>文件列表</h2>
      <div class="table-responsive">
        <table class="table table-striped" v-if="imgList">
          <thead>
            <tr>
              <th>No.</th>
              <th>img</th>
              <th>name</th>
              <th>option</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(rowImg,index) in imgList">
              <td>{{index}}</td>
              <td><img :src="download(rowImg)" alt="rowImg.name"></td>
              <td>{{rowImg.name}}</td>
              <td>
                <a class="btn btn-primary" :href="download(rowImg)">下载</a>
                <button class="btn" @click="rmfile(rowImg,index)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import Progress from "@/components/Bootstrap/Progress";
let isLocal = ~location.href.indexOf("localhost");
const reqURLCurrent = isLocal
  ? "http://localhost:3000"
  : "https://shonesinglone.leanapp.cn";

let refreshList = function() {
  let reqURL = reqURLCurrent + "/ajax/list/img";
  this.$http.get(reqURL).then(res => {
    if (res.data.status) {
      this.imgList = res.data.imgList;
    }
  });
};

export default {
  name: "Download",
  data: function data() {
    return {
      imgList: ""
    };
  },
  computed: {},
  beforeCreate() {
    refreshList.call(this);
  },
  methods: {
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
  },
  computed: {
    imgURL() {
      return this.imgSrc;
    }
  },
  components: {
    Progress
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 150px;
}
</style>
