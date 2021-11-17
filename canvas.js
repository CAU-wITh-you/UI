var canvas3 = document.getElementById("mycanvas");
var ctx3 = canvas3.getContext("2d");
var video = document.querySelector('#youtubeMP4');

var height = $("#youtubeMP4").height()-10;
var width = $("#youtubeMP4").width();
var x = 0;
var y = 0;
var w = width;
var h = height;
var x2 = 0;
var y2 = 0;
var w2 = width;
var h2 = height;

console.log("hello canvas");
console.log(height,width);

function drawCanvas(){
    //console.log(selectedBorder)
    //console.log("start");
    canvas3.height = height;
    canvas3.width = width;
    if(canvasVisible){
        ctx3.beginPath();
        ctx3.clearRect(0, 0, width, height);
        if(canvasClickable){
            ctx3.fillStyle = "#51E7FF27";
            ctx3.fillRect(x, y, w-x, h-y);    
        }
        else{
            ctx3.strokeStyle = "#51E7FF"
            ctx3.lineWidth = 3;
        }
        ctx3.rect(x, y, w-x, h-y);
        ctx3.stroke();
    }
    //console.log("end");    
}

function clearCanvas(){
    ctx3.clearRect(0, 0, width, height);
}

window.onresize = function(event){
    console.log("resize!");

    canvas3.height = $("#youtubeMP4").height()-10;
    canvas3.width = $("#youtubeMP4").width();
    x = $("#youtubeMP4").width()*x2;
    y = ($("#youtubeMP4").height()-10)*y2;
    w = $("#youtubeMP4").width()*w2;
    h = ($("#youtubeMP4").height()-10)*h2;

    height = $("#youtubeMP4").height()-10;
    width = $("#youtubeMP4").width();
    if(canvasVisible){
        ctx3.beginPath();
        ctx3.clearRect(0, 0, width, height);
        if(canvasClickable){
            ctx3.fillStyle = "#51E7FF27";
            ctx3.fillRect(x, y, w-x, h-y);    
        }
        else{
            ctx3.strokeStyle = "#51E7FF"
            ctx3.lineWidth = 5;
        }
        ctx3.rect(x, y, w-x, h-y);
        ctx3.stroke();
    }

    drawTimecanvas();
}

let canvasClickable = false;
let canvasVisible = false;
let inside = false;
let selectedBorder = 0;

$(document).ready(function () {

    document.querySelector("#extensions > div.extensions__left > div.videobuttons1 > div.areadesignbutton")
    .addEventListener('click', function(e){
        canvasVisible = !canvasClickable;
        canvasClickable = !canvasClickable;
        if(canvasClickable){
            drawCanvas();
            canvas3.style.pointerEvents = "auto";
        }
        else{
            clearCanvas();
            canvas3.style.pointerEvents = "none";
        }
    });

    document.querySelector("#extensions > div.extensions__left > div.videobuttons1 > div.areaselectionbutton")
    .addEventListener('click', function(e){
        canvasVisible = !canvasVisible;
        canvasClickable = false;
        canvas3.style.pointerEvents = "none";
        if(canvasVisible){
            drawCanvas();
        }
        else{
            clearCanvas();
        }
    });
    
    
    document.addEventListener('mousedown', function(e){
        //console.log(e);
        //console.log("start",x,y,w,h);
        if(selectedBorder == 0){
            offset = getOffset(document.getElementById("youtubeMP4"));
            var myX = e.clientX - offset.left;
            var myY = e.clientY - offset.top;    
            
            selectedBorder = getSelectedBorder(myX, myY);
            //console.log(myX, myY);
            //console.log(selectedBorder);
        }
    });

    document.addEventListener('mouseup', function(e){
        //console.log("end",x,y,w,h);
        selectedBorder = 0;
    });


    document.addEventListener('mousemove', function(e){
        if(selectedBorder>0){
            offset = getOffset(document.getElementById("youtubeMP4"));
            var myX = e.clientX - offset.left;
            var myY = e.clientY - offset.top;

            if(selectedBorder == 1 || selectedBorder == 5 || selectedBorder == 6) x = myX;
            if(selectedBorder == 2 || selectedBorder == 7 || selectedBorder == 8) w = myX;
            if(selectedBorder == 3 || selectedBorder == 5 || selectedBorder == 7) y = myY;
            if(selectedBorder == 4 || selectedBorder == 6 || selectedBorder == 8) h = myY;
            
            var ch = canvas3.height = $("#youtubeMP4").height()-10;
            var cw = canvas3.width = $("#youtubeMP4").width();
            x2 = x/cw;
            y2 = y/ch;
            w2 = w/cw;
            h2 = h/ch;

            drawCanvas(true);
            getSelectedBorder(myX,myY);
        }

    })

    document.querySelector("#codeExtractBtn").addEventListener('click', function(e){
        var ch = canvas3.height = $("#youtubeMP4").height()-10;
        var cw = canvas3.width = $("#youtubeMP4").width();
        alert("x:"+String(x/cw)+" y:"+String(y/ch)+" w:"+String((w-x)/cw)+" h:"+String((h-y)/ch)
        +"\ntime:"+String(player.getCurrentTime())
        +"\nstart:"+String(startTime)+"/"+transSectoTime(startTime)
        +"\nend:"+String(endTime)+"/"+transSectoTime(endTime));
    });
});


function getSelectedBorder(myX, myY){
    //console.log(myX, myY,"/",x,y,w,h);
    //console.log(Math.abs(myX-x),Math.abs(myX-w),Math.abs(myY-y),Math.abs(myY-h));
    if(Math.abs(myX-x)<50 && Math.abs(myY-y)<30) return 5;
    if(Math.abs(myX-x)<50 && Math.abs(myY-h)<30) return 6;
    if(Math.abs(myX-w)<30 && Math.abs(myY-y)<30) return 7;
    if(Math.abs(myX-w)<30 && Math.abs(myY-h)<30) return 8;
    
    if(Math.abs(myX-x)<50) return 1;
    if(Math.abs(myX-w)<30) return 2;
    if(Math.abs(myY-y)<30) return 3;
    if(Math.abs(myY-h)<30) return 4;
    return 0;
}
