(function (root, factory) {
    const viewport = factory();
    if (typeof module === 'object' && module.exports) module.exports = viewport;
    if (root) root.N64Viewport = viewport;
})(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    // Android WebView can report a wide CSS viewport while the Activity is in a
    // portrait/floating window. Treat mobile user agents as mobile independent
    // of width; width remains a useful fallback for mobile browsers/tablets.
    function isMobile(userAgent, width) {
        const ua = String(userAgent || '').toLowerCase();
        return /android|iphone|ipad|ipod/.test(ua) || Number(width) < 600;
    }

    return { isMobile };
});
