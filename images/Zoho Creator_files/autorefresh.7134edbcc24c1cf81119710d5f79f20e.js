(function(c){DRE.serviceFlags.isEnabled("amd-modules")?"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],c):c(CodeMirror):c(CodeMirror)})(function(c){function f(b,a){function d(){b.display.wrapper.offsetHeight?(e(b,a),b.display.lastWrapHeight!=b.display.wrapper.clientHeight&&(b.resize(),b.refresh())):a.timeout=setTimeout(d,a.delay)}a.timeout=setTimeout(d,a.delay);a.hurry=function(){clearTimeout(a.timeout);
a.timeout=setTimeout(d,50)};c.on(window,"mouseup",a.hurry);c.on(window,"keyup",a.hurry)}function e(b,a){clearTimeout(a.timeout);c.off(window,"mouseup",a.hurry);c.off(window,"keyup",a.hurry)}c.defineOption("autoRefresh",!1,function(b,a){b.state.autoRefresh&&(e(b,b.state.autoRefresh),b.state.autoRefresh=null);a&&0==b.display.wrapper.offsetHeight&&f(b,b.state.autoRefresh={delay:a.delay||250})})});