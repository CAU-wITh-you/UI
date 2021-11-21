$(document).ready(function () {
    document.querySelector("#codeExtractBtn").addEventListener('click', function(e){
        var ch = canvas3.height = $("#youtubeMP4").height();
        var cw = canvas3.width = $("#youtubeMP4").width();
        var t = player.getCurrentTime();
        alert("x:"+String(x/cw)+" y:"+String(y/ch)+" w:"+String((w-x)/cw)+" h:"+String((h-y)/ch)
        +"\ntime:"+String(player.getCurrentTime())
        +"\nstart:"+String(startTime)+"/"+transSectoTime(startTime)
        +"\nend:"+String(endTime)+"/"+transSectoTime(endTime));
        drawCanvas();

        var xhr = new XMLHttpRequest();
        var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, video_time: t, video_name: videoUid};
        console.log(data);
        document.getElementById("timestampbtn").title = "click to add new timestamp";
        document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";

        document.getElementById("realtimestamp").style.display = "block";

        var carrotId = makeTimestamp("로딩중");

        xhr.open("POST", "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com:443/ocr", true);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                console.log("capture response!");
                var resp = JSON.parse(xhr.responseText);
                var result = resp.result.slice(1,resp.length);
                //var resp = xhr.responseText;
                console.log(resp);
                console.log(result);
                document.getElementById("t"+carrotId).style.fontFamily = "Arial";
                document.getElementById("t"+carrotId).style.fontSize = "14px";
                document.getElementById("t"+carrotId).style.whiteSpace = "pre";
                document.getElementById("t"+carrotId).innerText = result;
                var img = document.createElement("img");
                img.src = resp.img_url;
                img.id = "i"+carrotId;
                img.style.height = "250px";
                document.getElementById(carrotId).appendChild(img);
                console.log(document.getElementById("i"+carrotId).height);
                document.getElementById("c"+carrotId).style.height = String(document.getElementById("t"+carrotId).offsetHeight + 250)+"px";
                document.getElementById("c"+carrotId).style.backgroundColor = "#f6c0c0";
                
                document.getElementById("i"+carrotId).addEventListener('click', function () {
                    console.log("click");
                    player.seekTo(document.getElementById(carrotId).title, true);
                });

                var d = $("#timestamptext");
                d.scrollTop(d.prop("scrollHeight"));
                //alert(resp);
            }
        }
        xhr.send(JSON.stringify(data));
    });
});