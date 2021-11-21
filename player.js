
var canvas2 = document.getElementById('canvas');
var ctx = canvas2.getContext("2d");

console.log("hello index2");
canvas2.style.zIndex   = 8;
canvas2.style.position = "absolute";
canvas2.style.border   = "1px solid";

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
            player.playVideo();
        }
        else if(player.getPlayerState() == 1){
            player.pauseVideo();
        }
    });
    //boundRect();
}

function onPlayerStateChange() {
    //console.log("my state changed" + player.getPlayerState());
    if(player.getPlayerState() == -1){
        document.getElementById("playbutton").hidden=true;
    }
    else{
        if(player.getPlayerState() == 1){
            console.log("play " + player.getCurrentTime()+"s");
            document.getElementById("playBtn").src="buttons/pausebutton-pink.png";
            if(canvasClickable){
                canvasVisible = true;
                canvasClickable = false;
                canvas3.style.pointerEvents = "none";
                drawCanvas();
            }
        }
        else if(player.getPlayerState() == 2){
            console.log("pause " + player.getCurrentTime()+"s");
            document.getElementById("playBtn").src="buttons/playbutton-pink.png";
        } 
        document.getElementById("playbutton").hidden=false;
        drawTimecanvas();
        //console.log(canvas2.width, canvas2.height);
    }
}

var started = false;
var ended = false;
var startPercent = 0;
var startTime = 0;
var endPercent = 0;
var endTime = 0;

document.getElementById('startbtn').addEventListener('click', function(e){
    started = !started;
    console.log(started, ended);
    if(started){
        document.getElementById("startbtn").src = "buttons/startbutton2-" + color + ".png";
        document.getElementById("startbtn").title = transSectoTime(player.getCurrentTime());
        startPercent = player.getCurrentTime()/player.getDuration();
        startTime = player.getCurrentTime();
        console.log("start " + String(player.getCurrentTime())+"s"+"\n"+startPercent+"%");
        if(!ended){
            drawTimecanvas();
        }
        else if(startPercent < endPercent) {
            drawTimecanvas();
        }
        else{
            document.getElementById("startbtn").src = "buttons/startbutton-" + color + ".png";
            document.getElementById("startbtn").title = "startpoint";
            started = false;            
        }
    }else{
        document.getElementById("startbtn").src = "buttons/startbutton-" + color + ".png";
        document.getElementById("startbtn").title = "startpoint";
        clearTimecanvas();
        if(ended){
            drawTimecanvas();
        }
    }
});

document.getElementById('endbtn').addEventListener('click', function(e){
    ended = !ended;
    console.log(started, ended);
    if(ended){
        document.getElementById("endbtn").src = "buttons/endbutton2-" + color + ".png";
        document.getElementById("endbtn").title = transSectoTime(player.getCurrentTime());
        endPercent = player.getCurrentTime()/player.getDuration();
        endTime = player.getCurrentTime();
        console.log("end " + String(player.getCurrentTime())+"s"+"\n"+endPercent+"%");
        if(!started){
            drawTimecanvas();
        }
        else if(startPercent < endPercent) {
            drawTimecanvas();
        }
        else{
            document.getElementById("endbtn").src = "buttons/endbutton-" + color + ".png";
            document.getElementById("endbtn").title = "endpoint";
            ended = false;
        }
    }
    else{
        document.getElementById("endbtn").src = "buttons/endbutton-" + color + ".png";
        document.getElementById("endbtn").title = "endpoint";
        clearTimecanvas();
        if(started){
            drawTimecanvas();
        }
    }
});

document.querySelector("#beforebutton").addEventListener('click', function () {
    player.seekTo(player.getCurrentTime()-5, true);
});

document.querySelector("#afterbutton").addEventListener('click', function () {
    player.seekTo(player.getCurrentTime()+5, true);
});

console.log("bye index2");