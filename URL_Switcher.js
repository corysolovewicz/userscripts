// ==UserScript==
// @name         URL Switcher
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Switch between two URLs every 2 minutes
// @author       Your Name
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the two URLs you want to navigate between
    const url1 = 'http://example.com';
    const url2 = 'http://example.org';

    // Define the interval in milliseconds (2 minutes = 120000 ms)
    const interval = 120000;

    // Function to navigate to the next URL
    function navigate() {
        const currentUrl = window.location.href;

        if (currentUrl === url1) {
            window.location.href = url2;
        } else {
            window.location.href = url1;
        }
    }

    // Set the initial timeout to navigate after the defined interval
    setTimeout(navigate, interval);
})();
