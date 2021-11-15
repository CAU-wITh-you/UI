let videoSelected = false;
alert("detect.js");

if(document.querySelector('video') && videoSelected == false){
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
            ctx.fillStyle = "#51E7FF27";
            ctx.fillRect(0, 0, canvas1.width, canvas1.height);
            ctx.strokeStyle = "#51E7FF"
            ctx.lineWidth = 5;
            ctx.rect(0, 0, canvas1.width, canvas1.height);
            ctx.stroke();
            ctx.font = '48px Arial';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'blue';
            ctx.fillText('동영상을 선택해주세요', canvas1.width/2, canvas1.height/2);
            console.log("end")
        }
    }
    
    canvas1.addEventListener('click', function(event) {
        var x = event.pageX,
            y = event.pageY;
    
        var top = pos().top,
            left = pos().left;

        if(x>=left && x<canvas1.width+left && y>=top && y<canvas1.height+top) {
            videoSelected = true;
            var video = document.querySelector("#movie_player > div.html5-video-container > video");
            video.pause();
            if(confirm("in "+x+","+y+","+chrome.runtime.getURL('index.html'))){
                canvas1.remove();
                lastHtml = $("#columns").html;
                $("#columns").html(`<iframe src="${chrome.runtime.getURL("index.html")}" style="width:100%; height:100%; z-index:10; position:absolute; left:-0%"></iframe>`);   
            }
        }
    
    }, false);

    
    $(document).ready(function(){
        
        initCanvas();
        //boundRect();

        window.onpageshow = function(event) {
            if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
                // Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
                alert("히스토리백!!!!");
            }
        }
        
        window.onresize = function(event){
            if(!videoSelected){
                console.log("resize!");
                console.log("start");
                ctx.beginPath();
                ctx.clearRect(0, 0, canvas1.width, canvas1.height);
                ctx.fillStyle = "#51E7FF27";
                ctx.fillRect(0, 0, $("video").width(), $("video").height());
                ctx.strokeStyle = "#51E7FF"
                ctx.lineWidth = 5;
                ctx.rect(0, 0, $("video").width(), $("video").height());
                ctx.stroke();
                ctx.font = '48px Arial';
                ctx.textAlign = 'center';
                ctx.fillStyle = 'blue';
                ctx.fillText('동영상을 선택해주세요', $("video").width()/2, $("video").height()/2);
                console.log("end")    
            }
        }
    });
}

