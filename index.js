//client info에 저장
var color = "pink"

//각 videoinfo에 저장되어야 하는 변수
var timeStamp = [];
var timeStampnum = 0;
var startclicknum = 0

var server1 = "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com"
var server2 = "https://capstoneocr.com"
var server = server2

document.getElementById('exitbutton').addEventListener('click', exitfunc);
function exitfunc() {
    console.log("extension 종료");
    saveNote(user_email);
    if(confirm("doIT yourself를 종료하시겠습니까?")){
        if(!videoUid){
            var xhr = new XMLHttpRequest();
            var data = {url: videoUrl};
            console.log(data);

            chrome.runtime.sendMessage({sendBack:true, data:"test data"});
            /*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
                console.log(response.farewell);
                document.querySelector('#withYou').style.display = "none";
                document.querySelector('#withYou').style.pointerEvents = "none";
            });*/
        }
        else{
            var xhr = new XMLHttpRequest();
            var data = {video_name: videoUid};
            console.log(data);
            console.log(document.querySelector('#withYou'));
            document.querySelector('#withYou').style.display = "none";
            document.querySelector('#withYou').style.pointerEvents = "none";
            //parent.postMessage('closeIframe', '*');
            //chrome.runtime.sendMessage({sendBack:true, data:"test data"});
            /*if(document.querySelector('#withYou')){
                var html = document.querySelector('#columnHtml').innerHtml;
                document.querySelector('#withYou').innerHTML = html;
                //document.querySelector('#withYou').remove();
            }
            window.open('','_self').close(); 
            //localStorage.clear();
            //window.history.forward(2);*/
            xhr.open("DELETE", server + "/mdelete/vid", true);
            xhr.setRequestHeader('Content-Type', 'application/json'); 
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // JSON.parse does not evaluate the attacker's scripts.
                    console.log("response!");
                }
            }
        }
    }
}

document.getElementById("exitbutton__icon").addEventListener("mouseover", exitover);
function exitover() {
    //console.log("hover");
    document.getElementById("exitbutton__icon").className = "fas fa-door-open";
    document.getElementById("exitbutton__icon").style.color = "var(--color-dark-pink)";
}
document.getElementById("exitbutton__icon").addEventListener("mouseout", exitout);
function exitout() {
    console.log("out");
    document.getElementById("exitbutton__icon").className = "fas fa-door-closed";
    document.getElementById("exitbutton__icon").style.color = "black";
}

function toggleImgstart() {
    startclicknum += 1;
    if (startclicknum % 2 == 0) {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton-" + color + ".png";
        started = false;
        startTime = 0;
    } else {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton2-" + color + ".png";
        started = true;
        startTime = player.getCurrentTime();
    }
    drawTimecanvas();
    //console.log(startTime);
}

