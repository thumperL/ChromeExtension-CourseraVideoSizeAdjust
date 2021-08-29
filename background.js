chrome.runtime.onInstalled.addListener(() => chrome.storage.sync.set({width: '300px'}));

chrome.runtime.onMessage.addListener(async (request) => {  
  // Add the style tag in with ID to avoid keep on adding the tag to DOM
  chrome.tabs.executeScript({
    code: `
    if (document.querySelector('style#coursera_video_width_style_tag') === null) {
      document.body.insertAdjacentHTML('afterend', '<style id="coursera_video_width_style_tag">.rc-VideoMiniPlayer.mini .rc-VideoMiniControls, .rc-VideoMiniPlayer.mini .video-main-player-container {width: ${request.width}%;}</style>');
    } else {
      document.querySelector('style#coursera_video_width_style_tag').innerHTML = ".rc-VideoMiniPlayer.mini .rc-VideoMiniControls, .rc-VideoMiniPlayer.mini .video-main-player-container {width: ${request.width}%;}";
    }`
  });
  // Update the saved width
  chrome.storage.sync.set({width: `${request.width}`});
});