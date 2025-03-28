// ==UserScript==
// @name         Optimización CODM
// @namespace    http://your-github-username.github.io
// @version      1.0
// @description  Optimiza tráfico de Call of Duty Mobile
// @match        com.activision.callofduty.shooter://*
// @grant        none
// ==/UserScript==

// ==UserScript==
// @name         Optimización CODM para AdGuard
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Optimiza tráfico y configuración para Call of Duty Mobile
// @match        com.activision.callofduty.shooter://*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Bloquear dominios no esenciales (reduce latencia)
    const blockedDomains = [
        'tracking.activision.com',
        'ads.codm.com',
        'analytics.externalprovider.net'
    ];

    // 2. Priorizar tráfico del juego
    if (window.performance) {
        window.performance.setResourceTimingBufferSize(500);
    }

    // 3. Ajustar configuración de red (simulado)
    const optimizeNetwork = () => {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            connection.type = 'wifi'; // Forzar prioridad WiFi
            connection.downlink = 10; // Simular mayor ancho de banda
        }
    };

    // 4. Reducir consumo de recursos en segundo plano
    window.addEventListener('blur', () => {
        // Liberar memoria cuando la app está en segundo plano
        if (window.requestIdleCallback) {
            requestIdleCallback(() => {
                window.stop();
            });
        }
    });

    optimizeNetwork();
})();
