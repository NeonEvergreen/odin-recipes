var PB=PB||{};function initPBSDK(){return new Promise(function(e,t){var a=document.createElement("script");a.src=PB.jsurl+"/pbone.js",document.head.appendChild(a),a.onload=function(){ZPB.initPlatform(PB.serviceData),e()}})}function attachZTIListner(){window.ZTI&&(ZTI.handleCrossProductMessage=function(e){var t="test".constructor;if(e.constructor===t&&(e=JSON.parse(e)),e.action&&"reloadSDK"===e.action){var a=PB.serviceData.loadPB||!0;PB.pbxhr=new XMLHttpRequest,PB.pbxhr.open("GET",PB.server+"/phonebridge/integration/integrationREST?serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&loadPB="+a,!0),PB.pbxhr.withCredentials=!0,PB.pbxhr.onreadystatechange=function(){if(this.readyState===this.DONE){var e=PB.pbxhr.response;if("true"===e||"syncuser"==e||"D_ORG"===e||"O_ORG"===e){PB.integEnabled="syncuser"!==e,PB.integRest=e;var t=document.getElementById("zpbsdk");void 0!=PB.serviceData.doNotDisturb&&!PB.serviceData.doNotDisturb&&t?(t.src=t.src,"SDPOnDemand"===PB.serviceData.serviceName&&window.callbackZPB&&callbackZPB()):initPBSDK().then(function(){window.callbackZPB&&callbackZPB()})}else PB.integRest="false","SDPOnDemand"===PB.serviceData.serviceName&&window.callbackZPB&&callbackZPB()}},PB.pbxhr.send(null)}else if(e.hasOwnProperty("CTDConfiguration"))for(var n=document.getElementsByTagName("zpb-phone"),i=0;i<n.length;i++)e.CTDConfiguration?n[i].component.setData("isCTD",!0):n[i].component.setData("isCTD",!1);e.subAction&&"alterModify"===e.subAction&&ZPB.sendMessage("zpbsetup",{action:"alterModify",providerID:e.providerID})})}function registerCustomTag(){Lyte.Component.register("zpb-phone",{_template:'<template tag-name="zpb-phone"><a class="pH2" title="Call" onclick="{{action(\'telcall\',event,number)}}"></a>\t</template>\n<style>.telIcon{ display: inline-block; width: 16px;height: 19px;background: transparent url(//img.zohostatic.com/phonebridge/5479976/images/svgicons.svg) no-repeat -160px -471px;margin-right: 6px;cursor: pointer;}</style>',_dynamicNodes:[{type:"attr",position:[0]}],_observedAttributes:["number","lyteUnbound"],data:function(){return{number:Lyte.attr("string"),lyteUnbound:Lyte.attr("boolean",{default:!1})}},actions:{telcall:function(e,t){e.stopPropagation(),window.location.href="tel:"+t}}})}PB.parts=location.hostname.split("."),PB.subdomain=PB.parts.shift(),PB.uplvldom=PB.parts.join("."),PB.server=PB.uplvldom.includes("tsi")?"https://phonebridge.csez.zohocorpin.com":"https://phonebridge."+PB.uplvldom,PB.serviceData=void 0,PB.jsurl="",PB.integEnabled=!1,PB.defaultOrgIntegEnabled=!1,PB.target="splitscreen",PB.integRest="false",PB.tagNeededProducts=["ZohoCRM","ZohoRecruit"],PB.init=function(e){attachZTIListner(),PB.serviceData=e;var t=e.loadPB||!0;e.crmplusData&&!e.isUnifiedPB&&(PB.serviceData.serviceId=e.crmplusData.ZohoCRM||e.crmplusData.ZohoSupport||e.crmplusData.LiveDesk,PB.serviceData.serviceName=e.crmplusData.ZohoCRM?"ZohoCRM":e.crmplusData.ZohoSupport?"ZohoSupport":"LiveDesk","LiveDesk"===PB.serviceData.serviceName&&delete PB.serviceData.crmplusData),void 0!=e.pbDomain&&""!=e.pbDomain&&(PB.server=e.pbDomain),PB.pbxhr=new XMLHttpRequest,PB.pbxhr.open("GET",PB.server+"/phonebridge/integration/integrationREST?serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&loadPB="+t,!0),PB.pbxhr.withCredentials=!0,PB.pbxhr.onreadystatechange=PB.ready,PB.pbxhr.send(null)},PB.ready=function(){if(this.readyState===this.DONE){var e=PB.pbxhr.response;if(PB.integRest=e,"true"===e||"syncuser"==e||"D_ORG"===e||"O_ORG"===e){if(PB.integEnabled="syncuser"!==e,"CRMPlus"===PB.serviceData.bundleService&&PB.serviceData.crmplusData&&"O_ORG"===e)return delete PB.serviceData.crmplusData[PB.serviceData.serviceName],PB.serviceData.serviceId=serviceData.crmplusData.ZohoSupport||serviceData.crmplusData.LiveDesk,PB.serviceData.serviceName=serviceData.crmplusData.ZohoSupport?"ZohoSupport":"LiveDesk",void PB.init(PB.serviceData);initPBSDK().then(function(){window.callbackZPB&&callbackZPB()})}else{if(PB.tagNeededProducts.includes(PB.serviceData.serviceName))if(window.Lyte)registerCustomTag();else{var t=document.createElement("script");t.src=wmsUserConfig.phonebridgejsurl.substring(0,wmsUserConfig.phonebridgejsurl.lastIndexOf("/"))+"/lyte-parent-dom.js",t.type="text/javascript",t.onload=function(){registerCustomTag()},document.head.appendChild(t)}if(window.Lyte){var a=Lyte.Router.getRouteInstance();"crm.settings.section.telephony.marketplace"!==a.transition.target||document.getElementById("zpbsetup")||a.refresh()}window.callbackZPB&&callbackZPB()}}},PB.loadSetup=function(e,t,a){if("undefined"==typeof ZPB){var n=document.createElement("script");n.src=PB.jsurl+"/pbone.js",n.onload=function(){ZPB.initPlatform(PB.serviceData)},document.head.appendChild(n)}var i=document.createElement("iframe"),r=document.location.origin,s="0";if(PB.serviceData&&PB.serviceData.serviceData&&PB.serviceData.serviceData.planId?s=PB.serviceData.serviceData.planId:PB.serviceData&&PB.serviceData.planId&&(s=PB.serviceData.planId),void 0!=PB.serviceData.bundleService&&""!=PB.serviceData.bundleService){if("ZohoOne"==PB.serviceData.bundleService&&"ZohoOne"!=PB.serviceData.serviceName){var o=document.referrer;window.location!=window.parent.location&&document.referrer&&(o="https://"+(o=(o=document.referrer.split("https://"))[1].substr(0,o[1].indexOf("/")))),r=window.location!=window.parent.location?o+","+document.location.origin:document.location.origin}i.setAttribute("src",PB.server+"/phonebridge/viewcomponent/providers?frameorigin="+r+"&target="+PB.target+"&serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&bundleService="+PB.serviceData.bundleService+"&bundleOrgId="+PB.serviceData.bundleOrgId+"&planId="+s)}else i.setAttribute("src",PB.server+"/phonebridge/viewcomponent/providers?frameorigin="+r+"&target="+PB.target+"&serviceName="+PB.serviceData.serviceName+"&serviceID="+PB.serviceData.serviceId+"&planId="+s);if(i.setAttribute("id","zpbsetup"),i.setAttribute("name","zpbsetup"),i.style.cssText="border: none;width: 100%",i.style.height=e+"px",document.location.origin.includes("bigin")){var c=document.createElement("div");c.id="loadingDivIblt",c.style=" position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 800; background: #23ae73; transform: translateX(100%); overflow: hidden; animation: shift-rightwards 1.5s ease-in-out infinite; animation-delay: .8s; ",document.getElementById(t).appendChild(c)}var d={action:"setupPageReady",serviceID:PB.serviceData.serviceId,serviceName:PB.serviceData.serviceName,serviceData:PB.serviceData.serviceData,bundleService:PB.serviceData.bundleService,bundleOrgId:PB.serviceData.bundleOrgId,planId:PB.serviceData.planId};if(i.onload=function(){if(document.location.origin.includes("bigin"))try{document.getElementById("phoneSetup").removeChild(document.getElementById("loadingDivIblt"))}catch(e){}if(ZPB.sendMessage("zpbsetup",d),a){var e=null!=document.getElementById("pb_response")?document.getElementById("pb_response").value:"success";a(e)}},!t)return i;document.getElementById(t).textContent="",document.getElementById(t).appendChild(i)},PB.isIntegrationEnabled=function(){return PB.integEnabled},PB.isIntegrationEnabledinCurrentOrg=function(){return"D_ORG"===PB.integRest},PB.isDefaultIntegrationEnabled=function(){return"D_ORG"===PB.integRest},PB.getPhoneBridgeContainer=function(){return void 0!==PB.serviceData&&PB.serviceData.zpbContainerId?document.getElementById(PB.serviceData.zpbContainerId):"undefined"!=typeof WebMessanger&&WebMessanger.getPhoneBridgeContainer?WebMessanger.getPhoneBridgeContainer():null},null!==PB.getPhoneBridgeContainer()&&(PB.getPhoneBridgeContainer().style.visibility="hidden"),PB.enableSMS=function(e){PB.target="inbuiltSMS",PB.loadSetup(500,"pbSmsSetup",e)},PB.loadRecording=function(){var e=window.Lyte?PB.jsurl+"/audio.js":PB.jsurl+"/lyte-audio.js";const t=new Promise(function(e,t){var a=new URL(PB.jsurl);a.host=a.host.replace("js","css"),a.pathname=a.pathname.replace("javascript","styles");var n=document.createElement("LINK");n.rel="stylesheet";var i=window.Lyte?"/audio-tag.css":"/laudio-tag.css";n.href=a.href+i,n.onload=function(){e()},document.head.appendChild(n),setTimeout(function(){t()}.bind(this),4e3)}),a=new Promise(function(t,a){var n=document.createElement("SCRIPT");n.type="text/javascript",n.src=e,n.onload=function(){t()},document.head.appendChild(n),setTimeout(function(){a()}.bind(this),4e3)});return Promise.all([t,a])};