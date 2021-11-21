//client info에 저장
var color = "pink"

//각 videoinfo에 저장되어야 하는 변수
var timeStamp = [];
var timeStampnum = 0;
var startclicknum = 0

function toggleImgstart() {
    startclicknum += 1;
    if (startclicknum % 2 == 0) {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton-" + color + ".png";
        //startTime = 0;
    } else {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton2-" + color + ".png";
        //startTime = document.getElementById("youtubeMP4").currentTime;
    }
    //console.log(startTime);
}

var endclicknum = 0
function toggleImgend() {
    endclicknum += 1
    if (endclicknum % 2 == 0) {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton-" + color + ".png";
        //endTime = 0;
    } else {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton2-" + color + ".png";
        //endTime = document.getElementById("youtubeMP4").currentTime;
    }
    //console.log(endTime);
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



/*document.getElementById('questionbtn').addEventListener('click', function () {
    timeStamp.push(document.getElementById("youtubeMP4").currentTime);
    console.log(timeStamp);
});*/

/* 버튼 클릭 이벤트 */
//document.getElementById('playbtn').addEventListener('click', toggleImgplay);
document.getElementById('startbtn').addEventListener('click', toggleImgstart);
//document.getElementById('codebtn').addEventListener('click', toggleImgcode);
document.getElementById('endbtn').addEventListener('click', toggleImgend);
document.getElementById('timestampbtn').addEventListener('click', clicktimestamp);
//document.querySelector("#extensions > div.extensions__right > div.note > div").addEventListener('click', clicktimestamp);

//<i class="fas fa-carrot fa-2x" id="1"></i>


//1초단위
function transSectoTime(nowTime) {
    var hour = parseInt(nowTime / 3600);
    var minute = parseInt((nowTime - 3600 * hour) / 60);
    var second = nowTime - 3600 * hour - 60 * minute;
    return hour + ":" + minute + ":" + parseInt(second);
}


var timestampOpen = false;

function clicktimestamp() {
    timestampOpen = !timestampOpen;
    if (!timestampOpen) {
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
        makeTimestamp(""); //열림
    }
}

var timestampNum = 0;

function makeTimestamp(text){
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textDiv = document.createElement("div");
    textDiv.id = timestampNum;
    var carrotText = document.createElement("div");
    carrotText.className = "divtext";
    carrotText.id = "t"+timestampNum;
    carrotText.style.backgroundColor = "#FFFFFF"
    carrotText.contentEditable = "true";
    carrotText.innerHTML = text;
    textDiv.value = currentTime;
    textDiv.appendChild(carrotText);

    carrotText.addEventListener("input", function(e) {
        var thisId = e.target.id.slice(1,e.target.id.length);
        document.getElementById("c"+thisId).style.height = String(document.getElementById("t"+thisId).offsetHeight)+"px";
        document.getElementById("c"+thisId).style.backgroundColor = "#f6c0c0";
    }, false);
    document.querySelector("#timestamptext").appendChild(textDiv);

    
    var div = document.createElement("div");
    //div.style.border = "1px solid blue";
    div.id = "c"+timestampNum;
    var carrot = document.createElement("i");
    console.log("carrot");
    carrot.className = "fas fa-carrot fa-2x";
    carrot.style.display="block";
    var now = transSectoTime(currentTime);
    carrot.title = now;
    carrot.value = currentTime;
    div.style.height = String(textDiv.offsetHeight)+"px";
    div.style.backgroundColor = "#f6c0c0"
    div.appendChild(carrot);
    document.querySelector("#realtimestamp").appendChild(div);

    carrot.addEventListener('click', function (e) {
        player.seekTo(e.target.value, true);
    });
    

    var d = $("#timestamptext");
    d.scrollTop(d.prop("scrollHeight"));

    (function() {
        $("#timestamptext").scroll(function() {
            //console.log("scrolling");
            //console.log($("#realtimestamp"));
            $("#realtimestamp").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
            $("#timestamp_area").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
        });
      })();
      
    return timestampNum;
}


/*var timestampArea = document.getElementsByClassName('maketimestamp_note__area');
for (var i = 0; i < timestampArea.length; i++) {
    var eachArea = timestampArea[i];
    eachArea.addEventListener('click', function (e) {
        if (e.target == document.getElementById("realtimestamp")) {
            console.log("그낭지나감");
        }
        else {
            timeStampnum += 1;
            document.getElementById(String(timeStampnum)).style.display = "block";
            var now = player.getCurrentTime();
            document.getElementById(String(timeStampnum)).title = transSectoTime(now);
            timeStamp.push(String(transSectoTime(now)));
            timeStamp.sort();
            console.log(timeStamp);
        }
    });
}*/


/*for (var j = 1; j <= timeStampnum; j++) {
    document.getElementById(String(j)).addEventListener('click', function () {
        nowscr = document.getElementById('videoOne').src;
        document.getElementById('videoOne').src + "#" + t + "="[timeStamp[j - 1]];
        console.log("hihere");
    });
}*/



/* hover 클릭 이벤트 */
//document.getElementById('questionbtn').addEventListener('mouseover', hoverdescription);
//document.getElementById('questionbtn').addEventListener('mouseout', nohoverdescription);

/* 전체 캡쳐 */
/*function capture() {
    console.log("hicapture 함수");
    var scaleFactor = 1;
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
    el.click();  
}*/

//document.getElementById('codeExtractBtn').addEventListener('click', capture);
