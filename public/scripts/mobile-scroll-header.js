/**
 * Auto-hide the header on mobile when scrolling down.
 * Adds/removes .header-hidden class on the header element.
 */
(function () {
  var THRESHOLD = 10;

  function init() {
    var header = document.querySelector('.page > .header');
    if (!header) return;

    var lastY = window.scrollY;
    var hidden = false;
    var mq = window.matchMedia('(max-width: 49.9999rem)');

    function onScroll() {
      if (!mq.matches) {
        if (hidden) {
          header.classList.remove('header-hidden');
          hidden = false;
        }
        return;
      }

      var y = window.scrollY;
      if (Math.abs(y - lastY) < THRESHOLD) return;

      if (y > lastY && y > 60) {
        // Scrolling down
        if (!hidden) {
          header.classList.add('header-hidden');
          hidden = true;
        }
      } else {
        // Scrolling up
        if (hidden) {
          header.classList.remove('header-hidden');
          hidden = false;
        }
      }
      lastY = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('astro:after-swap', init);
})();
