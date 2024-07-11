"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56941,37658,94160,7184,83518,15277,71779,9911,82420,49398,32292,40247,6546,75336,47352,65312,60039,27017,65149,27182,4636,87530,4801,82255,99435,77077,71944,59874,21816],{37658:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},94160:function(e,t,a){a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var u;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,n=null!=a&&a.width?String(a.width):i;u=e.formattingValues[n]||e.formattingValues[i]}else{var l=e.defaultWidth,r=null!=a&&a.width?String(a.width):e.defaultWidth;u=e.values[r]||e.values[l]}return u[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},7184:function(e,t,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=a.width,i=u&&e.matchPatterns[u]||e.matchPatterns[e.defaultMatchWidth],n=t.match(i);if(!n)return null;var l,r=n[0],o=u&&e.parsePatterns[u]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(o)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(r))return a}(o):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(r))return a}(o);return l=e.valueCallback?e.valueCallback(s):s,{value:l=a.valueCallback?a.valueCallback(l):l,rest:t.slice(r.length)}}},e.exports=t.default},83518:function(e,t,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=t.match(e.matchPattern);if(!u)return null;var i=u[0],n=t.match(e.parsePattern);if(!n)return null;var l=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:l=a.valueCallback?a.valueCallback(l):l,rest:t.slice(i.length)}}},e.exports=t.default},40247:function(e,t,a){function u(e){return e.replace(/sekuntia?/,"sekunnin")}function i(e){return e.replace(/minuuttia?/,"minuutin")}function n(e){return e.replace(/tuntia?/,"tunnin")}function l(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function r(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}a(36947),a(95021),a(93062),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:u},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:u},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"päivä",other:"{{count}} päivää",futureTense:function(e){return e.replace(/päivää?/,"päivän")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:l},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:l},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"lähes vuosi",other:"lähes {{count}} vuotta",futureTense:o}};t.default=function(e,t,a){var u=s[e],i=1===t?u.one:u.other.replace("{{count}}",String(t));return null!=a&&a.addSuffix?a.comparison&&a.comparison>0?u.futureTense(i)+" kuluttua":i+" sitten":i},e.exports=t.default},6546:function(e,t,a){a(36947);var u=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(37658)),n={date:(0,i.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=n,e.exports=t.default},75336:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'tänään klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};t.default=function(e,t,a,i){return u[e]},e.exports=t.default},47352:function(e,t,a){a(94),a(36947);var u=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(94160)),n={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kesä","heinä","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},l={narrow:n.narrow,abbreviated:n.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kesäkuuta","heinäkuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},r={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},o={narrow:r.narrow,short:r.short,abbreviated:r.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},s={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,i.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","jälkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:n,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),day:(0,i.default)({values:r,defaultWidth:"wide",formattingValues:o,defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiyö",noon:"keskipäivä",morning:"ap",afternoon:"ip",evening:"illalla",night:"yöllä"},wide:{am:"ap",pm:"ip",midnight:"keskiyöllä",noon:"keskipäivällä",morning:"aamupäivällä",afternoon:"iltapäivällä",evening:"illalla",night:"yöllä"}},defaultWidth:"wide"})};t.default=s,e.exports=t.default},65312:function(e,t,a){a(36947),a(96054);var u=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(7184)),n={ordinalNumber:(0,u(a(83518)).default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})};t.default=n,e.exports=t.default},56941:function(e,t,a){a(36947);var u=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(a(40247)),n=u(a(6546)),l=u(a(75336)),r=u(a(47352)),o=u(a(65312)),s={code:"fi",formatDistance:i.default,formatLong:n.default,formatRelative:l.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}}]);