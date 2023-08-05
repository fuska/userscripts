
// ==UserScript==
// @name         Twitter Kiwi
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/fuska/userscripts/raw/main/twitterKiwi.user.js
// @updateURL    https://github.com/fuska/userscripts/raw/main/twitterKiwi.user.js
// @description  try to take over the world!
// @author       You
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    alert("hola")

    GM_addStyle(".r-1e5uvyk{display:none}")

    //y puedo quitar los promocionados jajajaja
    //y el popup de Sube para ver nuevos tweets. Aaaaaaaaaaaaa!
    //puedo hacer autofullscreen directamente con tampermonket?
    //y grabar en local storage los ids de los tweets q ya he leído para cambiarles la opacity
    //cargar la primera respuesta de cada tweet si es del mismo autor. Habría que hacerlo de varios a la vez

    //document.querySelector(".css-1dbjc4n{display:none}")

    var divs = document.querySelectorAll('div[aria-label="Compartir Tweet"]');

  [].forEach.call(divs, function(div) {
    let mya = document.createElement("a");
    mya.href = "tasker://secondary?param1=a&param2=b";
    div.appendChild(mya)
  });


})();