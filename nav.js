// nav.js — shared header + footer injected into every page
// Each page sets window.ACTIVE_PAGE to its own filename (e.g. 'about.html')

const PAGES = [
  { href: 'index.html',       label: 'Home' },
  { href: 'about.html',       label: 'About' },
  { href: 'philosophy.html',  label: 'Philosophy' },
  { href: 'resources.html',   label: 'Resources' },
  { href: 'ethics.html',      label: 'Ethics' },
  { href: 'play.html',        label: 'Play' },
  { href: 'blog.html',        label: 'Blog' },
  { href: 'involved.html',    label: 'Involved' },
  { href: 'artworks.html',    label: 'Artworks' },
  { href: 'Games/TextileClicker.html',    label: 'Game1' }
];

function injectHeader() {
  const active = window.ACTIVE_PAGE || '';
  const links = PAGES.map(p =>
    `<a href="${p.href}"${active === p.href ? ' class="active"' : ''}>${p.label}</a>`
  ).join('\n      ');

  document.body.insertAdjacentHTML('afterbegin', `
<header>
  <div class="header-inner">
    <a class="logo" href="index.html"><span class="logo-dot"></span>Gems Taiwan</a>
    <nav>${links}</nav>
  </div>
</header>`);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <p><strong>Gems Taiwan</strong> · Synthetic Biology Education Outreach</p>
  <p>Promoting Synthetic Biology, Inspiring Scientific Future · 設計生命，創造未來</p>
  <p style="margin-top:8px; color:#888; font-size:13px;">&copy; 2025 Gems Taiwan. All rights reserved.</p>
</footer>`);
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});
