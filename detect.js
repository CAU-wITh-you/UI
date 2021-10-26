let videoSelected = false;

if(document.querySelector('video') && videoSelected == false){
    var canvas1 = document.createElement("canvas");
    canvas1.setAttribute("id", "selectionVideo");
    
    // this right here should be fixed
    // for the youtube videos to work properly
    
    console.log("hello hyejin2")
    
    document.body.appendChild(canvas1);
    var ctx = canvas1.getContext("2d");

    var video = document.querySelector('video');
    var height = $("video").height();
    var width = $("video").width();
    
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
            if(confirm("in "+x+","+y)){
                /*canvas1.width = 0;
                canvas1.height = 0;
                ctx.clearRect(0, 0, canvas1.width, canvas1.height);*/
                canvas1.remove();
                boundRect();
                $("#related").html(`<h1>Hello world<br>
                <iframe src="${chrome.runtime.getURL("hello_world.html")}" style="width:480px !important; height:100%; z-index:10; position:absolute;"></iframe></h1><br><br>`);
                //$("#meta-contents").html(`<h1>hello hyejin</h1><br>`);
                //alert(chrome.runtime.getURL("hello_world.html"));
                //var iFrame  = document.createElement ("iframe");
                //iFrame.src  = chrome.runtime.getURL("hello_world.htm");
                //$("#meta-contents").appendChild(iFrame);
                //$("#comments").html(``);
                //$("#info-contents").load(chrome.runtime.getURL("div.html")); 
            }
        }
    
    }, false);

    $(document).ready(function(){
    
        initCanvas();

    });
}