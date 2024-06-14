// ==UserScript==
// @name         Tick Checkbox and Scroll to Bottom
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tick checkbox and scroll to bottom when a specific URL is active
// @author       Your Name
// @match        *://your-specific-url.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to tick the checkbox
    function tickCheckbox() {
        // Replace '#your-checkbox-id' with the actual ID of the checkbox
        const checkbox = document.querySelector('#your-checkbox-id');
        if (checkbox && !checkbox.checked) {
            checkbox.checked = true;
        }
    }

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Execute the functions when the page loads
    window.addEventListener('load', function() {
        tickCheckbox();
        scrollToBottom();
    });
})();
