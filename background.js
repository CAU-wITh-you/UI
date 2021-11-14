// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  //$("#columns").html(`<iframe src="${chrome.runtime.getURL("index.html")}" style="width:100%; height:100%; z-index:10; position:absolute; left:-0%"></iframe>`);
});