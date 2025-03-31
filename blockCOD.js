// ==UserScript==
// @name         CODM Network Optimizer
// @namespace    https://github.com/tu-usuario/codm-optimization
// @match        *://*.activision.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const blockedDomains = [
        'telemetry.activision.net',
        'ads.codm.com',
        'tracking.unity.com'
    ];
    window.fetch = new Proxy(window.fetch, {
        apply: (target, thisArg, args) => {
            const url = args[0];
            if (blockedDomains.some(d => url.includes(d))) {
                console.log("Bloqueado:", url);
                return Promise.reject();
            }
            return target.apply(thisArg, args);
        }
    });
})();
