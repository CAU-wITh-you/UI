// 언어 선택
var selectLanguage = true;
var language = "cpp";

document.getElementById("language__Cpp").style.backgroundColor = "var(--color-dark-"+color+")";
document.getElementById("language__Cpp").style.borderRadius = "15px";

document.getElementById("realselectionbtn").addEventListener('click', function () {
    //console.log("enter");
    selectLanguage = !selectLanguage;
    if (selectLanguage == true) {
        document.getElementById("language__C").style.display = "block";
        document.getElementById("language__Cpp").style.display = "block";
        document.getElementById("language__python").style.display = "block";
        document.getElementById("language__C").addEventListener('click', function () {
            console.log("c언어 선택");
            selectLanguage = true;
            language = "c";
            document.getElementById("language__Cpp").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
            document.getElementById("language__python").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
        });
        document.getElementById("language__Cpp").addEventListener('click', function () {
            console.log("cpp언어 선택");
            selectLanguage = true;
            language = "cpp";
            document.getElementById("language__C").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
            document.getElementById("language__python").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
        });
        document.getElementById("language__python").addEventListener('click', function () {
            console.log("파이썬 선택");
            selectLanguage = true;
            language = "python3";
            document.getElementById("language__C").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
            document.getElementById("language__Cpp").style.backgroundColor = null;
            this.style.backgroundColor = "var(--color-dark-"+color+")";
            this.style.borderRadius = "15px";
        });

    }
    else {
        document.getElementById("language__C").style.display = "none";
        document.getElementById("language__Cpp").style.display = "none";
        document.getElementById("language__python").style.display = "none";
    }
});

//1초단위
function transSectoTime(nowTime) {
    var hour = parseInt(nowTime / 3600);
    var minute = parseInt((nowTime - 3600 * hour) / 60);
    var second = nowTime - 3600 * hour - 60 * minute;
    return hour + ":" + minute + ":" + parseInt(second);
}

function compile(carrotId) {

    var code = document.querySelector(`#t1${carrotId} > divcodetext > div`).CodeMirror.getValue();
    var input = document.querySelector(`#t3${carrotId}`).innerText;
    if(confirm("컴파일하시겠습니까?")){
        var xhr = new XMLHttpRequest();
        var data = {
            clientId: 'ee0532ecd7fd6bfdab3b8449e971ab28',
            clientSecret: 'e7888abe6f272c7b870d1574da29fe46a89855f84a600e238fef3b770bd12730',
            script: code,
            stdin: input,
            language: language,
            versionIndex: '4'
        };
        console.log(data);
    
        xhr.open("POST", "https://api.jdoodle.com/v1/execute", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                console.log("compile response!");
                var resp = JSON.parse(xhr.responseText);
                //var result = resp.result.slice(1,resp.length);
                //var resp = xhr.responseText;
                console.log(resp);
                //console.log(result);
                document.querySelector(`#t2${carrotId}`).innerText = '  [OUTPUT] : ' + resp.output;
                //alert(resp);
            }
        }
        xhr.send(JSON.stringify(data));
    }
}

var timestampNum = 0;
function createTextDiv(text) {
    var textDiv = document.createElement("div");
    textDiv.className = "divtext";
    textDiv.contentEditable = "false";
    textDiv.style.backgroundColor = "var(--color-background-gray)";
    textDiv.style.width = "-webkit-fill-available";
    textDiv.style.border = "1px solid var(--color-background-gray)";
    textDiv.style.paddingBottom = "0px";
    //textDiv.style.paddingLeft = "34px";
    textDiv.style.marginLeft = "35px";

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
    texttextDiv.style.padding = "5px";
    texttextDiv.style.marginBottom = "5px";
    texttextDiv.innerHTML = text;

    texttextDiv.addEventListener('input', function(){
        saveNote();
    })

    textDiv.appendChild(texttextDiv);
    
    return textDiv
}

function createCarrot(currentTime){
    var carrot = document.createElement("i");
    carrot.className = "fas fa-tenge fa-2x";
    carrot.id = "time" + timestampNum;
    carrot.style.float = "left";
    carrot.style.marginTop = "15px";
    carrot.style.marginLeft = "5px";
    if (timestampOpen == false) carrot.style.display = "none";

    var now = transSectoTime(currentTime);
    carrot.title = now;
    carrot.value = currentTime;
    
    carrot.addEventListener('click', function (e) {
        player.seekTo(e.target.value, true);
    });
    return carrot
}

function createInputDiv(timestampNum){
    var inputDiv = document.createElement("div");
    inputDiv.className = "divtexttext"
    inputDiv.contentEditable = "true";
    inputDiv.id = "t3" + timestampNum;
    inputDiv.style.display = "flex";
    inputDiv.style.backgroundColor = "black";
    inputDiv.style.width = "100%";
    inputDiv.style.border = "3px solid black";
    inputDiv.style.border = "0px";
    inputDiv.style.color = "whitesmoke";
    inputDiv.style.textAlign = "left";
    inputDiv.style.verticalAlign = "middle";
    inputDiv.style.fontFamily = 'Malgun Gothic';
    inputDiv.style.fontSize = "15px";
    inputDiv.style.overflow = "hidden";
    inputDiv.style.wordBreak = "break-all";
    inputDiv.style.display = "inline-block";
    inputDiv.style.whiteSpace = "pre-wrap";
    inputDiv.style.marginLeft = "40px";
    inputDiv.style.marginTop = "5px";
    inputDiv.style.marginBottom = "5px";
    inputDiv.style.padding = "5px";

    return inputDiv
}

