(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de8e1"],{"85c1":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.onsubmit(e)}}},[s("div",{staticClass:"row mb-2"},[s("va-input",{attrs:{type:"email",label:t.$t("auth.email"),error:!!t.emailErrors.length,"error-messages":t.emailErrors},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("div",{staticClass:"row justify--center"},[s("va-button",{staticClass:"my-0",attrs:{type:"submit"}},[t._v(t._s(t.$t("auth.reset_password")))])],1)])},a=[],i={name:"wallet-recover-password",data:function(){return{email:"",emailErrors:[]}},methods:{onsubmit:function(){this.email?this.$router.push("/"):this.emailErrors=["Email is required"]}}},l=i,n=s("2877"),o=Object(n["a"])(l,r,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0de8e1.7a020c23.js.map