"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3376],{3376:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}}),r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(56869),u=r(24468);var i={};function o(e,t,o){var a;this.preRender=function(){a=function(e,t){var r=function(e){var t=function(e){return"".concat(e.topParentId,"-studios")}(e),r=i[t];return r||((r=i[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"DateCreated,PrimaryImageAspectRatio",StartIndex:0}}).query.ParentId=e.topParentId),r.query}(t);return n.Ay.show(),ApiClient.getStudios(ApiClient.getCurrentUserId(),r)}(0,t)},this.renderTab=function(){!function(e,t,i){i.then((function(t){var i=e.querySelector("#items");u.default.buildCards(t.Items,{itemsContainer:i,shape:"backdrop",preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,context:"tvshows"}),n.Ay.hide(),Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}))}(o,0,a)}}}}]);