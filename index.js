//client info에 저장
var color = "pink"

//각 videoinfo에 저장되어야 하는 변수
var timeStamp = [];
var timeStampnum = 0;
var startclicknum = 0
var language = null;

document.getElementById("exitbutton__icon").addEventListener("mouseover", function () {
    document.getElementById("exitbutton__icon").className = "fas fa-door-open";
    document.getElementById("exitbutton__icon").style.color = "var(--color-dark-pink)";
});
document.getElementById("exitbutton__icon").addEventListener("mouseout", function () {
    document.getElementById("exitbutton__icon").className = "fas fa-door-closed";
    document.getElementById("exitbutton__icon").style.color = "black";
});
document.getElementById("exitbutton__icon").addEventListener("onclick", function () {
    console.log("extension 종료");
});

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
// 언어 선택
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
        document.getElementById("realtimestamp").style.backgroundColor = "var(--color-pink)";
    }
}


var timestampNum = 0;

function makeCodearea(text) {
    if (language == null) {
        alert("언어를 선택하세요");
    }
    else {
        timestampNum++;
        var currentTime = player.getCurrentTime();

        var codeLi = document.createElement("li");
        codeLi.className = "ui-state-default";
        codeLi.style.backgroundColor = "var(--color-background-gray)";
        codeLi.id = "li" + timestampNum;
        codeLi.value = currentTime;

        var codeDiv = document.createElement("div");
        codeDiv.className = "divcode";
        codeDiv.id = "t1" + timestampNum;
        codeDiv.style.backgroundColor = "var(--color-background-gray)";
        codeDiv.style.width = "99%";

        var runbtnSpan = document.createElement("span");
        runbtnSpan.id = "divcode__run";
        var runbtnI = document.createElement("i");
        runbtnI.className = "far fa-play-circle";
        runbtnI.id = "runbtn";
        runbtnI.style.fontSize = "20px";
        runbtnI.style.color = "whitesmoke";
        runbtnSpan.appendChild(runbtnI);

        var codetextDiv = document.createElement("divcodetext");
        codetextDiv.style.width = "100%";
        codetextDiv.style.height = "100%";

        codetext = document.createElement("textarea");
        if (language == "C") {
            codetext.id = "c-code" + timestampNum;
        }
        else if (language == "Cpp") {
            codetext.id = "cpp-code" + timestampNum;
        }
        codetext.style.width = "90%";

        codetextDiv.appendChild(codetext);
        var resultDiv = document.createElement("div");
        resultDiv.id = "t2" + timestampNum;
        resultDiv.className = "divresult";
        resultDiv.style.display = "block";
        resultDiv.style.width = "100%";
        resultDiv.style.height = "20px";
        resultDiv.style.backgroundColor = "gray";
        resultDiv.style.color = "whitesmoke";
        resultDiv.innerText = "  [OUTPUT] : ";
        resultDiv.style.textAlign = "left";
        resultDiv.style.fontFamily = 'Malgun Gothic';
        resultDiv.style.fontSize = "15px";
        resultDiv.style.verticalAlign = "middle";

        codeDiv.appendChild(runbtnSpan);
        codeDiv.appendChild(codetextDiv);
        codeLi.appendChild(codeDiv);
        codeLi.appendChild(resultDiv);

        codetext.addEventListener("input", function (e) {
            console.log(e.target.id);
            var thisId = e.target.id.slice(5, e.target.id.length);
            document.getElementById("c" + thisId).style.height = String(integer(document.getElementById("t1" + thisId).offsetHeight) + integer(document.getElementById("t2" + thisId).offsetHeight) + "px");
            //document.getElementById("c" + thisId).style.backgroundColor = "#f6c0c0";
        }, false);

        document.querySelector("#sortable").appendChild(codeLi);


        var div = document.createElement("div");
        //div.style.border = "1px solid blue";
        div.id = "c" + timestampNum;
        var carrot = document.createElement("i");
        console.log("carrot");
        carrot.className = "fab fa-cuttlefish fa-2x";
        carrot.style.display = "block";
        var now = transSectoTime(currentTime);
        carrot.title = now;
        carrot.value = currentTime;
        console.log(document.getElementById("li" + timestampNum).offsetHeight);
        div.style.height = "330px";
        div.style.backgroundColor = "var(--color-pink)";
        div.appendChild(carrot);
        document.querySelector("#realtimestamp").appendChild(div);

        carrot.addEventListener('click', function (e) {
            player.seekTo(e.target.value, true);
        });

        var d = $("#sortable");
        d.scrollTop(d.prop("scrollHeight"));

        (function () {
            $("#sortable").scroll(function () {
                //console.log("scrolling");
                //console.log($("#realtimestamp"));
                $("#realtimestamp").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
                $("#timestamp_area").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
            });
        })();
        if (language == "C") {
            nowcode = "c-code" + timestampNum;
            console.log(nowcode);
            console.log(typeof (nowcode));
        }
        else if (language == "Cpp") {
            nowcode = "cpp-code" + timestampNum;
            console.log(nowcode);
            console.log(typeof (nowcode));
        }

        if (language == "C") {
            var cEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
                lineNumbers: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                mode: "text/x-csrc",
                theme: "material-darker"
            });
        }
        else if (language == "Cpp") {
            var cppEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
                lineNumbers: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                mode: "text/x-c++src",
                theme: "material-darker"
            });
        }
        document.querySelector(`#t1${timestampNum} > divcodetext > div`).CodeMirror.setValue(text);
        return timestampNum;
    }
}

