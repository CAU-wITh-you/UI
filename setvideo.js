var server1 = "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com"
var server2 = "https://capstoneocr.com"
var server = server2

let videoUid;
let lastTab = '';
let videoUrl;
/*
vid_title" hidden="hidden">title</div>
                <div id="vid_author" hidden="hidden">author</div>
                <div id="vid_thumbnail"
*/ 
function getUserInfo(){
    if(document.getElementById("user_email").innerHTML != "not login") return
    
    chrome.identity.getAuthToken({
        interactive: true
    }, function(token) {
        console.log('token!',token);
        var token = token
        if (chrome.runtime.lastError) {
            console.log(chrome.runtime.lastError.message);
            return;
        }
        authUrl = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+token
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            var resp = JSON.parse(xmlHttp.responseText);
            console.log('email',resp.email)
            document.getElementById("user_email").innerHTML = resp.email;
            chrome.storage.sync.set({"user_email": resp.email}, function() {
                console.log('Value is set to ' + resp.email);
            });
            loadNote();
        }
        xmlHttp.open("GET", authUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    });
}

function saveVideoDetails(videoId){
    //console.log('videoId',videoId);
    ytapiUrl = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+videoId+"&key=AIzaSyB79i4ofGN0L8vrCpDglUIHGa_EfKurCBQ"
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        var resp = JSON.parse(xmlHttp.responseText);
        //console.log('ytube',resp);
        snippet = resp.items[0].snippet;
        //console.log(snippet);
        document.getElementById("vid_title").innerHTML = snippet.title;
        document.getElementById("vid_author").innerHTML = snippet.channelTitle;
        document.getElementById("vid_thumbnail").innerHTML = snippet.thumbnails.medium.url;
    }
    xmlHttp.open("GET", ytapiUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    getUserInfo()
}

chrome.tabs.getCurrent(function (tab) {
    //console.log(lastTab);
    if(lastTab != ''){
        videoUrl = new URL(tab.url);
        var videoId = videoUrl.searchParams.get("v");
        //console.log(videoUrl);
        //console.log(videoId);
        if(!videoId){
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
            }  
            window.location.reload();
        }
        else{
            document.getElementById("vid_url").innerHTML = videoUrl;
            saveVideoDetails(videoId);
        }
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
            document.getElementById("vid_url").innerHTML = videoUrl;
            saveVideoDetails(videoId);
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
        xhr.open("POST", server + "/mdownload", true);
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
        //console.log(videoUrl);
        //console.log(videoId);
        if(!videoId){
            console.log(document.querySelector('#withYou'));
            if(document.querySelector('#withYou')){
                document.querySelector('#withYou').remove();
            }
            window.location.reload();
            //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
            //console.log(document.getElementById("youtubeMP4"));        
        }
        else{
            document.getElementById("vid_url").innerHTML = videoUrl;
            saveVideoDetails(videoId);
        }
    }
        
});
