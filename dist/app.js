!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1)},function(e,t){var n=document.querySelector(".weather__location-timezone"),r=document.querySelector(".weather__location-time"),o=document.querySelector(".degree-section__temperature"),c=document.querySelector(".temperature__description"),a=document.querySelector(".degree-section__temperature-icon"),i=document.querySelector(".header__btn-degree"),u=document.querySelector(".temperature span"),d=document.querySelector(".temperature__feels"),l=document.querySelector(".temperature__wind"),m=document.querySelector(".temperature__humidity"),s=document.querySelector(".weekly__temp-first-temp"),p=document.querySelector(".weekly__temp-second-temp"),y=document.querySelector(".weekly__temp-third-temp"),h=document.querySelector(".weekly__temp-icon"),g=document.querySelector(".weekly__temp-icon-sec"),f=document.querySelector(".weekly__temp-icon-third"),_=document.querySelector(".weekly__temp-date"),M=document.querySelector(".weekly__temp-date-sec"),L=document.querySelector(".weekly__temp-date-third"),S=document.querySelector(".header__btn-background"),T=document.querySelector(".map__long"),H=document.querySelector(".map__lat");navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.longitude,k=e.coords.latitude,w="https://cors-anywhere.herokuapp.com/",b="".concat(w,"https://api.darksky.net/forecast/c5162ec2153a24dca4264f707473f412/").concat(k,",").concat(t),q="".concat(w,"https://api.opencagedata.com/geocode/v1/json?q=").concat(k,",").concat(t,"&key=b398a4f1560945679a8fe39b18c5e748&language=en");fetch(q).then((function(e){return e.json()})).then((function(e){n.textContent="".concat(e.results[0].components.city,", ").concat(e.results[0].components.country)})),fetch(b).then((function(e){return e.json()})).then((function(e){var n=e.currently,S=n.temperature,w=n.summary,b=n.icon,q=n.windSpeed,v=n.humidity,j=n.apparentTemperature,x=Math.floor(e.daily.data[0].temperatureHigh),C="".concat(Math.round(5*(x-32)/9),"&deg;"),F=e.daily.data[0].icon,O=Math.floor(e.daily.data[1].temperatureHigh),P="".concat(Math.round(5*(O-32)/9),"&deg;"),D=e.daily.data[1].icon,z=Math.floor(e.daily.data[2].temperatureHigh),E="".concat(Math.round(5*(z-32)/9),"&deg;"),U=e.daily.data[2].icon,W="".concat(Math.round(5*(S-32)/9),"&deg;"),$="".concat(Math.round(5*(j-32)/9)),A=new Date,B=A.getTime(),G=B+1728e5,I=B+2592e5,J=new Date(B+864e5),K=new Date(G),N=new Date(I),Q={month:"long",day:"numeric",weekday:"long"};o.innerHTML=W,c.textContent=w,a.innerHTML='<img width="60" height="60" src="https://darksky.net/images/weather-icons/'.concat(b,'.png">'),d.innerHTML="Feels like: ".concat($," &deg;"),l.innerHTML="Wind: ".concat(q," m/sec"),m.innerHTML="Humidity: ".concat(v," %"),r.innerHTML=A.toLocaleString("en",{month:"long",day:"numeric",weekday:"long",timezone:"UTC",hour:"numeric",minute:"numeric"}),_.innerHTML=J.toLocaleString("en",Q),M.innerHTML=K.toLocaleString("en",Q),L.innerHTML=N.toLocaleString("en",Q),s.innerHTML=C,h.innerHTML='<img width="30" height="30" src="https://darksky.net/images/weather-icons/'.concat(F,'.png">'),p.innerHTML=P,g.innerHTML='<img width="30" height="30" src="https://darksky.net/images/weather-icons/'.concat(D,'.png">'),y.innerHTML=E,f.innerHTML='<img width="30" height="30" src="https://darksky.net/images/weather-icons/'.concat(U,'.png">'),T.innerHTML="Longitude: ".concat(Math.floor(t),"&deg;"),H.innerHTML="Latitude: ".concat(Math.floor(k),"&deg;"),i.addEventListener("click",(function(){"C"===u.textContent?(u.textContent="F",o.innerHTML=Math.floor(S),s.innerHTML="".concat(x,"F"),p.innerHTML="".concat(O,"F"),y.innerHTML="".concat(z,"F"),d.innerHTML="Feels like: ".concat(Math.floor(j),"F")):(u.textContent="C",o.innerHTML=W,s.innerHTML=C,p.innerHTML=P,y.innerHTML=E,d.innerHTML="Feels like: ".concat($,"&deg;"))}))})),fetch("https://api.unsplash.com/search/photos/?client_id=46b918b429b2deb2d3494d1a1ae2ee96c2df59310e10d865766da52b4c72e111&query=$autumn").then((function(e){return e.json()})).then((function(e){var t=e.results,n=t[Math.round(Math.random()*t.length)].urls.full;S.addEventListener("click",(function(){document.body.style.background="no-repeat top / cover url(".concat(n)}))}))}))}]);