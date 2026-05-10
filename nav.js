// nav.js — shared header + footer injected into every page
// Each page sets window.ACTIVE_PAGE to its own filename

const PAGES = [
  { href: 'index.html',      label: 'Home' },
  { href: 'about.html',      label: 'About Us' },
  { href: 'philosophy.html', label: 'Philosophy' },
  { href: 'resources.html',  label: 'Resources' },
  { href: 'ethics.html',     label: 'Science & Ethics' },
  { href: 'play.html',       label: 'Online Games' },
  { href: 'blog.html',       label: 'Blogs & News' },
  { href: 'involved.html',   label: 'Get Involved' },
];

function injectHeader() {
  const active = window.ACTIVE_PAGE || '';
  const links = PAGES.map(p =>
    `<a href="${p.href}"${active === p.href ? ' class="active"' : ''}>${p.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
<header>
  <div class="header-inner">
    <nav>${links}</nav>
  </div>
</header>`);
}

function injectFooter() {
  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-inner">
    <div class="footer-col">
      <p class="footer-logo">GEMS Taiwan</p>
      <p>2F.-1, No. 15, Ln. 374, Sec. 3,<br>Chenggong Rd., Neihu Dist.,<br>Taipei, Taiwan (R.O.C.)</p>
    </div>
    <div class="footer-col">
      <p class="footer-heading">Related Links</p>
      <a href="https://gems-taiwan.github.io/gemstaiwan/test.html" target="_blank">gems-taiwan.tw</a>
    </div>
  </div>
</footer>`);
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});