// =========================================================
// script.js — interattività leggera, tutta lato client
// =========================================================

// --- Contatore visite "alla vecchia maniera" ---
// Attenzione: è salvato solo nel browser di chi visita (localStorage),
// quindi NON è un vero contatore condiviso tra tutti i visitatori.
// Per un contatore reale gratuito vedi le opzioni nel messaggio di Claude.
(function fakeVisitCounter() {
  const el = document.getElementById('visit-counter');
  if (!el) return;
  let count = parseInt(localStorage.getItem('visitCount') || '0', 10);
  count += 1;
  localStorage.setItem('visitCount', count);
  el.textContent = String(count).padStart(6, '0');
})();

// --- Bottone "torna su" che appare scrollando ---
(function backToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// --- "Post a caso": scorre a un post casuale della pagina ---
(function randomPost() {
  const btn = document.getElementById('random-post-btn');
  if (!btn) return;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const posts = document.querySelectorAll('.post');
    if (!posts.length) return;
    const pick = posts[Math.floor(Math.random() * posts.length)];
    pick.scrollIntoView({ behavior: 'smooth', block: 'center' });
    pick.animate(
      [{ boxShadow: '0 0 0 0 rgba(255,217,102,0.9)' }, { boxShadow: '0 0 0 14px rgba(255,217,102,0)' }],
      { duration: 700 }
    );
  });
})();
