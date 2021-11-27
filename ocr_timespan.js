
var canvas2 = document.getElementById('canvas');
var ctx = canvas2.getContext("2d");

console.log("hello index2");
canvas2.style.zIndex   = 8;
canvas2.style.position = "absolute";
canvas2.style.border   = "1px solid";


function drawTimecanvas(){
    canvas2.width = $("#youtubeMP4").width();
    canvas2.height = $("#youtubeMP4").height()*0.035;
    canvas2.style.marginTop = String($("#youtubeMP4").height()-50)+"px";
    //console.log(selectedBorder)
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
    //console.log("drawTimecanvas",x,w);
    ctx.fillStyle = "#FA807267";
    ctx.fillRect(margin+x, 0, w-x, canvas2.height);
    ctx.strokeStyle = "#FA8072"
    ctx.lineWidth = 3;
    ctx.rect(margin+x, 0, w-x, canvas2.height);
    ctx.stroke();
    //console.log("end");    
}

function clearTimecanvas(){
    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
}
