const assert = require('node:assert/strict');
const viewport = require('../../main/assets/web/viewport.js');

assert.equal(viewport.isMobile('Mozilla/5.0 (Linux; Android 14; Mobile) AppleWebKit/537.36', 900), true,
  'Android WebView uses mobile layout even with a wide CSS viewport');
assert.equal(viewport.isMobile('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)', 900), true,
  'iPhone user agents use mobile layout independent of width');
assert.equal(viewport.isMobile('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36', 450), true,
  'narrow viewport uses mobile layout');
assert.equal(viewport.isMobile('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36', 900), false,
  'wide desktop viewport remains desktop');
console.log('Viewport mobile detection tests passed.');
