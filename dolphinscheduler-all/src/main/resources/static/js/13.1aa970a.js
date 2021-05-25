(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1229:function(t,e,s){"use strict";s.r(e);var i=s(1230),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},1230:function(t,e,s){"use strict";e.__esModule=!0;var i=d(s(28)),n=s(198),a=d(s(1581)),r=d(s(1237)),u=d(s(736)),o=d(s(740)),c=d(s(753)),l=d(s(746)),f=d(s(735));function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"users-index",data:function(){return{total:null,isLoading:!0,userList:[],searchParams:{pageSize:10,pageNo:1,searchVal:""},isLeft:!0}},mixins:[c.default],props:{},methods:Object.assign({},(0,n.mapActions)("security",["getUsersListP"]),{_onConditions:function(t){this.searchParams=i.default.assign(this.searchParams,t),this.searchParams.pageNo=1},_page:function(t){this.searchParams.pageNo=t},_pageSize:function(t){this.searchParams.pageSize=t},_onUpdate:function(){this._debounceGET()},_onEdit:function(t){this._create(t)},_create:function(t){var e=this,s=this.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(i){return i(r.default,{on:{onUpdate:function(){e._debounceGET("false"),s.remove()},close:function(){s.remove()}},props:{item:t}})}})},_getList:function(t){var e=this;0==sessionStorage.getItem("isLeft")?this.isLeft=!1:this.isLeft=!0,this.isLoading=!t,this.getUsersListP(this.searchParams).then((function(t){e.searchParams.pageNo>1&&0==t.totalList.length?e.searchParams.pageNo=e.searchParams.pageNo-1:(e.userList=[],e.userList=t.totalList,e.total=t.total,e.isLoading=!1)})).catch((function(t){e.isLoading=!1}))}}),watch:{$route:function(t){this.searchParams.pageNo=i.default.isEmpty(t.query)?1:t.query.pageNo}},created:function(){},mounted:function(){this.$modal.destroy()},beforeDestroy:function(){sessionStorage.setItem("isLeft",1)},components:{mList:a.default,mListConstruction:f.default,mConditions:l.default,mSpin:u.default,mNoData:o.default}}},1231:function(t,e,s){"use strict";s.r(e);var i=s(1232),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},1232:function(t,e,s){"use strict";e.__esModule=!0;var i=o(s(28)),n=o(s(20)),a=s(198),r=o(s(1233)),u=o(s(1582));function o(t){return t&&t.__esModule?t:{default:t}}e.default={name:"user-list",data:function(){return{list:[]}},props:{userList:Array,pageNo:Number,pageSize:Number},methods:Object.assign({},(0,a.mapActions)("security",["deleteUser","getAuthList","grantAuthorization","getResourceList"]),{_closeDelete:function(t){this.$refs["poptip-delete-"+t][0].doClose()},_delete:function(t,e){var s=this;this.deleteUser({id:t.id}).then((function(t){s.$refs["poptip-delete-"+e][0].doClose(),s.$emit("on-update"),s.$message.success(t.msg)})).catch((function(t){s.$refs["poptip-delete-"+e][0].doClose(),s.$message.error(t.msg||"")}))},_edit:function(t){this.$emit("on-edit",t)},_authProject:function(t,e){var s=this;this.$refs["poptip-auth-"+e][0].doClose(),this.getAuthList({id:t.id,type:"project",category:"projects"}).then((function(e){var a=i.default.map(e[0],(function(t){return{id:t.id,name:t.name}})),u=i.default.map(e[1],(function(t){return{id:t.id,name:t.name}})),o=s,c=s.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(e){return e(r.default,{on:{onUpdate:function(e){o._grantAuthorization("users/grant-project",{userId:t.id,projectIds:e}),c.remove()},close:function(){c.remove()}},props:{sourceListPrs:a,targetListPrs:u,type:{name:""+n.default.$t("Project")}}})}})}))},getAllLeaf:function(t){var e=[];return function t(s){s.forEach((function(s){0==s.children.length?e.push(s):t(s.children)}))}(t),e},_authFile:function(t,e){var s=this;this.$refs["poptip-auth-"+e][0].doClose(),this.getResourceList({id:t.id,type:"file",category:"resources"}).then((function(e){var a=[],r=[];e[0].forEach((function(t,e,s){"FILE"==t.type?a.push(t):r.push(t)}));var o=[],c=[],l=[];e[1].forEach((function(t){var e=[];e[0]=t,s.getAllLeaf(e).length>0&&l.push(s.getAllLeaf(e)[0])})),e[1].forEach((function(t,e,s){"FILE"==t.type?o.push(t):c.push(t)})),o=i.default.map(o,(function(t){return t.id})),c=i.default.map(c,(function(t){return t.id}));var f=s,d=s.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(e){return e(u.default,{on:{onUpdate:function(e){f._grantAuthorization("users/grant-file",{userId:t.id,resourceIds:e}),d.remove()},close:function(){d.remove()}},props:{fileSourceList:a,udfSourceList:r,fileTargetList:o,udfTargetList:c,type:{name:""+n.default.$t("Resources")}}})}})}))},_authDataSource:function(t,e){var s=this;this.$refs["poptip-auth-"+e][0].doClose(),this.getAuthList({id:t.id,type:"datasource",category:"datasources"}).then((function(e){var a=i.default.map(e[0],(function(t){return{id:t.id,name:t.name}})),u=i.default.map(e[1],(function(t){return{id:t.id,name:t.name}})),o=s,c=s.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(e){return e(r.default,{on:{onUpdate:function(e){o._grantAuthorization("users/grant-datasource",{userId:t.id,datasourceIds:e}),c.remove()},close:function(){c.remove()}},props:{sourceListPrs:a,targetListPrs:u,type:{name:""+n.default.$t("Datasource")}}})}})}))},_authUdfFunc:function(t,e){var s=this;this.$refs["poptip-auth-"+e][0].doClose(),this.getAuthList({id:t.id,type:"udf-func",category:"resources"}).then((function(e){var n=i.default.map(e[0],(function(t){return{id:t.id,name:t.funcName}})),a=i.default.map(e[1],(function(t){return{id:t.id,name:t.funcName}})),u=s,o=s.$modal.dialog({closable:!1,showMask:!0,escClose:!0,className:"v-modal-custom",transitionName:"opacityp",render:function(e){return e(r.default,{on:{onUpdate:function(e){u._grantAuthorization("users/grant-udf-func",{userId:t.id,udfIds:e}),o.remove()},close:function(){o.remove()}},props:{sourceListPrs:n,targetListPrs:a,type:{name:"UDF Function"}}})}})}))},_grantAuthorization:function(t,e){var s=this;this.grantAuthorization({api:t,param:e}).then((function(t){s.$message.success(t.msg)})).catch((function(t){s.$message.error(t.msg||"")}))}}),watch:{userList:function(t){var e=this;this.list=[],setTimeout((function(){e.list=t}))}},created:function(){this.list=this.userList},mounted:function(){},components:{}}},1233:function(t,e,s){"use strict";s.r(e);var i=s(1301),n=s(912);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);s(1234);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},1234:function(t,e,s){"use strict";s(985)},1235:function(t,e,s){"use strict";s.r(e);var i=s(1236),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},1236:function(t,e,s){"use strict";e.__esModule=!0;var i=u(s(28)),n=u(s(54)),a=u(s(53)),r=u(s(761));function u(t){return t&&t.__esModule?t:{default:t}}s(762),e.default={name:"transfer",data:function(){return{valueConsistsOf:"LEAF_PRIORITY",checkedValue:"fileResource",sourceList:this.fileSourceList,targetList:this.fileTargetList,cacheSourceList:this.fileSourceList,cacheTargetList:this.fileTargetList,fileSource:this.fileSourceList,fileList:[],udfList:[],selectFileSource:[],selectUdfSource:[],fileTarget:this.fileTargetList,udfSource:this.udfSourceList,udfTarget:this.udfTargetList,searchSourceVal:"",searchTargetVal:"",value:null,normalizer:function(t){return{label:t.name}}}},props:{type:Object,fileSourceList:Array,udfSourceList:Array,fileTargetList:Array,udfTargetList:Array},created:function(){var t=this.fileSourceList,e=this.udfSourceList;this.diGuiTree(t),this.diGuiTree(e),this.fileList=t,this.udfList=e,this.selectFileSource=this.fileTargetList,this.selectUdfSource=this.udfTargetList},methods:{getParent:function(t,e){var s=[];if(0==t.length)return e&&s.unshift(t),s;return s=function e(i,n){for(var a=0,r=i.length;a<r;a++){var u=i[a];if(u.id==n){s.unshift(u),e(t,u.pid);break}u.children&&e(u.children,n)}return s}(t,e)},_ok:function(){var t=this,e=[],s=[];this.selectFileSource.forEach((function(i){t.fileList.forEach((function(n){var a=[];a[0]=n,t.getParent(a,i).length>0&&(e=t.getParent(a,i).map((function(t){return t.id})),s.push(e.join("-")))}))}));var n=[],a=[];this.selectUdfSource.forEach((function(e){t.udfList.forEach((function(s){var i=[];i[0]=s,t.getParent(i,e).length>0&&(n=t.getParent(i,e).map((function(t){return t.id})),a.push(n.join("-")))}))}));var r=s.concat(a);this.$refs.popup.spinnerLoading=!0,setTimeout((function(){t.$refs.popup.spinnerLoading=!1,t.$emit("onUpdate",i.default.map(r,(function(t){return t})).join(","))}),800)},_ckFile:function(){this.checkedValue="fileResource",this.sourceList=this.fileSource,this.targetList=this.fileTarget,this.cacheSourceList=this.fileSource,this.cacheTargetList=this.fileTarget},_ckUDf:function(){this.checkedValue="udfResource",this.sourceList=this.udfSource,this.targetList=this.udfTarget,this.cacheSourceList=this.udfSource,this.cacheTargetList=this.udfTarget},_sourceQuery:function(){var t=this;this.sourceList=this.sourceList.filter((function(e){return e.name.indexOf(t.searchSourceVal)>-1}))},_targetQuery:function(){var t=this;this.targetList=this.targetList.filter((function(e){return e.name.indexOf(t.searchTargetVal)>-1}))},_ckSource:function(t){this.targetList=this.cacheTargetList,this.targetList.unshift(t),this.searchTargetVal="";var e=i.default.findIndex(this.sourceList,(function(e){return t.id===e.id}));this.sourceList.splice(e,1);var s=i.default.findIndex(this.cacheSourceList,(function(e){return t.id===e.id}));-1!==s&&this.cacheSourceList.splice(s,1),"fileResource"==this.checkedValue?(this.fileTarget=this.targetList,this.fileSource=this.sourceList):(this.udfTarget=this.targetList,this.udfSource=this.sourceList)},_ckTarget:function(t){this.sourceList=this.cacheSourceList,this.sourceList.unshift(t),this.searchSourceVal="";var e=i.default.findIndex(this.targetList,(function(e){return t.id===e.id}));this.targetList.splice(e,1);var s=i.default.findIndex(this.cacheTargetList,(function(e){return t.id===e.id}));-1!==s&&this.cacheTargetList.splice(s,1),"fileResource"==this.checkedValue?(this.fileSource=this.sourceList,this.fileTarget=this.targetList):(this.udfSource=this.sourceList,this.udfTarget=this.targetList)},diGuiTree:function(t){var e=this;t.forEach((function(t){""===t.children||void 0===t.children||null===t.children||0===t.children.length?e.operationTree(t):e.diGuiTree(t.children)}))},operationTree:function(t){t.dirctory&&(t.isDisabled=!0),delete t.children}},watch:{searchSourceVal:function(t){t?this._sourceQuery():this.sourceList=i.default.cloneDeep(this.cacheSourceList)},searchTargetVal:function(t){t?this._targetQuery():this.targetList=i.default.cloneDeep(this.cacheTargetList)}},components:{mPopup:n.default,mListBoxF:a.default,Treeselect:r.default}}},1237:function(t,e,s){"use strict";s.r(e);var i=s(1298),n=s(914);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},1298:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-popup",{ref:"popup",attrs:{"ok-text":t.item?t.$t("Edit"):t.$t("Submit"),nameText:t.item?t.$t("Edit User"):t.$t("Create User")},on:{ok:t._ok}},[s("template",{slot:"content"},[s("div",{staticClass:"create-user-model"},[s("m-list-box-f",[s("template",{slot:"name"},[s("strong",[t._v("*")]),t._v(t._s(t.$t("User Name")))]),t._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",maxlength:"60",placeholder:t.$t("Please enter user name")},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1)],2),t._v(" "),"account"!==t.router.history.current.name?s("m-list-box-f",[s("template",{slot:"name"},[s("strong",[t._v("*")]),t._v(t._s(t.$t("Password")))]),t._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"password",placeholder:t.$t("Please enter your password")},model:{value:t.userPassword,callback:function(e){t.userPassword=e},expression:"userPassword"}})],1)],2):t._e(),t._v(" "),t.isADMIN?s("m-list-box-f",[s("template",{slot:"name"},[s("strong",[t._v("*")]),t._v(t._s(t.$t("Tenant")))]),t._v(" "),s("template",{slot:"content"},[s("x-select",{staticStyle:{width:"100%"},model:{value:t.tenantId,callback:function(e){t.tenantId=e},expression:"tenantId"}},t._l(t.tenantList,(function(t){return s("x-option",{key:t.id,attrs:{value:t.id,label:t.code}})})),1)],1)],2):t._e(),t._v(" "),t.isADMIN?s("m-list-box-f",[s("template",{slot:"name"},[t._v(t._s(t.$t("Queue")))]),t._v(" "),s("template",{slot:"content"},[s("x-select",{staticStyle:{width:"100%"},scopedSlots:t._u([{key:"trigger",fn:function(e){var i=e.selectedModel;return s("x-input",{attrs:{readonly:"",placeholder:t.$t("Please select a queue"),value:i?i.label:""},on:{"on-click-icon":function(e){e.stopPropagation(),t.queueName=""}}},[s("em",{directives:[{name:"show",rawName:"v-show",value:""==t.queueName,expression:"queueName ==''"}],staticClass:"ans-icon-fail-solid",staticStyle:{"font-size":"15px",cursor:"pointer"},attrs:{slot:"suffix"},slot:"suffix"}),t._v(" "),s("em",{directives:[{name:"show",rawName:"v-show",value:""!=t.queueName,expression:"queueName!=''"}],staticClass:"ans-icon-arrow-down",staticStyle:{"font-size":"12px"},attrs:{slot:"suffix"},slot:"suffix"})])}}],null,!1,106862924),model:{value:t.queueName,callback:function(e){t.queueName=e},expression:"queueName"}},[t._v(" "),t._l(t.queueList,(function(t){return s("x-option",{key:t.id,attrs:{value:t.id,label:t.code}})}))],2)],1)],2):t._e(),t._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[s("strong",[t._v("*")]),t._v(t._s(t.$t("Email")))]),t._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:t.$t("Please enter email")},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],2),t._v(" "),s("m-list-box-f",[s("template",{slot:"name"},[t._v(t._s(t.$t("Phone")))]),t._v(" "),s("template",{slot:"content"},[s("x-input",{attrs:{type:"input",placeholder:t.$t("Please enter phone number")},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)],2)],1)])],2)},n=[]},1301:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-popup",{ref:"popup",attrs:{"ok-text":t.$t("Submit"),nameText:t.type.name+t.$t("Authorize")},on:{ok:t._ok}},[s("template",{slot:"content"},[s("div",{staticClass:"clearfix transfer-model"},[s("div",{staticClass:"select-list-box"},[s("div",{staticClass:"tf-header"},[s("div",{staticClass:"title"},[t._v(t._s(t.type.name)+t._s(t.$t("List")))]),t._v(" "),s("div",{staticClass:"count"},[t._v("（"+t._s(t.cacheSourceList.length)+"）")])]),t._v(" "),s("div",{staticClass:"scrollbar tf-content"},[s("ul",t._l(t.sourceList,(function(e,i){return s("li",{key:i,on:{click:function(s){return t._ckSource(e)}}},[s("span",[t._v(t._s(e.name))]),t._v(" "),s("a",{attrs:{href:"javascript:"}})])})),0)])]),t._v(" "),s("div",{staticClass:"select-oper-box"},[t._v(" ")]),t._v(" "),s("div",{staticClass:"select-list-box"},[s("div",{staticClass:"tf-header"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("Selected"))+t._s(t.type.name))]),t._v(" "),s("div",{staticClass:"count"},[t._v("（"+t._s(t.cacheTargetList.length)+"）")])]),t._v(" "),s("div",{staticClass:"scrollbar tf-content"},[s("ul",t._l(t.targetList,(function(e,i){return s("li",{key:i,on:{click:function(s){return t._ckTarget(e)}}},[s("span",[t._v(t._s(e.name))])])})),0)])])])])],2)},n=[]},1369:function(t,e,s){},1370:function(t,e,s){},1581:function(t,e,s){"use strict";s.r(e);var i=s(1685),n=s(1231);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);s(1584);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},1582:function(t,e,s){"use strict";s.r(e);var i=s(1707),n=s(1235);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);s(1583);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},1583:function(t,e,s){"use strict";s(1369)},1584:function(t,e,s){"use strict";s(1370)},1641:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-list-construction",{attrs:{title:t.$t("User Manage")}},[s("template",{slot:"conditions"},[s("m-conditions",{on:{"on-conditions":t._onConditions}},[t.userList.length?s("template",{slot:"button-group"},[s("x-button",{attrs:{type:"ghost",size:"small"},on:{click:function(e){return t._create("")}}},[t._v(t._s(t.$t("Create User")))])],1):t._e()],2)],1),t._v(" "),s("template",{slot:"content"},[t.userList.length||t.total>0?[s("m-list",{attrs:{"user-list":t.userList,"page-no":t.searchParams.pageNo,"page-size":t.searchParams.pageSize},on:{"on-edit":t._onEdit,"on-update":t._onUpdate}}),t._v(" "),s("div",{staticClass:"page-box"},[s("x-page",{attrs:{current:parseInt(t.searchParams.pageNo),total:t.total,"page-size":t.searchParams.pageSize,"show-elevator":"","show-sizer":"","page-size-options":[10,30,50]},on:{"on-change":t._page,"on-size-change":t._pageSize}})],1)]:t._e(),t._v(" "),!t.userList.length&&t.total<=0?[s("m-no-data")]:t._e(),t._v(" "),s("m-spin",{attrs:{"is-spin":t.isLoading,"is-left":t.isLeft}})],2)],2)},n=[]},1685:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-model user-list-model"},[s("div",{staticClass:"table-box"},[s("table",[s("tr",[s("th",[s("span",[t._v(t._s(t.$t("#")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("User Name")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("User Type")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Tenant")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Queue")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Email")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Phone")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Create Time")))])]),t._v(" "),s("th",[s("span",[t._v(t._s(t.$t("Update Time")))])]),t._v(" "),s("th",{attrs:{scope:"col",width:"100"}},[s("span",[t._v(t._s(t.$t("Operation")))])])]),t._v(" "),t._l(t.list,(function(e,i){return s("tr",{key:e.id},[s("td",[s("span",[t._v(t._s(parseInt(1===t.pageNo?i+1:i+1+t.pageSize*(t.pageNo-1))))])]),t._v(" "),s("td",[s("span",[t._v("\n            "+t._s(e.userName||"-")+"\n          ")])]),t._v(" "),s("td",[s("span",[t._v(t._s("GENERAL_USER"===e.userType?""+t.$t("Ordinary users"):""+t.$t("Administrator")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(e.tenantName||"-"))])]),t._v(" "),s("td",[s("span",[t._v(t._s(e.queue||"-"))])]),t._v(" "),s("td",[s("span",[t._v(t._s(e.email||"-"))])]),t._v(" "),s("td",[s("span",[t._v(t._s(e.phone||"-"))])]),t._v(" "),s("td",[e.createTime?s("span",[t._v(t._s(t._f("formatDate")(e.createTime)))]):s("span",[t._v("-")])]),t._v(" "),s("td",[e.updateTime?s("span",[t._v(t._s(t._f("formatDate")(e.updateTime)))]):s("span",[t._v("-")])]),t._v(" "),s("td",[s("x-poptip",{ref:"poptip-auth-"+i,refInFor:!0,attrs:{"popper-class":"user-list-poptip",placement:"bottom-end"}},[s("div",{staticClass:"auth-select-box"},[s("a",{attrs:{href:"javascript:"},on:{click:function(s){return t._authProject(e,i)}}},[t._v(t._s(t.$t("Project")))]),t._v(" "),s("a",{attrs:{href:"javascript:"},on:{click:function(s){return t._authFile(e,i)}}},[t._v(t._s(t.$t("Resources")))]),t._v(" "),s("a",{attrs:{href:"javascript:"},on:{click:function(s){return t._authDataSource(e,i)}}},[t._v(t._s(t.$t("Datasource")))]),t._v(" "),s("a",{attrs:{href:"javascript:"},on:{click:function(s){return t._authUdfFunc(e,i)}}},[t._v(t._s(t.$t("UDF Function")))])]),t._v(" "),s("template",{slot:"reference"},[s("x-button",{attrs:{type:"warning",shape:"circle",size:"xsmall","data-toggle":"tooltip",title:t.$t("Authorize"),icon:"ans-icon-user-empty",disabled:"ADMIN_USER"===e.userType}})],1)],2),t._v(" "),s("x-button",{attrs:{type:"info",shape:"circle",size:"xsmall","data-toggle":"tooltip",icon:"ans-icon-edit",title:t.$t("Edit")},on:{click:function(s){return t._edit(e)}}}),t._v(" "),s("x-poptip",{ref:"poptip-delete-"+i,refInFor:!0,attrs:{placement:"bottom-end",width:"90"}},[s("p",[t._v(t._s(t.$t("Delete?")))]),t._v(" "),s("div",{staticStyle:{"text-align":"right",margin:"0","padding-top":"4px"}},[s("x-button",{attrs:{type:"text",size:"xsmall",shape:"circle"},on:{click:function(e){return t._closeDelete(i)}}},[t._v(t._s(t.$t("Cancel")))]),t._v(" "),s("x-button",{attrs:{type:"primary",size:"xsmall",shape:"circle"},on:{click:function(s){return t._delete(e,i)}}},[t._v(t._s(t.$t("Confirm")))])],1),t._v(" "),s("template",{slot:"reference"},[s("x-button",{attrs:{type:"error",shape:"circle",size:"xsmall","data-toggle":"tooltip",title:t.$t("delete"),disabled:"ADMIN_USER"===e.userType,icon:"ans-icon-trash"}})],1)],2)],1)])}))],2)])])},n=[]},1707:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-popup",{ref:"popup",attrs:{"ok-text":t.$t("Submit"),nameText:t.type.name+t.$t("Authorize")},on:{ok:t._ok}},[s("template",{slot:"content"},[s("div",{staticClass:"clearfix transfer-model",staticStyle:{width:"660px"}},[s("div",[s("x-button-group",{attrs:{size:"small"},model:{value:t.checkedValue,callback:function(e){t.checkedValue=e},expression:"checkedValue"}},[s("x-button",{attrs:{type:"ghost",value:"fileResource"},on:{click:t._ckFile}},[t._v(t._s(t.$t("File resources")))]),t._v(" "),s("x-button",{attrs:{type:"ghost",value:"udfResource"},on:{click:t._ckUDf}},[t._v(t._s(t.$t("UDF resources")))])],1)],1),t._v(" "),s("treeselect",{directives:[{name:"show",rawName:"v-show",value:"fileResource"==t.checkedValue,expression:"checkedValue=='fileResource'"}],staticStyle:{"max-height":"260px"},attrs:{multiple:!0,options:t.fileList,normalizer:t.normalizer,"value-consists-of":t.valueConsistsOf,placeholder:t.$t("Please select resources")},scopedSlots:t._u([{key:"value-label",fn:function(e){var i=e.node;return s("div",{},[t._v(t._s(i.raw.fullName))])}}]),model:{value:t.selectFileSource,callback:function(e){t.selectFileSource=e},expression:"selectFileSource"}}),t._v(" "),s("treeselect",{directives:[{name:"show",rawName:"v-show",value:"udfResource"==t.checkedValue,expression:"checkedValue=='udfResource'"}],attrs:{multiple:!0,options:t.udfList,normalizer:t.normalizer,"value-consists-of":t.valueConsistsOf,placeholder:t.$t("Please select resources")},scopedSlots:t._u([{key:"value-label",fn:function(e){var i=e.node;return s("div",{},[t._v(t._s(i.raw.fullName))])}}]),model:{value:t.selectUdfSource,callback:function(e){t.selectUdfSource=e},expression:"selectUdfSource"}})],1)])],2)},n=[]},707:function(t,e,s){"use strict";s.r(e);var i=s(1641),n=s(1229);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},724:function(t,e,s){"use strict";s.r(e);var i=s(725),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},725:function(t,e,s){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},726:function(t,e,s){"use strict";s.r(e);var i=s(727),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},727:function(t,e,s){"use strict";e.__esModule=!0,e.default={name:"spin",data:function(){return{}},props:{isSpin:{type:Boolean,default:!0},isLeft:{type:Boolean,default:!0}}}},728:function(t,e,s){"use strict";s.r(e);var i=s(729),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},729:function(t,e,s){"use strict";e.__esModule=!0,e.default={name:"no-data",props:{msg:String,height:Number}}},730:function(t,e,s){},732:function(t,e,s){"use strict";s.r(e);var i=s(733),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},733:function(t,e,s){"use strict";e.__esModule=!0;var i,n=s(28),a=(i=n)&&i.__esModule?i:{default:i};e.default={name:"conditions",data:function(){return{searchVal:""}},props:{operation:Array},methods:{_ckQuery:function(){this.$emit("on-conditions",{searchVal:a.default.trim(this.searchVal)})}},computed:{isShow:function(){return this.$slots["search-group"]}},created:function(){a.default.isEmpty(this.$route.query)||(this.searchVal=this.$route.query.searchVal||"")},components:{}}},734:function(t,e,s){},735:function(t,e,s){"use strict";s.r(e);var i=s(738),n=s(724);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},736:function(t,e,s){"use strict";s.r(e);var i=s(739),n=s(726);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);s(737);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},737:function(t,e,s){"use strict";s(730)},738:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-main list-construction-model"},[e("div",{staticClass:"content-title"},[e("span",[this._v(this._s(this.title))])]),this._v(" "),e("div",{staticClass:"conditions-box"},[this._t("conditions")],2),this._v(" "),e("div",{staticClass:"list-box"},[this._t("content")],2)])},n=[]},739:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isSpin?s("div",{class:t.isLeft?"spin-sp2":"spin-sp1",attrs:{id:"spin-model"}},[s("div",{staticClass:"svg-box"},[s("svg",{staticClass:"lds-gears",staticStyle:{background:"none"},attrs:{width:"54px",height:"54px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[s("g",{attrs:{transform:"translate(50 50)"}},[s("g",{attrs:{transform:"translate(-19 -19) scale(0.6)"}},[s("g",{attrs:{transform:"rotate(107.866)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"0;360",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}}),s("path",{attrs:{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#0097e0"}})],1)]),t._v(" "),s("g",{attrs:{transform:"translate(19 19) scale(0.6)"}},[s("g",{attrs:{transform:"rotate(229.634)"}},[s("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"360;0",keyTimes:"0;1",dur:"1s",begin:"-0.0625s",repeatCount:"indefinite"}}),s("path",{attrs:{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#7f8b95"}})],1)])])]),t._v(" "),s("span",{staticClass:"sp1"},[t._v(t._s(t.$t("Loading...")))])])]):t._e()},n=[]},740:function(t,e,s){"use strict";s.r(e);var i=s(745),n=s(728);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);s(744);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},743:function(t,e,s){t.exports=s.p+"images/errorTip.png?a7b20f0ca8727f22f405c2a34d1363a0"},744:function(t,e,s){"use strict";s(734)},745:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-data-model",style:{height:this.height+"px"}},[e("div",{staticClass:"no-data-box"},[this._m(0),this._v(" "),e("div",{staticClass:"text"},[this._v(this._s(this.msg||this.$t("No data")))])])])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:s(743),alt:""}})])}]},746:function(t,e,s){"use strict";s.r(e);var i=s(747),n=s(732);for(var a in n)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(a);var r=s(7),u=Object(r.a)(n.default,i.a,i.b,!1,null,null,null);e.default=u.exports},747:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"conditions-model"},[s("div",{staticClass:"left"},[t._t("button-group")],2),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"form-box"},[t.isShow?t._t("search-group"):t._e(),t._v(" "),t.isShow?t._e():[s("div",{staticClass:"list"},[s("x-button",{attrs:{type:"ghost",size:"small",icon:"ans-icon-search"},on:{click:t._ckQuery}})],1),t._v(" "),s("div",{staticClass:"list"},[s("x-input",{staticStyle:{width:"180px"},attrs:{size:"small",placeholder:t.$t("Please enter keyword"),type:"text"},on:{"on-enterkey":t._ckQuery},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})],1)]],2)])])},n=[]},751:function(t,e,s){"use strict";e.__esModule=!0,e.setUrlParams=function(t){n.default.push({query:(0,i.default)(n.default.history.current.query,t)})};var i=a(s(766)),n=a(s(291));function a(t){return t&&t.__esModule?t:{default:t}}},753:function(t,e,s){"use strict";e.__esModule=!0;var i,n=s(28),a=(i=n)&&i.__esModule?i:{default:i},r=s(751);e.default={watch:{searchParams:{deep:!0,handler:function(){(0,r.setUrlParams)(this.searchParams),this._debounceGET()}}},created:function(){a.default.isEmpty(this.$route.query)||(this.searchParams=a.default.assign(this.searchParams,this.$route.query))},mounted:function(){this._debounceGET()},methods:{_debounceGET:a.default.debounce((function(t){this._getList(t)}),100,{leading:!1,trailing:!0})}}},912:function(t,e,s){"use strict";s.r(e);var i=s(913),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},913:function(t,e,s){"use strict";e.__esModule=!0;var i=r(s(28)),n=r(s(54)),a=r(s(53));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"transfer",data:function(){return{sourceList:this.sourceListPrs,targetList:this.targetListPrs,cacheSourceList:this.sourceListPrs,cacheTargetList:this.targetListPrs,searchSourceVal:"",searchTargetVal:""}},props:{sourceListPrs:Array,targetListPrs:Array,type:Object},methods:{_ok:function(){var t=this;this.$refs.popup.spinnerLoading=!0,setTimeout((function(){t.$refs.popup.spinnerLoading=!1,t.$emit("onUpdate",i.default.map(t.targetList,(function(t){return t.id})).join(","))}),800)},_sourceQuery:function(){var t=this;this.sourceList=this.sourceList.filter((function(e){return e.name.indexOf(t.searchSourceVal)>-1}))},_targetQuery:function(){var t=this;this.targetList=this.targetList.filter((function(e){return e.name.indexOf(t.searchTargetVal)>-1}))},_ckSource:function(t){this.targetList=this.cacheTargetList,this.targetList.unshift(t),this.searchTargetVal="";var e=i.default.findIndex(this.sourceList,(function(e){return t.id===e.id}));this.sourceList.splice(e,1);var s=i.default.findIndex(this.cacheSourceList,(function(e){return t.id===e.id}));-1!==s&&this.cacheSourceList.splice(s,1)},_ckTarget:function(t){this.sourceList=this.cacheSourceList,this.sourceList.unshift(t),this.searchSourceVal="";var e=i.default.findIndex(this.targetList,(function(e){return t.id===e.id}));this.targetList.splice(e,1);var s=i.default.findIndex(this.cacheTargetList,(function(e){return t.id===e.id}));-1!==s&&this.cacheTargetList.splice(s,1)}},watch:{searchSourceVal:function(t){t?this._sourceQuery():this.sourceList=i.default.cloneDeep(this.cacheSourceList)},searchTargetVal:function(t){t?this._targetQuery():this.targetList=i.default.cloneDeep(this.cacheTargetList)}},components:{mPopup:n.default,mListBoxF:a.default}}},914:function(t,e,s){"use strict";s.r(e);var i=s(915),n=s.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){s.d(e,t,(function(){return i[t]}))}(a);e.default=n.a},915:function(t,e,s){"use strict";e.__esModule=!0;var i=c(s(28)),n=c(s(20)),a=c(s(35)),r=c(s(291)),u=c(s(54)),o=c(s(53));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"create-user",data:function(){return{store:a.default,router:r.default,queueList:[],userName:"",userPassword:"",tenantId:"",queueName:"",email:"",phone:"",tenantList:[],isADMIN:"ADMIN_USER"===a.default.state.user.userInfo.userType&&"account"!==r.default.history.current.name}},props:{item:Object},methods:{_ok:function(){var t=this;if(this._verification()){if(this.item&&this.item.groupName===this.groupName)return void this._submit();this.store.dispatch("security/verifyName",{type:"user",userName:this.userName}).then((function(e){t._submit()})).catch((function(e){t.$message.error(e.msg||"")}))}},_verification:function(){var t=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]+$)[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、0-9A-Za-z]{6,22}$/,e=this.userName.length;if(e<3||e>39)return this.$message.warning(""+n.default.$t("User name length is between 3 and 39")),!1;if(!this.userName.replace(/\s*/g,""))return this.$message.warning(""+n.default.$t("Please enter user name")),!1;if(""!=this.userPassword&&this.item){if(!t.test(this.userPassword))return this.$message.warning(""+n.default.$t("Password consists of at least two combinations of numbers, letters, and characters, and the length is between 6-22")),!1}else if(!this.item&&!t.test(this.userPassword))return this.$message.warning(""+n.default.$t("Password consists of at least two combinations of numbers, letters, and characters, and the length is between 6-22")),!1;return this.email?/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(this.email)?!(this.phone&&!/^1(3|4|5|6|7|8)\d{9}$/.test(this.phone))||(this.$message.warning(""+n.default.$t("Please enter the correct mobile phone format")),!1):(this.$message.warning(""+n.default.$t("Please enter the correct email format")),!1):(this.$message.warning(""+n.default.$t("Please enter email")),!1)},_getQueueList:function(){var t=this;return new Promise((function(e,s){t.store.dispatch("security/getQueueList").then((function(s){t.queueList=i.default.map(s,(function(t){return{id:t.id,code:t.queueName}})),t.$nextTick((function(){t.queueName=t.queueList[0].id})),e()}))}))},_getTenantList:function(){var t=this;return new Promise((function(e,s){t.store.dispatch("security/getTenantList").then((function(s){var n=i.default.filter(s,(function(t){return-1!==t.id}));t.tenantList=i.default.map(n,(function(t){return{id:t.id,code:t.tenantName}})),t.$nextTick((function(){t.tenantList.length&&(t.tenantId=t.tenantList[0].id)})),e()}))}))},_submit:function(){var t=this;this.$refs.popup.spinnerLoading=!0;var e="";""!=this.queueName&&(e=this.queueList.length>0?i.default.find(this.queueList,["id",this.queueName]).code:"");var s={userName:this.userName,userPassword:this.userPassword,tenantId:this.tenantId,email:this.email,queue:e,phone:this.phone};this.item&&(s.id=this.item.id),this.store.dispatch("security/"+(this.item?"updateUser":"createUser"),s).then((function(e){setTimeout((function(){t.$refs.popup.spinnerLoading=!1}),800),t.$emit("onUpdate",s),t.$message.success(e.msg)})).catch((function(e){t.$message.error(e.msg||""),t.$refs.popup.spinnerLoading=!1}))}},watch:{},created:function(){var t=this;if(this.isADMIN)Promise.all([this._getQueueList(),this._getTenantList()]).then((function(){t.item&&(t.userName=t.item.userName,t.userPassword="",t.email=t.item.email,t.phone=t.item.phone,t.item.tenantId&&(t.tenantId=t.item.tenantId),t.$nextTick((function(){var e=i.default.find(t.queueList,["code",t.item.queue]);e&&(t.queueName=e.id||"")})))}));else if(this.item)if(this.userName=this.item.userName,this.userPassword="",this.email=this.item.email,this.phone=this.item.phone,this.item.tenantId&&(this.tenantId=this.item.tenantId),this.queueList.length>0){var e=i.default.find(this.queueList,["code",this.item.queue]);e&&(this.queueName=e.id||"")}else this.queueName=""},mounted:function(){},components:{mPopup:u.default,mListBoxF:o.default}}},985:function(t,e,s){}}]);