/*var timestampOpen = false;

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
        makeTimestampCode(""); //열림
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
    textDiv.title = currentTime;
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
}*/

/*function makeTimestampCode(text){
    timestampNum++;
    var currentTime = player.getCurrentTime();

    var textDiv = document.createElement("div");
    textDiv.id = timestampNum;
    var pre = document.createElement("pre");
    pre.className = "divtext";
    pre.style.margin = "0";
    pre.id = "t"+timestampNum;
    var carrotText = document.createElement("code");
    carrotText.id = "h"+timestampNum;
    carrotText.className = "c++ editor";
    carrotText.contentEditable = "true";
    carrotText.style.fontFamily = "Arial";
    carrotText.style.fontSize = "14px";
    carrotText.style.whiteSpace = "pre";
    carrotText.innerHTML = text;
    textDiv.title = currentTime;
    pre.appendChild(carrotText);
    textDiv.appendChild(pre);

    carrotText.addEventListener("input", function(e) {
        var thisId = e.target.id.slice(1,e.target.id.length);
        document.getElementById("c"+thisId).style.height = String(document.getElementById(thisId).offsetHeight)+"px";
        document.getElementById("c"+thisId).style.backgroundColor = "#f6c0c0";
    }, false);
    document.querySelector("#timestamptext").appendChild(textDiv);


    var div = document.createElement("div");
    //div.style.border = "1px solid blue";
    div.id = "c"+timestampNum;
    var carrot = document.createElement("i");
    console.log("carrot");
    carrot.className = "fas fa-copyright fa-2x";
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
}*/