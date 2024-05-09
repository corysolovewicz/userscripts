// ==UserScript==
// @name         Alternating Clicks Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clicks one element, waits 5 minutes, clicks another element, and repeats
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const xpath1 = 'YOUR_FIRST_XPATH_HERE';
    const xpath2 = 'YOUR_SECOND_XPATH_HERE';

    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    function clickElement(xpath) {
        const element = getElementByXpath(xpath);
        if (element) element.click();
    }

    function cycleClick() {
        clickElement(xpath1);
        setTimeout(() => {
            clickElement(xpath2);
            setTimeout(cycleClick, 300000); // Wait 5 minutes after the second click before starting over
        }, 300000); // Wait 5 minutes after the first click before clicking the second element
    }

    cycleClick(); // Start the cycle
})();