var endclicknum = 0
function toggleImgend() {
    endclicknum += 1
    if (endclicknum % 2 == 0) {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton-" + color + ".png";
        ended = false;
        endTime = 0;
    } else {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton2-" + color + ".png";
        ended = true;
        endTime = player.getCurrentTime();
    }
    drawTimecanvas();
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

function clicktimestamp() {
    timestampOpen = !timestampOpen;
    if (timestampOpen == false) {
        document.getElementById("timestampbtn").title = "click to open timestamp";
        document.getElementById("timestampbtn").style.transform = "rotate(0deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-dark-pink)";

        document.getElementById("realtimestamp").style.display = "none";

        for (i = 1; i <= timestampNum; i++) {
            var carrot = document.getElementById('time' + i);
            if (carrot) {
                carrot.style.display = "none";
            }
        }
    } else {
        document.getElementById("timestampbtn").title = "click to add new timestamp";
        document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";

        document.getElementById("realtimestamp").style.display = "block";
        document.getElementById("realtimestamp").style.backgroundColor = "var(--color-pink)";
        for (i = 1; i <= timestampNum; i++) {
            var carrot = document.getElementById('time' + i);
            if (carrot) {
                carrot.style.display = "block";
            }
        }
    }
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


var timestampOpen = false;
var openedit = false;
var orderchange = false;
var clickdeletionbtn = false;
var clock = true;

function sortableEnable() {
    $("ul").sortable();
    $("ul").sortable("option", "disabled", false);
    $("li").attr("contentEditable", "false");
    $("li").css("cursor", "move");
}

function sortableDisable() {
    $("ul").sortable("disable");
    $("li").attr("contentEditable", "true");
    $("li").css("cursor", "default");
}

function setDefault(){
    if(orderchange == true){
        sortableDisable();
    }
    orderchange = false;
    document.getElementById("sortbtn__icon").style.color = "whitesmoke";
    clickdeletionbtn = false;
    document.getElementById("deletebtn__icon").style.color = "whitesmoke";
}

document.getElementById("clockbtn__icon").style.color = "var(--color-dark-pink)";
document.getElementById("clockbtn").addEventListener('click', function () {
    setDefault();
    clock = !clock;
    if (clock == true) {
        document.getElementById("clockbtn__icon").style.color = "var(--color-dark-pink)";
    }
    else {
        document.getElementById("clockbtn__icon").style.color = "whitesmoke";
    }
});

document.getElementById("codeplusbtn").addEventListener('click', function () {
    setDefault();
    if (clock == true) {
        makeCodearea("");
    }
    else {
        nonemakeCodearea("");
    }
});

document.querySelector("#textplusbtn").addEventListener('click', function () {
    setDefault();
    if (clock == true) {
        makeTextarea("");
    }
    else {
        nonemakeTextarea("");
    }
});

function updateTimestamp() {
    var textparent = document.getElementById("sortable");
    var timeparent = document.getElementById("realtimestamp");
    //timestamp 순서 조정
    for (i = 1; i <= timestampNum; i++) {
        var nowtimeid = timeparent.childNodes[i + 2].getAttribute("id");//"c"+i
        var textparentid = textparent.childNodes[i + 2].getAttribute("id");//"li"+i
        if (nowtimeid[1] == textparentid[2]) {
            console.log(i);
            console.log("같음");
        }
        else {
            var tempnode = timeparent.childNodes[i + 2];
            for (j = 1; j <= timestampNum; j++) {
                selectnode = timeparent.childNodes[j + 2];
                if (selectnode[1] == textparent[2]) {
                    timeparent.childNodes[i + 2] = selectnode;
                    timeparent.childNodes[j + 2] = tempnode;
                    break;
                }
            }
        }
        //간격 조정
        for (i = 1; i <= timestampNum; i++) {
            var nowtext = textparent.childNodes[i + 2];
            var nowtime = timeparent.childNodes[i + 2];
            if (nowtext.childElementCount == 1) {//텍스트영역
                nowtime.setAttribute("style", "height: " + String(nowtext.offsetHeight) + "px" + ";");
                console.log("텍스트 영역 정렬");
            }
            else if (nowtext.childElementCount == 2) {//코드영역
                nowtime.setAttribute("style", "height: 330px;");
                console.log("코드 영역 정렬");
            }
        }
        console.log(textparent.childNodes);
        console.log(timeparent.childNodes);

    }
}

document.getElementById("backbtn__icon").addEventListener('click', function () {
    changebutton();
    setDefault();
});

function changebutton() {
    console.log('openedit', openedit)
    openedit = !openedit
    console.log('openedit2', openedit)
    setDefault();
    if (openedit == true) {
        document.getElementById("capturebtn").style.display = "none";
        document.getElementById("clockbtn").style.display = "none";
        document.getElementById("editbtn").style.display = "none";
        document.getElementById("sortbtn").style.display = "flex";
        document.getElementById("deletebtn").style.display = "flex";
        document.getElementById("backbtn").style.display = "flex";
        document.getElementById("sortbtn__icon").style.color = "var(--color-dark-pink)";
        document.getElementById("sortbtn__icon").style.color = "whitesmoke";
        document.getElementById("deletebtn__icon").style.color = "whitesmoke";
        orderchange = false;
        clickdeletionbtn = false;
        //console.log('open');
    }
    else {
        document.getElementById("capturebtn").style.display = "flex";
        document.getElementById("clockbtn").style.display = "flex";
        document.getElementById("editbtn").style.display = "flex";
        document.getElementById("sortbtn").style.display = "none";
        document.getElementById("deletebtn").style.display = "none";
        document.getElementById("backbtn").style.display = "none";
        //console.log('close');
    }
}
document.getElementById("editbtn").addEventListener('click', changebutton);

//순서 바꾸는 함수
function orderchangefunc() {
    prev = orderchange
    setDefault();
    orderchange = !prev
    if (orderchange == true) {
        document.getElementById("sortbtn__icon").style.color = "var(--color-dark-pink)";
        console.log("sortable 진입");
        sortableEnable();    }
    else {
        document.getElementById("sortbtn__icon").style.color = "whitesmoke";
        sortableDisable();
        console.log("sortable out");
    }
}
document.getElementById("sortbtn").addEventListener('click', orderchangefunc);


//휴지통
function deletionfunc() {
    prev = clickdeletionbtn
    setDefault();
    clickdeletionbtn = !prev
    console.log(clickdeletionbtn);
    if (clickdeletionbtn == true) {
        document.getElementById("deletebtn__icon").style.color = "var(--color-dark-pink)";
    }
    else {
        document.getElementById("deletebtn__icon").style.color = "whitesmoke";
        console.log("clickdeletebtn");
    }
}

document.getElementById("deletebtn").addEventListener('click', deletionfunc);
