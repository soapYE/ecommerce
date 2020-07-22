(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6acd266e"],{"67db":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("va-card",{staticClass:"flex lg12",staticStyle:{"margin-bottom":"2vh",width:"1000px"},attrs:{stripe:"info"}},[a("template",{slot:"header"},[a("va-icon",{attrs:{name:"fa fa-info mr-3",color:"info"}}),a("h4",{staticClass:"mt-0 mb-0"},[t._v(" order detail ")])],1),a("div",{staticClass:"content_container",staticStyle:{display:"flex","flex-direction":"column"}},[a("div",{staticClass:"pdContainer",staticStyle:{display:"flex","flex-direction":"row"}},[a("div",{staticClass:"pdContainer__image"},[a("img",{staticClass:"img",attrs:{src:t.img_url,alt:"Product Image"}})]),a("div",{staticClass:"pdContainer__text"},[a("div",{staticClass:"order_basic"},[a("div",{staticStyle:{"margin-left":"10px","margin-right":"50px"}},[t._v("Order number: "+t._s(t.orderNo))]),a("div",[t._v("Create time: "+t._s(t.createDate))])]),a("template",{staticClass:"py-2",slot:"header"},[a("va-icon",{staticClass:"right-space",attrs:{name:"fa fa-shopping-cart",color:"info"}}),a("h5",{staticClass:"mt-0 mb-0"},[t._v(t._s(t.name))])],1),a("label",{staticClass:"labels"},[a("va-icon",{staticClass:"right-space",attrs:{name:"fa fa-shopping-cart",color:"info"}}),t._v(" Product name: ")],1),t._v(t._s(t.name)),a("br"),a("va-badge",{staticClass:"mb-2 py-1 badge",attrs:{color:"dark",outline:""}},[t._v("Sku cd: "+t._s(t.skuCd))]),a("va-badge",{staticClass:"mb-2 py-1 badge",attrs:{color:"dark",outline:""}},[t._v("Model: "+t._s(t.model))]),a("br"),a("span",{staticClass:"right-space"},[a("label",{staticClass:"labels"},[t._v("Retail Price: ")]),a("span",{staticClass:"text--highlighted"},[t._v("￥"+t._s(t.minRetailPrice))])]),a("label",{staticClass:"labels"}),t._v("["),a("s",[t._v("￥"+t._s(t.retailPrice))]),t._v("] "),a("br"),a("label",{staticClass:"labels"},[t._v("Category: ")]),t._v(t._s(t.category)),a("br"),a("label",{staticClass:"labels"},[t._v("Size: ")]),t._v(t._s(t.width)+" × "+t._s(t.height)),a("br"),a("label",{staticClass:"labels"},[t._v("Weight: ")]),t._v(t._s(t.weight)),a("br"),a("hr"),a("span",{staticClass:"small-title"},[t._v("Other information")]),t._v(" "),a("br"),a("label",{staticClass:"labels"},[t._v("Replenishment period: ")]),t._v(t._s(t.replenishmentPeriod)),a("br"),a("label",{staticClass:"labels"},[t._v("Warranty day: ")]),t._v(t._s(t.warrantyDay)),a("br"),a("label",{staticClass:"labels"},[t._v("Warranty: ")]),t._v(t._s(t.warranty)),a("br"),a("hr"),a("span",{staticClass:"small-title"},[t._v("Pay information")]),t._v(" "),a("br"),a("label",{staticClass:"labels"},[t._v("Amount: ")]),t._v(t._s(t.amount)),a("br"),a("label",{staticClass:"labels"},[t._v("Total: ")]),t._v("￥"+t._s(t.total)),a("br")],2)]),a("div",{staticClass:"pay_info",staticStyle:{display:"flex","flex-direction":"row","justify-content":"right"}},[a("div",{staticStyle:{display:"flex","justify-content":"right",width:"12%"}},[a("va-button",{staticStyle:{width:"100%"},attrs:{color:"#05668d"},on:{click:t.cancelBack}},[t._v("CANCEL")])],1),a("div",{staticStyle:{display:"flex","justify-content":"right",width:"12%"}},[a("va-button",{staticStyle:{width:"100%"},attrs:{color:"#00a896"},on:{click:t.pay}},[t._v("PAY")])],1)])])],2),a("va-modal",{attrs:{size:"small",title:"money not enough",message:t.alertMessage,okText:"recharge",cancelText:t.$t("modal.cancel")},on:{ok:t.recharge},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}}),a("va-modal",{attrs:{size:"small",title:"Success",message:t.successMessage,"hide-default-actions":"true"},model:{value:t.showSuccess,callback:function(e){t.showSuccess=e},expression:"showSuccess"}},[a("template",{slot:"actions"},[a("va-button",{on:{click:t.cancelBack}},[t._v("go back now")])],1)],2)],1)},s=[],o=a("8fb3"),i=a("0932"),n=(a("88a9"),a("b933")),l=a("860f"),c={name:"wallet-pay",components:{VaModal:l["a"],VaButton:i["a"],VaCard:o["a"]},created:function(){console.log(this.$store.state.wallet.orderInfo),console.log(this.$store.state.wallet.productDetail),this.orderInfo=this.$store.state.wallet.orderInfo,this.orderNo=this.orderInfo.orderNo,this.createDate=this.orderInfo.createDate,this.amount=this.orderInfo.productAmount,this.product_detail=this.$store.state.wallet.productDetail,this.pro_id=this.product_detail.pro_id,this.img_url=this.product_detail.image_url,this.name=this.product_detail.NAME,this.skuCd=this.product_detail.sku_cd,this.model=this.product_detail.model,this.category=this.product_detail.category_name,this.width=this.product_detail.width,this.height=this.product_detail.height,this.weight=this.product_detail.weight,this.retailPrice=this.product_detail.retail_price,this.minRetailPrice=this.product_detail.min_retail_price,this.warrantyDay=this.product_detail.warranty_day,this.replenishmentPeriod=this.product_detail.replenishment_period,this.warranty=this.product_detail.warranty,this.amount=this.orderInfo.productAmount},data:function(){return{product_detail:{},orderInfo:{},pro_id:0,img_url:"",name:"",skuCd:"",model:"",category:"",width:"",height:"",weight:"",retailPrice:"",minRetailPrice:"",warrantyDay:"",replenishmentPeriod:"",warranty:"",amount:0,orderNo:"",createDate:"",showAlert:!1,availableMoney:0,showSuccess:!1,lastSeconds:5,timer:null}},computed:{total:function(){return this.minRetailPrice*this.amount},alertMessage:function(){return"your available money in this account is not enough(remaining ￥"+this.availableMoney+") please recharge"},successMessage:function(){return"your payment has been finished, after "+this.lastSeconds+" seconds we will go back to order management"}},methods:{pay:function(){var t=this,e=this.$store.state.wallet.walletId,a={walletId:e};window.localStorage["token"]="wallet",Object(n["b"])(this,a).then((function(a){console.log(a),t.availableMoney=parseFloat(a.data.data.availableMoney),t.availableMoney>=t.total?(window.localStorage["token"]=t.$store.state.user.token,Object(n["e"])(t,{saoId:t.orderInfo.saoId,walletId:e}).then((function(e){t.showSuccess=!0,t.timer=setInterval((function(){t.lastSeconds>0?t.lastSeconds--:(t.showSuccess=!1,clearInterval(t.timer),t.timer=null,t.$router.push({name:"BVO_order"}))}),1e3)}))):t.showAlert=!0}))},recharge:function(){this.showAlert=!1,window.localStorage["token"]="wallet",this.$router.push({name:"wallet-bill"})},cancelBack:function(){clearInterval(this.timer),window.localStorage["token"]=this.$store.state.user.token,this.$router.push({name:"BVO_order"})}}},u=c,d=(a("a6b9"),a("2877")),h=Object(d["a"])(u,r,s,!1,null,"70627e71",null);e["default"]=h.exports},"88a9":function(t,e,a){"use strict";a.d(e,"h",(function(){return i})),a.d(e,"e",(function(){return n})),a.d(e,"i",(function(){return l})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"b",(function(){return h})),a.d(e,"n",(function(){return p})),a.d(e,"k",(function(){return f})),a.d(e,"c",(function(){return m})),a.d(e,"l",(function(){return _})),a.d(e,"j",(function(){return g})),a.d(e,"g",(function(){return b})),a.d(e,"m",(function(){return v})),a.d(e,"p",(function(){return w})),a.d(e,"o",(function(){return y}));var r="39.106.57.246",s="4396",o="http://"+r+":"+s;function i(t,e){return t.$http.get(o+"/info/bvo/get",{params:{userId:e}})}function n(t,e){return t.$http.post(o+"/info/bvo/update",e)}function l(t,e){return t.$http.get(o+"/info/store/get",{params:{dsrId:e}})}function c(t,e){return t.$http.post(o+"/info/store/add",e)}function u(t,e){return t.$http.post(o+"/info/store/delete",e)}function d(t){return t.$http.get(o+"/pro/bvo/product/get")}function h(t,e){return t.$http.post(o+"/pro/bvo/wishlist/add",e)}function p(t,e){return t.$http.post(o+"/pro/bvo/wishlist/delete",e)}function f(t,e){return t.$http.get(o+"/pro/bvo/wishlist/get",{params:{dsrId:e}})}function m(t,e){return t.$http.post(o+"/order/product/buy",e)}function _(t,e){return t.$http.post(o+"/order/product/sell",e)}function g(t,e){return t.$http.get(o+"/order/product/sell/get",{params:{strId:e}})}function b(t,e){return console.log("hello"),t.$http.get(o+"/pro/bvo/product/detail",{params:{proId:e}})}function v(t,e){return t.$http.post(o+"/order/product/sell/delete ",{bsoId:e})}function w(t,e){return t.imageUpload.defaults.headers.Authorization="Bearer "+localStorage.token,console.log(t.imageUpload.defaults.headers),t.imageUpload.post(o+"/info/store/image/upload ",e)}function y(t,e){return t.$http.post(o+"/pro/bvo/wishlist/delete",e)}},a6b9:function(t,e,a){"use strict";var r=a("e059"),s=a.n(r);s.a},b933:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"g",(function(){return n})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"h",(function(){return h})),a.d(e,"e",(function(){return p}));var r="39.106.57.246",s="4396",o="http://"+r+":"+s;function i(t,e){return t.$http.post(o+"/wallet/login",e)}function n(t,e){return t.$http.post(o+"/wallet/register",e)}function l(t,e){return t.$http.get(o+"/wallet/info/get",{params:e})}function c(t,e){return t.$http.get(o+"/wallet/transaction",{params:e})}function u(t,e){return t.$http.post(o+"/wallet/info/update",e)}function d(t,e){return t.$http.post(o+"/wallet/recharge",e)}function h(t,e){return t.$http.post(o+"/wallet/withdraw",e)}function p(t,e){return t.$http.post(o+"/order/pay ",e)}},e059:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6acd266e.9cb7180d.js.map