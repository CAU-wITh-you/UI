var server1 = "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com"
var server2 = "https://cauwithyou.ga"
var server = server2

let videoUid;
let lastTab = '';
let videoUrl;
console.log("setvideo.js");
chrome.tabs.getCurrent(function (tab) {
    console.log(lastTab);
    if(lastTab != ''){
        videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        //console.log(videoUrl);
        //console.log(videoId);
        if(!videoId){
            console.log(document.querySelector('#withYou'));
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
            }  
            window.location.reload();
        }
        loadNote();
    }
    if (tab.url != lastTab) {
        lastTab = tab.url;
        videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        //console.log(videoUrl);
        //console.log(tab);
        if(videoId){
            //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&mute=1&rel=0`;
            document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
            //console.log(document.getElementById("youtubeMP4"));
            loadNote();
        }
        else{
            alert("실행 가능한 동영상이 없습니다. 다른 페이지에서 실행해주세요!");
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').style.display = "none";
                document.querySelector('#withYou').style.pointerEvents = "none";
            }
            chrome.runtime.sendMessage({sendBack:true, data:"test data2"});
        }
        var xhr = new XMLHttpRequest();
        var data = {url: videoUrl};
        xhr.open("POST", server + ":443/mdownload", true);
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
        videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        console.log(videoUrl);
        console.log(videoId);
        if(!videoId){
            console.log(document.querySelector('#withYou'));
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
            }
            window.location.reload();
            //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
            //console.log(document.getElementById("youtubeMP4"));        
        }
    }
        
});
