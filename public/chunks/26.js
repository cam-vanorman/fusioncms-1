(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{suyn:function(t,e,s){"use strict";s.r(e);var r=s("ke3Z"),a={name:"loginForm",data:function(){return{form:new r.a({email:"",password:""})}},methods:{submit:function(){var t=this;this.form.post("/admin/login").then(function(e){t.$store.commit("user/setUser",e.data),t.$route.query.redirect?location.href=t.$route.query.redirect:location.href="/"+config.path}).catch(function(t){})}}},o=s("KHd+"),i={name:"login",components:{"login-form":Object(o.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full max-w-xs",attrs:{id:"login-form"}},[t._m(0),t._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[t._m(1),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("p-input",{attrs:{name:"email",label:"E-mail",autocomplete:"off","has-error":t.form.errors.has("email"),"error-message":t.form.errors.get("email"),autofocus:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("p-input",{attrs:{name:"password",type:"password",label:"Password",autocomplete:"off","has-error":t.form.errors.has("password"),"error-message":t.form.errors.get("password"),autofocus:"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Login")])],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center relative mb-10"},[e("img",{attrs:{src:"/img/illustrations/login.svg",alt:"Illustration"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center leading-none mb-6"},[e("span",{staticClass:"mb-3 text-grey-dark text-sm font-bold "},[this._v("Welcome to")]),this._v(" "),e("span",{staticClass:"font-bold text-xxl"},[this._v("FusionCMS")])])}],!1,null,null,null).exports}},l=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-grey-lighter mx-auto h-full flex flex-1 flex-col items-center justify-center",staticStyle:{transition:"0.1s"}},[s("login-form"),t._v(" "),s("footer",{staticClass:"p-6 text-xs text-grey-dark flex flex-col items-center justify-center leading-loose md:leading-none"},[s("div",{staticClass:"mb-4 flex items-center justify-center"},[s("a",{directives:[{name:"modal",rawName:"v-modal:privacy-policy",arg:"privacy-policy"}],staticClass:"mr-3",attrs:{href:"#"}},[t._v("Privacy Policy")]),t._v(" "),s("a",{directives:[{name:"modal",rawName:"v-modal:tos",arg:"tos"}],attrs:{href:"#"}},[t._v("Terms of Service")])]),t._v(" "),s("span",[t._v("Built with "),s("fa-icon",{staticClass:"text-danger-lighter mx-1",attrs:{icon:["fas","heart"]}}),t._v(" + "),s("fa-icon",{staticClass:"text-grey-dark mx-1",attrs:{icon:["fas","coffee"]}}),t._v(" by the efelle team")],1)]),t._v(" "),s("tos-modal"),t._v(" "),s("privacy-modal")],1)},[],!1,null,null,null);e.default=l.exports}}]);