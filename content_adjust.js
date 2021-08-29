window.onload = () => {
  // Observe document to find if rc-VideoControlsContainer has been added to DOM
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  const observer = new MutationObserver(function(mutations, observer) {
    if (document.querySelector('.rc-VideoControlsContainer') !== null) {
      document.querySelector('.rc-VideoControlsContainer').addEventListener('click', () => {
        // Once click on the play video button, adjust the floating video size.
        // For some reason manipulating body DOM will screw up the layout when video is not yet played
        chrome.storage.sync.get(['width'], (result) => chrome.runtime.sendMessage({'width': `${result.width}`}));
      });
      // Once it is there, hook it on and disconnect the observer
      observer.disconnect();
    }
  });
  observer.observe(document, {subtree: true,attributes: true});
};