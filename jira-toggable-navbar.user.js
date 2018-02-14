// ==UserScript==
// @name         Jira Navigationbar toggle
// @namespace    KaiGrassnick
// @version      0.1
// @description  Make the Jira Navigationbar toggable
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
})();
