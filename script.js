(function () {
  const playUrl = 'https://play.google.com/store/apps/details?id=com.inquisyx.goandget';
  const appStoreUrl = 'https://apps.apple.com/in/app/go-and-get/id6761760686';
  const params = new URLSearchParams(window.location.search);
  const campaign = Object.fromEntries(params.entries());
  const ua = navigator.userAgent || '';
  const isAndroid = /Android/i.test(ua);
  const isApple = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const note = document.getElementById('device-note');
  if (isAndroid) {
    if (note) note.textContent = 'Android detected — Google Play is the recommended download.';
    document.querySelectorAll('[data-store="google"]').forEach(el => el.classList.add('recommended-store'));
  } else if (isApple) {
    if (note) note.textContent = 'Apple device detected — the App Store is the recommended download.';
    document.querySelectorAll('[data-store="apple"]').forEach(el => el.classList.add('recommended-store'));
  }
  document.querySelectorAll('[data-store]').forEach((link) => {
    link.addEventListener('click', () => {
      const store = link.dataset.store;
      const destination = store === 'google' ? playUrl : appStoreUrl;
      // Optional analytics hook: configure GA4 in index.html before enabling this event.
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'store_click', { store, destination, ...campaign });
      }
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: 'goandget_store_click', store, destination, ...campaign });
      }
    });
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
