var server1 = "https://ec2-18-117-151-129.us-east-2.compute.amazonaws.com"
var server2 = "https://capstoneocr.com"
var server = server2

$(document).ready(function () {
    document.querySelector("#codeExtractBtn").addEventListener('click', function(e){
        var ch = canvas3.height = $("#youtubeMP4").height();
        var cw = canvas3.width = $("#youtubeMP4").width();
        var t = player.getCurrentTime();
        
        drawCanvas();
        if(!videoUid){
            alert("video mp4다운로드가 완료되지 않았습니다. 조금만 기다려주세요!");
        }
        else if(started && ended && startTime <= endTime){
            if(confirm("현재 선택된 영역에서 "+String(transSectoTime(startTime))+"부터"+String(transSectoTime(endTime))+"까지 코드를 추출하시겠습니까?")){
                started = false;
                ended = false;
                document.getElementById("startbtn").src = "buttons/startbutton-" + color + ".png";
                document.getElementById("endbtn").src = "buttons/endbutton-" + color + ".png";
                drawTimecanvas();
                
                var xhr = new XMLHttpRequest();
                var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, start_time: String(startTime), end_time: String(endTime), video_name: videoUid};
                console.log(data);
        
                var carrotId = makeCodearea("로딩중", startTime);
        
                xhr.open("POST", server + "/ocr/continuous", true);
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
            if(confirm("현재 선택된 영역에서 "+String(transSectoTime(t))+"에 있는 코드를 추출하시겠습니까?")){
                var xhr = new XMLHttpRequest();
                var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, video_time: String(t), video_name: videoUid};
                console.log(data);
        
                var carrotId = makeCodearea("로딩중");
        
                xhr.open("POST", server + "/ocr", true);
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
        
    });


    document.querySelector("#capturebtn__icon").addEventListener('click', function(){
        var ch = canvas3.height = $("#youtubeMP4").height();
        var cw = canvas3.width = $("#youtubeMP4").width();
        var t = player.getCurrentTime();
        drawCanvas();

        if(!videoUid){
            alert("video mp4다운로드가 완료되지 않았습니다. 조금만 기다려주세요!");
        }
        else if(confirm("현재 선택된 영역을 캡쳐하시겠습니까?")){
            var xhr = new XMLHttpRequest();
            var data = {x: x/cw, y: y/ch, w: (w-x)/cw, h: (h-y)/ch, video_time: String(t), video_name: videoUid};
            console.log(data);
    
            xhr.open("POST", server + "/ocr/only_capture", true);
            xhr.setRequestHeader('Content-Type', 'application/json'); 
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // JSON.parse does not evaluate the attacker's scripts.
                    console.log("capture response!");
                    var resp = JSON.parse(xhr.responseText);
                    //var result = resp.result.slice(1,resp.length);
                    //var resp = xhr.responseText;
                    console.log(resp);
                    makeImgarea(resp.img_url);
                    //console.log(result);
                    //document.querySelector(`#t1${carrotId} > divcodetext > div`).CodeMirror.setValue(result);
                    //alert(resp);
                }
            }
            xhr.send(JSON.stringify(data));
        }
    });
    
});