(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-404a87fe"],{"07c3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"shop"},[a("va-card",{attrs:{title:"shop",stripe:"info"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[a("div",[a("div",{staticClass:"search",staticStyle:{display:"flex","flex-direction":"row"}},[a("div",{staticStyle:{width:"30%"}},[a("va-input",{model:{value:t.searchIndex,callback:function(e){t.searchIndex=e},expression:"searchIndex"}},[a("va-icon",{attrs:{slot:"prepend",color:"gray",name:"fa fa-search"},slot:"prepend"})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloading,expression:"isloading"}],staticClass:"loading",staticStyle:{"margin-left":"10px","margin-top":"10px"}},[a("hollow-dots-spinner",{attrs:{"animation-duration":1e3,size:80,color:"skyblue"}})],1)]),a("div",{staticClass:"product_list"},t._l(t.currentProducts.slice((t.activePage-1)*t.pageSize,t.activePage*t.pageSize),(function(e){return a("div",{staticClass:"product_item"},[a("cube-item",{attrs:{img_url:e.image_url,img_title:e.name,img_intro:e.description,type:"product",cube_id:e.pro_id,price:e.min_retail_price,"wit-id":e.witId,usr_id:parseInt(t.dsrId)}})],1)})),0)]),a("div",{staticClass:"pagination"},[a("va-pagination",{attrs:{pages:t.totalPage,"visible-pages":5,"boundary-links":!1},model:{value:t.activePage,callback:function(e){t.activePage=e},expression:"activePage"}})],1)])])],1)])},s=[],r=a("7a7b"),n=a("7a71"),o=a("88a9"),c=a("2b70"),l={components:{HollowDotsSpinner:c["a"],VaInput:n["a"],CubeItem:r["a"]},created:function(){var t=this;this.dsrId=this.$store.state.bvo.dsrId,Object(o["f"])(this).then((function(e){200==e.status?(t.allProducts=e.data.data,Object(o["k"])(t,t.dsrId).then((function(e){if(200==e.status){for(var a=e.data.data,i=0;i<t.allProducts.length;i++){var s=t.allProducts[i].pro_id;t.allProducts[i].witId=0;for(var r=0;r<a.length;r++)if(s==a[r].pro_id){t.allProducts[i].witId=a[r].wit_id;break}}t.currentProducts=t.allProducts}else console.log(e.message)}))):console.log(e.message)}))},data:function(){return{allProducts:[],currentProducts:[],searchIndex:"",timer:null,dsrId:0,pageSize:6,activePage:1,isloading:!1}},computed:{totalPage:function(){var t=Math.ceil(this.currentProducts.length/this.pageSize);return t}},watch:{searchIndex:function(t,e){var a=this;clearTimeout(this.timer),this.timer=setTimeout((function(){a.isloading=!0,setTimeout((function(){a.isloading=!1,a.searchProduct()}),2e3)}),1e3)}},methods:{searchProduct:function(){for(var t=[],e=0;e<this.allProducts.length;e++){var a=this.allProducts[e];(a.name.toLowerCase().includes(this.searchIndex.toLowerCase())||a.description.toLowerCase().includes(this.searchIndex.toLowerCase()))&&(t=t.concat(a))}this.currentProducts=t,this.activePage=1}}},d=l,u=(a("377f"),a("2877")),p=Object(u["a"])(d,i,s,!1,null,"2e7f81c7",null);e["default"]=p.exports},"377f":function(t,e,a){"use strict";var i=a("e834"),s=a.n(i);s.a},e834:function(t,e,a){}}]);
//# sourceMappingURL=chunk-404a87fe.f2b22839.js.map