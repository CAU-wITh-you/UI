$(document).ready(function () {
    document.querySelector("#codeExtractBtn").addEventListener('click', function(e){
        var ch = canvas3.height = $("#youtubeMP4").height();
        var cw = canvas3.width = $("#youtubeMP4").width();
        var t = player.getCurrentTime();
        
        drawCanvas();
        if(started && ended && startTime <= endTime){
            if(confirm("현재 선택된 영역에서")+String(transSectoTime(startTime))+"부터"+String(transSectoTime(endTime))+"까지 코드를 추출하시겠습니까?"){
                var xhr = new XMLHttpRequest();
                var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, start_time: String(startTime), end_time: String(endTime), video_name: videoUid};
                console.log(data);
                document.getElementById("timestampbtn").title = "click to add new timestamp";
                document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
                document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
                document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";
        
                document.getElementById("realtimestamp").style.display = "block";
        
                var carrotId = makeCodearea("로딩중");
        
                xhr.open("POST", "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com:443/ocr/continuous", true);
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
                        document.querySelector(`#t1${carrotId} > divcodetext > div`).CodeMirror.setValue(result);
                        //alert(resp);
                    }
                }
                xhr.send(JSON.stringify(data));
            }
        }
        else{
            if(confirm("현재 선택된 영역에서")+String(transSectoTime(t))+"에 있는 코드를 추출하시겠습니까?"){
                var xhr = new XMLHttpRequest();
                var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, video_time: String(t), video_name: videoUid};
                console.log(data);
                document.getElementById("timestampbtn").title = "click to add new timestamp";
                document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
                document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
                document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";
        
                document.getElementById("realtimestamp").style.display = "block";
        
                var carrotId = makeCodearea("로딩중");
        
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
                        document.querySelector(`#t1${carrotId} > divcodetext > div`).CodeMirror.setValue(result);
                        //alert(resp);
                    }
                }
                xhr.send(JSON.stringify(data));
            }
        }

        
        
        //alert("x:"+String(x/cw)+" y:"+String(y/ch)+" w:"+String((w-x)/cw)+" h:"+String((h-y)/ch)
        //+"\ntime:"+String(player.getCurrentTime())
        //+"\nstart:"+String(startTime)+"/"+transSectoTime(startTime)
        //+"\nend:"+String(endTime)+"/"+transSectoTime(endTime));
        
    });


    /*document.querySelector("#capturebtn__icon").addEventListener('click', function(){
        var ch = canvas3.height = $("#youtubeMP4").height();
        var cw = canvas3.width = $("#youtubeMP4").width();
        var t = player.getCurrentTime();
        alert("x:"+String(x/cw)+" y:"+String(y/ch)+" w:"+String((w-x)/cw)+" h:"+String((h-y)/ch)
        +"\ntime:"+String(player.getCurrentTime()));
        drawCanvas();

        var xhr = new XMLHttpRequest();
        var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, video_time: String(t), video_name: videoUid};
        console.log(data);
        document.getElementById("timestampbtn").title = "click to add new timestamp";
        document.getElementById("timestampbtn").style.transform = "rotateY(180deg)";
        document.getElementById("timestampbtn").style.backgroundColor = "var(--color-dark-pink)";
        document.getElementById("timestampbtn__icon").style.color = "var(--color-pink)";

        document.getElementById("realtimestamp").style.display = "block";

        var carrotId = makeCodearea("로딩중");

        xhr.open("POST", "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com:443/ocr/only_capture", true);
        xhr.setRequestHeader('Content-Type', 'application/json'); 
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                // JSON.parse does not evaluate the attacker's scripts.
                console.log("capture response!");
                var resp = JSON.parse(xhr.responseText);
                //var result = resp.result.slice(1,resp.length);
                //var resp = xhr.responseText;
                console.log(resp);
                //console.log(result);
                //document.querySelector(`#t1${carrotId} > divcodetext > div`).CodeMirror.setValue(result);
                //alert(resp);
            }
        }
        xhr.send(JSON.stringify(data));
    });*/
    
});