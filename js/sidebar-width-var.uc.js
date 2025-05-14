// sidebar-width-var.uc.js
// Based on code by https://github.com/Tanay-Kar

(function () {
  const mainWindow = document.getElementById('main-window');
  const toolbox = document.getElementById('navigator-toolbox');

  if (!mainWindow || !toolbox) {
    console.warn('[userChrome] main-window or navigator-toolbox not found.');
    return;
  }

  function updateSidebarWidthIfCompact() {
    const isCompact = mainWindow.getAttribute('zen-compact-mode') === 'true';
    if (!isCompact) return;

    const value = getComputedStyle(toolbox).getPropertyValue('--zen-sidebar-width');
    if (value) {
      mainWindow.style.setProperty('--zen-sidebar-width', value.trim());
      console.log('[userChrome] Synced --zen-sidebar-width to #main-window:', value.trim());
    }
  }

  // Set up a MutationObserver to watch attribute changes on #main-window
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'zen-compact-mode'
      ) {
        updateSidebarWidthIfCompact();
      }
    }
  });

  // Observe attribute changes
  observer.observe(mainWindow, {
    attributes: true,
    attributeFilter: ['zen-compact-mode']
  });

  // Optional: run it once in case the attribute is already set at load
  updateSidebarWidthIfCompact();
})();
