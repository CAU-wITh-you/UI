let lastTab;
console.log("change.js");
chrome.tabs.getCurrent(function (tab, tabId) {
    lastTab = tab.url;
    var url = new URL(tab.url);
    var videoId = url.searchParams.get("v");
    console.log(videoId);
    console.log(tab);
    //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&rel=0`;
    document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
    console.log(document.getElementById("youtubeMP4"));
});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //console.log(tabId, changeInfo, tab);
    if (tab.url != lastTab) {
        lastTab = tab.url;
        location.reload();
        //toggleMuteState(tabId);
    }
});

/*function toggleMuteState(tabId) {
    chrome.tabs.get(tabId, async (tab) => {
        //let muted = !tab.mutedInfo.muted;
        console.log("mute");
        await chrome.tabs.update(tabId, { muted: true });
        //console.log(`Tab ${tab.id} is ${muted ? 'muted' : 'unmuted'}`);
    });
}*/

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAIClo7wQnXWdTCMQq5jsmGIu2fKvnEhq4", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    var resp = JSON.parse(xhr.responseText);
    console.log(resp);
    //alert(resp);
  }
}
xhr.send();*/