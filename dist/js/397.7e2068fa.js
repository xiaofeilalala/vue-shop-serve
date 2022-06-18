"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[397],{9397:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"role-wrapper"},[r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addRole}},[e._v("新增角色")])],1)],1),r("el-table",{staticClass:"role-table",attrs:{data:e.roleList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[0!==t.row.children.length?r("div",e._l(t.row.children,(function(o,s){return r("el-row",{key:o.id,class:["bottom",0===s?"top":""],attrs:{type:"flex",align:"middle",justify:"center"}},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRole(t.row,o.id)}}},[e._v(e._s(o.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(o.children,(function(o,s){return r("el-row",{key:o.id,class:[0===s?"":"top"],attrs:{type:"flex",align:"middle",justify:"center"}},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRole(t.row,o.id)}}},[e._v(e._s(o.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(o.children,(function(o){return r("el-tag",{key:o.id,attrs:{closable:"",type:"danger"},on:{close:function(r){return e.removeRole(t.row,o.id)}}},[e._v(e._s(o.authName))])})),1)],1)})),1)],1)})),1):r("div",{staticClass:"nopower"},[e._v("暂无权限")])]}}])}),r("el-table-column",{attrs:{type:"index",label:"#"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(r){return e.editRole(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete"},on:{click:function(r){return e.deleteRole(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-setting"},on:{click:function(r){return e.settingRole(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"分配权限",width:"30%",visible:e.roleDialogVisible},on:{"update:visible":function(t){e.roleDialogVisible=t},close:e.roleDialogClose}},[r("el-tree",{ref:"treeRole",attrs:{data:e.powerList,props:e.poserProps,"show-checkbox":"","default-expand-all":"","node-key":"id","default-checked-keys":e.defaultPoserList}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.roleDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleList}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"新增角色",width:"30%",visible:e.addRoleDialogVisible},on:{"update:visible":function(t){e.addRoleDialogVisible=t},close:e.addRoleDialogClose}},[r("el-form",{ref:"addRoleRef",attrs:{model:e.addRoleForm,rules:e.addRoleFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"roleName",label:"角色名称"}},[r("el-input",{model:{value:e.addRoleForm.roleName,callback:function(t){e.$set(e.addRoleForm,"roleName",t)},expression:"addRoleForm.roleName"}})],1),r("el-form-item",{attrs:{prop:"roleDesc",label:"角色描述"}},[r("el-input",{model:{value:e.addRoleForm.roleDesc,callback:function(t){e.$set(e.addRoleForm,"roleDesc",t)},expression:"addRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addRoleDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveAddRole}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"编辑角色",width:"30%",visible:e.editRoleDialogVisible},on:{"update:visible":function(t){e.editRoleDialogVisible=t},close:e.editRoleDialogClose}},[r("el-form",{ref:"editRoleRef",attrs:{model:e.editRoleForm,rules:e.editRoleFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{prop:"roleName",label:"角色名称"}},[r("el-input",{model:{value:e.editRoleForm.roleName,callback:function(t){e.$set(e.editRoleForm,"roleName",t)},expression:"editRoleForm.roleName"}})],1),r("el-form-item",{attrs:{prop:"roleDesc",label:"角色描述"}},[r("el-input",{model:{value:e.editRoleForm.roleDesc,callback:function(t){e.$set(e.editRoleForm,"roleDesc",t)},expression:"editRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editRoleDialogVisible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveEditRole}},[e._v("确定")])],1)],1)],1)},s=[],a=r(8932),l=r(7906),i=r(6198),n=(r(2222),r(1539),r(4747),r(9600),{data:function(){return{roleList:[],roleDialogVisible:!1,powerList:[],poserProps:{label:"authName",children:"children"},defaultPoserList:[],roleId:"",addRoleDialogVisible:!1,addRoleForm:{roleName:"",roleDesc:""},addRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},editRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:2,max:8,message:"长度在 2 到 8 个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},editRoleForm:{},editRoleDialogVisible:!1}},created:function(){this.getRoleList()},methods:{getRoleList:function(){var e=this;return(0,i.Z)((0,l.Z)().mark((function t(){var r,o;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("roles");case 2:if(r=t.sent,o=r.data,200===o.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error(o.meta.msg));case 6:e.roleList=o.data;case 7:case"end":return t.stop()}}),t)})))()},removeRole:function(e,t){var r=this;this.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,i.Z)((0,l.Z)().mark((function o(){var s,a;return(0,l.Z)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.delete("roles/".concat(e.id,"/rights/").concat(t));case 2:if(s=o.sent,a=s.data,200===a.meta.status){o.next=6;break}return o.abrupt("return",r.$message.error(a.meta.msg));case 6:e.children=a.data;case 7:case"end":return o.stop()}}),o)})))).catch((function(){return r.$message.info("取消删除")}))},settingRole:function(e){var t=this;return(0,i.Z)((0,l.Z)().mark((function r(){var o,s;return(0,l.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,t.roleDialogVisible=!0,t.getPoserKeys(e,t.defaultPoserList),r.next=5,t.$axios.get("rights/tree");case 5:if(o=r.sent,s=o.data,200===s.meta.status){r.next=9;break}return r.abrupt("return",t.$message.error(s.meta.msg));case 9:t.powerList=s.data;case 10:case"end":return r.stop()}}),r)})))()},getPoserKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.getPoserKeys(e,t)}))},roleDialogClose:function(){this.defaultPoserList=[]},saveRoleList:function(){var e=this;return(0,i.Z)((0,l.Z)().mark((function t(){var r,o,s,i;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.roleDialogVisible=!1,r=[].concat((0,a.Z)(e.$refs.treeRole.getCheckedKeys()),(0,a.Z)(e.$refs.treeRole.getHalfCheckedNodes())),o=r.join(","),t.next=5,e.$axios.post("roles/".concat(e.roleId,"/rights"),{rids:o});case 5:if(s=t.sent,i=s.data,200===i.meta.status){t.next=9;break}return t.abrupt("return",e.$message.error(i.meta.msg));case 9:e.$message.success(i.meta.msg),e.getRoleList(),e.roleDialogVisible=!1;case 12:case"end":return t.stop()}}),t)})))()},addRole:function(){this.addRoleDialogVisible=!0},addRoleDialogClose:function(){this.$refs.addRoleRef.resetFields()},saveAddRole:function(){var e=this;this.$refs.addRoleRef.validate(function(){var t=(0,i.Z)((0,l.Z)().mark((function t(r){var o,s;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.$axios.post("roles",e.addRoleForm);case 4:o=t.sent,s=o.data,201!==s.meta.status?e.$message.error(s.meta.msg):(e.$message.success(s.meta.msg),e.addRoleDialogVisible=!1,e.getRoleList());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editRole:function(e){var t=this;return(0,i.Z)((0,l.Z)().mark((function r(){var o,s;return(0,l.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.editRoleDialogVisible=!0,r.next=3,t.$axios.get("roles/".concat(e));case 3:o=r.sent,s=o.data,200!==s.meta.status&&t.$message.error(s.meta.msg),t.editRoleForm=s.data;case 7:case"end":return r.stop()}}),r)})))()},editRoleDialogClose:function(){this.$refs.editRoleRef.resetFields()},saveEditRole:function(){var e=this;this.$refs.editRoleRef.validate(function(){var t=(0,i.Z)((0,l.Z)().mark((function t(r){var o,s;return(0,l.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,e.$axios.put("roles/".concat(e.editRoleForm.roleId),{roleName:e.editRoleForm.roleName,roleDesc:e.editRoleForm.roleDesc});case 4:o=t.sent,s=o.data,200!==s.meta.status?e.$message.error(s.meta.msg):(e.$message.success(s.meta.msg),e.editRoleDialogVisible=!1,e.getRoleList());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},deleteRole:function(e){var t=this;this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,i.Z)((0,l.Z)().mark((function r(){var o,s;return(0,l.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.delete("roles/".concat(e));case 2:o=r.sent,s=o.data,200!==s.meta.status?t.$message.error(s.meta.msg):(t.$message.success(s.meta.msg),t.getRoleList());case 5:case"end":return r.stop()}}),r)})))).catch((function(){t.$message.info("取消删除")}))}}}),c=n,u=r(1001),d=(0,u.Z)(c,o,s,!1,null,"3c9204ee",null),m=d.exports}}]);
//# sourceMappingURL=397.7e2068fa.js.map