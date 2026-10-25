const CACHE_NAME = "mashiro-line-phase3-2-3-one-message-one-push-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./config.js",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./assets/stickers/thanks.png",
  "./assets/stickers/laugh.png",
  "./assets/stickers/ok.png",
  "./assets/stickers/cheer.png",
  "./assets/stickers/smile.png",
  "./assets/stickers/surprise.png",
  "./assets/stickers/sleepy.png",
  "./assets/stickers/wave.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { title: "ましろLINE", body: event.data ? event.data.text() : "新しいメッセージがあります" };
  }

  const title = String(data.title || "ましろLINE");
  const eventIds = Array.isArray(data.eventIds) ? data.eventIds : [];
  const primaryEventId = String(eventIds[0] || "");
  const conversationId = String(data.conversationId || "");
  const notificationTag = primaryEventId
    ? `mashiroline-${conversationId || "message"}-${primaryEventId}`
    : conversationId
      ? `mashiroline-${conversationId}-${Date.now()}`
      : `mashiroline-${Date.now()}`;

  const options = {
    body: String(data.body || "新しいメッセージがあります"),
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    // Phase 3.2.3 final:
    // one message = one notification. Never reuse the conversation-only tag.
    tag: notificationTag,
    renotify: true,
    data: {
      conversationId,
      eventIds
    }
  };

  const promises = [self.registration.showNotification(title, options)];
  const badgeCount = Number(data.badgeCount || 0);
  if (self.navigator && "setAppBadge" in self.navigator && badgeCount > 0) {
    promises.push(self.navigator.setAppBadge(badgeCount));
  }

  event.waitUntil(Promise.all(promises));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const conversationId = String(event.notification?.data?.conversationId || "");

  event.waitUntil((async () => {
    const windows = await clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of windows) {
      if ("focus" in client) {
        await client.focus();
        if (conversationId) client.postMessage({ type: "open-conversation", conversationId });
        return;
      }
    }

    const target = conversationId
      ? `./?push=1#chat=${encodeURIComponent(conversationId)}`
      : "./?push=1";
    if (clients.openWindow) await clients.openWindow(target);
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  if (url.pathname.endsWith("/config.js")) {
    event.respondWith(
      fetch(event.request, { cache: "no-store" })
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
