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
        document.getElementById("realtimestamp").style.backgroundColor = "var(--color-pink)";
    }
}


var timestampNum = 0;

function makeCodearea(text) {
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var codeLi = document.createElement("li");
    codeLi.className = "ui-state-default";
    codeLi.style.backgroundColor = "var(--color-background-gray)";
    codeLi.id = timestampNum;
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
    codetext.id = "c-code" + timestampNum;
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
    console.log(document.getElementById(timestampNum).offsetHeight);
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
    nowcode = "c-code" + timestampNum;
    console.log(nowcode);
    console.log(typeof (nowcode));

    var cEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
        lineNumbers: true,
        matchBrackets: true,
        mode: "text/x-csrc",
        theme: "material-darker"
    });
    //return timestampNum;
}

function makeTextarea(text) {
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.value = currentTime;

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
    texttextDiv.innerHTML = text;

    textDiv.appendChild(texttextDiv);
    textLi.appendChild(textDiv);

    texttextDiv.addEventListener("input", function (e) {
        //texttextDiv.innerHTML = texttextDiv.innerHTML.replace(/\n\r?/g, '<br />');
        
        var thisId = e.target.id.slice(2, e.target.id.length);
        document.getElementById("c" + thisId).style.height = String(parseInt(document.getElementById("t1" + thisId).offsetHeight)+ "px");
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


document.getElementById("codeplusbtn__title").addEventListener('click', function () {
    makeCodearea("");
});
document.getElementById("textplusbtn__title").addEventListener('click', function () {
    makeTextarea("");
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

//순서 바꾸는 함수
var orderchange = false;
document.getElementById("sortbtn").addEventListener('click', function () {
    orderchange = !orderchange;
    if (orderchange == true) {
        sortableEnable();
    }
    else {
        sortableDisable();
    }
});
document.getElementById("backbtn").addEventListener('click', function () {
    orderchange = false;
    sortableDisable();
});

var openedit = false;
function changebutton() {
    openedit = !openedit
    if (openedit == false) {
        document.getElementById("capturebtn").style.display = "none";
        document.getElementById("clockbtn").style.display = "none";
        document.getElementById("editbtn").style.display = "none";
        document.getElementById("sortbtn").style.display = "flex";
        document.getElementById("deletebtn").style.display = "flex";
        document.getElementById("backbtn").style.display = "flex";
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
document.getElementById("backbtn").addEventListener('click', changebutton);

var cppEditor = CodeMirror.fromTextArea(document.getElementById("cpp-code"), {
    lineNumbers: true,
    matchBrackets: true,
    mode: "text/x-c++src",
    theme: "ambiance"
});
