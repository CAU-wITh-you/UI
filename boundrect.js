function boundRect(){
    if(document.querySelector("#youtubeMP4")){
        var canvas = document.createElement("canvas");
        canvas.setAttribute("id", "selectionCanvas");
        
        // this right here should be fixed
        // for the youtube videos to work properly
        
        console.log("hello boundrect")
        
        document.body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var mdX,mdY,mvX,mvY; // mouse coordinates
        var started = false;
        var selected = false;
        var scale;
        
        /*function bound(){
            // returns a scalled values
            var x = (mdX+mvX);
            var y = (mdY+mvY);
            return{
                X:scale()*Math.min(mdX,x),
                Y:scale()*Math.min(mdY,y),
                W:scale()*(Math.max(mdX,x)-Math.min(mdX,x)),
                H:scale()*(Math.max(mdY,y)-Math.min(mdY,y))
            };
        }*/
        
        function getOffset( el ) {
            var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { 
                top: rect.top + scrollTop, left: rect.left + scrollLeft 
            }
        }
    
        function pos(){
                var theVid;
                var offset = getOffset(document.querySelector("#youtubeMP4"));
                return {
                    top:offset.top,
                    left:offset.left,
                    height:$("#youtubeMP4").height(),
                    width:$("#youtubeMP4").height(),
            }	
        }
        var video = document.querySelector("#youtubeMP4");
        var height = $("#youtubeMP4").height();
        var width = $("#youtubeMP4").width();
    
        scale = ()=> {
            return video.videoHeight/$("#youtubeMP4").height();
        }
    
        function initCanvas(){
            if($("#youtubeMP4").position()){
                $("#selectionCanvas").css({
                    position: 'absolute',
                    'z-index': -1,
                    top: pos().top+'px',
                    left: pos().left+'px',
                    height:height,
                    width: width
                });
                $("#selectionCanvas").attr("height", height);
                $("#selectionCanvas").attr("width", width);			
            }
        }
        
        initCanvas();
    
        let click = e =>{
            if(!started){
                    initCanvas();
                    mdX = e.pageX - pos().left;
                    mdY = e.pageY - pos().top;
                    started = true;
                    ctx.beginPath();
                }
        };
    
        let move = e =>{
                if(started){
                    $("#selectionCanvas").css({
                        'z-index': 990
                    });
    
                    mvX = e.pageX-mdX-pos().left;
                    mvY = e.pageY-mdY-pos().top;
                    ctx.beginPath();
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = "#A566FF27";
                    ctx.fillRect(mdX, mdY, mvX, mvY);
                    ctx.strokeStyle = "#A566FF"
                    ctx.lineWidth = 2;
                    ctx.rect(mdX, mdY, mvX, mvY);
                    ctx.stroke();
                    //	document.getElementById("bounds").innerHTML = "X:"+bound().X+" --> "+(bound().X+bound().W)+" |  Y:"+bound().Y+" --> "+(bound().Y+bound().H);
                }
            };
    
        document.addEventListener("mousedown",click);
        document.addEventListener("mousemove",move);
        document.addEventListener("mouseup", () =>{
            $("#selectionCanvas").css({
                'z-index': -1
            });
            started = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
}