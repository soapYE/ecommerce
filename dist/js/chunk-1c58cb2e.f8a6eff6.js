(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c58cb2e"],{"2d39":function(t,o,e){"use strict";var i=e("86e4"),r=e.n(i);r.a},3332:function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row",staticStyle:{width:"600px"}},[e("div",{staticClass:"container__image flex xs12 md5"},[e("img",{staticClass:"img",staticStyle:{width:"100%",height:"70%"},attrs:{src:t.img_url,alt:"Product Image"}})]),e("div",{staticClass:"container__text flex xs12 md6 offset--md1"},[e("va-card",{attrs:{stripe:"info"}},[e("template",{staticClass:"py-2",slot:"header"},[e("va-icon",{staticClass:"right-space",attrs:{name:"fa fa-shopping-cart",color:"info"}}),e("h5",{staticClass:"mt-0 mb-0"},[t._v(t._s(t.name))])],1),e("va-badge",{staticClass:"mb-2 py-1 badge",attrs:{color:"dark",outline:""}},[t._v("Sku cd: "+t._s(t.skuCd))]),e("va-badge",{staticClass:"mb-2 py-1 badge",attrs:{color:"dark",outline:""}},[t._v("Model: "+t._s(t.model))]),e("br"),e("span",{staticClass:"small-title"},[t._v("Basic information")]),t._v(" "),e("br"),e("span",{staticClass:"right-space"},[e("label",{staticClass:"labels"},[t._v("RetailPrice: ")]),e("span",{staticClass:"text--highlighted"},[t._v("$"+t._s(t.minRetailPrice))])]),e("label",{staticClass:"labels"}),t._v("["),e("s",[t._v("$"+t._s(t.retailPrice))]),t._v("] "),e("br"),e("label",{staticClass:"labels"},[t._v("Size: ")]),t._v(t._s(t.width)+" × "+t._s(t.height)),e("br"),e("label",{staticClass:"labels"},[t._v("Weight: ")]),t._v(t._s(t.weight)),e("br"),e("hr"),e("span",{staticClass:"small-title"},[t._v("Other information")]),t._v(" "),e("br"),e("label",{staticClass:"labels"},[t._v("ReplenishmentPeriod: ")]),t._v(t._s(t.replenishmentPeriod)),e("br"),e("label",{staticClass:"labels"},[t._v("WarrantyDay: ")]),t._v(t._s(t.warrantyDay)),e("br"),e("label",{staticClass:"labels"},[t._v("Warranty: ")]),t._v(t._s(t.warranty)),e("br"),t.is_show?e("div",[e("hr"),e("label",{staticClass:"labels"},[t._v("Numbers you want: ")]),e("va-input",{staticClass:"input",attrs:{placeholder:"Type a integer...",error:!t.is_number,"error-messages":"Please enter an integer number!"},model:{value:t.num_pro,callback:function(o){t.num_pro=o},expression:"num_pro"}}),e("div",{staticClass:"row"},[e("div",{staticClass:"flex lg5 offset--md2"},[e("va-button",{staticClass:"flex lg7 offset--lg5",attrs:{small:"",flat:"",color:"gray"},on:{click:t.cancel}},[t._v(" Cancel ")])],1),e("div",{staticClass:"flex lg5"},[e("va-button",{attrs:{small:""},on:{click:t.addOrder}},[t._v(" Order me! ")])],1)])],1):t._e()],2)],1)])},r=[],a=e("7522"),s={name:"product-detail",props:{usr_id:Number,role:String,product_detail:Object},data:function(){return{pro_id:this.product_detail.pro_id,img_url:this.product_detail.image_url,name:this.product_detail.NAME,skuCd:this.product_detail.sku_cd,model:this.product_detail.model,width:this.product_detail.width,height:this.product_detail.height,weight:this.product_detail.weight,retailPrice:this.product_detail.retail_price,minRetailPrice:this.product_detail.min_retail_price,warrantyDay:this.product_detail.warranty_day,replenishmentPeriod:this.product_detail.replenishment_period,warranty:this.product_detail.warranty,num_pro:null,is_number:!0}},computed:{is_show:function(){return"bvo"===this.role}},methods:{addOrder:function(){this.is_number=!0,this.num_pro%1!==0||null===this.num_pro?this.is_number=!1:(console.log(123),this.showToast("You have ordered this product! \n You can see it in the order management page.",{theme:"info",icon:"fa-cart-plus",position:"top-right",duration:2500,fullWidth:!1}),this.$emit("close",null),this.num_pro=null,Object(a["e"])(this,{dsrId:this.usr_id,proId:this.pro_id,productAmount:this.num_pro}).then((function(t){console.log(t)})))},cancel:function(){this.$emit("close",null)}}},n=s,d=(e("8760"),e("2877")),l=Object(d["a"])(n,i,r,!1,null,"a4ad18f0",null);o["a"]=l.exports},"44b0":function(t,o,e){},6445:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"flex lg12"},[e("va-card",{staticStyle:{"margin-bottom":"2vh"},attrs:{stripe:"info"}},[e("template",{slot:"header"},[e("va-icon",{attrs:{name:"fa fa-info mr-3",color:"info"}}),e("h4",{staticClass:"mt-0 mb-0"},[t._v(" Brand basic information ")])],1),e("div",{staticClass:"row"},[e("div",{staticClass:"flex lg3"},[e("img",{staticClass:"img",attrs:{src:t.brand_info.imageUrl,alt:"Company Image"}})]),e("div",{staticClass:"flex lg8 offset-lg1"},[e("label",{staticClass:"labels"},[t._v("Brand Name(En): ")]),t._v(t._s(t.brand_info.nameEn)),e("br"),e("label",{staticClass:"labels"},[t._v("Brand Name(Cn): ")]),t._v(t._s(t.brand_info.nameCn)),e("br")])])],2),e("va-card",{attrs:{stripe:"info"}},[e("template",{slot:"header"},[e("va-icon",{attrs:{name:"fa fa-suitcase mr-3",color:"info"}}),e("h4",{staticClass:"mt-0 mb-0"},[t._v(" Product table ")]),e("va-button",{staticStyle:{"margin-left":"80%","margin-top":"2%"},attrs:{small:"",outline:""},on:{click:t.jump}},[t._v(" See more details ")])],1),e("va-data-table",{staticClass:"va-table--hoverable",attrs:{fields:t.fields,data:t.filteredData,"per-page":parseInt(t.perPage)},scopedSlots:t._u([{key:"marker",fn:function(t){return[e("va-icon",{attrs:{name:"fa fa-circle",color:"1"===t.rowData.sts_cd?"#ba5a31":"#e59f71",size:"8px"}})]}},{key:"sts_cd",fn:function(o){return[e("va-badge",{attrs:{color:"1"===o.rowData.sts_cd?"#ba5a31":"#e59f71"}},[t._v(" "+t._s("1"===o.rowData.sts_cd?"On Shelf":"Off Shelf")+" ")])]}}])})],2)],1)])},r=[],a=e("6900"),s=e("7522"),n=e("4360"),d={name:"company-detail",components:{cubeItem:a["a"]},store:n["a"],data:function(){return{fieldData:[],perPage:"6",brand_info:null,brand_list:null,fake_data:{data:[{proId:"1",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:1},{proId:"2",name:"yy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:1},{proId:"3",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:1},{proId:"4",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:0},{proId:"5",name:"chj",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:0},{proId:"6",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:1},{proId:"7",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:1},{proId:"8",name:"yfy",skuCd:"4139431679614897236",model:"V2",description:"good good good good good good good good",stsCd:0}]}}},computed:{fields:function(){return[{name:"__slot:marker",width:"30px",dataClass:"text-center"},{name:"name",title:"Product Name"},{name:"__slot:sts_cd",title:this.$t("tables.headings.status")},{name:"description",title:"description"},{name:"__slot:actions",dataClass:"text-right"}]},filteredData:function(){var t=this;return!this.term||this.term.length<1?this.fieldData:this.fieldData.filter((function(o){return o.name.toLowerCase().startsWith(t.term.toLowerCase())}))}},methods:{jump:function(){this.$router.push({name:"product-main"})}},created:function(){var t=this;console.log(this.fieldData),console.log(this.$store.state.mvo.manId),Object(s["l"])(this,{manId:this.$store.state.mvo.manId}).then((function(o){console.log(o);for(var e=o.data.data,i=0;i<e.length;i++)if(e[i].brdId+""===t.$store.state.mvo.brdId+""){t.brand_info=e[i];break}})),Object(s["r"])(this,{brdId:this.$store.state.mvo.brdId}).then((function(o){console.log(o),t.fieldData=o.data.data}))}},l=d,c=(e("d8b5"),e("2877")),u=Object(c["a"])(l,i,r,!1,null,"58f1c296",null);o["default"]=u.exports},6900:function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t.is_remove?t._e():e("div",{staticClass:"container"},[e("div",{staticClass:"product",on:{mouseover:t.mouseover,mouseout:t.mouseout,click:t.see_detail}},[t.is_product?t._e():e("div",{directives:[{name:"show",rawName:"v-show",value:t.ishover,expression:"ishover"}],staticClass:"removeIcon",on:{click:function(o){return o.stopPropagation(),t.remove(o)}}},[e("va-button",{attrs:{small:"",icon:"ion-md-close ion"}})],1),e("va-card",{attrs:{image:t.img_url}},[e("template",{slot:"header"},[e("h5",{staticClass:"mt-0 mb-0 title"},[t._v(t._s(t.img_title))]),t.is_product?e("div",{on:{click:function(o){return o.stopPropagation(),t.like_(o)}}},[t.dislike?e("va-icon",{staticClass:"like",attrs:{name:"fa fa-heart-o",color:"pink"}}):t._e(),t.like_icon?e("va-icon",{staticClass:"like",attrs:{name:"fa fa-heart",color:"pink"}}):t._e()],1):t._e()]),t._v(" "+t._s(t.img_intro)+" ")],2)],1)]),e("va-modal",{attrs:{size:"large",title:" Product Detail Information",hideDefaultActions:"true",okText:t.$t("modal.confirm"),cancelText:t.$t("modal.cancel")},model:{value:t.showModal,callback:function(o){t.showModal=o},expression:"showModal"}},[t._t("default",[e("product-detail",{attrs:{product_detail:t.product_detail,usr_id:t.usr_id,role:"bvo"},on:{close:t.close}})])],2),e("va-modal",{attrs:{size:"small",title:"Remove Confirmation",message:"Are you sure to remove?",okText:t.$t("modal.confirm"),cancelText:t.$t("modal.cancel")},on:{ok:t.confirmRemove},model:{value:t.remove_confirm,callback:function(o){t.remove_confirm=o},expression:"remove_confirm"}})],1)},r=[],a=e("3332"),s=e("7522"),n={name:"cube-item",components:{ProductDetail:a["a"]},props:{img_url:String,img_title:String,img_intro:String,usr_id:Number,cube_id:Number,type:String},computed:{is_product:function(){return"product"===this.type}},data:function(){return{is_like:!1,like_icon:!1,dislike:!0,isVisible:!1,toastText:!1,showModal:!1,product_detail:{},is_remove:!1,ishover:!1,remove_confirm:!1}},methods:{like_:function(){this.is_like=!this.is_like,!0===this.is_like?(this.like_icon=!0,this.dislike=!1,this.showToast("You have starred this product! \n You can see it in the waillist.",{theme:"info",icon:"fa-heart",position:"top-right",duration:1500,fullWidth:!1}),Object(s["d"])(this,{dsrId:this.usr_id,proId:this.cube_id}).then((function(t){console.log(t)}))):(this.like_icon=!1,this.dislike=!0)},see_detail:function(){var t=this;if("product"===this.type)this.product_detail={pro_id:this.cube_id,imageUrl:"https://picsum.photos/300/200/?image=1043",name:"fengjinghua",skuCd:"1e212312321232",model:"V2",width:1,height:2,length:3,weight:10,retailPrice:12,minRetailPrice:10,warrantyDay:60,replenishmentPeriod:10,warranty:"Never Never Never Never Never Never Never "},console.log(this.product_detail),this.showModal=!0,Object(s["q"])(this,{proId:this.cube_id}).then((function(o){console.log(o),t.product_detail=o.data}));else if("company"===this.type){for(var o=this.$store.state.user.permissions,e=0;e<o.length;e++)if(1==Number(o[e].permissionId))return this.$store.commit("changeCompanyID",this.cube_id),void this.$router.push({name:"company-detail"});this.showToast("sorry, you have no authority to visit",{icon:"fa-exclamation",position:"top-right",duration:2500,fullWidth:!1})}else if("brand"===this.type){for(o=this.$store.state.user.permissions,e=0;e<o.length;e++)if(2==Number(o[e].permissionId))return this.$store.commit("changeBrandID",this.cube_id),void this.$router.push({name:"brand-detail"});this.showToast("sorry, you have no authority to visit",{icon:"fa-exclamation",position:"top-right",duration:2500,fullWidth:!1})}else"store"===this.type?this.$router.push({name:"brand-detail"}):console.log(">> Error: the prop of cube_id should be product, company, brand or store!")},mouseover:function(){this.ishover=!0},mouseout:function(){this.ishover=!1},remove:function(){this.remove_confirm=!0},confirmRemove:function(){this.remove_confirm=!1,this.is_remove=!0,"company"===this.type?Object(s["i"])(this,{manId:this.cube_id}).then((function(t){console.log(t)})):"brand"===this.type?Object(s["h"])(this,{brdId:this.cube_id}).then((function(t){console.log(t)})):"store"===this.type||console.log(">> Error: the prop of cube_id should be product, company, brand or store!")},close:function(t){this.showModal=!1}}},d=n,l=(e("2d39"),e("2877")),c=Object(l["a"])(d,i,r,!1,null,"9886b9a6",null);o["a"]=c.exports},7522:function(t,o,e){"use strict";e.d(o,"u",(function(){return s})),e.d(o,"m",(function(){return n})),e.d(o,"t",(function(){return d})),e.d(o,"v",(function(){return l})),e.d(o,"d",(function(){return c})),e.d(o,"q",(function(){return u})),e.d(o,"e",(function(){return p})),e.d(o,"r",(function(){return m})),e.d(o,"s",(function(){return h})),e.d(o,"j",(function(){return f})),e.d(o,"g",(function(){return g})),e.d(o,"c",(function(){return _})),e.d(o,"k",(function(){return v})),e.d(o,"o",(function(){return b})),e.d(o,"w",(function(){return y})),e.d(o,"f",(function(){return C})),e.d(o,"i",(function(){return k})),e.d(o,"h",(function(){return w})),e.d(o,"a",(function(){return $})),e.d(o,"b",(function(){return I})),e.d(o,"n",(function(){return x})),e.d(o,"l",(function(){return P})),e.d(o,"z",(function(){return D})),e.d(o,"y",(function(){return N})),e.d(o,"x",(function(){return S})),e.d(o,"p",(function(){return O}));var i="39.106.57.246",r="4396",a="http://"+i+":"+r;function s(t,o){return console.log(t.$http.post(a+"/user/login",o)),t.$http.post(a+"/user/login",o)}function n(t){return t.$http.get(a+"/user/code",{responseType:"arraybuffer"})}function d(t,o){return t.tokenGet.post(a+"/oauth/token",o)}function l(t,o){return t.$http.post(a+"/user/register",o)}function c(t,o){return t.$http.post(a+"/pro/bvo/wishlist/add",o)}function u(t,o){return t.$http.get(a+"/pro/mvo/product/detail/get",{params:o})}function p(t,o){return t.$http.post(a+"/order/product/buy",o)}function m(t,o){return t.$http.get(a+"/pro/mvo/product/get",{params:o})}function h(t,o){return t.$http.get(a+"/pro/mvo/product/all",{params:o})}function f(t,o){return t.$http.post(a+"/pro/mvo/product/delete",o)}function g(t,o){return t.$http.post(a+"/pro/mvo/product/status/update",o)}function _(t,o){return t.$http.post(a+"/pro/mvo/product/add",o)}function v(t,o){return t.$http.post(a+"/pro/mvo/product/detail/update",o)}function b(t,o){return t.$http.get(a+"/order/info/get",{params:o})}function y(t,o){return t.$http.post(a+"/order/ship",o)}function C(t,o){return t.$http.post(a+"/order/ship/cancel",o)}function k(t,o){return t.$http.post(a+"/info/company/delete",o)}function w(t,o){return t.$http.post(a+"/info/brand/delete",o)}function $(t,o){return t.$http.post(a+"/info/brand/add",o)}function I(t,o){return t.$http.post(a+"/info/company/add",o)}function x(t,o){return console.log(t.$http.get(a+"/info/company/get",{params:o})),t.$http.get(a+"/info/company/get",{params:o})}function P(t,o){return t.$http.get(a+"/info/brand/get",{params:o})}function D(t,o){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(a+"/pro/mvo/product/image/upload",o)}function N(t,o){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(a+"/info/company/image/upload",o)}function S(t,o){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,t.imageUpload.post(a+"/info/brand/image/upload",o)}function O(t,o){return t.$http.get(a+"/info/brand/getAllByUserId",{params:o})}},"86e4":function(t,o,e){},8760:function(t,o,e){"use strict";var i=e("e817"),r=e.n(i);r.a},d8b5:function(t,o,e){"use strict";var i=e("44b0"),r=e.n(i);r.a},e817:function(t,o,e){}}]);
//# sourceMappingURL=chunk-1c58cb2e.f8a6eff6.js.map