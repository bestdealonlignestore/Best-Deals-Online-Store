/* ── SIDEBAR ── */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function toggleSub(id, btn) {
  const sub = document.getElementById(id);
  const isOpen = sub.classList.contains('open');
  document.querySelectorAll('.sub-menu').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.nav-link').forEach(b => {
    b.classList.remove('open-sub');
    b.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    sub.classList.add('open');
    btn.classList.add('open-sub');
    btn.setAttribute('aria-expanded', 'true');
  }
}

function navGo(id) {
  closeSidebar();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 320);
}

/* ── WHATSAPP BUBBLE ── */
setTimeout(() => {
  const tip = document.getElementById('waTip');
  tip.classList.add('show');
  setTimeout(() => tip.classList.remove('show'), 5000);
}, 2500);

/* ── ADD TO CART ── */
let cartCount = 0;

function addToCart(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const btn = e.target || e;
  const orig = btn.textContent;
  btn.textContent = '✓';
  btn.style.background = '#25D366';
  cartCount++;
  document.querySelector('.header-cart').innerHTML =
    `🛒 <span>Panier (${cartCount})</span>`;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
  }, 1200);
}

/* ── ESCAPE KEY closes sidebar ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSidebar();
});

/* ── ACTIVE CHIP on scroll ── */
const sections = ['article1', 'article2', 'article3', 'article4'];
const chips = document.querySelectorAll('.chip');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  chips.forEach((chip, i) => {
    chip.classList.toggle('active', i === sections.indexOf(current));
  });
}, { passive: true });

/* SIDEBAR */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}
function toggleSub(id, btn) {
  const sub = document.getElementById(id);
  const isOpen = sub.classList.contains('open');
  document.querySelectorAll('.sub-menu').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('open-sub'));
  if (!isOpen) {
    sub.classList.add('open');
    btn.classList.add('open-sub');
  }
}
function navGo(id) {
  closeSidebar();
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 320);
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSidebar();
});
