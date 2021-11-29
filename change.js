let videoUid;
let lastTab = '';
console.log("change.js");
chrome.tabs.getCurrent(function (tab) {
    console.log(lastTab);
    if(lastTab != ''){
        var videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        console.log(videoUrl);
        if(videoId){
            console.log(videoId);
            console.log(document.querySelector('#withYou'));
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
                window.location.reload();
            }  
        }
    }
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
        var data = {url: videoUrl};
        xhr.open("POST", "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com:443/mdownload", true);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                console.log("response!");
                var resp = JSON.parse(xhr.responseText);
                //var resp = xhr.responseText;
                videoUid = resp.video_name;
                console.log(videoUid);
                //alert(resp);
            }
        }
        xhr.send(JSON.stringify(data));
    }
});


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //console.log(tabId, changeInfo, tab);

    if (tab.url != lastTab) {
        lastTab = tab.url;
        var videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        console.log(videoUrl);
        if(videoId){
            console.log(videoId);
            console.log(document.querySelector('#withYou'));
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
                window.location.reload();
            }
            //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
            //console.log(document.getElementById("youtubeMP4"));        
        }
    }
        
});

/*var videoUrl = new URL(window.location.href);
    var videoId = videoUrl.searchParams.get("v");
    console.log(videoUrl);
    if(videoId){
        console.log(videoId);
        if(document.querySelector('#withYou')){
            document.querySelector('#withYou').remove();
            window.location.reload();
        }
    }*/

/*function toggleMuteState(tabId) {
    chrome.tabs.get(tabId, async (tab) => {
        //let muted = !tab.mutedInfo.muted;
        console.log("mute");
        await chrome.tabs.update(tabId, { muted: true });
        //console.log(`Tab ${tab.id} is ${muted ? 'muted' : 'unmuted'}`);
    });
}*/
