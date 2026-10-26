// Minimal service worker so Chrome on Android installs Post as a real app (WebAPK) instead of a
// home-screen shortcut. It caches nothing: every request goes straight to the network.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
