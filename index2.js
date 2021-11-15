var canvas2 = document.getElementById('canvas');
var ctx = canvas2.getContext("2d");

console.log("hello index2");
canvas2.style.zIndex   = 8;
canvas2.style.position = "absolute";
canvas2.style.border   = "1px solid";

console.log("bye index2");

var player;

function onYouTubeIframeAPIReady() {
    console.log("ytapi");
    player = new YT.Player('youtubeMP4', {
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    document.getElementById("youtubeMP4").focus();
    //document.getElementById("playbutton").hidden=true;

    event.target.unMute()
    console.log("hey Im ready");

    document.getElementById('playbutton').addEventListener('click', function () {
        if(player.getPlayerState() == 2){
            console.log("playbutton");
            player.playVideo();
        }
        else if(player.getPlayerState() == 1){
            console.log("pausebutton");
            player.pauseVideo();
        }
    });
    //boundRect();
}

function onPlayerStateChange() {
    console.log("my state changed" + player.getPlayerState());
    if(player.getPlayerState() == -1){
        document.getElementById("playbutton").hidden=true;
        canvas2.style.width = "0px";
        canvas2.style.height = "0px";
        console.log(canvas2.style.width, canvas2.style.height);
    }
    else{
        if(player.getPlayerState() == 1){
            console.log("pause " + player.getCurrentTime()+"s");
            document.getElementById("playBtn").src="buttons/pausebutton-pink.png";
        }
        else if(player.getPlayerState() == 2){
            document.getElementById("playBtn").src="buttons/playbutton-pink.png";
        } 
        document.getElementById("playbutton").hidden=false;
        canvas2.style.width = "56%";
        canvas2.style.height = "4%";
        var height = $("#youtubeMP4").height();
        console.log(height);
        canvas2.style.marginTop = String(height*0.89)+"px";
        ctx.beginPath();
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx.fillStyle = "#A566FF67";
        ctx.fillRect(0, 0, canvas2.width, canvas2.height);
        ctx.strokeStyle = "#A566FF"
        ctx.lineWidth = 2;
        ctx.rect(0, 0, canvas2.width, canvas2.height);
        ctx.stroke();
        console.log(canvas2.style.width, canvas2.style.height);
    }
}

document.getElementById('startbtn').addEventListener('click', function(e){
        
});

document.getElementById('endbtn').addEventListener('click', function(e){
    
});