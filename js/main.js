(function () {
  var root = document.querySelector('[data-tour-root]');
  if (!root) {
    return;
  }

  var tabs = root.querySelectorAll('[data-tour-tab]');
  var panels = root.querySelectorAll('[data-tour-panel]');

  function forEachNode(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  function activate(id) {
    forEachNode(tabs, function (tab) {
      var isActive = tab.getAttribute('data-tour-tab') === id;
      if (isActive) {
        tab.classList.add('is-active');
        tab.setAttribute('aria-selected', 'true');
        tab.setAttribute('tabindex', '0');
      } else {
        tab.classList.remove('is-active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
      }
    });

    forEachNode(panels, function (panel) {
      var isActive = panel.getAttribute('data-tour-panel') === id;
      panel.style.display = isActive ? 'block' : 'none';
      if (isActive) {
        panel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });
  }

  forEachNode(tabs, function (tab) {
    tab.addEventListener('click', function () {
      var id = tab.getAttribute('data-tour-tab');
      activate(id);
    });
  });

  if (tabs.length > 0) {
    activate(tabs[0].getAttribute('data-tour-tab'));
  }
})();