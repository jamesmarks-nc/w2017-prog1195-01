// ==UserScript==
// @name         PokeBot
// @namespace    http://tampermonkey.net/
// @version      0.1 beta
// @description  Try to poke the world!
// @author       Me
// @match        https://www.facebook.com/pokes*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function() {

        var pokesContainer = document.getElementById("poke_live_new");

        var links = pokesContainer.getElementsByTagName("a");

        var newLinks = new Array();

        //Initialize, Test, Increment
        for(var index in links) {
            var currentLink = links[index];
            if(currentLink.getAttribute) {
                var roleAttribute = currentLink.getAttribute("role") || "";
                var ajaxifyAttribute = currentLink.getAttribute("ajaxify") || "";
                if(roleAttribute === "button") {
                    if(ajaxifyAttribute.indexOf("is_hide=0") !== -1) {
                        currentLink.click();
                    }
                }
            }
        }


    }, 5000);

})();





















