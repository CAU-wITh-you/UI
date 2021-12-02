
console.log("hello stopvideo2");

$(document).ready(function(){
    var videoUrl = new URL(window.location.href);
    before = videoUrl;
    var videoId = videoUrl.searchParams.get("v");
    console.log(videoUrl);
    console.log(videoId);
    if(videoId){
        if(document.querySelector('#withYou')){
            document.querySelector('#withYou').remove();
            window.location.reload();
        }
    }
});    


