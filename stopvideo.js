/*if(document.querySelector("#movie_player > div.html5-video-container > video")){
    console.log('stop', window.location.href);
    document.querySelector("#movie_player > div.html5-video-container > video").pause();
}*/

/*timerId = setInterval(function(){
    var videoUrl = new URL(window.location.href);
    var videoId = videoUrl.searchParams.get("v");
    console.log(videoId);
    if(videoId){
        if(document.querySelector('#withYou')){
            document.querySelector('#withYou').remove();
            document.querySelector("#movie_player > div.html5-video-container > video").pause();
            clearInterval(timerId);
            //window.location.reload();
        }
    }
}, 500);*/

console.log("hello stopvideo");
$(document).ready(function(){
    var videoUrl = new URL(window.location.href);
    var videoId = videoUrl.searchParams.get("v");
    console.log(videoUrl);
    console.log(videoId);
    if(!videoId){
        if(document.querySelector('#withYou')){
            document.querySelector('#withYou').remove();
            window.location.reload();
        }
    }
});    

chrome.runtime.onMessage.addListener(function(details) {
    alert('Message from frame: ' + details.data);
    console.log('Message from frame: ' + details.data);
});


