"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6368,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,t,a){a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=null!=a&&a.width?String(a.width):i;n=e.formattingValues[d]||e.formattingValues[i]}else{var r=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},6368:function(e,t,a){a(94),a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(94160)),d={ordinalNumber:function(e,t){var a=Number(e),n=null==t?void 0:t.unit;return a+("year"===n||"month"===n?"ος":"week"===n||"dayOfYear"===n||"day"===n||"hour"===n||"date"===n?"η":"ο")},era:(0,i.default)({values:{narrow:["πΧ","μΧ"],abbreviated:["π.Χ.","μ.Χ."],wide:["προ Χριστού","μετά Χριστόν"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Τ1","Τ2","Τ3","Τ4"],wide:["1ο τρίμηνο","2ο τρίμηνο","3ο τρίμηνο","4ο τρίμηνο"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],wide:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},defaultWidth:"wide",formattingValues:{narrow:["Ι","Φ","Μ","Α","Μ","Ι","Ι","Α","Σ","Ο","Ν","Δ"],abbreviated:["Ιαν","Φεβ","Μαρ","Απρ","Μαΐ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],wide:["Ιανουαρίου","Φεβρουαρίου","Μαρτίου","Απριλίου","Μαΐου","Ιουνίου","Ιουλίου","Αυγούστου","Σεπτεμβρίου","Οκτωβρίου","Νοεμβρίου","Δεκεμβρίου"]},defaultFormattingWidth:"wide"}),day:(0,i.default)({values:{narrow:["Κ","Δ","T","Τ","Π","Π","Σ"],short:["Κυ","Δε","Τρ","Τε","Πέ","Πα","Σά"],abbreviated:["Κυρ","Δευ","Τρί","Τετ","Πέμ","Παρ","Σάβ"],wide:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"πμ",pm:"μμ",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},abbreviated:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"},wide:{am:"π.μ.",pm:"μ.μ.",midnight:"μεσάνυχτα",noon:"μεσημέρι",morning:"πρωί",afternoon:"απόγευμα",evening:"βράδυ",night:"νύχτα"}},defaultWidth:"wide"})};t.default=d,e.exports=t.default}}]);