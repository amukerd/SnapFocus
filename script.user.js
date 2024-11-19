// ==UserScript==
// @name         SnapFocus
// @namespace    http://tampermonkey.net/
// @version      1.0
// @updateURL    https://github.com/amukerd/SnapFocus/raw/refs/heads/main/script.user.js
// @downloadURL  https://github.com/amukerd/SnapFocus/raw/refs/heads/main/script.user.js
// @description  Stop the ui cover from showing up when the tab is unfocused, by stopping the tab from knowing it's unfocused
// @author       Amukerd
// @match        https://web.snapchat.com/*
// @grant        none
// ==/UserScript==

(function() {
    const preventFocusLoss = (event) => {
        if (event.type === 'visibilitychange' && document.visibilityState !== 'hidden') {
            return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
    };

    document.addEventListener('visibilitychange', preventFocusLoss);
    window.addEventListener('focus', preventFocusLoss);
    window.addEventListener('blur', preventFocusLoss);
    window.addEventListener('focusin', preventFocusLoss);
    window.addEventListener('focusout', preventFocusLoss);
    window.addEventListener('resize', preventFocusLoss);
})();
