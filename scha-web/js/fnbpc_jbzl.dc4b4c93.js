(function(e){function t(t){for(var r,n,i=t[0],s=t[1],c=t[2],p=0,u=[];p<i.length;p++)n=i[p],o[n]&&u.push(o[n][0]),o[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(u.length)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={fnbpc_jbzl:0},o={fnbpc_jbzl:0},l=[];function i(e){return s.p+"js/"+({Datagrid:"Datagrid",FormTable:"FormTable",FormTableItem:"FormTableItem",AvatarUpload:"AvatarUpload",CInputSearch:"CInputSearch"}[e]||e)+"."+{Datagrid:"37d6e244",FormTable:"d4579f4b",FormTableItem:"3ea633cb",AvatarUpload:"f5a8c0c6",CInputSearch:"cb6d2188"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={Datagrid:1,FormTable:1,FormTableItem:1,AvatarUpload:1,CInputSearch:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({Datagrid:"Datagrid",FormTable:"FormTable",FormTableItem:"FormTableItem",AvatarUpload:"AvatarUpload",CInputSearch:"CInputSearch"}[e]||e)+"."+{Datagrid:"aa0aa7d7",FormTable:"7aaaee07",FormTableItem:"05265851",AvatarUpload:"c3972a9f",CInputSearch:"05265851"}[e]+".css",o=s.p+r,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=l[i],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===r||p===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],p=c.getAttribute("data-href");if(p===r||p===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");l.request=r,delete n[e],d.parentNode.removeChild(d),a(l)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){n[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var l=new Promise(function(t,a){r=o[e]=[t,a]});t.push(r[2]=l);var c,p=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,l=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");l.type=r,l.request=n,a[1](l)}o[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,p.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/scha-web/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=p;l.push([14,"chunk-vendors","chunk-common"]),a()})({14:function(e,t,a){e.exports=a("d1a3")},d1a3:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("a026"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"silde-fade"}},[a("router-view")],1)],1)},o=[],l=(a("96cf"),a("1da1")),i=[{prop:"sjid",label:"sjid",colspan:1,rowspan:1},{prop:"bh",label:"编号",colspan:1,rowspan:1},{prop:"xm",label:"姓名",colspan:1,rowspan:1},{prop:"sfz_hm",label:"身份证号",colspan:1,rowspan:1},{prop:"nl",label:"年龄",colspan:1,rowspan:1},{prop:"lxdh",label:"联系电话",colspan:1,rowspan:1},{prop:"yjc",label:"已检查",colspan:1,rowspan:1},{prop:"jcjg",label:"检查结果",colspan:1,rowspan:1},{prop:"wh",label:"操作",colspan:1,rowspan:1}],s={ttmc:"请输入团体（个人）名称",fzrxm:"",fzrlxdh:"",ttbh:"5134011901001",yyrq:"",zrs:"0",ttlx:"团体",jcrs:""},c=[{title:"团体/个人",rows:[[{rowspan:1,colspan:1,items:[{prop:"ttmc",placeholder:"请输入团体（个人）名称",label:"团体名称",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"fzrxm",placeholder:"请输入负责人姓名",label:"负责人姓名",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"fzrlxdh",placeholder:"请输入联系电话",label:"联系电话",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"ttbh",placeholder:null,label:"团体编号",readonly:"true",type:"input"}],width:"",type:"input"}],[{rowspan:1,colspan:1,items:[{prop:"yyrq",placeholder:"请输入预约日期",label:"预约日期",type:"date.picker"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"zrs",placeholder:"请输入总体检人数",label:"总人数",type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"ttlx",placeholder:"请输入个体类型",label:"个体类型",required:!0,type:"select"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"jcrs",placeholder:null,label:"检查人数",readonly:"true",type:"input"}],width:"",type:"input"}]],cellspacing:"5"}],p={ttmc:[{required:!0,message:"不能为空",trigger:"blur"}],fzrxm:[{required:!0,message:"不能为空",trigger:"blur"}],fzrlxdh:[{required:!0,message:"不能为空",trigger:"blur"}],ttlx:[{required:!0,message:"不能为空",trigger:"blur"}]},u={bh:"5134011901001001",xm:"张三"+Date.now(),sfzh:Date.now(),csrq:"2019-01-04",nl:"",hjfl:"",cxfl:"",jzlx:"",lxdh:"1999999",whcd:"",mz:"",hyzk:"",gzdwmc:"请输入团体（个人）名称",zy:"",gms:"",hkdzdqfhmc:"hkdzdqfhmc",jtzzdqfhmc:"jtzzdqfhmc"},d=[{title:"添加个人资料窗口",rows:[[{rowspan:1,colspan:1,items:[{prop:"bh",placeholder:null,label:"编号",readonly:"true",type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"xm",placeholder:"请输入姓名",label:"姓名",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"sfzh",placeholder:"请输入身份证号",label:"身份证号",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"csrq",placeholder:"请输入出生日期",label:"出生日期",required:!0,type:"date.picker"}],width:"",type:"input"}],[{rowspan:1,colspan:1,items:[{prop:"nl",placeholder:"请输入年龄",label:"当前年龄",type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"hjfl",placeholder:"请选择户籍类型",label:"户籍类型",bind:{id:"hjfl",type:"combobox",lx:"sjzd",key:"010126",isnull:"false"},type:"select"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"cxfl",placeholder:"请选择城乡分类",label:"城乡分类",bind:{id:"cxfl",type:"combobox",lx:"sjzd",key:"010117",isnull:"false"},type:"select"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"jzlx",placeholder:"请选择居住类型",label:"居住类型",bind:{id:"jzlx",type:"combobox",lx:"sjzd",key:"4020305",isnull:"false"},type:"select"}],width:"",type:"input"}],[{rowspan:1,colspan:1,items:[{prop:"lxdh",placeholder:"请输入联系电话",label:"联系电话",required:!0,type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"whcd",placeholder:"请选择文化程度",label:"文化程度",bind:{id:"whcd",type:"combobox",lx:"sjzd",key:"gb05",isnull:"false"},type:"select"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"mz",placeholder:"请选择民族",label:"民族",bind:{id:"mz",type:"combobox",lx:"sjzd",key:"gb04",isnull:"false"},type:"select"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"hyzk",placeholder:"请选择婚姻状况",label:"婚姻状况",bind:{id:"hyzk",type:"combobox",lx:"sjzd",key:"010125",isnull:"false"},type:"select"}],width:"",type:"input"}],[{rowspan:1,colspan:2,items:[{prop:"hkdzdqfhmc",placeholder:"请选择户口地址",label:"户口地址",required:!0,type:"search"}],width:"",type:"input"},{rowspan:1,colspan:2,items:[{prop:"jtzzdqfhmc",placeholder:"请选择家庭住址",label:"家庭住址",required:!0,type:"search"}],width:"",type:"input"}],[{rowspan:1,colspan:2,items:[{prop:"gzdwmc",placeholder:"请输入工作单位",label:"工作单位",type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"zy",placeholder:"请输入职业",label:"职业",type:"input"}],width:"",type:"input"},{rowspan:1,colspan:1,items:[{prop:"gms",placeholder:"请选择过敏史",label:"过敏史",multiple:!0,bind:{id:"gms",type:"combobox",lx:"sjzd",key:"092203",isnull:"false"},type:"select"}],width:"",type:"input"}]],cellspacing:"5"}],h={xm:[{required:!0,message:"不能为空",trigger:"blur"}],sfzh:[{required:!0,message:"不能为空",trigger:"blur"}],csrq:[{required:!0,message:"不能为空",trigger:"blur"}],lxdh:[{required:!0,message:"不能为空",trigger:"blur"}],hkdzdqfhmc:[{required:!0,message:"不能为空",trigger:"blur"}],jtzzdqfhmc:[{required:!0,message:"不能为空",trigger:"blur"}]},m={name:"AppRoot",provide:function(){return{APP:this}},data:function(){return{model:s,modelMainList:[],modelAdd:{},modelUpdate:{},modelDetail:u,dslArray:c,rules:p,dslTableHeader:i,modelMainListDataGrid:{page:1,size:10,total:0},modelGRZL:u,dslArrayGRZL:d,rulesGRZL:h}},methods:{getMainList:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.modelMainListDataGrid,console.log("getMainList",t),e.prev=2,e.next=5,this.$post("/proxy/get",{coll:"fnbpc_jbzl",doc:{},pageInfo:t});case 5:a=e.sent,r=a.isSuccess,n=a.data,r&&(this.modelMainList=n,this.modelMainListDataGrid.total=n.length),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[2,11]])}));function t(){return e.apply(this,arguments)}return t}()},watch:{"modelMainListDataGrid.page":function(e,t){console.log("newPage, oldPage",e,t),this.getMainList()}}},f=m,b=(a("a7a0"),a("241f"),a("2877")),g=Object(b["a"])(f,n,o,!1,null,null,null);g.options.__file="App.vue";var y=g.exports,w=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view column"},[a("main",{staticClass:"main"},[a("div",{staticClass:"tool-bar fixed"},[a("el-button",{on:{click:function(t){e.goTo("add")}}},[e._v("新增")])],1),a("div",{staticClass:"tool-bar"}),a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:"个人列表",name:"个人列表"}},[a("c-datagrid",{attrs:{tableData:[],tableHeader:[],info:e.APP.modelMainListDataGrid},on:{currentPageChange:e.handleCurrentPageChange}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.APP.modelMainList,height:"400"},on:{"row-dblclick":e.handleClickTableRow}},[e._l(e.APP.dslTableHeader,function(t,r){return[t.type?t.type===e.TYPE.BUTTON_UPDATE_DELETE?a("el-table-column",{key:r,attrs:{prop:t.prop,label:t.label,width:t.width},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"oprations"},[a("el-button",{attrs:{icon:"el-icon-edit"},on:{click:function(a){e.handleButtonUpdate(t.row,t)}}}),a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){e.handleButtonDelete(t.row,t)}}})],1)]}}])}):a("el-table-column",{key:r,attrs:{prop:t.prop,label:t.label}}):a("el-table-column",{key:r,class:"t-column-"+r,attrs:{prop:t.prop,label:t.label,width:t.width}})]})],2)],1)],1)],1)],1)])},x=[],P={computed:{},methods:{},watch:{},components:{CTable:function(){return a.e("FormTable").then(a.bind(null,"1b52"))},CDatagrid:function(){return a.e("Datagrid").then(a.bind(null,"5710"))}}},k={name:"FnbpcFkjc",inject:["APP"],mixins:[P],mounted:function(){this.activeNames.push("个人列表"),console.log("this.APP.dslTableHeader",this.APP.dslTableHeader),this.APP.getMainList()},data:function(){return{activeNames:[]}},methods:{goTo:function(e){this.$router.push({name:e})},handleCurrentPageChange:function(e){this.APP.modelMainListDataGrid.page=e},handleClickTableRow:function(e,t,a,r){console.log("row, column, cell, event\n",e,t,a,r),this.APP.modelDetail=e,this.goTo("detail")}},computed:{}},T=k,j=Object(b["a"])(T,v,x,!1,null,null,null);j.options.__file="Main.vue";var z=j.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view column"},[a("main",{staticClass:"main"},[a("div",{staticClass:"tool-bar fixed"},["add"===e.currentPath?[a("el-button",{on:{click:function(t){e.goTo("home",!0)}}},[e._v("放弃编辑")]),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])]:e._e(),"detail"===e.currentPath?[a("el-button",{on:{click:function(t){e.goTo("home")}}},[e._v("返回列表")]),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(t){e.goTo("update")}}},[e._v("修改")]),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:function(t){e.goTo("remove")}}},[e._v("删除")])]:e._e(),"update"===e.currentPath?[a("el-button",{on:{click:function(t){e.goTo("detail",!0)}}},[e._v("放弃编辑")]),a("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")])]:e._e()],2),a("div",{staticClass:"tool-bar"}),a("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[a("el-collapse-item",{attrs:{title:e.title,name:"个人列表"}},[a("c-table",{ref:"topTabe",staticClass:"box-card",attrs:{dsl:e.APP.dslArrayGRZL[0].rows,rules:e.APP.rulesGRZL,tableInfo:e.APP.dslArrayGRZL[0],disabled:e.isDisabled},model:{value:e.currentModel,callback:function(t){e.currentModel=t},expression:"currentModel"}})],1)],1)],1)])},_=[],q=a("53ca"),C=(a("7f7f"),{name:"FnbpcFkjc",inject:["APP"],mixins:[P],mounted:function(){},beforeRouteEnter:function(e,t,a){a(function(t){console.warn("beforeRouteEnter",e.name),t.activeNames=["个人列表"];var a=e.name,r={add:function(){t.currentModel=function(e){var t={};for(var a in e)t[a]="";return t}(t.APP.modelDetail),console.log(t.currentModel)},detail:function(){t.currentModel=JSON.parse(JSON.stringify(t.APP.modelDetail))},update:function(){t.currentModel=JSON.parse(JSON.stringify(t.APP.modelDetail))}};r[a]&&r[a]()})},beforeRouteUpdate:function(e,t,a){a()},beforeRouteLeave:function(e,t,a){a()},data:function(){return{activeNames:[],currentModel:{}}},methods:{goTo:function(e,t){var a=this;"remove"===e?this.$confirm("确实要删除当前的表单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=a.$loading();console.log(a.currentModel),setTimeout(function(){a.afterRemove(e)},2e3)}).catch(function(e){console.log("cancel",e)}):t?this.$confirm("确实离开?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$router.push({name:e})}).catch(function(e){console.log("cancel",e)}):this.$router.push({name:e})},save:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=function(e){if("object"===Object(q["a"])(e))return e.valid()},console.log(this.APP.currentModel),a=this.$loading(),e.prev=3,e.next=6,t(this.$refs.topTabe);case 6:if(r=e.sent,n=this.currentModel,!r){e.next=23;break}return e.next=11,this.$post("/proxy/save",{coll:"fnbpc_jbzl",doc:n});case 11:if(o=e.sent,!o.isSuccess){e.next=19;break}"update"===this.$route.name&&(this.APP.modelDetail=n,this.APP.getMainList()),a.close(),this.$router.push({name:"detail"}),this.$message({showClose:!0,message:"保存成功",type:"success"}),e.next=21;break;case 19:throw console.log(o.data),new Error("error");case 21:e.next=24;break;case 23:throw new Error("请按照提示检查输入项");case 24:e.next=29;break;case 26:e.prev=26,e.t0=e["catch"](3),this.$message({showClose:!0,message:e.t0.message,type:"warning"});case 29:a.close();case 30:case"end":return e.stop()}},e,this,[[3,26]])}));function t(){return e.apply(this,arguments)}return t}(),afterRemove:function(e){this.APP.model={},this.activeNames=["query"],e.close(),this.goTo("home"),this.$message({showClose:!0,message:"删除成功",type:"success"}),this.APP.query()}},computed:{currentPath:function(){return this.$route.name},isDisabled:function(){return"detail"===this.currentPath},title:function(){var e={update:"更新",add:"新增",detail:"详情"};return"个人信息——"+e[this.currentPath]}}}),M=C,D=Object(b["a"])(M,A,_,!1,null,null,null);D.options.__file="MainAdd.vue";var L=D.exports;r["default"].use(w["a"]);var $=new w["a"]({routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:z},{path:"/add",name:"add",component:L},{path:"/update",name:"update",component:L},{path:"/detail",name:"detail",component:L}]}),S=(a("7378"),a("fa6d"),a("13af")),N=a("f65b");r["default"].prototype.$global=N["a"],r["default"].prototype.$post=S["b"],r["default"].prototype.$get=S["a"],r["default"].config.productionTip=!1,new r["default"]({router:$,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=fnbpc_jbzl.dc4b4c93.js.map