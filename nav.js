// Highlight the current page in the site nav.
(function () {
  function norm(p) {
    return p.replace(/\/index\.html$/, "/").replace(/\/+$/, "/");
  }
  var here = norm(window.location.pathname);
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;
    var target = norm(new URL(href, window.location.href).pathname);
    if (here === target || (target !== "/" && here.indexOf(target) === 0)) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }
  });
})();
