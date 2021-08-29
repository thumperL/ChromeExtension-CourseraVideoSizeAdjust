var videoWidthSelector = document.querySelector('#videoWidthSelector');
videoWidthSelector.addEventListener('change', (e) => {
  chrome.storage.sync.set({width: e.target.value});
  chrome.runtime.sendMessage({'width': `${e.target.value}`}, function(response) {
    console.log('response', response);
  });
})