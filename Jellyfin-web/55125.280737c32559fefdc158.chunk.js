"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55125,83354,49755],{67122:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(89336),n(26448),n(4754),n(94),n(36947),n(78557),n(90076),n(45309),n(83994),n(82367);var r=n(62014);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var c=function(){return s((function e(t,n,r,i){o(this,e),this.requestSent=t.getTime(),this.requestReceived=n.getTime(),this.responseSent=r.getTime(),this.responseReceived=i.getTime()}),[{key:"getOffset",value:function(){return(this.requestReceived-this.requestSent+(this.responseSent-this.responseReceived))/2}},{key:"getDelay",value:function(){return this.responseReceived-this.requestSent-(this.responseSent-this.requestReceived)}},{key:"getPing",value:function(){return this.getDelay()/2}}])}(),l=function(){return s((function e(t){o(this,e),this.manager=t,this.pingStop=!0,this.pollingInterval=1e3,this.poller=null,this.pings=0,this.measurement=null,this.measurements=[]}),[{key:"isReady",value:function(){return!!this.measurement}},{key:"getTimeOffset",value:function(){return this.measurement?this.measurement.getOffset():0}},{key:"getPing",value:function(){return this.measurement?this.measurement.getPing():0}},{key:"updateTimeOffset",value:function(e){this.measurements.push(e),this.measurements.length>8&&this.measurements.shift();var t=this.measurements.slice(0);t.sort((function(e,t){return e.getDelay()-t.getDelay()})),this.measurement=t[0]}},{key:"requestPing",value:function(){return console.warn("SyncPlay TimeSync requestPing: override this method!"),Promise.reject("Not implemented.")}},{key:"internalRequestPing",value:function(){var e=this;this.poller||this.pingStop||(this.poller=setTimeout((function(){e.poller=null,e.requestPing().then((function(t){return e.onPingResponseCallback(t)})).catch((function(t){return e.onPingRequestErrorCallback(t)})).finally((function(){return e.internalRequestPing()}))}),this.pollingInterval))}},{key:"onPingResponseCallback",value:function(e){var t=e.requestSent,n=e.requestReceived,i=e.responseSent,o=e.responseReceived,u=new c(t,n,i,o);this.updateTimeOffset(u),this.pings>=3?this.pollingInterval=6e4:this.pings++,r.A.trigger(this,"update",[null,this.getTimeOffset(),this.getPing()])}},{key:"onPingRequestErrorCallback",value:function(e){console.error(e),r.A.trigger(this,"update",[e,null,null])}},{key:"resetMeasurements",value:function(){this.measurement=null,this.measurements=[]}},{key:"startPing",value:function(){this.pingStop=!1,this.internalRequestPing()}},{key:"stopPing",value:function(){this.pingStop=!0,this.poller&&(clearTimeout(this.poller),this.poller=null)}},{key:"forceUpdate",value:function(){this.stopPing(),this.pollingInterval=1e3,this.pings=0,this.startPing()}},{key:"remoteDateToLocal",value:function(e){return new Date(e.getTime()-this.getTimeOffset())}},{key:"localDateToRemote",value:function(e){return new Date(e.getTime()+this.getTimeOffset())}}])}();t.default=l},55125:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(78557),n(83994),n(82367);var r=n(90381),i=n(62014),o=n(67202),u=n(4438),s=n(95937);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}function f(e,t){return new Date(e.getTime()+t)}var m=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.manager=null,this.timeSyncServer=null,this.timeSyncDeviceId=(0,u.getSetting)("timeSyncDevice")||"server",this.extraTimeOffset=(0,o.S)((0,u.getSetting)("extraTimeOffset"),0)},(t=[{key:"init",value:function(e){var t=this;this.manager=e,this.timeSyncServer=new s.default(e),i.A.on(this.timeSyncServer,"update",(function(e,n,r,o){n?console.debug("SyncPlay TimeSyncCore: time sync with server issue:",n):i.A.trigger(t,"time-sync-server-update",[r,o])})),i.A.on(r.A,"change",(function(e,n){"extraTimeOffset"===n&&(t.extraTimeOffset=(0,o.S)((0,u.getSetting)("extraTimeOffset"),0))}))}},{key:"forceUpdate",value:function(){this.timeSyncServer.forceUpdate()}},{key:"getActiveDeviceName",value:function(){return"Server"}},{key:"remoteDateToLocal",value:function(e){return f(this.timeSyncServer.remoteDateToLocal(e),-this.extraTimeOffset)}},{key:"localDateToRemote",value:function(e){return f(this.timeSyncServer.localDateToRemote(e),this.extraTimeOffset)}},{key:"getTimeOffset",value:function(){return this.timeSyncServer.getTimeOffset()+this.extraTimeOffset}}])&&c(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=m},95937:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}function u(e,t,n){return t=a(t),function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,n||[],a(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(26437),n(52697),n(78557),n(90076),n(21359),n(83994),n(82367);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(t,e),n=t,(r=[{key:"requestPing",value:function(){var e,t=this.manager.getApiClient(),n=new Date;return t.getServerTime().then((function(t){return e=new Date,t.json()})).then((function(t){var r=new Date(t.RequestReceptionTime),i=new Date(t.ResponseTransmissionTime);return Promise.resolve({requestSent:n,requestReceived:r,responseSent:i,responseReceived:e})}))}}])&&i(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(n(67122).default);t.default=l}}]);