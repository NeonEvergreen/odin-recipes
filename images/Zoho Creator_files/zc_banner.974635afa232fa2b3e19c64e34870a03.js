ZCBannerTop={};
(function(a){a.fn.oldAccountBanner=function(){ZCBanner({bannerContainerClass:"zc-deprecate-banner",container:this,bodyClass:"zc-common-banner",bannerContent:'\x3cp class\x3d"zc-common-banner-content"\x3e'+i18n["zc.common.builder.banner.newhome"]+"  \x3ca href\x3d"+helpDocURL+' onClick\x3dAccountTrackStatus();  target\x3d"_blank"\x3e'+i18n["zc.common.builder.banner.learnmore"]+"\x3c/a\x3e \x3c/p\x3e"})};a.fn.skydeskBanner=function(){ZCBanner({bannerContainerClass:"zc-deprecate-banner",bodyClass:"zc-common-banner zc-skydesk-banner",
bannerContent:'\x3cp class\x3d"zc-common-banner-content"\x3e'+i18n.skydeskserviceEndMessage+"\x3c/p\x3e"})};a.fn.accountDeletionBanner=function(){ZCBanner({bannerContainerClass:"zc-deprecate-banner",bodyClass:"zc-common-banner ",bannerContent:'\x3cp class\x3d"zc-common-banner-content"\x3e'+i18n.accountDeletionMessage+"\x3c/p\x3e"})};a.fn.deprecatedPlanBanner=function(b){a("#salesIqZCLiveChat").on("click",function(){$zoho.salesiq.visitor.question("Pricing version deprecation banner");$zoho.salesiq.chat.start();
$zoho.salesiq.floatwindow.visible("show");hideDeprecatedPlanPopup()});a("#salesIqZCLiveCall").on("click",function(){$zoho.salesiq.visitor.name(ZCGlobal.scopeName);$zoho.salesiq.visitor.email(ZCGlobal.loginEmail);$zoho.salesiq.call.start();hideDeprecatedPlanPopup()});a("#scheduleCallByLocation").on("click",function(){"undefined"!==typeof iplocate?iplocate(function(a){latitude=a.LATITUDE;longitude=a.LONGITUDE;countryCode=a.COUNTRY_CODE;ANZ=["NZ","NZL","AU","AUS"];APAC_INDIA_MEA="CN CHN IN IND ID IDN PK PAK JP JPN PH PHL VN VNM EG EGY TH THA ZA ZAF KE KEN DZ DZA AF AFG MY MYS SA SAU TW TWN AO AGO IL ISR HK HKG AE ARE CF CAF SG SGP MU MUS BN BRN".split(" ");
CANADA=["CA","CAN"];US=["US","USA"];CONT_EUROPE="RU RUS DE DEU TR TUR FR FRA IT ITA ES ESP PL POL RO ROU NL NLD GR GRC PT PRT CZ CZE BE BEL SE SWE AT AUT CH CHE DK DNK SK SVK FI FIN NO NOR IE IRL HR HRV UY URY AL ALB AM ARM MK MKD SI SVN EE EST LU LUX JE JEY AD AND".split(" ");UK="GB GBR AI AIA VG VGB".split(" ");US_WEST_AND_LATAM="BR BRA MX MEX CO COL AR ARG CL CHL PR PRI JM JAM BZ BLZ LC LCA AS ASM".split(" ");ANZ.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/srirams"):
APAC_INDIA_MEA.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/raufjamal"):UK.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/accmgmt"):CONT_EUROPE.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/3846319000003205667"):US_WEST_AND_LATAM.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/accmgmt1"):CANADA.includes(countryCode)?window.open("https://assist.zohobookings.com/#/customer/creatorcustomersuccess3"):
US.includes(countryCode)?(region=a.REGION,US_CST_AND_MST="ALABAMA;ARKANSAS;ILLINOIS;IOWA;LOUISIANA;MINNESOTA;MISSISSIPPI;MISSOURI;OKLAHOMA;WISCONSIN;KANSAS;NEBRASKA;NORTH DAKOTA;SOUTH DAKOTA;TEXAS;FLORIDA;INDIANA;KENTUCKY;MICHIGAN;TENNESSEE;GEORGIA;PENNSYLVANIA;OHIO;DISTRICT OF COLUMBIA".split(";"),US_EAST="BOSTON;HARTFORD;NEW YORK;PHILADELPHIA;BALTIMORE;WASHINGTON;RICHMOND;NORFOLK ISLAND;RALEIGH;CHARLOTTE;COLUMBIA;ATLANTA;CHARLESTON;JACKSONVILLE;ORLANDA;MIAMI;RHODE ISLAND;CONNECTICUT;DELAWARE;MAINE;MARYLAND;MASSACHUSETTS;NEW HAMPSHIRE;NEW JERSEY;NORTH CAROLINA;SOUTH CAROLINA;VIRGINIA".split(";"),
US_WEST_AND_LATAM="ALASKA;ARIZONA;CALIFORNIA;COLORADO;HAWAII;IDAHO;MONTANA;NEVADA;NEW MEXICO;OREGON;UTAH;WASHINGTON;WYOMING;WESTERN DISTRICT".split(";"),US_CST_AND_MST.includes(region)?window.open("https://assist.zohobookings.com/#/customer/3846319000001624102"):US_EAST.includes(region)?window.open("https://assist.zohobookings.com/#/customer/3846319000003740128"):US_WEST_AND_LATAM.includes(region)&&window.open("https://assist.zohobookings.com/#/customer/accmgmt1")):window.open("https://creatorapp.zohopublic.com/zohointranet/sales-marketing-activities-tracker/page-perma/AM_Bookings_Link/NRR6tdD7B5TAp2JpM05DGTJwderD7eQvwHDGy5Nq744xqmPXes9XyZ0p1C7YNtnpMYmZZEb19F9GtetzQa6yRhfT9MZr5QFbarCv")}):
window.open("https://creatorapp.zohopublic.com/zohointranet/sales-marketing-activities-tracker/page-perma/AM_Bookings_Link/NRR6tdD7B5TAp2JpM05DGTJwderD7eQvwHDGy5Nq744xqmPXes9XyZ0p1C7YNtnpMYmZZEb19F9GtetzQa6yRhfT9MZr5QFbarCv");hideDeprecatedPlanPopup()});ZCGlobal.isSharedUser&&ZCGlobal.showPDBannerForSharedUser?(a("#sharedUserContent").show(),a("#pricingBannerClose").show()):(a("#adminContent").show(),a("#pricingBannerClose").hide());a("#pricingContainer").show();showScheduleOnlyOnWeekEnd()};a.fn.maintenanceModeBanner=
function(a){ZCBanner({bannerContent:'\x3cdiv class\x3d"zc-announcement-banner-freezer"\x3e\x3c/div\x3e\x3cdiv class\x3d"zc-dem-notify zc-dem-notify-error zc-dem-info-withlink"\x3e\n    \x3ci class\x3d"zc-li-outline ui-3-alert" value\x3d"ui-3-alert" html\x3d"ui-3-alert"\x3e\x3c/i\x3e\n'+a+"\x3c/div\x3e",showClose:!1,bannerType:"custom"})};a.fn.apiDeprecationBanner=function(){href="javascript:;";ZCBanner({bannerContainerClass:"zc-deprecate-banner zc-api-banner",bodyClass:"zc-common-banner ",bannerContent:'\x3cp class\x3d"zc-common-banner-content"\x3e'+
i18n["zc.common.oldpopulation.deprecation.msg"]+"\x3ca href\x3d"+href+' id\x3d"oldPopulationMigSupport" \x3e '+i18n["zc.common.oldpopulation.deprecation.contactus"]+"\x3c/a\x3e\x3c/p\x3e"});a("#oldPopulationMigSupport").off("click").on("click",function(){try{$zoho.salesiq.visitor.info({"Chat for":"Old Population Migration Banner"})}catch(b){}ZCLiveChat.show()})};a.fn.showOPNotificationBanner=function(b,c){b={bannerContainerClass:b.bannerContainerClass,bodyClass:b.bodyClass,bannerContent:b.message,
bannerType:b.bannerType,showClose:b.showClose};c&&(b.callBack=function(){ajaxData={};void 0!=ZCGlobal.csrfTokenName?ajaxData[ZCGlobal.csrfTokenName]=ZCGlobal.csrfToken:ajaxData[getCsrfParamName()]=getCsrfParamValue();a.ajax({url:"/userhome_op/"+ZCGlobal.scopeName+"/disableOpBanner",type:"POST",data:ajaxData})});ZCBanner(b)};a.fn.deprecateBanner=function(b,c){var e={bannerContainerClass:"zc-deprecate-banner",container:this,bodyClass:"zc-common-banner"};var g=i18n.deprecateBannerHeader,d="",f="";b?
(b=i18n.deprecateBannerContent,"undefined"!=c&&c&&(b=i18n.deprecateBannerMobileContent),d="https://help.zoho.com/portal/community/topic/tls-v1-2-upgrade",f=i18n.deprecateBannerLinkMsg):(b=i18n.deprecateBannerUserContent,"undefined"!=c&&c&&(a("body").addClass("zc-browser-share-banner"),b=i18n.deprecateBannerMobileUserContent));e.bannerContent='\x3cp class\x3d"zc-common-banner-heading"\x3e'+g+'\x3c/p\x3e \x3cp class\x3d"zc-common-banner-content"\x3e'+b+(""!=d?" \x3ca href\x3d"+d+' target\x3d"_blank"\x3e'+
f+"\x3c/a\x3e":" ")+"\x3c/p\x3e";ZCBanner(e)}})(jQuery);function ZCBanner(a){var b={container:$(document.body),showClose:!0};$.extend(b,a);a=void 0!=b.bodyClass?b.bodyClass:"";$(document.body).addClass(a);b.bannerHtml=getBannerHtml(b);$(b.container).append(b.bannerHtml);ZCBannerTop.height=$(b.bannerHtml).outerHeight();$(b.container.find(".zc-common-banner-close")).off("click").on("click",function(a){closeBanner(b)})}
function closeBanner(a){$(document.body).removeClass(a.bodyClass);$(a.bannerHtml).remove();a.callBack&&a.callBack()}function getBannerHtml(a){var b=void 0!=a.bannerContainerClass?a.bannerContainerClass:"",c=a.showClose?'\x3ca class\x3d"zc-common-banner-close" href\x3d"javascript:;" tabindex\x3d"1"\x3e'+getCloseIcon()+"\x3c/a\x3e":"";return $("custom"==a.bannerType?a.bannerContent:'\x3cdiv class\x3d"zc-common-banner-container '+b+'"\x3e'+c+a.bannerContent+"\x3c/div\x3e")}
function getCloseIcon(){return'\x3csvg width\x3d"16px" height\x3d"16px" viewBox\x3d"0 0 16 16"\x3e\x3cg id\x3d"Page-1" stroke\x3d"none" stroke-width\x3d"1" fill\x3d"none" fill-rule\x3d"evenodd" stroke-linecap\x3d"square"\x3e\x3cg id\x3d"Group-25" stroke\x3d"#E03131"\x3e\x3cpath d\x3d"M15.1111111,0.888888889 L0.888888889,15.1111111" id\x3d"Path"\x3e\x3c/path\x3e\x3cpath d\x3d"M15.1111111,15.1111111 L0.888888889,0.888888889" id\x3d"Path"\x3e\x3c/path\x3e\x3c/g\x3e\x3c/g\x3e\x3c/svg\x3e'}
function AccountTrackStatus(){data={scopeName:sharedBy,loginUserEmail:loginUserEmail};$.ajax({type:"GET",url:"/userhome/"+sharedByDisp+"/oldDashboardHelpDoc",data:data,success:function(a,b,c){}})}function showScheduleOnlyOnWeekEnd(){day=(new Date).getDay();if(0==day||6==day)$("#salesIqZCLiveChat").hide(),$("#salesIqZCLiveCall").hide(),$("#pricingBannerClose").show()}
function hideDeprecatedPlanPopup(){ajaxData={};void 0!=ZCGlobal.csrfTokenName?ajaxData[ZCGlobal.csrfTokenName]=ZCGlobal.csrfToken:ajaxData[getCsrfParamName()]=getCsrfParamValue();ajaxData.type=ZCGlobal.isSharedUser?2:1;$.ajax({url:"/userhome/"+ZCGlobal.scopeName+"/hideDeprecatedPlanPopup",type:"POST",data:ajaxData,success:function(a){$("#pricingContainer").hide()}})};