function createCodeDiv(timestampNum){
    var codeDiv = document.createElement("div");
    codeDiv.className = "divcode";
    codeDiv.contentEditable = "false";
    codeDiv.id = "t1" + timestampNum;
    codeDiv.style.backgroundColor = "var(--color-background-gray)";
    codeDiv.style.marginLeft = "35px";

    var runbtnSpan = document.createElement("span");
    runbtnSpan.id = "divcode__run";
    var runbtnI = document.createElement("i");
    runbtnI.className = "far fa-play-circle";
    runbtnI.id = "runbtn" + timestampNum;
    runbtnI.style.fontSize = "20px";
    runbtnI.style.color = "whitesmoke";
    runbtnSpan.appendChild(runbtnI);

    runbtnI.addEventListener('click', function (e) {
        console.log(e.target.id, e.target.id.slice(6, e.target.id.length));
        var thisId = e.target.id.slice(6, e.target.id.length);
        compile(thisId);
    });

    var codetextDiv = document.createElement("divcodetext");
    codetextDiv.style.width = "100%";
    codetextDiv.style.height = "100%";

    codetextDiv.addEventListener('input', function(){
        saveNote();
    })

    codetext = document.createElement("textarea");
    if (language == "c") {
        codetext.id = "c-code" + timestampNum;
    }
    else if (language == "cpp") {
        codetext.id = "cpp-code" + timestampNum;
    }
    else {
        codetext.id = "code" + timestampNum;
    }
    codetext.style.width = "90%";

    codetextDiv.appendChild(codetext);
    codeDiv.appendChild(runbtnSpan);
    codeDiv.appendChild(codetextDiv);

    return codeDiv
}

function createResultDiv(timestampNum){
    var resultDiv = document.createElement("div");
    resultDiv.id = "t2" + timestampNum;
    resultDiv.className = "divresult";
    resultDiv.style.display = "block";
    resultDiv.style.width = "100%";
    //resultDiv.style.height = "20px";
    resultDiv.style.backgroundColor = "gray";
    resultDiv.style.color = "whitesmoke";
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "  [OUTPUT] : ";
    resultDiv.style.textAlign = "left";
    resultDiv.style.fontFamily = 'Malgun Gothic';
    resultDiv.style.fontSize = "15px";
    resultDiv.style.verticalAlign = "middle";
    resultDiv.style.marginLeft = "40px";
    resultDiv.style.marginBottom = "5px";
    resultDiv.style.padding = "5px";
    resultDiv.contentEditable = "false";

    return resultDiv
}

function setCodeMirror(language, timestampNum, text){
    if (language == "c") {
        nowcode = "c-code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }
    else if (language == "cpp") {
        nowcode = "cpp-code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }
    else{
        nowcode = "code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }

    if (language == "c") {
        var cEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            mode: "text/x-csrc",
            theme: "darcula"
        });
    }
    else if (language == "cpp") {
        var cppEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            //autoCloseBrackets: true,
            mode: "text/x-c++src",
            theme: "darcula"
        });
    }
    else if (language == "python3") {
        var pythonEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            //autoCloseBrackets: true,
            mode: "text/x-python",
            theme: "darcula"
        });
    }

    document.querySelector(`#t1${timestampNum} > divcodetext > div`).CodeMirror.setValue(text);
}

function makeCodearea(text, time) {
    timestampNum++;
    var currentTime = 0; 
    if(time==0 || time){
        currentTime = time;
    }
    else{
        currentTime = player.getCurrentTime();
    }

    var codeLi = document.createElement("li");
    codeLi.className = "ui-state-default";
    //codeLi.style.backgroundColor = "var(--color-background-gray)";
    codeLi.id = "li" + timestampNum;
    codeLi.value = currentTime;

    var codeDiv = createCodeDiv(timestampNum);

    var resultDiv = createResultDiv(timestampNum);
    var inputDiv = createInputDiv(timestampNum);
    var carrot = createCarrot(timestampNum);
    carrot.className = "fab fa-cuttlefish fa-2x";

    codeLi.appendChild(carrot);
    codeLi.appendChild(codeDiv);
    codeLi.appendChild(inputDiv);
    codeLi.appendChild(resultDiv);


    document.querySelector("#sortable").appendChild(codeLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    codeLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말 삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    if (language == "c") {
        nowcode = "c-code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }
    else if (language == "cpp") {
        nowcode = "cpp-code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }
    else {
        nowcode = "code" + timestampNum;
        console.log(nowcode);
        console.log(typeof (nowcode));
    }

    if (language == "c") {
        var cEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            mode: "text/x-csrc",
            theme: "darcula"
        });
    }
    else if (language == "cpp") {
        var cppEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            //autoCloseBrackets: true,
            mode: "text/x-c++src",
            theme: "darcula"
        });
    }
    else if (language == "python3") {
        var pythonEditor = CodeMirror.fromTextArea(document.getElementById(nowcode), {
            lineNumbers: true,
            matchBrackets: true,
            //autoCloseBrackets: true,
            mode: "text/x-python",
            theme: "darcula"
        });
    }
    document.querySelector(`#t1${timestampNum} > divcodetext > div`).CodeMirror.setValue(text);
    return timestampNum;
}