function makeTextarea(text) {
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.value = currentTime;
    textLi.id = "li" + timestampNum;

    var textDiv = document.createElement("div");
    textDiv.className = "divtext";
    textDiv.style.backgroundColor = "var(--color-background-gray)";
    textDiv.style.width = "-webkit-fill-available";
    textDiv.style.border = "1px solid var(--color-background-gray)";
    textDiv.style.paddingBottom = "0px";
    textDiv.style.paddingLeft = "34px";

    var texttextDiv = document.createElement("div");
    texttextDiv.className = "divtexttext"
    texttextDiv.contentEditable = "true";
    texttextDiv.id = "t1" + timestampNum;
    texttextDiv.style.display = "flex";
    texttextDiv.style.backgroundColor = "black";
    texttextDiv.style.width = "100%";
    texttextDiv.style.border = "3px solid black";
    texttextDiv.style.border = "0px";
    texttextDiv.style.color = "whitesmoke";
    texttextDiv.style.textAlign = "left";
    texttextDiv.style.verticalAlign = "middle";
    texttextDiv.style.fontFamily = 'Malgun Gothic';
    texttextDiv.style.fontSize = "15px";
    texttextDiv.style.overflow = "hidden";
    texttextDiv.style.wordBreak = "break-all";
    texttextDiv.style.display = "inline-block";
    texttextDiv.style.whiteSpace = "pre-wrap";
    texttextDiv.innerHTML = text;

    textDiv.appendChild(texttextDiv);
    textLi.appendChild(textDiv);

    texttextDiv.addEventListener("input", function (e) {
        var thisId = e.target.id.slice(2, e.target.id.length);
        document.getElementById("c" + thisId).style.height = String(parseInt(document.getElementById("t1" + thisId).offsetHeight) + 10 + "px");
        //document.getElementById("c" + thisId).style.backgroundColor = "#f6c0c0";
    }, false);

    document.querySelector("#sortable").appendChild(textLi);


    var div = document.createElement("div");
    //div.style.border = "1px solid blue";
    div.id = "c" + timestampNum;
    var carrot = document.createElement("i");
    console.log("carrot");
    carrot.className = "fas fa-tenge fa-2x";
    carrot.style.display = "block";
    var now = transSectoTime(currentTime);
    carrot.title = now;
    carrot.value = currentTime;
    div.style.height = String(textLi.offsetHeight) + "px";
    div.style.backgroundColor = "var(--color-pink)";
    div.appendChild(carrot);
    document.querySelector("#realtimestamp").appendChild(div);

    carrot.addEventListener('click', function (e) {
        player.seekTo(e.target.value, true);
    });

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    (function () {
        $("#sortable").scroll(function () {
            //console.log("scrolling");
            //console.log($("#realtimestamp"));
            $("#realtimestamp").prop("scrollTop", this.scrollTop)
                .prop("scrollLeft", this.scrollLeft);
            $("#timestamp_area").prop("scrollTop", this.scrollTop)
                .prop("scrollLeft", this.scrollLeft);
        });
    })();

    //return timestampNum;
}

