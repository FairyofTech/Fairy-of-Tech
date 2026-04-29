// ── Navbar scroll shadow ─────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    .classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile menu ──────────────────────────────
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
  });
});

// ── Active nav link (multipage) ──────────────
(function markActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active');
  });
})();

// ── Floating particles ───────────────────────
(function spawnParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation-duration:${8 + Math.random()*12}s;
      animation-delay:${Math.random()*8}s;
    `;
    container.appendChild(p);
  }
})();

// ── Hero sparkles ────────────────────────────
(function spawnHeroStars() {
  const container = document.getElementById('hero-sparkles');
  if (!container) return;
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('div');
    s.className = 'hero-star';
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      animation-delay:${Math.random()*3}s;
      animation-duration:${2+Math.random()*2}s;
      width:${4+Math.random()*6}px;
      height:${4+Math.random()*6}px;
    `;
    container.appendChild(s);
  }
})();
