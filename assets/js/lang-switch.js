(function () {
  function currentFileName() {
    var path = window.location.pathname;
    var segments = path.split('/').filter(Boolean);
    var file = segments.length ? segments[segments.length - 1] : 'index.html';
    if (!file || file.indexOf('.html') === -1) {
      return 'index.html';
    }
    return file;
  }

  function getCurrentLang() {
    var path = window.location.pathname;
    if (path.indexOf('/fr/') !== -1) return 'fr';
    if (path.indexOf('/en/') !== -1) return 'en';
    return 'nl';
  }

  function targetFor(lang, file, currentLang) {
    if (currentLang === 'nl') {
      if (lang === 'nl') return file;
      if (lang === 'fr') return 'fr/' + file;
      return 'en/' + file;
    }

    if (currentLang === 'fr') {
      if (lang === 'nl') return '../' + file;
      if (lang === 'fr') return file;
      return '../en/' + file;
    }

    if (lang === 'nl') return '../' + file;
    if (lang === 'fr') return '../fr/' + file;
    return file;
  }

  var currentLang = getCurrentLang();
  var file = currentFileName();
  var links = document.querySelectorAll('.language-switch a[data-lang]');

  links.forEach(function (link) {
    var lang = link.getAttribute('data-lang');
    link.setAttribute('href', targetFor(lang, file, currentLang));
    if (lang === currentLang) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
