function ZE_Init(){}ZE_Init.init=function(){ZE_Init.staticVersion="63";ZE_Init.language="en";ZE_Init.needplaintext=true;ZE_Init.editorCSS=true;ZE_Init.inlineQuotes=true;ZE_Init.modeChange=undefined;ZE_Init.spellcheckURL="lt.zoho.com";ZE_Init.domain="zoho.com";ZE_Init.tabKeyHandling=true;ZE_Init.needEditorFocus=true;ZE_Init.needEditorBorder=true;ZE_Init.needResizeImage=false;ZE_Init.removeInsertOptions=false;ZE_Init.removeFontFamily=false;ZE_Init.removeFontSize=false;ZE_Init.defaultFontSize="10pt";ZE_Init.defaultFontFamily="DejaVuSans,sans-serif";ZE_Init.outGoingFontFamily="";ZE_Init.outGoingFontSize="";ZE_Init.outGoingColor="";var B=window.location.protocol;ZE_Init.cssPath=ZE_Init.imgPath=B+"//css.zohostatic.com/ze/"+ZE_Init.staticVersion;ZE_Init.jsPath=B+"//js.zohostatic.com/ze/"+ZE_Init.staticVersion;ZE_Init.toolbarOrder=[[["bold","Bold (Ctrl+B)","zei-bold"],["italic","Italic (Ctrl+I)","zei-italic"],["underline","Underline (Ctrl+U)","zei-underline"],],[["strikethrough","Strikethrough","zei-strike"]],[["forecolor","Font color","zei-textclr"]],[["backcolor","Background Color","zei-bgclr"]],[["fontfamily","Font","zeFFce"]],[["fontsize","Font Size","ze_pdl zeFUce"]],[["subscript","Subscript","zei-subScript"],["superscript","Superscript","zei-superScript"]],[["alignoptions","Fontstyle Options","zei-textleft"],["listoptions","List Options","zei-unorder"],["indentoptions","Indent Options","zei-outdent"]],[["quote","Insert Quote","zei-quote"],["image","Insert Image","zei-image"]],[["link","Insert Link","zei-link"],["unlink","Remove Link","zei-unlink"]],[["removeformat","Remove Formatting","zei-removeformat"],["table","Insert Table","zei-table"],["inserthorizontalrule","Insert Horizontal Rule","zei-line"]],[["otheroptions","Plain Text Mode","zei-arrow ze-big"]]];ZE_Init.align=[{htm:"Align Left (Ctrl+L)",datAttr:"justifyleft"},{htm:"Align Right (Ctrl+R)",datAttr:"justifyright"},{htm:"Justify (Ctrl+J)",datAttr:"justifyfull"},{htm:"Center (Ctrl+E)",datAttr:"justifycenter"}];ZE_Init.list=[{htm:"Bullets",datAttr:"insertunorderedlist"},{htm:"Numbering",datAttr:"insertorderedlist"}];ZE_Init.indent=[{htm:"Increase Indent",datAttr:"indent"},{htm:"Decrease Indent",datAttr:"outdent"}];ZE_Init.others=[{htm:"Plain Text Mode",datAttr:"switchmode"}];ZE_Init.fontfamily=function(){return[{htm:"Serif",ff:"serif"},{htm:"Arimo",ff:"Arimo"},{htm:"Ptmono",ff:"Ptmono"},{htm:"Heuristica",ff:"Heuristica"},{htm:"EBGaramond",ff:"EBGaramond"},{htm:"RobotoCondensed",ff:"RobotoCondensed"},{htm:"OpenSans",ff:"OpenSans"},{htm:"Tinos",ff:"Tinos"},{htm:"Lato",ff:"Lato"},{htm:"DejaVuSans",ff:"DejaVuSans"},{htm:"ArchivoBlack",ff:"ArchivoBlack"},{htm:"ComicNeue",ff:"ComicNeue"},{htm:"Carlito",ff:"Carlito"}]};ZE_Init.fontsize=[{htm:"8",datAttr:"1"},{htm:"10",datAttr:"2"},{htm:"12",datAttr:"3"},{htm:"14",datAttr:"4"},{htm:"18",datAttr:"5"},{htm:"24",datAttr:"6"},{htm:"36",datAttr:"7"}];ZE_Init.insertOptions=[["image","Insert Image","ze_tim"],["smiley","Insert smiley","ze_tis"],["link","Insert Link","ze_til"],["unlink","Remove Link","ze_tuli"],["table","Insert Table","ze_tbl"],["inserthorizontalrule","Insert Horizontal Rule","ze_hr"],["insertHTML","Insert HTML","ze_obj"],["insertCode","Insert Code","zei-code"],["quote","Insert Quote","zei-quote"]];ZE_Init.imgAction="/ze/uploadImage";ZE_Init.imgParameters=undefined;ZE_Init.setContentProcessed=false;var A=document,D=navigator.userAgent.toLowerCase(),C=A.createElement("img");ZE_Init.is_ie=(D.indexOf("ie")!==-1);ZE_Init.is_safari=(D.indexOf("safari")!==-1);ZE_Init.is_opera=(D.indexOf("opera")!==-1);ZE_Init.is_mac=(D.indexOf("mac")!==-1);ZE_Init.theme=ZE_Init.ElementInArray(["blue","green","gray","brown","lavender","pink","stars","heart","wood","leaf"],ZE_Init.theme)||"gray";ZE_Init.language=ZE_Init.ElementInArray(["en","zh","da","nl","fr","de","hu","it","ja","pl","pt","ru","es","sv","tr","uk"],ZE_Init.language)||"en";if(ZE_Init.is_opera){ZE_Init.toolbarOrder.pop()}ZE_Init.loadURL(ZE_Init.jsPath+"/js/i18n/"+ZE_Init.language+"/zep.min.js","js");ZE_Init.loadURL(ZE_Init.cssPath+"/css/editor.min.css","css");ZE_Init.is_ie=ZE_Init.is_ie||D.indexOf("edge/")>0||D.indexOf("edg/")>0?true:(D.indexOf("trident/")>0?true:false);if(ZE_Init.is_ie){ZE_Init.loadURL(ZE_Init.cssPath+"/css/zmetoolbar.min.css","css")}ZE_Init.loading=true};ZE_Init.loadURL=function(A,D){var C,E,B=document;if(D==="css"){C=B.createElement("link");C.type="text/css";C.rel="stylesheet";C.href=A;B.getElementsByTagName("head")[0].appendChild(C)}else{if(D==="js"){E=B.createElement("script");E.type="text/javascript";E.src=A;B.getElementsByTagName("head")[0].appendChild(E)}}};ZE_Init.ElementInArray=function(C,B){var A;while(A=C.shift()){if(A===B){return A}}};ZE_Init.toolbarOrderMapping={bold:["bold","Bold (Ctrl+B)","zei-bold"],italic:["italic","Italic (Ctrl+I)","zei-italic"],underline:["underline","Underline (Ctrl+U)","zei-underline"],strikethrough:["strikethrough","Strikethrough","zei-strike"],subscript:["subscript","Subscript","zei-subScript"],superscript:["superscript","Superscript","zei-superScript"],bgcolor:["backcolor","Background Color","zei-bgclr"],fontcolor:["forecolor","Font Color","zei-textclr"],fontfamily:["fontfamily","Font","zeFFce"],fontsize:["fontsize","Font Size","ze_pdl zeFUce"],justifyleft:["justifyleft","Align Text Left (Ctrl+L)","zei-textleft"],justifyright:["justifyright","Align Text Right (Ctrl+R)","zei-textright"],justifyfull:["justifyfull","Justify (Ctrl+J)","zei-textjustify"],justifycenter:["justifycenter","Center (Ctrl+E)","zei-textcenter"],insertunorderedlist:["insertunorderedlist","Bullets","zei-unorder"],insertorderedlist:["insertorderedlist","Numbering","zei-order"],outdent:["outdent","Decrease Indent","zei-outdent"],indent:["indent","Increase Indent","zei-indent"],removeformat:["removeformat","Remove Formatting","zei-removeformat"],image:["image","Insert Image","ze_tim"],smiley:["smiley","Insert smiley","ze_tis"],link:["link","Insert Link","zei-link"],unlink:["unlink","Remove Link","zei-unlink"],insertoptions:["insertoptions","Insert Options","ze_spo"],edithtml:["edithtml","Edit HTML","zei-editHtml"],spellcheck:["spellcheck","Check Spelling","ze_sp"],spellcheckoptions:["spellcheckoptions","Spell Check Languages","ze_spo"],table:["table","Insert Table","zei-table"],inserthorizontalrule:["inserthorizontalrule","Insert Horizontal Rule","zei-line"],insertHTML:["insertHTML","Insert HTML","zei-html"],code:["insertCode","Insert Code","zei-code"],quote:["quote","Insert Quote","zei-quote"],plain:["otheroptions","Plain Text Mode","zei-arrow ze-big"]};ZE_Init.toolbarOrderGenerate=function(E){var C=[],D,A,B,F;for(B in E){if(E.hasOwnProperty(B)){A=E[B];D=[];for(F in A){if(A.hasOwnProperty(F)){D.push(ZE_Init.toolbarOrderMapping[A[F]])}}C.push(D)}}return C};ZE_Init.insertOptionsGenerate=function(D){var A=[],B=D.length,C=0;for(;C<B;C++){A[C]=ZE_Init.toolbarOrderMapping[D[C]]}return A};ZE_Init.removeTooltip=function(){};ZE_Init.language=jsLocale;ZE_Init.inlineQuotes=false;ZE_Init.needEditorFocus=false;ZE_Init.defaultFontColor="black";ZE_Init.csskeyvalue="css.zohostatic.com";ZE_Init.jskeyvalue="js.zohostatic.com";ZE_Init.domain="zoho.com";ZE_Init.contextVal="";ZE_Init.datagram=true;ZE_Init.csrfCookieName="zccpn";ZE_Init.csrfParamVal="zccpn";ZE_Init.smileyPath="/ze/images";if(typeof getConfig==="function"){var configJson=getConfig();if(configJson.production==="true"){ZE_Init.csskeyvalue=configJson.cssStaticServer;ZE_Init.jskeyvalue=configJson.jsStaticServer;ZE_Init.domain=configJson.domainVal}}ZE_Init.loadFontCss=function(A,C){if(A.doc==undefined||(A.state!=undefined&&A.state=="loading")){setTimeout(function(){ZE_Init.loadFontCss(A,C)},500);return false}var B=A.doc.createElement("link");B.rel="stylesheet";B.type="text/css";B.href=C;A.doc.head.appendChild(B)};ZE_Init.changeFFDisplay=function(){ZE_Init.globalNamespace.ffDisp={arial:"Arimo","comic sans ms":"ComicNeue",verdana:"DejaVuSans",georgia:"Heuristica",tahoma:"OpenSans",calibri:"Carlito","courier new":"Ptmono",serif:"Serif","sans-serif":"Serif","arial narrow":"RobotoCondensed","arial black":"ArchivoBlack","times new roman":"Tinos",garamond:"EBGaramond",batang:"Serif","trebuchet ms":"Lato",times:"Tinos"}};ZE_Init.creatorFix=function(A){A.avoidMoreOption=true;A.enableGrammarly=true;A.makeConsistentList=true;A.allowAttrsInsertHTML=["target"];A.customBlockTags=["BUTTON"];if(ZE_Init.is_ie){A.fluxToolbar=true}ZE_Init.avoidLinkColor=true};ZE_Init.init();