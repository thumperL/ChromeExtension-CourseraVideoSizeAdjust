chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({width: '300px'}, function() {
    console.log('Default width is 300px.');
  });
});