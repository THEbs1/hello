"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[78938],{78938:function(e,n,t){t.r(n),t(78557),t(90076);var r=t(9482),i=t(56869),a=t(86191),c=t(50764),s=t(40532),o=t(48080);function l(e,n,t,a){return i.Ay.show(),e.getItem(e.getCurrentUserId(),t).then((function(s){return s.IsSeries?e.getNewLiveTvTimerDefaults({programId:t}).then((function(n){return e.createLiveTvSeriesTimer(n).then((function(){i.Ay.hide(),(0,c.A)(r.Ay.translate("SeriesRecordingScheduled"))}))})):a?u(n,e.serverId()):d(e.serverId(),n,!0)}))}function u(e,n){return new Promise((function(t,c){(0,s.A)({text:r.Ay.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.Ay.translate("HeaderCancelRecording"),cancelText:r.Ay.translate("HeaderKeepRecording")}).then((function(){i.Ay.show(),d(a.A.getApiClient(n),e,!0).then(t,c)}),c)}))}function d(e,n,t){return i.Ay.show(),e.cancelLiveTvTimer(n).then((function(){!1!==t&&(i.Ay.hide(),(0,c.A)(r.Ay.translate("RecordingCancelled")))}))}function A(e,n,t){return i.Ay.show(),e.getNewLiveTvTimerDefaults({programId:n}).then((function(n){return(t?e.createLiveTvSeriesTimer(n):e.createLiveTvTimer(n)).then((function(){i.Ay.hide(),(0,c.A)(r.Ay.translate("RecordingScheduled"))}))}))}n.default={cancelTimer:d,createRecording:A,changeRecordingToSeries:l,toggleRecording:function(e,n,t,s,u){var h=a.A.getApiClient(e),m=t&&"Cancelled"!==s;return u&&m?function(e,n,t,s,l){return new Promise((function(n,u){var A=[];A.push({name:r.Ay.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===s?A.push({name:r.Ay.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):A.push({name:r.Ay.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),A.push({name:r.Ay.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),o.A.show({text:r.Ay.translate("MessageConfirmRecordingCancellation"),buttons:A}).then((function(s){var o=a.A.getApiClient(e);"canceltimer"===s?(i.Ay.show(),d(o,t,!0).then(n,u)):"cancelseriestimer"===s?(i.Ay.show(),o.cancelLiveTvSeriesTimer(l).then((function(){(0,c.A)(r.Ay.translate("SeriesCancelled")),i.Ay.hide(),n()}),u)):n()}),u)}))}(e,0,t,s,u):m&&n?l(h,t,n,!0):n?A(h,n):Promise.reject()},cancelTimerWithConfirmation:u,cancelSeriesTimerWithConfirmation:function(e,n){return new Promise((function(t,o){(0,s.A)({text:r.Ay.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.Ay.translate("HeaderCancelSeries"),cancelText:r.Ay.translate("HeaderKeepSeries")}).then((function(){i.Ay.show(),a.A.getApiClient(n).cancelLiveTvSeriesTimer(e).then((function(){(0,c.A)(r.Ay.translate("SeriesCancelled")),i.Ay.hide(),t()}),o)}),o)}))}}}}]);