// ==UserScript==
// @name         Add CSS File
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a CSS file to the page
// @author       You
// @match        https://kupikodtest.helpdeskeddy.com/ru/ticket/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create a link element
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href =
      "https://raw.githubusercontent.com/qwebdesigns/hdeperks/refs/heads/main/percs.css"; // Replace with your CSS file URL

    // Append the link element to the head
    document.head.appendChild(link);
})();