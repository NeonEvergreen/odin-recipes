(function(b){"object"==typeof exports&&"object"==typeof module?b(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],b):b(CodeMirror)})(function(b){b.registerGlobalHelper("fold","comment",function(b){return b.blockCommentStart&&b.blockCommentEnd},function(g,d){var e=g.getModeAt(d),m=e.blockCommentStart;e=e.blockCommentEnd;if(m&&e){for(var f=d.line,h=g.getLine(f),a=d.ch,k=0;;)if(a=0>=a?-1:h.lastIndexOf(m,a-1),-1==a){if(1==k)return;k=1;a=h.length}else{if(1==
k&&a<d.ch)return;if(/comment/.test(g.getTokenTypeAt(b.Pos(f,a+1)))&&(0==a||h.slice(a-e.length,a)==e||!/comment/.test(g.getTokenTypeAt(b.Pos(f,a))))){d=a+m.length;break}--a}h=1;k=g.lastLine();a=f;a:for(;a<=k;++a)for(var l=g.getLine(a),c=a==f?d:0;;){var n=l.indexOf(m,c);c=l.indexOf(e,c);0>n&&(n=l.length);0>c&&(c=l.length);c=Math.min(n,c);if(c==l.length)break;if(c==n)++h;else if(!--h){var p=a;var q=c;break a}++c}if(null!=p&&(f!=p||q!=d))return{from:b.Pos(f,d),to:b.Pos(p,q)}}})});