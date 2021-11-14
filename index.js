if(document.getElementById("youtubeMP4")){
    var canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "selectionVideo");
    
    // this right here should be fixed
    // for the youtube videos to work properly
    
    console.log("hello hyejin2")
    
    document.body.appendChild(canvas1);
    var ctx = canvas1.getContext("2d");

    var video = document.getElementById("youtubeMP4");
    var height = $("#youtubeMP4").height();
    var width = $("#youtubeMP4").width();
    
    function getOffset( el ) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { 
            top: rect.top + scrollTop, left: rect.left + scrollLeft 
        }
    }

    function pos(){
            var offset = getOffset(document.getElementById("youtubeMP4"));
            return {
                top:offset.top,
                left:offset.left,
                height:$("#youtubeMP4").height(),
                width:$("#youtubeMP4").height(),
        }	
    }

    function initCanvas(){
        if($('#youtubeMP4').position()){
            $("#selectionVideo").css({
                position: 'absolute',
                'z-index': 990,
                top: pos().top+'px',
                left: pos().left+'px',
                height:height,
                width: width
            });
            $("#selectionVideo").attr("height", height);
            $("#selectionVideo").attr("width", width);		
            
            console.log("start");
            ctx.beginPath();
            ctx.fillStyle = "#51E7FF27";
            ctx.fillRect(0, 0, canvas1.width, canvas1.height);
            ctx.strokeStyle = "#51E7FF"
            ctx.lineWidth = 5;
            ctx.rect(0, 0, canvas1.width, canvas1.height);
            ctx.stroke();
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'blue';
            //ctx.fillText('동영상을 선택해주세요', canvas1.width/2, canvas1.height/2);
            console.log("end")
        }
    }
       
    $(document).ready(function(){
        
        //initCanvas();
        //boundRect();
    });
}

//client info에 저장
var color = "pink"

//각 videoinfo에 저장되어야 하는 변수
var startTime = 0;
var endTime = 0;
var timeStamp = [];
var timeStampnum = 0;
var startclicknum = 0

function toggleImgstart() {
    startclicknum += 1;
    if (startclicknum % 2 == 0) {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton-" + color + ".png";
        startTime = 0;
    } else {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton2-" + color + ".png";
        startTime = document.getElementById("youtubeMP4").currentTime;
    }
    console.log(startTime);
}

var endclicknum = 0
function toggleImgend() {
    endclicknum += 1
    if (endclicknum % 2 == 0) {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton-" + color + ".png";
        endTime = 0;
    } else {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton2-" + color + ".png";
        endTime = document.getElementById("youtubeMP4").currentTime;
    }
    console.log(endTime);
}
var playclicknum = 0
function toggleImgplay() {
    playclicknum += 1
    if (playclicknum % 2 == 0) {
        document
            .getElementById("playbtn")
            .src = "buttons/playbutton-" + color + ".png";
    } else {
        document
            .getElementById("playbtn")
            .src = "buttons/pausebutton-" + color + ".png";
    }
}

function hoverdescription() {
    document
        .getElementById("unseen1")
        .style
        .display = "block";
    document
        .getElementById("unseen2")
        .style
        .display = "block";
}
function nohoverdescription() {
    document
        .getElementById("unseen1")
        .style
        .display = "none";
    document
        .getElementById("unseen2")
        .style
        .display = "none";
}

timestampbtnclicknum = 0;
function clicktimestamp() {
    timestampbtnclicknum += 1;
    if (timestampbtnclicknum % 2 == 0) {
        document.getElementById("timestampbtn").title = "click to open timestamp";
        document.getElementById("timestampbtn").style.transform = "rotate(0deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-dark-pink)";

        document.getElementById("realtimestamp").style.display = "none";
    } else {
        document.getElementById("timestampbtn").title = "click to add new timestamp";
        document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";

        document.getElementById("realtimestamp").style.display = "block";
    }
}

document.getElementById('questionbtn').addEventListener('click', function () {
    timeStamp.push(document.getElementById("youtubeMP4").currentTime);
    console.log(timeStamp);
});

/* 버튼 클릭 이벤트 */
//document.getElementById('playbtn').addEventListener('click', toggleImgplay);
document.getElementById('startbtn').addEventListener('click', toggleImgstart);
//document.getElementById('codebtn').addEventListener('click', toggleImgcode);
document.getElementById('endbtn').addEventListener('click', toggleImgend);
document.getElementById('timestampbtn').addEventListener('click', clicktimestamp);

/* hover 클릭 이벤트 */
document.getElementById('questionbtn').addEventListener('mouseover', hoverdescription);
document.getElementById('questionbtn').addEventListener('mouseout', nohoverdescription);

/* 전체 캡쳐 */
function capture() {
    console.log("hicapture 함수");
    /*var scaleFactor = 1;
    var video = document.getElementById("youtubeMP4");
    //var w = document.getElementById("youtubeMP4").clientWidth * scaleFactor
    //var h = document.getElementById("youtubeMP4").clientHeight * scaleFactor
    //console.log(w, h);
    var canvas1 = document.createElement('canvas');
    canvas1.width = screen.availWidth;
    canvas1.height = screen.availHeight;
    var ctx = canvas1.getContext('2d');
    ctx.drawImage(video, 0, 0, screen.availWidth, screen.availHeight);
    canvas1.addEventListener("click", function () {
        window.open(this.toDataURL());
    });

    var el = document.getElementById("target");
    el.href = canvas1.toDataURL("image/jpeg");
    el.download = '파일명.jpg';
    el.click();*/
    
}

document.getElementById('codeExtractBtn').addEventListener('click', capture);

var timestampArea = document.getElementsByClassName('maketimestamp_note__area');
for (var i = 0; i < timestampArea.length; i++) {
    var eachArea = timestampArea[i];
    eachArea.addEventListener('click', function (e) {
        if (e.target == document.getElementById("realtimestamp")) {
            console.log("그낭지나감");
        }
        else {
            timeStampnum += 1;
            document.getElementById(String(timeStampnum)).style.display = "block";
            var now = document.getElementById("youtubeMP4").currentTime.toFixed();
            document.getElementById(String(timeStampnum)).title = transSectoTime(now);
            timeStamp.push(String(transSectoTime(now)));
            timeStamp.sort();
            console.log(timeStamp);
        }
    });
}

//1초단위
function transSectoTime(nowTime) {
    var hour = parseInt(nowTime / 3600);
    var minute = parseInt((nowTime - 3600 * hour) / 60);
    var second = nowTime - 3600 * hour - 60 * minute;
    return hour + ":" + minute + ":" + second;
}

for (var j = 1; j <= timeStampnum; j++) {
    document.getElementById(String(j)).addEventListener('click', function () {
        nowscr = document.getElementById('videoOne').src;
        document.getElementById('videoOne').src + "#" + t + "="[timeStamp[j - 1]];
        console.log("hihere");
    });
}