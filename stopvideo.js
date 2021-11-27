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


$(document).ready(function(){
    var videoUrl = new URL(window.location.href);
    var videoId = videoUrl.searchParams.get("v");
    console.log(videoUrl);
    if(videoId){
        console.log(videoId);
        if(document.querySelector('#withYou')){
            document.querySelector('#withYou').remove();
            window.location.reload();
        }
        /*document.querySelector("#movie_player > div.html5-video-container > video").pause();
        document.querySelector('#secondary').innerHTML = ``;
        document.querySelector('#primary').innerHTML = ``;        /
        setTimeout(function(){
            if(confirm('start')){
                document.querySelector("#movie_player > div.html5-video-container > video").pause();
                document.querySelector('#secondary').innerHTML = ``;
                document.querySelector('#primary').innerHTML = ``;
        
                //document.getElementById("youtubeMP4").src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&listType=playlist&rel=0`;
                //console.log(document.getElementById("youtubeMP4"));
            }
        }, 2000);*/
    }
});    


/*setTimeout(function(){
    if(document.querySelector('#withYou')){
        document.querySelector('#withYou').remove();
        window.location.reload();
    }

}, 2000);*/
