(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[500],{2500:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"params-wrapper"},[r("el-card",[r("el-alert",{attrs:{title:"注意：只允许为第三级分类设置相关参数",type:"warning","show-icon":"",closable:!1}}),r("el-row",{staticClass:"good-option"},[r("el-col",{attrs:{span:6}},[r("span",[t._v("选择商品分类：")]),r("el-cascader",{ref:"cascaderRef",attrs:{options:t.cateList,props:t.selectProp,clearable:""},on:{change:t.paramsHandleChange},model:{value:t.selectKeys,callback:function(e){t.selectKeys=e},expression:"selectKeys"}})],1)],1),r("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[r("el-button",{attrs:{type:"primary",disabled:t.isDisabled,icon:"el-icon-plus",size:"mini"},on:{click:function(e){t.addParamsDialogVisible=!0}}},[t._v("动态参数")]),"many"===t.activeName?r("el-table",{staticClass:"params-table",attrs:{data:t.manyTableList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(a,n){return r("el-tag",{key:n,attrs:{closable:""},on:{close:function(r){return t.handleClose(e.row,n)}}},[t._v(t._s(a))])})),e.row.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(r){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(r){t.$set(e.row,"inputValue",r)},expression:"scope.row.inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(r){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}],null,!1,3626869815)}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(r){return t.editParams(e.row.attr_id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(r){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}],null,!1,118894784)})],1):t._e()],1),r("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[r("el-button",{attrs:{type:"primary",disabled:t.isDisabled,icon:"el-icon-plus",size:"mini"},on:{click:function(e){t.addParamsDialogVisible=!0}}},[t._v("静态属性")]),"only"===t.activeName?r("el-table",{staticClass:"params-table",attrs:{data:t.onlyTableList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.attr_vals,(function(a,n){return r("el-tag",{key:n,attrs:{closable:""},on:{close:function(r){return t.handleClose(e.row,n)}}},[t._v(t._s(a))])})),e.row.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(r){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&t._k(r.keyCode,"enter",13,r.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(r){t.$set(e.row,"inputValue",r)},expression:"scope.row.inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(r){return t.showInput(e.row)}}},[t._v("+ New Tag")])]}}],null,!1,3626869815)}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"参数名称",prop:"attr_name"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(r){return t.editParams(e.row.attr_id)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(r){return t.deleteParams(e.row.attr_id)}}},[t._v("删除")])]}}],null,!1,118894784)})],1):t._e()],1)],1)],1),r("el-dialog",{attrs:{title:"新增"+t.titleText,visible:t.addParamsDialogVisible,width:"30%"},on:{"update:visible":function(e){t.addParamsDialogVisible=e},close:t.addParamsClose}},[r("el-form",{ref:"addParamsRef",attrs:{model:t.addParamsForm,rules:t.addParamsFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.addParamsForm.attr_name,callback:function(e){t.$set(t.addParamsForm,"attr_name",e)},expression:"addParamsForm.attr_name"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addParamsDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.saveAddParams}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"编辑"+t.titleText,visible:t.editParamsDialogVisible,width:"30%"},on:{"update:visible":function(e){t.editParamsDialogVisible=e},close:t.editParamsClose}},[r("el-form",{ref:"editParamsRef",attrs:{model:t.editParamsForm,rules:t.editParamsFormRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:t.titleText,prop:"attr_name"}},[r("el-input",{model:{value:t.editParamsForm.attr_name,callback:function(e){t.$set(t.editParamsForm,"attr_name",e)},expression:"editParamsForm.attr_name"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.editParamsDialogVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.saveEditParams}},[t._v("确 定")])],1)],1)],1)},n=[],i=r(7906),o=r(6198),s=(r(1539),r(4747),r(4916),r(3123),r(2222),r(3210),r(9600),r(561),{data:function(){return{cateList:[],selectProp:{checkStrictly:!0,expandTrigger:"hover",value:"cat_id",label:"cat_name",children:"children"},selectKeys:[],activeName:"many",paramsList:[],manyTableList:[],onlyTableList:[],addParamsDialogVisible:!1,addParamsFormRules:{attr_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},editParamsFormRules:{attr_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}]},addParamsForm:{attr_name:""},editParamsDialogVisible:!1,editParamsForm:{}}},created:function(){this.getCateList()},methods:{getCateList:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){var r,a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("categories");case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error(a.meta.msg));case 6:t.cateList=a.data;case 7:case"end":return e.stop()}}),e)})))()},paramsHandleChange:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:3!==t.selectKeys.length?(t.selectKeys=[],t.manyTableList=[],t.onlyTableList=[],t.$message.warning("请选择三级分类"),t.$refs.cascaderRef.toggleDropDownVisible()):(t.getParamsData(),t.$refs.cascaderRef.toggleDropDownVisible());case 1:case"end":return e.stop()}}),e)})))()},getParamsData:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){var r,a;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("categories/".concat(t.cateId,"/attributes"),{params:{sel:t.activeName}});case 2:if(r=e.sent,a=r.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error(a.meta.msg));case 6:a.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(","):[],t.inputVisible=!1,t.inputValue=""})),"many"===t.activeName?t.manyTableList=a.data:t.onlyTableList=a.data;case 8:case"end":return e.stop()}}),e)})))()},handleTabClick:function(){if(3!==this.selectKeys.length)return!1;this.getParamsData()},addParamsClose:function(){this.$refs.addParamsRef.resetFields()},saveAddParams:function(){var t=this;this.$refs.addParamsRef.validate(function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var a,n;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,t.$axios.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addParamsForm.attr_name,attr_sel:t.activeName});case 4:a=e.sent,n=a.data,201!==n.meta.status?t.$message.error(n.meta.msg):(t.$message.success(n.meta.msg),t.addParamsDialogVisible=!1,t.getParamsData());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},editParamsClose:function(){this.$refs.editParamsRef.resetFields()},editParams:function(t){var e=this;return(0,o.Z)((0,i.Z)().mark((function r(){var a,n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.editParamsDialogVisible=!0,r.next=3,e.$axios.get("categories/".concat(e.cateId,"/attributes/").concat(t),{params:{attr_sel:e.activeName}});case 3:if(a=r.sent,n=a.data,200===n.meta.status){r.next=7;break}return r.abrupt("return",e.$message.error(n.meta.msg));case 7:e.editParamsForm=n.data;case 8:case"end":return r.stop()}}),r)})))()},saveEditParams:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.editParamsRef.validate(function(){var e=(0,o.Z)((0,i.Z)().mark((function e(r){var a,n;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,t.$axios.put("categories/".concat(t.cateId,"/attributes/").concat(t.editParamsForm.attr_id),{attr_name:t.editParamsForm.attr_name,attr_sel:t.activeName});case 4:a=e.sent,n=a.data,200!==n.meta.status?t.$message.error(n.meta.msg):(t.$message.success(n.meta.msg),t.editParamsDialogVisible=!1,t.getParamsData());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})))()},deleteParams:function(t){var e=this;this.$confirm("此操作将永久删除该".concat(this.titleText,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,o.Z)((0,i.Z)().mark((function r(){var a,n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("categories/".concat(e.cateId,"/attributes/").concat(t));case 2:a=r.sent,n=a.data,200!==n.meta.status?e.$message.error(n.meta.msg):(e.$message.success(n.meta.msg),e.getParamsData());case 5:case"end":return r.stop()}}),r)})))).catch((function(){e.$message.info("取消删除")}))},handleInputConfirm:function(t){0===t.inputValue.trim().length?(t.inputValue="",t.inputVisible=!1):(t.attr_vals.push(t.inputValue.trim()),t.inputVisible=!1,t.inputValue="",this.saveHandleParams(t))},saveHandleParams:function(t){var e=this;return(0,o.Z)((0,i.Z)().mark((function r(){var a,n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.put("categories/".concat(e.cateId,"/attributes/").concat(t.attr_id),{attr_name:t.attr_name,attr_sel:t.attr_sel,attr_vals:t.attr_vals.join(",")});case 2:if(a=r.sent,n=a.data,200===n.meta.status){r.next=6;break}return r.abrupt("return",e.$message.error(n.meta.msg));case 6:e.$message.success(n.meta.msg);case 7:case"end":return r.stop()}}),r)})))()},showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleClose:function(t,e){t.attr_vals.splice(e,1),this.saveHandleParams(t)}},computed:{isDisabled:function(){return 3!==this.selectKeys.length},cateId:function(){return 3===this.selectKeys.length?this.selectKeys[2]:null},titleText:function(){return"many"===this.activeName?"动态参数":"静态属性"}}}),l=s,c=r(1001),u=(0,c.Z)(l,a,n,!1,null,"c8cc8192",null),m=u.exports},489:function(t,e,r){var a=r(2109),n=r(7293),i=r(7908),o=r(9518),s=r(8544),l=n((function(){o(1)}));a({target:"Object",stat:!0,forced:l,sham:!s},{getPrototypeOf:function(t){return o(i(t))}})},2443:function(t,e,r){var a=r(7235);a("asyncIterator")},6198:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});r(1539);function a(t,e,r,a,n,i,o){try{var s=t[i](o),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(a,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function s(t){a(o,n,i,s,l,"next",t)}function l(t){a(o,n,i,s,l,"throw",t)}s(void 0)}))}}},7906:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(2443),r(3680),r(3706),r(2703),r(1703),r(489),r(4747),r(8309),r(7042);var a=r(9726);function n(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
n=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(V){c=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var n=e&&e.prototype instanceof d?e:d,i=Object.create(n.prototype),o=new L(a||[]);return i._invoke=function(t,e,r){var a="suspendedStart";return function(n,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw i;return C()}for(r.method=n,r.arg=i;;){var o=r.delegate;if(o){var s=x(o,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=m(t,e,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(V){return{type:"throw",arg:V}}}t.wrap=u;var f={};function d(){}function p(){}function h(){}var v={};c(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g($([])));y&&y!==e&&r.call(y,o)&&(v=y);var b=h.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,o,s,l){var c=m(t[i],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==(0,a.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):e.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return i=i?i.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var a=m(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var n=a.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=h,c(b,"constructor",h),c(h,"constructor",p),p.displayName=c(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(_.prototype),c(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new _(u(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(b),c(b,l,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=$,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=500.d00c5831.js.map