var clock = false;
document.getElementById("clockbtn").addEventListener('click', function () {
    console.log("클럭 버튼");
    clock = !clock;
    if (clock == true) {
        document.getElementById("clockbtn__icon").style.color = "var(--color-dark-pink)";
    }
    else {
        document.getElementById("clockbtn__icon").style.color = "whitesmoke";
    }
})


function nonemakeCodearea(text) {
    if (language == null) {
        alert("언어를 선택하세요");
    }
    else {
        timestampNum++;
        var currentTime = player.getCurrentTime();

        var codeLi = document.createElement("li");
        codeLi.className = "ui-state-default";
        codeLi.style.backgroundColor = "var(--color-background-gray)";
        codeLi.id = "li" + timestampNum;
        codeLi.value = currentTime;

        var codeDiv = document.createElement("div");
        codeDiv.className = "divcode";
        codeDiv.id = "t1" + timestampNum;
        codeDiv.style.backgroundColor = "var(--color-background-gray)";
        codeDiv.style.width = "99%";

        var runbtnSpan = document.createElement("span");
        runbtnSpan.id = "divcode__run";
        var runbtnI = document.createElement("i");
        runbtnI.className = "far fa-play-circle";
        runbtnI.id = "runbtn";
        runbtnI.style.fontSize = "20px";
        runbtnI.style.color = "whitesmoke";
        runbtnSpan.appendChild(runbtnI);

        var codetextDiv = document.createElement("divcodetext");
        codetextDiv.style.width = "100%";
        codetextDiv.style.height = "100%";

        codetext = document.createElement("textarea");
        if (language == "C") {
            codetext.id = "c-code" + timestampNum;
        }
        else if (language == "Cpp") {
            codetext.id = "cpp-code" + timestampNum;
        }
        codetext.style.width = "90%";

        codetextDiv.appendChild(codetext);
        var resultDiv = document.createElement("div");
        resultDiv.id = "t2" + timestampNum;
        resultDiv.className = "divresult";
        resultDiv.style.display = "block";
        resultDiv.style.width = "100%";
        resultDiv.style.height = "20px";
        resultDiv.style.backgroundColor = "gray";
        resultDiv.style.color = "whitesmoke";
        resultDiv.innerText = "  [OUTPUT] : ";
        resultDiv.style.textAlign = "left";
        resultDiv.style.fontFamily = 'Malgun Gothic';
        resultDiv.style.fontSize = "15px";
        resultDiv.style.verticalAlign = "middle";

        codeDiv.appendChild(runbtnSpan);
        codeDiv.appendChild(codetextDiv);
        codeLi.appendChild(codeDiv);
        codeLi.appendChild(resultDiv);

        codetext.addEventListener("input", function (e) {
            console.log(e.target.id);
            var thisId = e.target.id.slice(5, e.target.id.length);
            document.getElementById("c" + thisId).style.height = String(integer(document.getElementById("t1" + thisId).offsetHeight) + integer(document.getElementById("t2" + thisId).offsetHeight) + "px");
            //document.getElementById("c" + thisId).style.backgroundColor = "#f6c0c0";
        }, false);

        document.querySelector("#sortable").appendChild(codeLi);

        var d = $("#sortable");
        d.scrollTop(d.prop("scrollHeight"));

        (function () {
            $("#sortable").scroll(function () {
                //console.log("scrolling");
                //console.log($("#realtimestamp"));
                $("#realtimestamp").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
                $("#timestamp_area").prop("scrollTop", this.scrollTop)
                    .prop("scrollLeft", this.scrollLeft);
            });
        })();
        if (language == "C") {
            nowcode = "c-code" + timestampNum;
            console.log(nowcode);
            console.log(typeof (nowcode));
        }
        else if (language == "Cpp") {
            nowcode = "cpp-code" + timestampNum;
            console.log(nowcode);
            console.log(typeof (nowcode));
        }

        if (language == "C") {
            var cEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
                lineNumbers: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                mode: "text/x-csrc",
                theme: "material-darker"
            });
        }
        else if (language == "Cpp") {
            var cppEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
                lineNumbers: true,
                matchBrackets: true,
                autoCloseBrackets: true,
                mode: "text/x-c++src",
                theme: "material-darker"
            });
        }
        document.querySelector(`#t1${timestampNum} > divcodetext > div`).CodeMirror.setValue(text);
        return timestampNum;
    }
}

