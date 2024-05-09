// ==UserScript==
// @name         Conditional Element Clicker with Logging
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Check for an element every 30 seconds and click if it exists, with console logging
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const xpath = 'YOUR_XPATH_HERE';

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function checkAndClickElement() {
        const element = getElementByXpath(xpath);
        if (element) {
            console.log('Element found. Clicking it now.');
            element.click();
        } else {
            console.log('Element not found.');
        }
    }

    setInterval(checkAndClickElement, 30000); // 30000 milliseconds = 30 seconds
})();
