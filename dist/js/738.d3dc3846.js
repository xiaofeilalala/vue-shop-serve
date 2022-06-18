(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[738],{5738:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"good-wrapper"},[r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("el-input",{attrs:{placeholder:"请输入商品名称",clearable:""},on:{clear:t.getGoodList},model:{value:t.goodInfo.query,callback:function(e){t.$set(t.goodInfo,"query",e)},expression:"goodInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getGoodList},slot:"append"})],1)],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addGood}},[t._v("新增商品")])],1)],1),r("el-table",{staticClass:"good-table",attrs:{data:t.goodList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{prop:"goods_name",width:"800",label:"商品名称"}}),r("el-table-column",{attrs:{prop:"goods_price",width:"140",label:"商品价格（元）"}}),r("el-table-column",{attrs:{prop:"goods_weight",width:"140",label:"商品重量（kg）"}}),r("el-table-column",{attrs:{prop:"add_time",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("formatTime")(e.row.add_time))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(r){return t.editGood(e.row)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(r){return t.deleteGood(e.row)}}},[t._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":t.goodInfo.pagenum,"page-sizes":[1,5,10,20],"page-size":t.goodInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},o=[],i=r(7906),a=r(6198),c=r(3219),u=r.n(c),s=(r(9319),{data:function(){return{goodList:[],goodInfo:{query:"",pagenum:1,pagesize:10},total:0}},created:function(){this.getGoodList()},methods:{getGoodList:function(){var t=this;return(0,a.Z)((0,i.Z)().mark((function e(){var r,n;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("goods",{params:t.goodInfo});case 2:if(r=e.sent,n=r.data,200===n.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error(n.meta.msg));case 6:t.goodList=n.data.goods,t.total=n.data.total;case 8:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.goodInfo.pagesize=t,this.getGoodList()},handleCurrentChange:function(t){this.goodInfo.pagenum=t,this.getGoodList()},deleteGood:function(t){var e=this;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,a.Z)((0,i.Z)().mark((function r(){var n,o;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("goods/".concat(t.goods_id));case 2:n=r.sent,o=n.data,200!==o.meta.status?e.$message.error(o.meta.msg):(e.$message.success(o.meta.msg),e.getGoodList());case 5:case"end":return r.stop()}}),r)})))).catch((function(){e.$message.info("取消删除")}))},addGood:function(){this.$router.push("goods/add")},editGood:function(t){this.$router.push({path:"/goods/edit/".concat(t.goods_id)})}},filters:{formatTime:function(t){return u()(t).locale("zh-cn").format("YYYY/MM/DD HH:mm:ss")}}}),l=s,f=r(1001),d=(0,f.Z)(l,n,o,!1,null,null,null),h=d.exports},5837:function(t,e,r){var n=r(2109),o=r(7854);n({global:!0},{globalThis:o})},489:function(t,e,r){var n=r(2109),o=r(7293),i=r(7908),a=r(9518),c=r(8544),u=o((function(){a(1)}));n({target:"Object",stat:!0,forced:u,sham:!c},{getPrototypeOf:function(t){return a(i(t))}})},2443:function(t,e,r){var n=r(7235);n("asyncIterator")},7964:function(t,e,r){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},9319:function(t,e,r){var n,o,i,a=r(7964)["default"];r(5837),r(4916),r(3123),function(c,u){"object"==a(e)?t.exports=u(r(3219)):(o=[r(3219)],n=u,i="function"===typeof n?n.apply(e,o):n,void 0===i||(t.exports=i))}(0,(function(t){"use strict";function e(t){return t&&"object"==a(t)&&"default"in t?t:{default:t}}var r=e(t),n={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var r=100*t+e;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};return r.default.locale(n,null,!0),n}))},6198:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(1539);function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},7906:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(2443),r(3680),r(3706),r(2703),r(1703),r(489),r(4747),r(8309),r(7042);var n=r(9726);function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var d={};function h(){}function p(){}function m(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&r.call(v,a)&&(g=v);var _=m.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Y(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:void 0,done:!0}}return p.prototype=m,s(_,"constructor",m),s(m,"constructor",p),p.displayName=s(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(_),s(_,u,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Y),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Y(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Y(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}}}]);
//# sourceMappingURL=738.d3dc3846.js.map