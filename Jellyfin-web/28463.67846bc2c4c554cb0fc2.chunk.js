"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28463],{28463:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}}),r(44962),r(14382),r(84734),r(86584),r(78557),r(90076),r(83994),r(82367),r(63855);var i=r(56869),n=r(9482),l=(r(77157),r(98959),r(15453),r(89100)),s=r(62014);function o(e){switch(e.toLowerCase()){case"m3u":return"M3U Playlist";case"hdhomerun":return"HDHomerun";case"satip":return"DVB";default:return"Unknown"}}function u(e){var t=$(e.target).parents(".xmltvForm")[0];Promise.resolve().then(r.bind(r,21840)).then((function(e){var r=new(0,e.default);r.show({includeFiles:!0,callback:function(e){if(e){var i=t.querySelector(".txtPath");i.value=e,i.focus()}r.close()}})}))}function c(e,t,r){function c(e,t){if(e&&t){var r=e.ListingProviders.filter((function(e){return e.Id===t}))[0];return r?Promise.resolve(r):c()}return ApiClient.getJSON(ApiClient.getUrl("LiveTv/ListingProviders/Default"))}function a(){i.Ay.show(),ApiClient.getNamedConfiguration("livetv").then((function(r){c(r,t).then((function(t){e.querySelector(".txtPath").value=t.Path||"",e.querySelector(".txtKids").value=(t.KidsCategories||[]).join("|"),e.querySelector(".txtNews").value=(t.NewsCategories||[]).join("|"),e.querySelector(".txtSports").value=(t.SportsCategories||[]).join("|"),e.querySelector(".txtMovies").value=(t.MovieCategories||[]).join("|"),e.querySelector(".txtMoviePrefix").value=t.MoviePrefix||"",e.querySelector(".txtUserAgent").value=t.UserAgent||"",e.querySelector(".chkAllTuners").checked=t.EnableAllTuners,e.querySelector(".chkAllTuners").checked?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide"),function(e,t,r){for(var i="",n=0,l=r.length;n<l;n++){var s=r[n];i+='<div class="listItem">';var u=t.EnabledTuners||[],c=t.EnableAllTuners||-1!==u.indexOf(s.Id)?" checked":"";i+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkTuner" data-id="'+s.Id+'" '+c+"><span></span></label>",i+='<div class="listItemBody two-line">',i+='<div class="listItemBodyText">',i+=s.FriendlyName||o(s.Type),i+="</div>",i+='<div class="listItemBodyText secondary">',i+=s.Url,i+="</div>",i+="</div>",i+="</div>"}e.querySelector(".tunerList").innerHTML=i}(e,t,r.TunerHosts),i.Ay.hide()}))}))}function d(e){var t=e.value;return t?t.split("|"):[]}var v=this;v.submit=function(){e.querySelector(".btnSubmitListings").click()},v.init=function(){var o=!1===(r=r||{}).showCancelButton;e.querySelector(".btnCancel").classList.toggle("hide",o);var c=!1===r.showSubmitButton;e.querySelector(".btnSubmitListings").classList.toggle("hide",c),$("form",e).on("submit",(function(){return function(){i.Ay.show();var o=t;ApiClient.getNamedConfiguration("livetv").then((function(t){var u=t.ListingProviders.filter((function(e){return e.Id===o}))[0]||{};u.Type="xmltv",u.Path=e.querySelector(".txtPath").value,u.MoviePrefix=e.querySelector(".txtMoviePrefix").value||null,u.UserAgent=e.querySelector(".txtUserAgent").value||null,u.MovieCategories=d(e.querySelector(".txtMovies")),u.KidsCategories=d(e.querySelector(".txtKids")),u.NewsCategories=d(e.querySelector(".txtNews")),u.SportsCategories=d(e.querySelector(".txtSports")),u.EnableAllTuners=e.querySelector(".chkAllTuners").checked,u.EnabledTuners=u.EnableAllTuners?[]:$(".chkTuner",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ListingProviders",{ValidateListings:!0}),data:JSON.stringify(u),contentType:"application/json"}).then((function(){i.Ay.hide(),!1!==r.showConfirmation&&l.default.processServerConfigurationUpdateResult(),s.A.trigger(v,"submitted")}),(function(){i.Ay.hide(),l.default.alert({message:n.Ay.translate("ErrorAddingXmlTvFile")})}))}))}(),!1})),e.querySelector("#btnSelectPath").addEventListener("click",u),e.querySelector(".chkAllTuners").addEventListener("change",(function(t){t.target.checked?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide")})),a()}}}}]);