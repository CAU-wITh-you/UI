var videoSelected = false;
//alert("detect.js");

function getOffset( el ) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { 
        top: rect.top + scrollTop, left: rect.left + scrollLeft 
    }
}

function pos(){
    var offset = getOffset(document.querySelector('video'));
    return {
            top:offset.top,
            left:offset.left,
            height:$("video").height(),
            width:$("video").height(),
    }	
}

function initCanvas(){
    if(document.querySelector('video')){
        var canvas1 = document.createElement("canvas");
        canvas1.setAttribute("id", "selectionVideo");
        
        // this right here should be fixed
        // for the youtube videos to work properly
        
        console.log("hello detect")
        
        document.body.appendChild(canvas1);
        var ctx = canvas1.getContext("2d");

        var video = document.querySelector('video');
        var height = $("video").height();
        var width = $("video").width();
        console.log(height,width);
        
    
        if($('video').position()){
            $("#selectionVideo").css({
                position: 'absolute',
                'z-index': 990,
                top: pos().top+'px',
                left: pos().left+'px',
                height:height,
                width: width
            });
            $("#selectionVideo").attr("height", height);
            $("#selectionVideo").attr("width", width);		
            
            console.log("start");
            ctx.beginPath();
            ctx.fillStyle = "#00D8FF27";
            ctx.fillRect(0, 0, canvas1.width, canvas1.height);
            ctx.strokeStyle = "#6799FF";
            ctx.lineWidth = 5;
            ctx.rect(0, 0, canvas1.width, canvas1.height);
            ctx.stroke();
            ctx.font = '48px HSYuji-Regular';
            ctx.textAlign = 'center';
            ctx.fillStyle = "#6799FF";
            ctx.fillText('동영상을 선택해주세요', canvas1.width/2, canvas1.height/2);
            console.log("end")

            canvas1.remove();
            document.querySelector("#movie_player > div.html5-video-container > video").pause();
            //document.querySelector('#secondary').style.display = "none";
            //document.querySelector('#primary').style.display = "none";
            //var html = $("#columns").innerHTML;
            //$("#columns").html(``);
            //var columnHtml = document.createElement("div");
            //columnHtml.id ="columnHtml";
            //columnHtml.innerHTML = html;
            //columnHtml.style.display = "none";

            videoUrl = new URL(window.location.href);
            var videoId = videoUrl.searchParams.get("v");

            if(videoId){
                document.querySelector("#movie_player > div.html5-video-container > video").pause();
                var iframe = document.createElement("iframe");
                iframe.id = "withYou";
                iframe.src = chrome.runtime.getURL("index.html");
                iframe.style.width = "100%";
                iframe.style.height = "100vh";
                iframe.style.zIndex = "1000";
                iframe.style.position = "absolute"
                iframe.style.overflow="visible";
                document.querySelector("#masthead-container").appendChild(iframe);
            }
            else{
                alert("선택 가능한 동영상이 없습니다! 다른 페이지에서 실행시켜주세요.");
            }

            canvas1.addEventListener('click', function(event) {
                var x = event.pageX,
                    y = event.pageY;
            
                var top = pos().top,
                    left = pos().left;
        
                if(x>=left && x<canvas1.width+left && y>=top && y<canvas1.height+top) {
                    videoSelected = true;
                    
                    if(confirm("in "+x+","+y+","+chrome.runtime.getURL('index.html'))){
                        
                        canvas1.remove();
                        document.querySelector("#movie_player > div.html5-video-container > video").pause();
                        //$("#columns").html(`<iframe id="withYou" src="${chrome.runtime.getURL("index.html")}" style="width:100%; height:100vh; z-index:10; position:absolute; left:-0%; overflow:hidden"></iframe>`);
                    }
                }
            
            }, false);
        }
    }
    else{
        alert("선택 가능한 동영상이 없습니다! 다른 페이지에서 실행시켜주세요.");
    }

}

$(document).ready(function(){

    initCanvas();
});

document.addEventListener('message', function(ev) {
    console.log("message from iframe")
    if (ev.data == 'closeIframe') {
        document.getElementById("withYou").remove();
        document.querySelector('#secondary').style.display = "block";
        document.querySelector('#primary').style.display = "block";
        //pushIframe(document); // Your code
    }
});

