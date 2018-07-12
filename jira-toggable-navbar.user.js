// ==UserScript==
// @name         Jira Navigationbar toggle
// @namespace    KaiGrassnick
// @version      0.2
// @description  Make the Jira Navigationbar toggable and add target=_blank to external links 
// @author       Kai Grassnick
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $("#navigation-app").parent().append($("<div/>").attr("id", "customMenuToggle").html("M"));

    $("#customMenuToggle").click(function(){
        $("#navigation-app").toggle();
    });

    $(".external-link").attr("target", "_blank");

    setInterval(function() {
        $(".external-link").attr("target", "_blank");
    }, 2000);
})();
