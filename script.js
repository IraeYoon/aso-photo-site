// 모든 페이지의 휴대폰 메뉴와 홈의 갤러리 안내입니다.
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const siteMenu = document.querySelector('#site-menu');

  if (menuButton && siteMenu) {
    const compactScreen = window.matchMedia('(max-width: 1200px)');

    function setMenuOpen(isOpen) {
      siteMenu.hidden = compactScreen.matches && !isOpen;
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
      menuButton.querySelector('span').textContent = isOpen ? '×' : '☰';
    }

    function syncMenu() {
      menuButton.hidden = !compactScreen.matches;
      setMenuOpen(false);
    }

    menuButton.addEventListener('click', () => {
      setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && compactScreen.matches && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
      }
    });

    compactScreen.addEventListener('change', syncMenu);
    syncMenu();
  }

  const galleryButton = document.querySelector('#gallery-button');
  const galleryNotice = document.querySelector('#gallery-notice');

  if (galleryButton && galleryNotice) {
    galleryButton.addEventListener('click', () => {
      galleryNotice.hidden = false;
      galleryButton.setAttribute('aria-expanded', 'true');
    });
  }
})();
