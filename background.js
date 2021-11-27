// background.js

/*let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  //$("#columns").html(`<iframe src="${chrome.runtime.getURL("index.html")}" style="width:100%; height:100%; z-index:10; position:absolute; left:-0%"></iframe>`);
});
*/
try {
  importScripts("./assets/jquery.min.js",
                "./assets/html2canvas.min.js",
                "./assets/jquery-3.3.1.min.js",
                "./assets/jquery-3.6.0.js",
                "./assets/jquery-ui.js",);
} catch (e) {
  console.log(e);
}

function hello() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currTab = tabs[0];
    
    if (currTab) { // Sanity check
      chrome.scripting.executeScript(
        {
          target: {tabId: currTab.id, allFrames: true},
          files: ['stopvideo.js'],
        },
        () => {console.log("success!");});
    }
  });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        var videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        if(videoId){
          console.log('change', changeInfo.url);
          hello()
        }
    }
});