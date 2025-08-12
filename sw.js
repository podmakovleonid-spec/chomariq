// sw.js — prosta obsługa powiadomień (bez push)
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
// Логики таймеров в SW нет — уведомления планирует страница через showNotification().
