

//https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.A0AVA9y1taVM8pYPdQppg4chQaDla7SJvy__9GOvU-DpEyeQCx1A_PplRhFG_pM8ZVrnYF4GBYMh02vu4pb54S2VjGxeHjHKAXDRmKTN8D_DisJ8hzRR7_6yHXkMLQkdc0VWSdPWBidLs2cEB24xAk8ylucaGSaCgYKATASATASFQE65dr89DRdniAa7RFyFOc1xpX3kA0163
authurl = "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=ya29.A0AVA9y1taVM8pYPdQppg4chQaDla7SJvy__9GOvU-DpEyeQCx1A_PplRhFG_pM8ZVrnYF4GBYMh02vu4pb54S2VjGxeHjHKAXDRmKTN8D_DisJ8hzRR7_6yHXkMLQkdc0VWSdPWBidLs2cEB24xAk8ylucaGSaCgYKATASATASFQE65dr89DRdniAa7RFyFOc1xpX3kA0163"
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function(response) {
    console.log('response',response)
}
xmlHttp.open("GET", authurl, true); // true for asynchronous 
xmlHttp.send(null);


var canvas2 = document.getElementById('canvas');
var ctx = canvas2.getContext("2d");

canvas2.style.zIndex   = 8;
canvas2.style.position = "absolute";
canvas2.style.border   = "1px solid";


var tag = document.createElement('script');
tag.src = "iframe_api.js";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
    console.log("my state changed" + player.getPlayerState());
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