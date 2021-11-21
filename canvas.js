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
    canvas3.height = $("#youtubeMP4").height()-10;
    canvas3.width = $("#youtubeMP4").width();
    var variables = variableTrim(x, y, w, h, height, width);
    x = variables.x;
    y = variables.y;
    w = variables.w;
    h = variables.h;

    if(canvasVisible){
        ctx3.beginPath();
        ctx3.clearRect(0, 0, width, height);
        if(canvasClickable){
            document.getElementById("check").className = "far fa-check-square fa-2x";
            ctx3.fillStyle = "#00D8FF27";
            ctx3.fillRect(x, y, w-x, h-y); 
            ctx3.strokeStyle = "#6799FF"
            ctx3.lineWidth = 2;   
        }
        else{
            document.getElementById("check").className = "fas fa-check-square fa-2x";
            ctx3.strokeStyle = "#6799FF"
            ctx3.lineWidth = 3;
        }
        ctx3.rect(x, y, w-x, h-y);
        ctx3.stroke();
    }
    //console.log("end");    
}

function clearCanvas(){
    document.getElementById("check").className = "far fa-check-square fa-2x";
    ctx3.clearRect(0, 0, width, height);
}

function variableTrim(x, y, w, h, height, width){
    x = x < 0 ? 0 : x;
    x = x > width ? width : x;
    y = y < 0 ? 0 : y;
    y = y > height ? height : y;
    w = w < 0 ? 0 : w;
    w = w > width ? width : w;
    h = h < 0 ? 0 : h;
    h = h > height ? height : h;
    return {x, y, w, h};
}

let canvasClickable = false;
let canvasVisible = false;
let inside = false;
let selectedBorder = 0;

$(document).ready(function () {

    adjustVideo();

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
        if(selectedBorder != -1){
            if(canvasClickable) canvasVisible = true;
            else canvasVisible = !canvasVisible;
            canvasClickable = false;
            canvas3.style.pointerEvents = "none";
            if(canvasVisible){
                drawCanvas();
            }
            else{
                clearCanvas();
            }
        }
    });
    

    var prevX = 0;
    var prevY = 0;
    document.addEventListener('mousedown', function(e){
        //console.log(e);
        //console.log("start",x,y,w,h);
        
        offset = getOffset(document.getElementById("youtubeMP4"));
        var myX = e.clientX - offset.left;
        var myY = e.clientY - offset.top;  
        prevX = myX;
        prevY = myY;

        if(canvasClickable && selectedBorder==0){
            prevX = myX;
            prevY = myY;
            selectedBorder = getSelectedBorder(myX, myY);
            //console.log(myX, myY);
            //console.log(selectedBorder);
        }
        if(getSelectedBorder(myX, myY) == -1 && canvasClickable){
            canvasVisible = true;
            canvasClickable = false;
            canvas3.style.pointerEvents = "none";
            drawCanvas();
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
            if(selectedBorder == 9){
                var dx = myX-prevX;
                var dy = myY-prevY;
                x += dx;
                y += dy; 
                w += dx;
                h += dy;
            }
            
            prevX = myX;
            prevY = myY;
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


});

function getSelectedBorder(myX, myY){
    //console.log(myX, myY,"/",x,y,w,h);
    //console.log(Math.abs(myX-x),Math.abs(myX-w),Math.abs(myY-y),Math.abs(myY-h));
    if(Math.abs(myX-x)<30 && Math.abs(myY-y)<30) return 5;
    if(Math.abs(myX-x)<30 && Math.abs(myY-h)<30) return 6;
    if(Math.abs(myX-w)<30 && Math.abs(myY-y)<30) return 7;
    if(Math.abs(myX-w)<30 && Math.abs(myY-h)<30) return 8;

    if(Math.abs(myX-x)<30) return 1;
    if(Math.abs(myX-w)<30) return 2;
    if(Math.abs(myY-y)<30) return 3;
    if(Math.abs(myY-h)<30) return 4;

    if(x-30<myX && myX<w+30 && y-30<myY && myY<h+30) return 9;
    return -1;
}

function adjustVideo(){
    var heightDiff = $("#there").height()-$("#playerbuttons").height()-$("#there").width()*0.5625;
    console.log(heightDiff);
    document.getElementById("youtubeWrapper").style.marginTop = String(heightDiff*0.35)+"px";
}

function getOffset( el ) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { 
        top: rect.top + scrollTop, left: rect.left + scrollLeft 
    }
}
/*var delay = 300;
var timer = null;

//Javascript
window.addEventListener('resize', function(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		console.log('resize event!');
        adjustVideo();
	}, delay);
});*/

window.onresize = function(event){
    //console.log("resize!");

    canvas3.height = $("#youtubeMP4").height()-10;
    canvas3.width = $("#youtubeMP4").width();
    x = $("#youtubeMP4").width()*x2;
    y = ($("#youtubeMP4").height()-10)*y2;
    w = $("#youtubeMP4").width()*w2;
    h = ($("#youtubeMP4").height()-10)*h2;

    height = $("#youtubeMP4").height()-10;
    width = $("#youtubeMP4").width();
    var variables = variableTrim(x, y, w, h);
    x = variables.x;
    y = variables.y;
    w = variables.w;
    h = variables.h;

    if(canvasVisible){
        ctx3.beginPath();
        ctx3.clearRect(0, 0, width, height);
        if(canvasClickable){
            ctx3.fillStyle = "#00D8FF27";
            ctx3.fillRect(x, y, w-x, h-y);    
            ctx3.strokeStyle = "#6799FF";
            ctx3.lineWidth = 2;
        }
        else{
            ctx3.strokeStyle = "#6799FF"
            ctx3.lineWidth = 3;
        }
        ctx3.rect(x, y, w-x, h-y);
        ctx3.stroke();
    }

    drawTimecanvas();
    adjustVideo();
}