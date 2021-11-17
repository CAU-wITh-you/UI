let lastTab;
console.log("change.js");
chrome.tabs.getCurrent(function (tab) {
    if (tab.url != lastTab) {
        lastTab = tab.url;
        var videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        console.log(videoUrl);
        console.log(tab);
        //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&rel=0`;
        document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
        console.log(document.getElementById("youtubeMP4")); 


        var xhr = new XMLHttpRequest();
        /*var data = {url: videoUrl};
        xhr.open("POST", "http://ec2-52-14-144-75.us-east-2.compute.amazonaws.com:3000/mdownload", true);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                console.log("response!");
                var resp = JSON.parse(xhr.responseText);
                //var resp = xhr.responseText;
                console.log(resp);
                //alert(resp);
            }
        }
        xhr.send(JSON.stringify(data));*/
        /*xhr.open("GET", "http://ec2-52-14-144-75.us-east-2.compute.amazonaws.com:3000/ocr/?x=0.5&y=0.5&w=0.5&h=0.5&t=10&n=07e54c0a28b54529a5a4c6f5836f7dc8", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                var resp = JSON.parse(xhr.responseText);
                console.log(resp);
                //alert(resp);
            }
        }
        xhr.send();*/
    }
});


/*chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //console.log(tabId, changeInfo, tab);
    if (tab.url != lastTab) {
        lastTab = tab.url;
        location.reload();
        //toggleMuteState(tabId);
    }
});*/

/*function toggleMuteState(tabId) {
    chrome.tabs.get(tabId, async (tab) => {
        //let muted = !tab.mutedInfo.muted;
        console.log("mute");
        await chrome.tabs.update(tabId, { muted: true });
        //console.log(`Tab ${tab.id} is ${muted ? 'muted' : 'unmuted'}`);
    });
}*/
