<template>
  <div class="row">
    <div class="col-md-12">
      <h2>文件列表</h2>
      <div class="table-responsive">
        <table class="table table-striped" v-if="rowList">
          <thead>
            <tr>
              <th>No.</th>
              <th>name</th>
              <th>path</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="(row,index) in rowList">
              <td>{{index}}</td>
              <td>{{row.fileName}}</td>
              <td><button class="btn" @click="download(row)">下载</button></td>
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

export default {
  name: "Download",

  data: function data() {
    return {
      rowList: ""
    };
  },
  computed: {},
  beforeCreate() {
    let reqURL = reqURLCurrent + "/ajax/list/img";
    this.$http.get(reqURL).then(res => {
      if (res.data.status) {
        this.rowList = res.data.imgList;
      }
    });
  },
  methods: {
    download(row) {
      let reqURL = reqURLCurrent + "/ajax/canidownload";
      this.$http.post(reqURL, { data: { row } }).then(res => {
        if (res.data.status) {
          debugger;
          this.msg = res.data.msg;
        }
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
