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
    codeLi.value = currentTime;

    var codeDiv = document.createElement("div");
    codeDiv.className = "divcode";
    codeDiv.id = "t1" + timestampNum;
    codeDiv.style.backgroundColor = "var(--color-background-gray)";
    codeDiv.style.width = "98%";

    var runbtnSpan = document.createElement("span");
    runbtnSpan.id = "divcode__run";
    var runbtnI = document.createElement("i");
    runbtnI.className = "far fa-play-circle";
    runbtnI.id = "runbtn";
    runbtnI.style.fontSize = "25px";
    runbtnI.style.color = "whitesmoke";
    runbtnSpan.appendChild(runbtnI);

    var codetextDiv = document.createElement("divcodetext");
    codetextDiv.style.display = "flex";
    codetextDiv.style.backgroundColor = "black";
    codetextDiv.style.width = "100%";
    codetextDiv.style.border = "3px solid black";
    codetextDiv.style.border = "0px";
    codetextDiv.style.color = "whitesmoke";
    codetextDiv.style.textAlign = "left";
    codetextDiv.style.verticalAlign = "middle";
    codetextDiv.style.fontFamily = 'Malgun Gothic';
    codetextDiv.style.fontSize = "15px";
    codetextDiv.contentEditable = "true";
    codetextDiv.innerHTML = text;

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

    codetextDiv.addEventListener("input", function (e) {
        var thisId = e.target.id.slice(1, e.target.id.length);
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
    carrot.style.marginTop = "15px";
    var now = transSectoTime(currentTime);
    carrot.title = now;
    carrot.value = currentTime;
    div.style.height = String(codeLi.offsetHeight) + "px";
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

function makeTextarea(text) {
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.value = currentTime;

    var textDiv = document.createElement("div");
    textDiv.className = "divtext";
    textDiv.id = "t1" + timestampNum;
    textDiv.style.backgroundColor = "var(--color-background-gray)";
    textDiv.style.width = "98%";
    textDiv.style.border = "1px solid var(--color-background-gray)";

    var savebtnSpan = document.createElement("span");
    savebtnSpan.id = "divtext__save";
    var savebtnI = document.createElement("i");
    savebtnI.id = "savebtn";
    savebtnI.className = "far fa-save";
    savebtnI.style.fontSize = "25px";
    savebtnI.style.color = "whitesmoke";
    savebtnI.id = "t3" + timestampNum;
    savebtnSpan.appendChild(savebtnI);

    var texttextDiv = document.createElement("divtexttext");
    texttextDiv.contentEditable = "true";
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
    texttextDiv.innerHTML = text;


    textDiv.appendChild(savebtnSpan);
    textDiv.appendChild(texttextDiv);
    textLi.appendChild(textDiv);

    texttextDiv.addEventListener("input", function (e) {
        texttextDiv.innerHTML = texttextDiv.innerHTML.replace(/\n\r?/g, '<br />');
        var thisId = e.target.id.slice(1, e.target.id.length);
        //console.log(String(integer(document.getElementById("t3" + thisId).offsetHeight) + "px"));
        //console.log(String(integer(document.getElementById("t3" + thisId).clientHeight) + "px"));
        //console.log(String(integer(document.getElementById("t3" + thisId).height) + "px"));
        document.getElementById("c" + thisId).style.height = String(integer(document.getElementById("t1" + thisId).offsetHeight) - 10 + "px");
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
    carrot.style.marginTop = "15px";
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

//순서 바꾸는 함수
var orderchange = false;
document.getElementById("questionbtn").addEventListener('click', function () {
    orderchange = !orderchange;
    if (orderchange == false) {
        $("#sortable").sortable();
    }
    else {
        $("#sortable").sortable("disable");
    }
});

document.getElementById("runbtn").addEventListener("click", function () {
    document.getElementById("runbtn").style.color = "var(--color-dark-pink)";
});

document.getElementById("runbtn").addEventListener("mouseover", function () {
    document.getElementById("savebtn").style.color = "var(--color-dark-pink)";
});