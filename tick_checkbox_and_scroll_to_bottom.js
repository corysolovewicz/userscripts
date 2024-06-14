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
        // Replace '.your-checkbox-class' with the actual class of the checkbox
        const checkbox = document.querySelector('.your-checkbox-class');
        if (checkbox && !checkbox.checked) {
            checkbox.checked = true;
        }
    }

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Function to wait for the overlay to disappear
    function waitForOverlayAndExecute() {
        // Replace '.your-overlay-class' with the actual class of the overlay
        const overlay = document.querySelector('.your-overlay-class');
        if (!overlay) {
            // Overlay not found, execute the actions
            tickCheckbox();
            scrollToBottom();
        } else {
            // Overlay found, wait and try again
            setTimeout(waitForOverlayAndExecute, 100);
        }
    }

    // Execute the function when the page loads
    window.addEventListener('load', function() {
        waitForOverlayAndExecute();
    });
})();
