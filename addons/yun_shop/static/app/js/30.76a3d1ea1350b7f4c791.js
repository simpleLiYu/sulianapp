webpackJsonp([30],{"23tL":function(t,e,s){var a=s("oqt6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("766d9247",a,!0,{})},"4H+u":function(t,e,s){t.exports=s.p+"static/app/img/share_pic@2x.9e4f52a.png"},"C+lN":function(t,e,s){t.exports=s.p+"static/app/img/share_posters@2x.bd2c490.png"},PBQ2:function(t,e,s){t.exports=s.p+"static/app/img/share_pic_normal@2x.041ef93.png"},TeRS:function(t,e,s){t.exports=s.p+"static/app/img/share_bg@2x.97861d0.png"},cKrP:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Tg7E"),n={data:function(){return{sharetitle:"",sharedesc:"",shareimg:"",sharelink:"",share_poster:{PosterUrl:"",app_share_show:0,qrUrl:""},explain:"",is_loaded:!1}},mounted:function(){},methods:{save:function(){a.MessageBox.alert("请长按海报保存")},share_btn:function(t){this.Sharesinit(t)},Sharesinit:function(t){var e=this,s={url:document.location.href,i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.post("member.member.wxJsSdkConfig",s).then(function(s){1==s.result&&e.Shares(s.data,t)},function(t){console.log(t)})},Shares:function(t,e){var s=document.location.protocol,a=window.location.host,n=t.share;n?(this.sharetitle=this.fun.isTextEmpty(n.title)?t.shop.shop.name:t.share.title,this.shareimg=this.fun.isTextEmpty(n.icon)?t.shop.shop.logo:t.share.icon,this.sharedesc=this.fun.isTextEmpty(n.desc)?t.shop.shop.name:t.share.desc):t.shop.shop?(this.sharetitle=t.shop.shop.name,this.shareimg=t.shop.shop.logo,this.sharedesc=t.shop.shop.name):(this.sharetitle="",this.shareimg="",this.sharedesc=""),this.sharelink=1==e?s+"//"+a+"/addons/yun_shop/?#"+window.localStorage.getItem("share_path")+"?i="+this.fun.getKeyByI()+"&type="+this.fun.getTyep()+"&mid="+t.info.uid+"&shop_id=":this.share_poster.qrUrl,console.log(this.sharelink),YDB.Share(this.sharetitle,this.sharedesc,this.shareimg,this.sharelink,"Sharesback")},Sharesback:function(t){"success"==t?Object(a.Toast)("分享成功"):"fail"==t?Object(a.Toast)("分享失败"):Object(a.Toast)("分享取消"),this.siteBack()},siteBack:function(){this.$router.go(-1)},getSharePoster:function(){var t=this;$http.post("plugin.app-set.frontend.app-poster.createAppPoster",{}).then(function(e){1==e.result?(t.share_poster.PosterUrl=e.data.PosterUrl,t.share_poster.app_share_show=e.data.app_share_show?e.data.app_share_show:0,t.share_poster.qrUrl=e.data.qrUrl,t.is_loaded=!0,1==t.share_poster.app_share_show&&(console.log("hahahahaha"),t.getShareExplain())):a.MessageBox.alert(e.msg)},function(t){console.log(t)})},getShareExplain:function(){var t=this;$http.post("plugin.app-set.frontend.app-poster.getAppShareExplain",{}).then(function(e){1==e.result?t.explain=e.data.share_explain:a.MessageBox.alert(e.msg)},function(t){console.log(t)})}},activated:function(){this.fun.getKeyByI(),this.fun.getTyep(),this.getSharePoster()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"share"}},[a("div",{staticClass:"content",style:{width:3==t.fun.getPhoneEnv()?"375px":""}},[a("div",{staticClass:"ImgBg"},[a("div",{staticClass:"top"}),t._v(" "),a("div",{staticClass:"poster"},[1==t.share_poster.app_share_show&&1==t.is_loaded?a("img",{staticStyle:{width:"100%",height:"100%","border-radius":"0.5rem"},attrs:{src:t.share_poster.PosterUrl}}):t._e(),t._v(" "),0==t.share_poster.app_share_show&&1==t.is_loaded?a("img",{staticStyle:{width:"100%",height:"100%","border-radius":"0.5rem"},attrs:{src:s("PBQ2"),alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"button"},[1==t.share_poster.app_share_show?a("yd-button",{attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(e){return t.save()}}},[a("img",{staticClass:"icon",attrs:{src:s("4H+u")}}),t._v("\n          保存图片\n        ")]):t._e(),t._v(" "),a("yd-button",{attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(e){return t.share_btn("1")}}},[a("img",{staticClass:"icon",attrs:{src:s("p1P6")}}),t._v("\n          分享链接\n        ")]),t._v(" "),1==t.share_poster.app_share_show?a("yd-button",{attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(e){return t.share_btn("2")}}},[a("img",{staticClass:"icon",attrs:{src:s("C+lN")}}),t._v("\n          分享海报\n        ")]):t._e(),t._v(" "),1!=t.share_poster.app_share_show?a("yd-button",{attrs:{type:"hollow",shape:"circle"},nativeOn:{click:function(e){return t.siteBack()}}},[t._v("\n          返回\n        ")]):t._e()],1),t._v(" "),1==t.share_poster.app_share_show?a("div",{staticClass:"content-text"},[t._m(0),t._v(" "),a("div",{staticStyle:{"margin-bottom":"50px","text-align":"left",padding:"0 0.75rem"},domProps:{innerHTML:t._s(t.explain)}})]):t._e(),t._v(" "),a("div",[a("a",{ref:"alink",attrs:{href:"#",download:"w3c"}})])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"},[this._v(" ")]),this._v(" "),e("div",{staticClass:"text"},[this._v("分享说明")]),this._v(" "),e("div",{staticClass:"line"},[this._v(" ")])])}]};var r=s("VU/8")(n,i,!1,function(t){s("23tL")},"data-v-0c66c9a4",null);e.default=r.exports},oqt6:function(t,e,s){var a=s("kxFB");(t.exports=s("FZ+f")(!1)).push([t.i,"\n#share[data-v-0c66c9a4] {\n  background: #fb4937;\n  color: #fff;\n  margin-bottom: 2rem;\n  min-height: 100vh;\n}\n#share .ImgBg[data-v-0c66c9a4] {\n    background: url("+a(s("TeRS"))+") no-repeat;\n    min-height: 100vh;\n}\n#share .ImgBg .top[data-v-0c66c9a4] {\n      width: 100%;\n      height: 2.5rem;\n}\n#share .ImgBg .poster[data-v-0c66c9a4] {\n      margin: 0 auto;\n      margin-bottom: 2.5rem;\n      width: 273px;\n      height: 456px;\n      border-radius: 0.5rem;\n      border: #fff 1px solid;\n}\n#share .ImgBg .button[data-v-0c66c9a4] {\n      width: 293px;\n      margin: 0 auto;\n      padding: 1rem 0;\n}\n#share .ImgBg .button .icon[data-v-0c66c9a4] {\n        width: 14px;\n        height: 14px;\n        position: relative;\n        top: 2px;\n}\n#share .ImgBg .content-text[data-v-0c66c9a4] {\n      margin-top: 1rem;\n}\n#share .ImgBg .content-text .title[data-v-0c66c9a4] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        height: 2rem;\n        width: 100%;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        padding: 0 0.75rem;\n}\n#share .ImgBg .content-text .title .line[data-v-0c66c9a4] {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          height: 2px;\n          position: relative;\n          top: 50%;\n          background: #fff;\n}\n#share .ImgBg .content-text .title .text[data-v-0c66c9a4] {\n          line-height: 1.5rem;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          font-size: 1.5rem;\n          font-weight: 800;\n}\n",""])},p1P6:function(t,e,s){t.exports=s.p+"static/app/img/share_link@2x.17b18cf.png"}});