function nonemakeTextarea(text) {
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.value = currentTime;
    textLi.id = "li" + timestampNum;

    var textDiv = document.createElement("div");
    textDiv.className = "divtext";
    textDiv.style.backgroundColor = "var(--color-background-gray)";
    textDiv.style.width = "-webkit-fill-available";
    textDiv.style.border = "1px solid var(--color-background-gray)";
    textDiv.style.paddingBottom = "0px";
    textDiv.style.paddingLeft = "34px";

    var texttextDiv = document.createElement("div");
    texttextDiv.className = "divtexttext"
    texttextDiv.contentEditable = "true";
    texttextDiv.id = "t1" + timestampNum;
    texttextDiv.style.display = "flex";
    texttextDiv.style.backgroundColor = "black";
    texttextDiv.style.width = "100%";
    texttextDiv.style.border = "3px solid black";
    texttextDiv.style.border = "0px";
    texttextDiv.style.color = "whitesmoke";
    texttextDiv.style.textAlign = "left";
    texttextDiv.style.verticalAlign = "middle";
    texttextDiv.style.fontFamily = 'Malgun Gothic';
    texttextDiv.style.fontSize = "15px";
    texttextDiv.style.overflow = "hidden";
    texttextDiv.style.wordBreak = "break-all";
    texttextDiv.style.display = "inline-block";
    texttextDiv.style.whiteSpace = "pre-wrap";
    texttextDiv.innerHTML = text;

    textDiv.appendChild(texttextDiv);
    textLi.appendChild(textDiv);

    texttextDiv.addEventListener("input", function (e) {
        var thisId = e.target.id.slice(2, e.target.id.length);
        document.getElementById("c" + thisId).style.height = String(parseInt(document.getElementById("t1" + thisId).offsetHeight) + 10 + "px");
        //document.getElementById("c" + thisId).style.backgroundColor = "#f6c0c0";
    }, false);

    document.querySelector("#sortable").appendChild(textLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    (function () {
        $("#sortable").scroll(function () {
            //console.log("scrolling");
            //console.log($("#realtimestamp"));
            $("#realtimestamp").prop("scrollTop", this.scrollTop)
                .prop("scrollLeft", this.scrollLeft);
            $("#timestamp_area").prop("scrollTop", this.scrollTop)
                .prop("scrollLeft", this.scrollLeft);
        });
    })();

    //return timestampNum;
}

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
                    console.log("switch");
                    console.log(timeparent.childNodes[i + 2])
                    console.log(selectnode);

                    timeparent.childNodes[j + 2] = tempnode;
                    console.log(i);
                    console.log('다름');
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

document.getElementById("backbtn").addEventListener('click', function () {
    orderchange = false;
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
document.getElementById("editbtn").addEventListener('click', changebutton);

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
        updateTimestamp();
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
    if (clickdeletionbtn == true) {
        if (orderchange == true) {
            alert("순서바꿈 버튼을 해제하세요");
        }
        else {
            document.getElementById("deletebtn__icon").style.color = "var(--color-dark-pink)";
            for (i = 1; i <= timestampNum; i++) {
                document.getElementById("li" + i).addEventListener('click', function () {
                    var jbResult = confirm("정말삭제하시겠습니까?");
                    console.log(this);
                    console.log(this.childElementCount);
                    if (jbResult) {
                        console.log('delete');
                        var realparent = this.parentNode;
                        var parent = document.getElementById("realtimestamp");
                        console.log(parent.childNodes);
                        //var now = document.getElementById("c" + i);
                        this.remove();
                        var child = parent.removeChild(parent.childNodes[i]);
                        console.log(child);
                        //console.log(parent.childNodes);
                        //console.log(parent.childNodes[i + 2]);
                        //parent.removeChild(parent.childNodes[i + 2]);
                        //updatetextTime();
                        timestampNum -= 1;
                    }
                    else {
                        console.log('nodelete');
                        return;
                    }
                    i = timestampNum + 1;
                });
            }
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
