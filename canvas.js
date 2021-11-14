var canvas3 = document.getElementById("mycanvas");
var ctx3 = canvas3.getContext("2d");

var video = document.querySelector('#youtubeMP4');
var height = $("#youtubeMP4").height();
height = height*0.9;
var width = $("#youtubeMP4").width();

console.log("hello canvas");
console.log(height,width);
canvas3.height = height;
canvas3.width = width;
ctx3.beginPath();
ctx3.fillStyle = "#51E7FF27";
ctx3.fillRect(0, 0, width, height);
ctx3.strokeStyle = "#51E7FF"
ctx3.lineWidth = 5;
ctx3.rect(0, 0, width, height);
ctx3.stroke();

console.log("bye canvas");

window.onresize = function(event){
    console.log("resize!");
    console.log("start");
    var height = $("#youtubeMP4").height();
    height = height*0.9;
    var width = $("#youtubeMP4").width();
    canvas3.height = height;
    canvas3.width = width;
    ctx3.beginPath();
    ctx3.clearRect(0, 0, width, height);
    ctx3.fillStyle = "#51E7FF27";
    ctx3.fillRect(0, 0, width, height);
    ctx3.strokeStyle = "#51E7FF"
    ctx3.lineWidth = 5;
    ctx3.rect(0, 0, width, height);
    ctx3.stroke();
    console.log("end");
}