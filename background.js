// background.js

function stop() {
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

function stop2() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currTab = tabs[0];
    
    if (currTab) { // Sanity check
      chrome.scripting.executeScript(
        {
          target: {tabId: currTab.id, allFrames: true},
          files: ['stopvideo2.js'],
        },
        () => {console.log("success!");});
    }
  });
}

/*chrome.identity.getAuthToken({
  interactive: true
}, function(token) {
  console.log('token',token);
  if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError.message);
      return;
  }
  /*var x = new XMLHttpRequest();
  x.open('GET', 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token);
  x.onload = function() {
    console.log(x.response);
  };
  x.send();

  fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token)
  .then(r => r.text()).then(result => {
    console.log(result)  
    // Result now contains the response text, do what you want...
  })

});*/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.url) {
        var videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        if(!videoId){
          console.log('change', changeInfo.url);
          stop();
        }
    }
});

chrome.runtime.onMessage.addListener(function(details) {
  if(details.data == "test data2")
    stop();
  console.log('Message from frame: ' + details.data);
});


chrome.runtime.onMessage.addListener(function(details) {
  if(details.data == "test data")
    stop2();
  console.log('Message from frame: ' + details.data);
});
