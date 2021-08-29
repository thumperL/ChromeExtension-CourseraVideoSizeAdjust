const videoWidthSelector = document.querySelector('#videoWidthSelector');
const videoWidthSelectorValue = document.querySelector('#videoWidthSelectorValue');

videoWidthSelector.addEventListener('change', (e) => {
  videoWidthSelectorValue.innerHTML = `${e.target.value}%`;
  chrome.runtime.sendMessage({'width': `${e.target.value}`});
});

window.onload = async function() {
  await chrome.storage.sync.get(['width'], async (result) => {
    // Set default draggable window
    videoWidthSelector.value = result.width;
    videoWidthSelectorValue.innerHTML = (result.width.endsWith('px')) ? `${result.width}` : `${result.width}%`;
  });
};
