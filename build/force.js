!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.forcejs=t():e.forcejs=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";e.exports={data:n(1),oauth:n(2)}},function(e,t){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,r)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(r)},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),u=c+a,p=function(e,t){return"/"!==e.charAt(e.length-1)&&(e+="/"),"/"===t.charAt(0)&&(t=t.substr(1)),e+t},l=function(e){var t=[],n=void 0;for(n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},h=function(e){var t=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([^?#]*)(\?[^#]*|)(#.*|)$/);return t&&{protocol:t[1],host:t[2],hostname:t[3],port:t[4],path:t[5],params:parseQueryString(t[6]),hash:t[7]}},f=void 0,d={},v=void 0;document.addEventListener("deviceready",function(){try{v=cordova.require("com.salesforce.plugin.network")}catch(e){}},!1),t.default={createInstance:function(e,t,n){var r=void 0;return r=window.cordova?new g(e,t):new b(e,t),n?d[n]=r:f=r,r},getInstance:function(e){return e?d[e]:f}};var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.appId=t.appId,this.accessToken=t.accessToken,this.instanceURL=t.instanceURL,this.refreshToken=t.refreshToken,this.userId=t.userId,this.apiVersion=n.apiVersion||"v36.0",this.loginURL=n.loginURL||"https://login.salesforce.com",this.useProxy=!(n.useProxy||window.cordova||window.SfdcApp||window.sforce),this.proxyURL=n.proxyURL||u}return i(e,[{key:"getRequestBaseURL",value:function(){var e=void 0;return e=this.useProxy?this.proxyURL:this.instanceURL?this.instanceURL:c,"/"===e.slice(-1)&&(e=e.slice(0,-1)),e}},{key:"refreshAccessToken",value:function(){}},{key:"getUserId",value:function(){return this.userId}},{key:"request",value:function(e){var t=this;return new Promise(function(n,r){if(!t.accessToken&&!t.refreshToken)return void("function"==typeof errorHandler&&r("No access token. Login and try again."));var o=e.method||"GET",s=new XMLHttpRequest,i=t.getRequestBaseURL();if("/"!==e.path.charAt(0)&&(e.path="/"+e.path),i+=e.path,e.params&&(i+="?"+l(e.params)),s.onreadystatechange=function(){var t=this;if(4===s.readyState)if(s.status>199&&s.status<300)n(s.responseText?JSON.parse(s.responseText):void 0);else if(401===s.status&&this.refreshToken)this.refreshAccessToken().then(function(){return t.request(e).then(function(e){return n(e)}).catch(function(e){return r(e)})}).catch(function(){console.error(s.responseText);var e=s.responseText?JSON.parse(s.responseText):{message:"An error has occurred"};r(e)});else{console.error(s.responseText);var o=s.responseText?JSON.parse(s.responseText):{message:"An error has occurred"};r(o)}},s.open(o,i,!0),s.setRequestHeader("Accept","application/json"),s.setRequestHeader("Authorization","Bearer "+t.accessToken),s.setRequestHeader("Cache-Control","no-store"),s.setRequestHeader("X-Connect-Bearer-Urls",!0),e.contentType&&s.setRequestHeader("Content-Type",e.contentType),e.headerParams)for(var a in e.headerParams.getOwnPropertyNames()){var c=e.headerParams[a];s.setRequestHeader(a,c)}t.useProxy&&s.setRequestHeader("Target-URL",t.instanceURL),s.send(e.data?JSON.stringify(e.data):void 0)})}},{key:"query",value:function(e){return this.request({path:"/services/data/"+this.apiVersion+"/query",params:{q:e}})}},{key:"retrieve",value:function(e,t,n){return this.request({path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t,params:n?{fields:"string"==typeof n?n:n.join(",")}:void 0})}},{key:"getPickListValues",value:function(e){return this.request({path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe"})}},{key:"create",value:function(e,t){return this.request({method:"POST",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/",data:t})}},{key:"update",value:function(e,t){var n=t.Id||t.id,r=JSON.parse(JSON.stringify(t));return delete r.attributes,delete r.Id,delete r.id,this.request({method:"POST",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+n,params:{_HttpMethod:"PATCH"},data:r})}},{key:"del",value:function(e,t){return this.request({method:"DELETE",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t})}},{key:"upsert",value:function(e,t,n,r){return this.request({method:"PATCH",contentType:"application/json",path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/"+t+"/"+n,data:r})}},{key:"apexrest",value:function(e){var t=void 0;return"string"==typeof e?t={path:e,method:"GET"}:(t=e,"/"!==t.path.charAt(0)&&(t.path="/"+t.path),"/services/apexrest"!==t.path.substr(0,18)&&(t.path="/services/apexrest"+t.path)),t.contentType||(t.contentType="DELETE"==t.method||"GET"==t.method?null:"application/json"),this.request(t)}},{key:"chatter",value:function(e){var t="/services/data/"+this.apiVersion+"/chatter",n=void 0;if(e&&e.substring)n={path:p(t,e)};else{if(!e||!e.path)return new Promise(function(e,t){return t("You must specify a path for the request")});n=e,n.path=p(t,e.path)}return this.request(n)}},{key:"versions",value:function(){return this.request({path:"/services/data/"})}},{key:"resources",value:function(){return this.request({path:"/services/data/"+this.apiVersion})}},{key:"describeGlobal",value:function(){return this.request({path:"/services/data/"+this.apiVersion+"/sobjects"})}},{key:"metadata",value:function(e){return this.request({path:"/services/data/"+this.apiVersion+"/sobjects/"+e})}},{key:"describe",value:function(e){return this.request({path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe"})}},{key:"describeLayout",value:function(e,t){return t=t||"",this.request({path:"/services/data/"+this.apiVersion+"/sobjects/"+e+"/describe/layouts/"+t})}},{key:"queryMore",value:function(e){var t=h(e);return this.request({path:t.path,params:t.params})}},{key:"search",value:function(e){return this.request({path:"/services/data/"+this.apiVersion+"/search",params:{q:e}})}}]),e}(),b=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"refreshAccessToken",value:function(){var e=this;return new Promise(function(t,n){if(!e.refreshToken)return console.log("Missing refreshToken"),void n("Missing refreshToken");if(!e.appId)return console.log("Missing appId"),void n("Missing appId");var r=new XMLHttpRequest,o={grant_type:"refresh_token",refresh_token:e.refreshToken,client_id:e.appId},s=e.useProxy?e.proxyURL:e.loginURL;s=s+"/services/oauth2/token?"+l(o),r.onreadystatechange=function(){if(4===r.readyState)if(200===r.status){console.log("Token refreshed");var o=JSON.parse(r.responseText);e.accessToken=o.access_token,t()}else console.log("Error while trying to refresh token: "+r.responseText),n()},r.open("POST",s,!0),e.useProxy||r.setRequestHeader("Target-URL",e.loginURL),r.send()})}}]),t}(y),g=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"refreshAccessToken",value:function(){return new Promise(function(e,t){document.addEventListener("deviceready",function(){var n=void 0;try{n=cordova.require("com.salesforce.plugin.oauth")}catch(e){}return n?void n.authenticate(function(t){this.accessToken=t.accessToken,e()},function(){console.error("Error refreshing oauth access token using the oauth plugin"),t()}):(console.error("Salesforce Mobile SDK OAuth plugin not available"),void t("Salesforce Mobile SDK OAuth plugin not available"))},!1)})}},{key:"computeEndPointIfMissing",value:function(e,t){if(void 0!==e)return{endPoint:e,path:t};var n=t.split("/").filter(function(e){return""!==e});return n.length>=2?{endPoint:"/"+n.slice(0,2).join("/"),path:"/"+n.slice(2).join("/")}:{endPoint:"",path:t}}},{key:"request",value:function(e){return v?new Promise(function(t,n){var r=computeEndPointIfMissing(e.endPoint,e.path);v.sendRequest(r.endPoint,r.path,t,n,e.method,e.data||e.params,e.headerParams)}):s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"request",this).call(this,e)}}]),t}(y)},function(e,t){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=0,a=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),u=c+a,p=void 0,l=function(e){var t={},n=e.indexOf("#");if(n>-1){var r=decodeURIComponent(e.substr(n+1)),o=r.split("&");o.forEach(function(e){var n=e.split("=");t[n[0]]=n[1]})}return t};t.default={createInstance:function(e,t,n){return window.cordova?new f(e,t,n):new d(e,t,n)}};var h=function(){function e(t,n,r){o(this,e),i+=1,this.instanceId=i,this.appId=t||"3MVG9fMtCkV6eLheIEZplMqWfnGlf3Y.BcWdOf1qytXo9zxgbsrUbS.ExHTgUPJeb3jZeT8NYhc.hMyznKU92",this.loginURL=n||"https://login.salesforce.com",this.oauthCallbackURL=r||u+"/oauthcallback.html"}return s(e,[{key:"login",value:function(){}}]),e}(),f=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"login",value:function(){return new Promise(function(e,t){document.addEventListener("deviceready",function(){return(p=cordova.require("com.salesforce.plugin.oauth"))?void p.getAuthCredentials(function(t){e({accessToken:t.accessToken,instanceURL:t.instanceUrl,refreshToken:t.refreshToken,userId:t.userId})},function(e){console.log(e),t(e)}):(console.error("Salesforce Mobile SDK OAuth plugin not available"),void t("Salesforce Mobile SDK OAuth plugin not available"))},!1)})}}]),t}(h),d=function(e){function t(){return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),s(t,[{key:"login",value:function(){var e=this;return new Promise(function(t,n){console.log("loginURL: "+e.loginURL),console.log("oauthCallbackURL: "+e.oauthCallbackURL),document.addEventListener("oauthCallback",function(r){var o=r.detail,s=l(o);s.state==e.instanceId&&(s.access_token?t({appId:e.appId,accessToken:s.access_token,instanceURL:s.instance_url,refreshToken:s.refresh_token,userId:s.id.split("/").pop()}):n(s))});var r=e.loginURL+("/services/oauth2/authorize?client_id="+e.appId+"&redirect_uri="+e.oauthCallbackURL+"&response_type=token&state="+e.instanceId);window.open(r,"_blank","location=no")})}}]),t}(h)}])});