function makeTextarea(text, time) {
    timestampNum++;
    var currentTime = 0; 
    if(time==0 || time){
        currentTime = time;
    }
    else{
        currentTime = player.getCurrentTime();
    }

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    //textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.value = currentTime;
    textLi.id = "li" + timestampNum;

    var textDiv = createTextDiv(text)
    var carrot = createCarrot(time)

    textLi.appendChild(carrot);
    textLi.appendChild(textDiv);

    document.querySelector("#sortable").appendChild(textLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    textLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말 삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    return timestampNum;
}

function makeImgarea(url, time) {
    timestampNum++;
    var currentTime = 0; 
    if(time==0 || time){
        currentTime = time;
    }
    else{
        currentTime = player.getCurrentTime();
    }
    var imgLi = document.createElement("li");
    imgLi.className = "ui-state-default";
    //imgLi.style.backgroundColor = "var(--color-background-gray)";
    imgLi.id = "li" + timestampNum;
    imgLi.value = currentTime;

    var imgDiv = document.createElement("div");
    imgDiv.className = "divimg";
    imgDiv.contentEditable = "false";
    imgDiv.id = "i" + timestampNum;
    imgDiv.url = url;
    imgDiv.style.backgroundColor = "var(--color-background-gray)";
    imgDiv.style.marginLeft = "35px";

    var img = document.createElement("img");
    img.src = url;
    img.id = "i" + timestampNum;
    img.style.width = "100%";

    imgDiv.appendChild(img);
    
    var carrot = createCarrot(currentTime)
    carrot.className = "fas fa-file-image fa-2x";
    imgLi.appendChild(carrot);
    imgLi.appendChild(imgDiv);

    document.querySelector("#sortable").appendChild(imgLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    imgLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말 삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    return timestampNum;
}

function nonemakeCodearea(text) {
    timestampNum++;

    var codeLi = document.createElement("li");
    codeLi.className = "ui-state-default";
    //codeLi.style.backgroundColor = "var(--color-background-gray)";
    codeLi.id = "li" + timestampNum;
    codeLi.value = -1

    var codeDiv = createCodeDiv(timestampNum)
    var resultDiv = createResultDiv(timestampNum)
    var inputDiv = createInputDiv(timestampNum)

    codeLi.appendChild(codeDiv);
    codeLi.appendChild(inputDiv);
    codeLi.appendChild(resultDiv);

    document.querySelector("#sortable").appendChild(codeLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    codeLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말 삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    setCodeMirror(language, timestampNum, text)
    return timestampNum;
}

function nonemakeTextarea(text) {
    timestampNum++;

    var textLi = document.createElement("li");
    textLi.className = "ui-state-default";
    //textLi.style.backgroundColor = "var(--color-background-gray)";
    textLi.id = "li" + timestampNum;
    textLi.value = -1

    var textDiv = createTextDiv(text)
    textLi.appendChild(textDiv);

    document.querySelector("#sortable").appendChild(textLi);

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    textLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    return timestampNum;
}

function nonemakeImgarea(url) {
    timestampNum++;

    var imgLi = document.createElement("li");
    imgLi.className = "ui-state-default";
    //imgLi.style.backgroundColor = "var(--color-background-gray)";
    imgLi.id = "li" + timestampNum;
    imgLi.value = -1

    var imgDiv = document.createElement("div");
    imgDiv.className = "divimg";
    imgDiv.contentEditable = "false";
    imgDiv.id = "i" + timestampNum;
    imgDiv.url = url;
    imgDiv.style.backgroundColor = "var(--color-background-gray)";
    imgDiv.style.marginLeft = "35px";

    var img = document.createElement("img");
    img.src = url;
    img.id = "i" + timestampNum;
    img.style.width = "100%";

    imgDiv.appendChild(img);
    imgLi.appendChild(imgDiv);

    document.querySelector("#sortable").appendChild(imgLi);

    carrot.addEventListener('click', function (e) {
        player.seekTo(e.target.value, true);
    });

    var d = $("#sortable");
    d.scrollTop(d.prop("scrollHeight"));

    imgLi.addEventListener('click', function (e) {
        if (clickdeletionbtn) {
            var jbResult = confirm("정말 삭제하시겠습니까?");
            console.log(e.target.id)
            console.log(this);
            console.log(this.childElementCount);
            if (jbResult) {
                console.log('delete');
                this.remove();
            }
            else {
                console.log('nodelete');
                return;
            }
        }
    });

    return timestampNum;
}

