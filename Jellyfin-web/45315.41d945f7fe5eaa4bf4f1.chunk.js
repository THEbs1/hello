"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45315,33188,10807],{20404:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(56974)),o=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function u(e){return"'"+o[e]+" alle' p"}var s={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){return 0===e?"'domenica scorsa alle' p":"'"+o[e]+" scorso alle' p"}(n)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){return 0===e?"'domenica prossima alle' p":"'"+o[e]+" prossimo alle' p"}(n)},other:"P"};t.default=function(e,t,a,n){var r=s[e];return"function"==typeof r?r(t,a,n):r},e.exports=t.default},33188:function(e,t,a){a(36947),a(78557),a(73687);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var r=n(a(10564)),o=n(a(23058));e.exports=t.default}}]);