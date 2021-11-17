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
        //canvas2.style.width = "0px";
        //canvas2.style.height = "0px";
        console.log(canvas2.style.width, canvas2.style.height);
    }
    else{
        if(player.getPlayerState() == 1){
            console.log("play " + player.getCurrentTime()+"s");
            document.getElementById("playBtn").src="buttons/pausebutton-pink.png";
        }
        else if(player.getPlayerState() == 2){
            console.log("pause " + player.getCurrentTime()+"s");
            document.getElementById("playBtn").src="buttons/playbutton-pink.png";
        } 
        document.getElementById("playbutton").hidden=false;
        drawTimecanvas();
        console.log(canvas2.width, canvas2.height);
    }
}

function drawTimecanvas(){
    canvas2.width = $("#youtubeMP4").width();
    canvas2.height = $("#youtubeMP4").height()*0.03;
    canvas2.style.marginTop = String($("#youtubeMP4").height()*0.91)+"px";
    console.log(selectedBorder)
    //console.log("start");
    ctx.beginPath();
    var margin = 11;
    var width = $("#youtubeMP4").width()-margin*2;
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    //ctx.fillStyle = "#A566FF67";
    var x = 0;
    var w = 0;
    if(started && ended){
        x = width*startPercent;
        w = width*endPercent;
    }
    else if(started){
        x = width*startPercent-2;
        w = width*startPercent+2;
    }
    else if(ended){
        x = width*endPercent-2;
        w = width*endPercent+2;       
    }
    console.log("drawTimecanvas",x,w);
    ctx.fillStyle = "#A566FF67";
    ctx.fillRect(margin+x, 0, w-x, canvas2.height);
    ctx.strokeStyle = "#A566FF"
    ctx.lineWidth = 3;
    ctx.rect(margin+x, 0, w-x, canvas2.height);
    ctx.stroke();
    //console.log("end");    
}

function clearTimecanvas(){
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
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