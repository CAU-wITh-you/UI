//client info에 저장
var color = "pink"

//각 videoinfo에 저장되어야 하는 변수
var timeStamp = [];
var timeStampnum = 0;
var startclicknum = 0
var language = null;

document.getElementById('exitbutton').addEventListener('click', exitfunc);
function exitfunc() {
    console.log("extension 종료");
}
document.getElementById("exitbutton__icon").addEventListener("mouseover", exitover);
function exitover() {
    console.log("hover");
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
    } else {
        document
            .getElementById("startbtn")
            .src = "buttons/startbutton2-" + color + ".png";
    }
}

var endclicknum = 0
function toggleImgend() {
    endclicknum += 1
    if (endclicknum % 2 == 0) {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton-" + color + ".png";
    } else {
        document
            .getElementById("endbtn")
            .src = "buttons/endbutton2-" + color + ".png";
    }
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


var clock = true;
document.getElementById("clockbtn").addEventListener('click', function () {
    console.log("클럭 버튼");
    clock = !clock;
    if (clock == true) {
        document.getElementById("clockbtn__icon").style.color = "var(--color-dark-pink)";
    }
    else {
        document.getElementById("clockbtn__icon").style.color = "whitesmoke";
    }
});
document.getElementById("codeplusbtn__title").addEventListener('click', function () {
    if (clock == true) {
        makeCodearea("");
    }
    else {
        nonemakeCodearea("");
    }
});
document.getElementById("textplusbtn__title").addEventListener('click', function () {
    if (clock == true) {
        makeTextarea("");
    }
    else {
        nonemakeTextarea("");
    }
});


var selectLanguage = false;
var selectLanguage = false;
document.getElementById("realselectionbtn").addEventListener('click', function () {
    console.log("enter");
    selectLanguage = !selectLanguage;
    if (selectLanguage == true) {
        document.getElementById("language__C").style.display = "block";
        document.getElementById("language__Cpp").style.display = "block";
        document.getElementById("language__C").addEventListener('click', function () {
            console.log("c언어 선택");
            selectLanguage = true;
            language = "C";
            document.getElementById("language__Cpp").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-pink)";
            this.style.borderRadius = "15px";
        });
        document.getElementById("language__Cpp").addEventListener('click', function () {
            console.log("cpp언어 선택");
            selectLanguage = true;
            language = "Cpp";
            document.getElementById("language__C").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-pink)";
            this.style.borderRadius = "15px";
        });

    }
    else {
        document.getElementById("language__C").style.display = "none";
        document.getElementById("language__Cpp").style.display = "none";
    }
});


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

var timestampOpen = false;

function clicktimestamp() {
    timestampOpen = !timestampOpen;
    if (timestampOpen == false) {
        document.getElementById("timestampbtn").title = "click to open timestamp";
        document.getElementById("timestampbtn").style.transform = "rotate(0deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-dark-pink)";

        document.getElementById("realtimestamp").style.display = "none";

        for (i = 1; i <= timestampNum; i++) {
            var carrot = document.getElementById('time'+i);
            if(carrot){
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
            var carrot = document.getElementById('time'+i);
            if(carrot){
                carrot.style.display = "block";
            }
        }
    }
}

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


document.getElementById("backbtn").addEventListener('click', function () {
    orderchange = false;
    clickdeletionbtn = false;
    sortableDisable();
});


var openedit = false;
var orderchange = false;
var clickdeletionbtn = false;

function changebutton() {
    openedit = !openedit
    if (openedit == false) {
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
document.getElementById("editbtn").addEventListener('click', changebutton());

//순서 바꾸는 함수
function orderchangefunc() {
    orderchange = !orderchange;
    if (orderchange == true) {
        if (clickdeletionbtn == true) {
            alert('휴지통 버튼을 해제하세요');
        }
        else {
            document.getElementById("sortbtn__icon").style.color = "var(--color-dark-pink)";
            console.log("sortable 진입");
            console.log(document.getElementById("sortable").childNodes);
            console.log(document.getElementById("realtimestamp").childNodes);
            sortableEnable();
        }
    }
    else {
        document.getElementById("sortbtn__icon").style.color = "whitesmoke";
        sortableDisable();
        console.log("sortable out");
        console.log(document.getElementById("sortable").childNodes);
        console.log(document.getElementById("realtimestamp").childNodes);
    }
}
document.getElementById("sortbtn").addEventListener('click', orderchangefunc);

//휴지통
function deletionfunc() {
    clickdeletionbtn = !clickdeletionbtn;
    console.log(clickdeletionbtn);
    if (clickdeletionbtn == true) {
        if (orderchange == true) {
            alert("순서바꿈 버튼을 해제하세요");
        }
        else {
            document.getElementById("deletebtn__icon").style.color = "var(--color-dark-pink)";
        }
    }
    else {
        document.getElementById("deletebtn__icon").style.color = "whitesmoke";
        console.log("clickdeletebtn");
    }
}

document.getElementById("deletebtn").addEventListener('click', deletionfunc);
document.getElementById("backbtn").addEventListener('click', function () {
    changebutton();
});


//1초단위
function transSectoTime(nowTime) {
    var hour = parseInt(nowTime / 3600);
    var minute = parseInt((nowTime - 3600 * hour) / 60);
    var second = nowTime - 3600 * hour - 60 * minute;
    return hour + ":" + minute + ":" + parseInt(second);
}

var cppEditor = CodeMirror.fromTextArea(document.getElementById("cpp-code"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    mode: "text/x-c++src",
    theme: "ambiance"
});
