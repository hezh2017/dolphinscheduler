(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1116:function(t,e,n){"use strict";n.r(e);var i=n(1117),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},1117:function(t,e,n){"use strict";e.__esModule=!0;var i=f(n(28)),a=n(198),s=f(n(1534)),r=n(85),o=f(n(736)),c=f(n(740)),u=n(293),d=f(n(752)),l=f(n(735));function f(t){return t&&t.__esModule?t:{default:t}}e.default={name:"tree-view-index-index",data:function(){return{limit:25,isLoading:!0,tasksType:u.tasksType,tasksState:u.tasksState,treeData:{},isNodata:!1}},props:{},methods:Object.assign({},(0,a.mapActions)("dag",["getViewTree"]),{_getViewTree:function(){var t=this;this.isLoading=!0,s.default.reset(),this.getViewTree({processId:this.$route.params.id,limit:this.limit}).then((function(e){var n=i.default.cloneDeep(e);if(t.treeData=n,!t.treeData.children)return t.isLoading=!1,void(t.isNodata=!0);!function t(e){e.length&&i.default.map(e,(function(e){e.uuid=""+(0,r.uuid)("uuid_")+((0,r.uuid)()+(0,r.uuid)()),e.children.length&&t(e.children)}))}(n.children),s.default.init({data:i.default.cloneDeep(n),limit:t.limit,selfTree:t}).then((function(){setTimeout((function(){}),100)}))})).catch((function(e){t.isLoading=!1,e.data||(t.isNodata=!0)}))},_rtTasksDag:function(){var t=this.$route.query.subProcessIds.split(","),e=t.slice(0,t.length-1),n=t[t.length-1],i={};n!==t[0]&&(i={subProcessIds:e.join(",")}),this.$router.push({path:"/projects/definition/tree/"+n,query:i})},_subProcessHandle:function(t){var e=[],n=this.$route.query.subProcessIds;if(n){var i=n.split(",");i.push(this.$route.params.id),e=i}else e.push(this.$route.params.id);this.$router.push({path:"/projects/definition/tree/"+t,query:{subProcessIds:e.join(",")}})},_onChangeSelect:function(t){this.limit=t.value,this._getViewTree()}}),watch:{"$route.params.id":function(){this._getViewTree()}},created:function(){this._getViewTree()},mounted:function(){},components:{mSpin:o.default,mSecondaryMenu:d.default,mListConstruction:l.default,mNoData:c.default}}},1346:function(t,e,n){},1534:function(t,e,n){"use strict";(function(t){e.__esModule=!0;var i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(935)),a=n(1535),s=n(293);var r=void 0,o=function(){r=this,this.selfTree={},this.tree=function(){},this.config={barHeight:26,axisHeight:40,squareSize:10,squarePading:4,taskNum:25,nodesMax:0},this.config.margin={top:this.config.barHeight/2+this.config.axisHeight,right:0,bottom:0,left:this.config.barHeight/2},this.config.margin.width=960-this.config.margin.left-this.config.margin.right,this.config.barWidth=parseInt(.9*this.config.margin.width)};o.prototype.init=function(t){var e=this,n=t.data,s=t.limit,r=t.selfTree;return new Promise((function(t,o){e.selfTree=r,e.config.taskNum=s,e.duration=400,e.i=0,e.tree=i.layout.tree().nodeSize([0,46]);var c=e.tree.nodes(n);e.diagonal=i.svg.diagonal().projection((function(t){return[t.y,t.x]})),e.svg=i.select("svg").append("g").attr("class","level").attr("transform","translate("+e.config.margin.left+","+e.config.margin.top+")"),n.x0=0,n.y0=0,e.squareNum=c[1===c.length?0:1].instances.length,e.config.nodesMax=(0,a.rtCountMethod)(n.children),e.treeUpdate(e.root=n).then((function(){e.treeTooltip(),r.isLoading=!1,t()}))}))},o.prototype.nodesClass=function(t){var e="node";return void 0===t.children&&void 0===t._children?e+=" leaf":(e+=" parent",void 0===t.children?e+=" collapsed":e+=" expanded"),e},o.prototype.treeTooltip=function(){t("rect.state").tooltip({html:!0,container:"body"}),t("circle.task").tooltip({html:!0,container:"body"})},o.prototype.treeToggles=function(t){r.removeTooltip(),i.selectAll("[task_id='"+t.uuid+"']").each((function(e){t!==e&&e.children&&(e._children=e.children,e.children=null,r.treeUpdate(e))})),t._children?(t.children=t._children,t._children=null):(t._children=t.children,t.children=null),r.treeUpdate(t),r.treeTooltip()},o.prototype.treeUpdate=function(t){var e=this;return new Promise((function(n,r){var o=e.tree.nodes(e.root),c=Math.max(500,o.length*e.config.barHeight+e.config.margin.top+e.config.margin.bottom),u=70*e.config.nodesMax+e.squareNum*(e.config.squareSize+e.config.squarePading)+e.config.margin.left+e.config.margin.right+50;i.select("svg").transition().duration(e.duration).attr("height",c).attr("width",u),o.forEach((function(t,n){t.x=n*e.config.barHeight}));var d=e.svg.selectAll("g.node").data(o,(function(t){return t.id||(t.id=++e.i)})),l=d.enter().append("g").attr("class",e.nodesClass).attr("transform",(function(){return"translate("+t.y0+","+t.x0+")"})).style("opacity",1e-6);l.append("circle").attr("r",e.config.barHeight/3).attr("class","task").attr("data-toggle","tooltip").attr("title",(function(t){return t.type?t.type:""})).attr("height",e.config.barHeight).attr("width",(function(t){return e.config.barWidth-t.y})).style("fill",(function(t){return t.type?s.tasksType[t.type].color:"#fff"})).attr("task_id",(function(t){return t.name})).on("click",e.treeToggles),l.append("text").attr("dy",3.5).attr("dx",e.config.barHeight/2).text((function(t){return t.name})),l.append("g").attr("class","stateboxes").attr("transform",(function(t,n){return"translate("+(60*e.config.nodesMax-t.y)+",0)"})).selectAll("rect").data((function(t){return t.instances})).enter().append("rect").on("click",(function(t){e.removeTooltip(),"SUB_PROCESS"===t.type&&e.selfTree._subProcessHandle(t.subflowId)})).attr("class","state").style("fill",(function(t){return t.state&&s.tasksState[t.state].color||"#ffffff"})).attr("data-toggle","tooltip").attr("rx",(function(t){return t.type?0:12})).attr("ry",(function(t){return t.type?0:12})).style("shape-rendering",(function(t){return t.type?"crispEdges":"auto"})).attr("title",(function(t){return(0,a.rtInstancesTooltip)(t)})).attr("x",(function(t,n){return n*(e.config.squareSize+e.config.squarePading)})).attr("y",-e.config.squareSize/2).attr("width",10).attr("height",10).on("mouseover",(function(){i.select(e).transition()})).on("mouseout",(function(){i.select(e).transition()})),l.transition().duration(e.duration).attr("transform",(function(t){return"translate("+t.y+","+t.x+")"})).style("opacity",1),d.transition().duration(e.duration).attr("class",e.nodesClass).attr("transform",(function(t){return"translate("+t.y+","+t.x+")"})).style("opacity",1),d.exit().transition().duration(e.duration).attr("transform",(function(e){return"translate("+t.y+","+t.x+")"})).style("opacity",1e-6).remove();var f=e.svg.selectAll("path.link").data(e.tree.links(o),(function(t){return t.target.id}));f.enter().insert("path","g").attr("class","link").attr("d",(function(n){var i={x:t.x0,y:t.y0};return e.diagonal({source:i,target:i})})).transition().duration(e.duration).attr("d",e.diagonal),f.transition().duration(e.duration).attr("d",e.diagonal),f.exit().transition().duration(e.duration).attr("d",(function(n){var i={x:t.x,y:t.y};return e.diagonal({source:i,target:i})})).remove(),o.forEach((function(t){t.x0=t.x,t.y0=t.y})),n()}))},o.prototype.reset=function(){t(".d3-tree .tree").html("")},o.prototype.removeTooltip=function(){t("body").find(".tooltip.fade.top.in").remove()},e.default=new o}).call(this,n(17))},1535:function(t,e,n){"use strict";e.__esModule=!0,e.rtCountMethod=e.rtInstancesTooltip=void 0;var i=n(294),a=n(293);e.rtInstancesTooltip=function(t){var e='<div style="text-align: left;word-break:break-all">';return e+="id : "+(t.id?t.id:"-")+"</br>",e+="host : "+(t.host?t.host:"-")+"</br>",e+="name : "+(t.name?t.name:"-")+"</br>",e+="state : "+(t.state?a.tasksState[t.state].desc:"-")+"（"+(t.state?t.state:"-")+"）</br>",t.type&&(e+="type : "+(t.type?t.type:"-")+"</br>"),e+="startTime : "+(t.startTime?(0,i.formatDate)(t.startTime):"-")+"</br>",e+="endTime : "+(t.endTime?(0,i.formatDate)(t.endTime):"-")+"</br>",e+="duration : "+(t.duration?t.duration:"-")+"</br>",e+="</div>"},e.rtCountMethod=function(t){var e=[];!function t(n,i){var a=!1;n.forEach((function(n){n.children&&n.children.length>0&&(a||(a=!0,i+="*",e.push(i)),t(n.children,i))}))}(t,"*");var n=6;return e.forEach((function(t){t.length>n&&(n=t.length)})),n}},1536:function(t,e,n){"use strict";n(1346)},1613:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-list-construction",{attrs:{title:t.$t("TreeView")}},[n("template",{slot:"conditions"}),t._v(" "),n("template",{slot:"content"},[n("div",{staticClass:"tree-view-index-model"},[n("div",{staticClass:"tree-limit-select"},[n("x-select",{staticStyle:{width:"70px"},on:{"on-change":t._onChangeSelect},model:{value:t.limit,callback:function(e){t.limit=e},expression:"limit"}},t._l([{value:25},{value:50},{value:75},{value:100}],(function(t){return n("x-option",{key:t.value,attrs:{value:t.value,label:t.value}})})),1),t._v(" "),t.$route.query.subProcessIds?n("x-button",{attrs:{type:"primary",size:"default",icon:"ans-icon-arrow-to-left"},on:{click:t._rtTasksDag}},[t._v("\n          "+t._s(t.$t("Return_1"))+"\n        ")]):t._e()],1),t._v(" "),n("div",{staticClass:"tasks-color"},[n("div",{staticClass:"toolbar-color-sp"},[n("a",{attrs:{href:"javascript:"}},[n("span",[t._v("Node Type")])]),t._v(" "),t._l(t.tasksType,(function(e,i){return n("a",{key:i,attrs:{href:"javascript:"}},[n("em",{staticClass:"ans-icon-circle-solid",style:{color:e.color}}),t._v(" "),n("span",[t._v(t._s(i))])])}))],2),t._v(" "),n("div",{staticClass:"state-tasks-color-sp"},[n("a",{attrs:{href:"javascript:"}},[n("span",[t._v(t._s(t.$t("Task Status")))])]),t._v(" "),t._l(t.tasksState,(function(e){return n("a",{key:e.id,attrs:{href:"javascript:"}},[n("em",{staticClass:"ans-icon-rect-solid",style:{color:e.color}}),t._v(" "),n("span",[t._v(t._s(e.desc))])])}))],2)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNodata,expression:"!isNodata"}],staticClass:"tree-model"},[n("div",{staticClass:"d3-tree"},[n("svg",{staticClass:"tree",attrs:{width:"100%"}})])]),t._v(" "),t.isNodata?n("m-no-data"):t._e()],1),t._v(" "),n("m-spin",{attrs:{"is-spin":t.isLoading}})],1)],2)},a=[]},679:function(t,e,n){"use strict";n.r(e);var i=n(1613),a=n(1116);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(1536);var r=n(7),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);e.default=o.exports},724:function(t,e,n){"use strict";n.r(e);var i=n(725),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},725:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"list-construction",data:function(){return{}},props:{title:String}}},726:function(t,e,n){"use strict";n.r(e);var i=n(727),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},727:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"spin",data:function(){return{}},props:{isSpin:{type:Boolean,default:!0},isLeft:{type:Boolean,default:!0}}}},728:function(t,e,n){"use strict";n.r(e);var i=n(729),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},729:function(t,e,n){"use strict";e.__esModule=!0,e.default={name:"no-data",props:{msg:String,height:Number}}},730:function(t,e,n){},734:function(t,e,n){},735:function(t,e,n){"use strict";n.r(e);var i=n(738),a=n(724);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var r=n(7),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);e.default=o.exports},736:function(t,e,n){"use strict";n.r(e);var i=n(739),a=n(726);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(737);var r=n(7),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);e.default=o.exports},737:function(t,e,n){"use strict";n(730)},738:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-main list-construction-model"},[e("div",{staticClass:"content-title"},[e("span",[this._v(this._s(this.title))])]),this._v(" "),e("div",{staticClass:"conditions-box"},[this._t("conditions")],2),this._v(" "),e("div",{staticClass:"list-box"},[this._t("content")],2)])},a=[]},739:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isSpin?n("div",{class:t.isLeft?"spin-sp2":"spin-sp1",attrs:{id:"spin-model"}},[n("div",{staticClass:"svg-box"},[n("svg",{staticClass:"lds-gears",staticStyle:{background:"none"},attrs:{width:"54px",height:"54px",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[n("g",{attrs:{transform:"translate(50 50)"}},[n("g",{attrs:{transform:"translate(-19 -19) scale(0.6)"}},[n("g",{attrs:{transform:"rotate(107.866)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"0;360",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}}),n("path",{attrs:{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#0097e0"}})],1)]),t._v(" "),n("g",{attrs:{transform:"translate(19 19) scale(0.6)"}},[n("g",{attrs:{transform:"rotate(229.634)"}},[n("animateTransform",{attrs:{attributeName:"transform",type:"rotate",values:"360;0",keyTimes:"0;1",dur:"1s",begin:"-0.0625s",repeatCount:"indefinite"}}),n("path",{attrs:{d:"M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7 L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268 L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154 L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036 37.3496987939662 L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662 L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1 -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435 L-28.531545636048154 38.431040572659825 L-38.43104057265982 28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435 -21.460477824182675 L-31.35997276079435 -21.460477824182675 L-38.431040572659825 -28.531545636048147 L-28.53154563604818 -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662 L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662 L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686 -31.359972760794342 L21.460477824182686 -31.359972760794342 L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818 L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662 -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23",fill:"#7f8b95"}})],1)])])]),t._v(" "),n("span",{staticClass:"sp1"},[t._v(t._s(t.$t("Loading...")))])])]):t._e()},a=[]},740:function(t,e,n){"use strict";n.r(e);var i=n(745),a=n(728);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(744);var r=n(7),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);e.default=o.exports},741:function(t,e,n){"use strict";n.r(e);var i=n(742),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=a.a},742:function(t,e,n){"use strict";(function(t){e.__esModule=!0;var i=s(n(754)),a=s(n(35));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"secondary-menu",data:function(){return{menuList:(0,i.default)(this.type),index:0,id:this.$route.params.id,isTogHide:!1,isLeft:!0}},props:{type:String,className:String},watch:{isTogHide:function(e){var n=t(".main-layout-box");e?n.addClass("toggle"):n.removeClass("toggle")}},methods:{_toggleSubMenu:function(t){t.isOpen=!t.isOpen},_toggleMenu:function(){this.isTogHide=!this.isTogHide,this.isTogHide?(sessionStorage.setItem("isLeft",0),a.default.commit("projects/setSideBar",0)):(sessionStorage.setItem("isLeft",1),a.default.commit("projects/setSideBar",1))}},mounted:function(){}}}).call(this,n(17))},743:function(t,e,n){t.exports=n.p+"images/errorTip.png?a7b20f0ca8727f22f405c2a34d1363a0"},744:function(t,e,n){"use strict";n(734)},745:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"no-data-model",style:{height:this.height+"px"}},[e("div",{staticClass:"no-data-box"},[this._m(0),this._v(" "),e("div",{staticClass:"text"},[this._v(this._s(this.msg||this.$t("No data")))])])])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img"},[e("img",{attrs:{src:n(743),alt:""}})])}]},748:function(t,e,n){},752:function(t,e,n){"use strict";n.r(e);var i=n(757),a=n(741);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(756);var r=n(7),o=Object(r.a)(a.default,i.a,i.b,!1,null,null,null);e.default=o.exports},754:function(t,e,n){"use strict";e.__esModule=!0;var i=r(n(20)),a=r(n(755)),s=r(n(292));function r(t){return t&&t.__esModule?t:{default:t}}var o={projects:[{name:""+i.default.$t("Project Home"),id:0,path:"projects-index",isOpen:!0,disabled:!0,icon:"ans-icon-home-solid",children:[]},{name:""+i.default.$t("Process"),id:1,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-gear",children:[{name:""+i.default.$t("Process definition"),path:"definition",id:0,disabled:!0},{name:""+i.default.$t("Process Instance"),path:"instance",id:1,disabled:!0},{name:""+i.default.$t("Task Instance"),path:"task-instance",id:2,disabled:!0},{name:""+i.default.$t("Task record"),path:"task-record",id:3,disabled:a.default.recordSwitch},{name:""+i.default.$t("History task record"),path:"history-task-record",id:4,disabled:a.default.recordSwitch}]}],security:[{name:""+i.default.$t("Tenant Manage"),id:0,path:"tenement-manage",isOpen:!0,disabled:!0,icon:"ans-icon-user-solid",children:[]},{name:""+i.default.$t("User Manage"),id:1,path:"users-manage",isOpen:!0,disabled:!0,icon:"ans-icon-user-circle-solid",children:[]},{name:""+i.default.$t("Warning group manage"),id:2,path:"warning-groups-manage",isOpen:!0,disabled:!0,icon:"ans-icon-danger-solid",children:[]},{name:""+i.default.$t("Worker group manage"),id:4,path:"worker-groups-manage",isOpen:!0,disabled:!0,icon:"ans-icon-diary",children:[]},{name:""+i.default.$t("Queue manage"),id:3,path:"queue-manage",isOpen:!0,disabled:!0,icon:"ans-icon-recycle",children:[]},{name:""+i.default.$t("Token manage"),id:2,path:"token-manage",isOpen:!0,icon:"ans-icon-document",children:[],disabled:!0}],resource:[{name:""+i.default.$t("File Manage"),id:0,path:"file",isOpen:!0,icon:"ans-icon-documents",children:[],disabled:!0},{name:""+i.default.$t("UDF manage"),id:1,path:"",isOpen:!0,icon:"ans-icon-document",disabled:!0,children:[{name:""+i.default.$t("Resource manage"),path:"resource-udf",id:0,disabled:!0},{name:""+i.default.$t("Function manage"),path:"resource-func",id:1,disabled:!0}]}],user:[{name:""+i.default.$t("User Information"),id:0,path:"account",isOpen:!0,icon:"ans-icon-user-solid",children:[],disabled:!0},{name:""+i.default.$t("Edit password"),id:1,path:"password",isOpen:!0,icon:"ans-icon-key",children:[],disabled:!0},{name:""+i.default.$t("Token manage"),id:2,path:"token",isOpen:!0,icon:"ans-icon-diary",children:[],disabled:s.default.getAuth()}],monitor:[{name:""+i.default.$t("Servers manage"),id:1,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-menu",children:[{name:"Master",path:"servers-master",id:0,disabled:!0},{name:"Worker",path:"servers-worker",id:1,disabled:!0},{name:"Zookeeper",path:"servers-zookeeper",id:4,disabled:!0},{name:"DB",path:"servers-db",id:6,disabled:!0}]},{name:""+i.default.$t("Statistics manage"),id:0,path:"",isOpen:!0,disabled:!0,icon:"ans-icon-menu",children:[{name:"Statistics",path:"statistics",id:0,disabled:!0}]}]};e.default=function(t){return o[t]}},755:function(t,e,n){"use strict";e.__esModule=!0,e.default={recordSwitch:!1}},756:function(t,e,n){"use strict";n(748)},757:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"secondary-menu-model",class:t.className},[n("div",{staticClass:"toogle-box"},[t.isTogHide?t._e():n("a",{staticClass:"tog-close",attrs:{href:"javascript:"},on:{click:t._toggleMenu}}),t._v(" "),t.isTogHide?n("a",{staticClass:"tog-open",attrs:{href:"javascript:"},on:{click:t._toggleMenu}}):t._e()]),t._v(" "),t._l(t.menuList,(function(e,i){return n("div",{key:i,staticClass:"leven-1"},[e.disabled?n("div",[e.path?[n("router-link",{attrs:{to:{name:e.path}}},[n("div",{staticClass:"name",on:{click:function(n){return t._toggleSubMenu(e)}}},[n("a",{attrs:{href:"javascript:"}},[n("em",{staticClass:"fa icon",class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),e.children.length?n("em",{staticClass:"fa angle",class:e.isOpen?"ans-icon-arrow-down":"ans-icon-arrow-right"}):t._e()])])])]:t._e(),t._v(" "),e.path?t._e():[n("div",{staticClass:"name",on:{click:function(n){return t._toggleSubMenu(e)}}},[n("a",{attrs:{href:"javascript:"}},[n("em",{staticClass:"fa icon",class:e.icon}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),e.children.length?n("em",{staticClass:"fa angle",class:e.isOpen?"ans-icon-arrow-down":"ans-icon-arrow-right"}):t._e()])])],t._v(" "),e.isOpen&&e.children.length?n("ul",[t._l(e.children,(function(e,i){return[e.disabled?n("router-link",{key:i,attrs:{to:{name:e.path},tag:"li","active-class":"active"}},[n("span",[t._v(t._s(e.name))])]):t._e()]}))],2):t._e()],2):t._e()])}))],2)},a=[]}}]);