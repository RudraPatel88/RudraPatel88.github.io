// Marks the current page's nav link with aria-current for styling.
(function () {
  var here = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".site-nav a").forEach(function (link) {
    var target = link.getAttribute("href");
    if (!target) return;
    var resolved = new URL(target, window.location.href).pathname.replace(
      /\/index\.html$/,
      "/"
    );
    if (resolved === here) {
      link.setAttribute("aria-current", "page");
    }
  });
})();

// Builds mailto/tel links at runtime so the address/number isn't sitting
// in the page source as scrapeable plain text.
(function () {
  document.querySelectorAll("[data-email]").forEach(function (el) {
    var address = atob(el.getAttribute("data-email"));
    el.setAttribute("href", "mailto:" + address);
    el.textContent = address;
  });

  document.querySelectorAll("[data-phone]").forEach(function (el) {
    var display = atob(el.getAttribute("data-phone"));
    var digits = display.replace(/\D/g, "");
    el.setAttribute("href", "tel:+1" + digits);
    el.textContent = display;
  });
})();
