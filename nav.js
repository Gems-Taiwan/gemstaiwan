// nav.js — shared bilingual header + footer
// English pages live in root folder.
// Mandarin pages live in /zh/.

const isChinese = window.location.pathname.includes('/zh/');

const PAGES_EN = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About Us' },
  { href: 'resources.html', label: 'Resources' },
  { href: 'ethics.html', label: 'Science & Ethics' },
  { href: 'play.html', label: 'Online Games' },
  { href: 'blog.html', label: 'Blogs & News' },
  { href: 'involved.html', label: 'Get Involved' },
];

const PAGES_ZH = [
  { href: 'index.html', label: '首頁' },
  { href: 'about.html', label: '關於我們' },
  { href: 'resources.html', label: '教材資源' },
  { href: 'ethics.html', label: '科學與倫理' },
  { href: 'play.html', label: '線上遊戲' },
  { href: 'blog.html', label: '部落格與消息' },
  { href: 'involved.html', label: '參與我們' },
];

function getCurrentFileName() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1);
  return file || 'index.html';
}

function getPageHref(pageFile) {
  if (isChinese) {
    return pageFile;
  } else {
    return pageFile;
  }
}

function getLanguageSwitchHref() {
  const currentFile = getCurrentFileName();

  if (isChinese) {
    // From /zh/about.html to ../about.html
    return `../${currentFile}`;
  } else {
    // From /about.html to zh/about.html
    return `zh/${currentFile}`;
  }
}

function injectHeader() {
  const active = window.ACTIVE_PAGE || getCurrentFileName();
  const pages = isChinese ? PAGES_ZH : PAGES_EN;

  const links = pages.map(p =>
    `<a href="${getPageHref(p.href)}"${active === p.href ? ' class="active"' : ''}>${p.label}</a>`
  ).join('');

  const langHref = getLanguageSwitchHref();
  const langLabel = isChinese ? 'English' : '中文';

  document.body.insertAdjacentHTML('afterbegin', `
<header>
  <div class="header-inner">
    <nav>
      ${links}
      <a class="lang-switch" href="${langHref}">${langLabel}</a>
    </nav>
  </div>
</header>`);
}

function injectFooter() {
  const footerLogo = isChinese ? 'GEMS Taiwan' : 'GEMS Taiwan';
  const relatedLinks = isChinese ? '相關連結' : 'Related Links';

  document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-inner">
    <div class="footer-col">
      <p class="footer-logo">${footerLogo}</p>
      <p>2F.-1, No. 15, Ln. 374, Sec. 3,<br>Chenggong Rd., Neihu Dist.,<br>Taipei, Taiwan (R.O.C.)</p>
    </div>
    <div class="footer-col">
      <p class="footer-heading">${relatedLinks}</p>
      <a href="https://gems-taiwan.github.io/gemstaiwan/test.html" target="_blank">gems-taiwan.tw</a>
    </div>
  </div>
</footer>`);
}

document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();
});