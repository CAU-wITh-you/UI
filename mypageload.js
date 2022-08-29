var nowuser = "jstep@gmail.com";
const firebaseConfig = {
    apiKey: "AIzaSyAnCGQzZWMcsci2ob13jqW1-gf8Sk-_7aU",
    authDomain: "reserve-gwabang.firebaseapp.com",
    databaseURL: "https://reserve-gwabang-default-rtdb.firebaseio.com",
    projectId: "reserve-gwabang",
    storageBucket: "reserve-gwabang.appspot.com",
    messagingSenderId: "872525073842",
    appId: "1:872525073842:web:2859549ab4a9ff36cfe8ab",
    measurementId: "G-QNC7XQHCLB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var nowdarkcolor;
var nowneoncolor;
function loadleft(foldername, folder__filedict, forrightload) {
    var sum = 0;
    //console.log(folder__filedict);
    //console.log("keys");
    //console.log(Object.keys(folder__filedict));
    console.log("loadleft 수행");
    //console.log(foldername.sort());
    foldername.sort();
    foldername.forEach(function (element) {
        sum += 1;
        if (element != "notinfolder") {
            var tempfiles;
            tempfiles
            var div__folder = document.createElement("div");
            div__folder.className = "folder target_by_EachleftFolder";
            div__folder.id = element;

            var div__folder__div = document.createElement("div");
            div__folder__div.className = "folder__icon";

            var div__folder__div__ptag = document.createElement("p");
            div__folder__div__ptag.className = "afolder__icon";
            div__folder__div__ptag.style = "font-size: large;";
            div__folder__div__ptag.innerHTML = "📁";

            div__folder__div.appendChild(div__folder__div__ptag);

            var div__folder__h4foldername = document.createElement("h4");
            div__folder__h4foldername.className = "folder__title";
            div__folder__h4foldername.id = String(element) + "__title";
            div__folder__h4foldername.innerHTML = String(element);
            var div__folder__h4num = document.createElement("h4");
            div__folder__h4num.className = "folder__num";
            div__folder__h4num.id = String(element) + "__num";
            //console.log("폴더별 갯수");
            //console.log(element, folder__filedict[element].length);
            div__folder__h4num.innerHTML = (folder__filedict[element].length);// 폴더별 파일 갯수

            div__folder.appendChild(div__folder__div);
            div__folder.appendChild(div__folder__h4foldername);
            div__folder.appendChild(div__folder__h4num);

            var div__folder__files = document.createElement("div");
            div__folder__files.id = element + "__files";
            div__folder__files.style.display = "none";

            folder__filedict[element].forEach(element2 => {
                //console.log(element2);
                /*<div class="file target_by_Each폴더이름1" id="파일아이디1">
                    <div class="file__icon">
                        <p class="afile__icon" style="font-size: large;">📄</p>
                    </div>
                    <h4 class="file__title" , id="파일이름1">유튜브 제목</h4>
                </div>*/
                var div__folder__files__div = document.createElement("div");
                div__folder__files__div.className = "file target_by_Each" + element;
                div__folder__files__div.id = element2;

                var div__folder__files__div__div = document.createElement("div");
                div__folder__files__div__div.className = "file__icon";
                var div__folder__files__div__div__p = document.createElement("p");
                div__folder__files__div__div__p.className = "afile__icon";
                div__folder__files__div__div__p.style = "font-size:large;";
                div__folder__files__div__div__p.innerHTML = "📄";
                div__folder__files__div__div.appendChild(div__folder__files__div__div__p);

                var div__folder__files__div__h4 = document.createElement("h4");
                div__folder__files__div__h4.className = "file__title";
                div__folder__files__div__h4.id = element2[0];
                div__folder__files__div__h4.innerHTML = element2[1];

                div__folder__files__div.appendChild(div__folder__files__div__div);
                div__folder__files__div.appendChild(div__folder__files__div__h4);

                div__folder__files.appendChild(div__folder__files__div);
                document.querySelector("#default").appendChild(div__folder);
                document.querySelector("#default").appendChild(div__folder__files);
            });
        } else {
            //오른쪽 화면 수행해야함.
        }
    });
    //왼쪽 (폴더, 노트, 파일)그림자.
    var nowclick = "allnote";
    let targetAleftfolder = document.querySelectorAll('.target_by_EachleftFolder');
    targetAleftfolder.forEach((target) => target.addEventListener("click", changeBackplusTitle));
    //기본은 allnote
    document.getElementById("allnote").click();
    function changeBackplusTitle() {
        if (nowclick != null) {//기존 background 원래대로
            document.getElementById(nowclick).style.backgroundColor = "";
            document.getElementById(nowclick).style.borderRadius = "";
            if (nowclick != "allnote" && nowclick != "recentnote" && nowclick != "notinfoler") {//폴더이면
                if (document.getElementById(String(nowclick) + "__files") != null) {
                    document.getElementById(String(nowclick) + "__files").style.display = "none";
                }
            } else {

            }
        }
        nowclick = String(this.id);
        //console.log(nowclick);
        document.getElementById(nowclick).style.backgroundColor = "var(--color-hover-gray)";
        document.getElementById(nowclick).style.borderRadius = "10px";
        //document.getElementById(String(nowclick) + "__files").style.display = "";
        document.getElementById('mypage__title').innerText = String(document.getElementById(nowclick + '__title').innerHTML);
        if (nowclick == "allnote") {
            const nowparentnode = document.querySelector('.area__notes');
            while (nowparentnode.hasChildNodes()) {
                nowparentnode.removeChild(nowparentnode.firstChild);
            }
            const foldernowparentnode = document.querySelector('.area__folders');
            while (foldernowparentnode.hasChildNodes()) {
                foldernowparentnode.removeChild(foldernowparentnode.firstChild);
            }
            document.getElementById("folders__title").style.display = "";
            document.getElementById("area__folders").style.display = "";
            //오른쪽 폴더 목록 추가
            var foldernum = foldername.length - 1;//notinfolder 빼기
            foldername.forEach(function (folderelement) {
                if (folderelement != "notinfolder") {
                    var div__folder = document.createElement("div");
                    div__folder.id = folderelement;
                    div__folder.className = "afolder target_by_EachFolder";

                    var div__folder__p = document.createElement("p");
                    div__folder__p.className = "afolder__icon";
                    div__folder__p.style = "font-size: large;";
                    div__folder__p.innerHTML = "📁";

                    var div__folder__p2 = document.createElement("p");
                    div__folder__p2.className = "afolder__name";
                    div__folder__p2.innerHTML = folderelement;

                    div__folder.appendChild(div__folder__p);
                    div__folder.appendChild(div__folder__p2);
                    document.querySelector(".area__folders").appendChild(div__folder);

                } else {
                    //오른쪽 화면 수행해야함.
                }
            });
            while (foldernum != 0) {
                foldernum -= 1;
                var div__folder = document.createElement("div");
                //div__folder.id = "temp null folder";
                div__folder.className = "afolder target_by_EachFolder";
                div__folder.style.visibility = "hidden";

                var div__folder__p = document.createElement("p");
                div__folder__p.className = "afolder__icon";
                div__folder__p.style = "font-size: large;";
                div__folder__p.innerHTML = "📁";

                var div__folder__p2 = document.createElement("p");
                div__folder__p2.className = "afolder__name";
                //div__folder__p2.innerHTML = folderelement;

                div__folder.appendChild(div__folder__p);
                div__folder.appendChild(div__folder__p2);
                document.querySelector(".area__folders").appendChild(div__folder);
            }
            //오른쪽 파일 목록 추가 (notinfolder+모든 폴더들의 파일 추가)
            loadright("allnote", forrightload);
        } else if (nowclick == "recentnote") {
            const nowparentnode = document.querySelector('.area__notes');
            while (nowparentnode.hasChildNodes()) {
                nowparentnode.removeChild(nowparentnode.firstChild);
            }
            console.log("recentnote");
            document.getElementById("folders__title").style.display = "none";
            document.getElementById("area__folders").style.display = "none";
            //오른쪽 파일 목록 추가
            //loadright(String(nowclick), forrightload);
        } else if (nowclick == "notinfoler") {
            const nowparentnode = document.querySelector('.area__notes');
            while (nowparentnode.hasChildNodes()) {
                nowparentnode.removeChild(nowparentnode.firstChild);
            }
            console.log("notinfolder");
            document.getElementById("folders__title").style.display = "none";
            document.getElementById("area__folders").style.display = "none";
            //오른쪽 파일 목록 추가
            loadright("notinfolder", forrightload);
        } else {
            const nowparentnode = document.querySelector('.area__notes');
            while (nowparentnode.hasChildNodes()) {
                nowparentnode.removeChild(nowparentnode.firstChild);
            }
            console.log("폴더클릭");
            document.getElementById("folders__title").style.display = "none";
            document.getElementById("area__folders").style.display = "none";
            if (document.getElementById(String(nowclick) + "__files") != null) {
                document.getElementById(String(nowclick) + "__files").style.display = "block";
            }
            //오른쪽 파일 목록 추가
            loadright(String(nowclick), forrightload);
        }
    }
    foldername.forEach(function (element) {
        let targetAleftfile = document.querySelectorAll('.target_by_Each' + String(element));
        targetAleftfile.forEach((target) => target.addEventListener("mouseover", function () {
            this.style.backgroundColor = "var(--color-hover-gray)";
            this.style.borderRadius = "5px";
        }));
        targetAleftfile.forEach((target) => target.addEventListener("mouseout", function () {
            this.style.backgroundColor = "";
        }));
        targetAleftfile.forEach((target) => target.addEventListener("click", function () {
            document.getElementById('nowopen__title').className = this.getElementsByTagName('h4')[0].id  //id에 저장
            var nowclickvideoid = this.getElementsByTagName('h4')[0].id;
            document.getElementById('nowopen__title').innerHTML = this.getElementsByTagName('h4')[0].innerHTML + "를 여시겠습니까?";
            console.log(this.getElementsByTagName('h4')[0]);
            show__fileopenback();
        }));
    });
    document.getElementById("allnote__num").innerHTML = String(sum) + folder__filedict["notinfolder"].length;//총 파일 개수
    document.getElementById("recentnote__num").innerHTML = "15";
    document.getElementById("notinfolder__num").innerHTML = folder__filedict["notinfolder"].length;
}
function snapshotToarray2(querySnapshot) {
    //var foldername = [];
    var files = {}
    var userVideos = {};
    querySnapshot.forEach(function (doc) {
        //console.log(doc.id, "=>", doc.data());
        userVideos[doc.id] = doc.data();
        if (doc.data().folder_name != "") {
            nowkey = doc.data().folder_name;
            if (!(nowkey in files)) {
                files[nowkey] = [];
                //foldername.push(nowkey);
            }
            files[nowkey].push([doc.id, doc.data().video_image, doc.data().videoowner_image, doc.data().video_name, doc.data().videoowner_name, doc.data().note_timestamp, { "note": doc.data().note }]);
        }
        else {
            if (!("notinfolder" in files)) {
                files["notinfolder"] = [];
                //foldername.push("notinfolder");
            }
            files["notinfolder"].push([doc.id, doc.data().video_image, doc.data().videoowner_image, doc.data().video_name, doc.data().videoowner_name, doc.data().note_timestamp, { "note": doc.data().note }]);
        }
    });
    //폴더별 파일별 폴더이름//파일아이디, 비디오이미지, 소유주이미지, 비디오이름, 소유주이름, 파일내용
    var returnArr = [files];
    return returnArr;
}
function loadright(nowfoldername, folder__filedict) {
    console.log("loadright 수행");
    /*
    <div id="notestid" , class="anote call target_by_EachNote">
        <img class="anote__img" src="./images/doITyourself__default__logo128.png"></img>
        <div class="anote__contents">
            <div class="content__divownerimg">
                <img class="content__ownerimg" src="./images/doITyourself__default__logo128.png"></img>
            </div>
            <div class="content__titlenamedate">
                <h4 style="margin: 0;">제목10000000000</h4>
                <h5 style="margin: 0; color: gray;">소유주 이름</h5>
                <h6 style="margin: 0; color:gray;">날짜</h6>
            </div>
        </div>
    </div>
    */
    var filenum;
    if (nowfoldername == "allnote") {
        var allkey = Object.keys(folder__filedict);
        console.log(allkey);
        var nowfilenum = 0;
        allkey.forEach(keyelement => {
            folder__filedict[keyelement].forEach(afile => {
                nowfilenum += 1;
                var div__noteid = document.createElement("div");
                div__noteid.id = afile[0];
                div__noteid.className = "anote call target_by_EachNote";
                div__noteid.style = "display: block; height: 250px; border: 2px solid whitesmoke; border-radius: 8px; margin-bottom: 2%; align-items: center; padding-left: 1%; padding-right: 1%; flex - basis: 16 %; ";

                var div__noteid__img = document.createElement("img");
                div__noteid__img.className = "anote__img";
                div__noteid__img.src = "url(" + String(afile[1]) + ");";
                div__noteid__img.style = "margin-top: 4%; width: 100%; height: 150px; object-fit: contain;";

                var div__noteid__div = document.createElement("div");
                div__noteid__div.className = "anote__contents";
                div__noteid__div.style = "width: 100%; height: 90px; object-fit: cover; display: flex; align-items: center; vertical-align: middle;";

                var div__noteid__div__div = document.createElement("div");
                div__noteid__div__div.className = "content__divownerimg";
                div__noteid__div__div.style = "border-radius: 50%; width: 50px; height: 50px; margin-right: 5%;";
                var div__noteid__div__div__img = document.createElement("img");
                div__noteid__div__div__img.className = "content__ownerimg";
                div__noteid__div__div__img.src = "url(" + String(afile[2]) + ");";
                div__noteid__div__div__img.style.width = "100%";
                div__noteid__div__div__img.style.height = "100%";
                div__noteid__div__div__img.style.borderRadius = "50%";
                div__noteid__div__div.appendChild(div__noteid__div__div__img);

                var div__noteid__div__div2 = document.createElement("div");
                div__noteid__div__div2.className = "content__titlenamedate";

                var div__noteid__div__div2__h4 = document.createElement("h4");
                div__noteid__div__div2__h4.innerHTML = afile[3];
                div__noteid__div__div2__h4.style = "margin: 0;";
                var div__noteid__div__div2__h5 = document.createElement("h5");
                div__noteid__div__div2__h5.innerHTML = afile[4];
                div__noteid__div__div2__h5.style = "margin: 0;";
                var div__noteid__div__div2__h6 = document.createElement("h6");
                div__noteid__div__div2__h6.innerHTML = afile[5];
                div__noteid__div__div2__h6.style = "margin: 0;";

                div__noteid__div__div2.appendChild(div__noteid__div__div2__h4);
                div__noteid__div__div2.appendChild(div__noteid__div__div2__h5);
                div__noteid__div__div2.appendChild(div__noteid__div__div2__h6);
                div__noteid__div.appendChild(div__noteid__div__div);
                div__noteid__div.appendChild(div__noteid__div__div2);

                div__noteid.appendChild(div__noteid__img);
                div__noteid.appendChild(div__noteid__div);

                document.querySelector(".area__notes").appendChild(div__noteid);

            });
        });
        filenum = 6 - nowfilenum % 5;
    }
    else if (nowfoldername == "recentnote") {
        console.log(folder__filedict["notinfolder"]);
    } else if (nowfoldername == "notinfoler") {
        console.log(folder__filedict["notinfolder"]);
        filenum = 6 - (folder__filedict["notinfolder"].length % 5);
        folder__filedict["notinfolder"].forEach(element3 => {
            var div__noteid = document.createElement("div");
            div__noteid.id = element3[0];
            //console.log(element3[0]);
            div__noteid.className = "anote call target_by_EachNote";
            div__noteid.style = "display: block; height: 250px; border: 2px solid whitesmoke; border-radius: 8px; margin-bottom: 2%; align-items: center; padding-left: 1%; padding-right: 1%; flex - basis: 16 %; ";

            var div__noteid__img = document.createElement("img");
            div__noteid__img.className = "anote__img";
            div__noteid__img.src = "url(" + String(element3[1]) + ");";
            div__noteid__img.style = "margin-top: 4%; width: 100%; height: 150px; object-fit: contain;";

            var div__noteid__div = document.createElement("div");
            div__noteid__div.className = "anote__contents";
            div__noteid__div.style = "width: 100%; height: 90px; object-fit: cover; display: flex; align-items: center; vertical-align: middle;";

            var div__noteid__div__div = document.createElement("div");
            div__noteid__div__div.className = "content__divownerimg";
            div__noteid__div__div.style = "border-radius: 50%; width: 50px; height: 50px; margin-right: 5%;";
            var div__noteid__div__div__img = document.createElement("img");
            div__noteid__div__div__img.className = "content__ownerimg";
            div__noteid__div__div__img.src = "url(" + String(element3[2]) + ");";
            div__noteid__div__div__img.style.width = "100%";
            div__noteid__div__div__img.style.height = "100%";
            div__noteid__div__div__img.style.borderRadius = "50%";
            div__noteid__div__div.appendChild(div__noteid__div__div__img);

            var div__noteid__div__div2 = document.createElement("div");
            div__noteid__div__div2.className = "content__titlenamedate";

            var div__noteid__div__div2__h4 = document.createElement("h4");
            div__noteid__div__div2__h4.innerHTML = element3[3];
            div__noteid__div__div2__h4.style = "margin: 0;";
            var div__noteid__div__div2__h5 = document.createElement("h5");
            div__noteid__div__div2__h5.innerHTML = element3[4];
            div__noteid__div__div2__h5.style = "margin: 0;";
            var div__noteid__div__div2__h6 = document.createElement("h6");
            div__noteid__div__div2__h6.innerHTML = element3[5];
            div__noteid__div__div2__h6.style = "margin: 0;";

            div__noteid__div__div2.appendChild(div__noteid__div__div2__h4);
            div__noteid__div__div2.appendChild(div__noteid__div__div2__h5);
            div__noteid__div__div2.appendChild(div__noteid__div__div2__h6);
            div__noteid__div.appendChild(div__noteid__div__div);
            div__noteid__div.appendChild(div__noteid__div__div2);

            div__noteid.appendChild(div__noteid__img);
            div__noteid.appendChild(div__noteid__div);

            document.querySelector(".area__notes").appendChild(div__noteid);
        });
    } else {
        console.log(folder__filedict[nowfoldername]);
        //console.log("여기여기여기");
        filenum = 6 - (folder__filedict[nowfoldername].length) % 5;
        //console.log(filenum);
        folder__filedict[nowfoldername].forEach(element3 => {
            var div__noteid = document.createElement("div");
            div__noteid.id = element3[0];
            div__noteid.className = "anote call target_by_EachNote";
            div__noteid.style = "display: block; height: 250px; border: 2px solid whitesmoke; border-radius: 8px; margin-bottom: 2%; align-items: center; padding-left: 1%; padding-right: 1%; flex - basis: 16 %; ";


            var div__noteid__img = document.createElement("img");
            div__noteid__img.className = "anote__img";
            div__noteid__img.src = "url(" + String(element3[1]) + ");";
            div__noteid__img.style = "margin-top: 4%; width: 100%; height: 150px; object-fit: contain;";

            var div__noteid__div = document.createElement("div");
            div__noteid__div.className = "anote__contents";
            div__noteid__div.style = "width: 100%; height: 90px; object-fit: cover; display: flex; align-items: center; vertical-align: middle;";

            var div__noteid__div__div = document.createElement("div");
            div__noteid__div__div.className = "content__divownerimg";
            div__noteid__div__div.style = "border-radius: 50%; width: 50px; height: 50px; margin-right: 5%;";

            var div__noteid__div__div__img = document.createElement("img");
            div__noteid__div__div__img.className = "content__ownerimg";
            div__noteid__div__div__img.src = "url(" + String(element3[2]) + ");";
            div__noteid__div__div__img.style.width = "100%";
            div__noteid__div__div__img.style.height = "100%";
            div__noteid__div__div__img.style.borderRadius = "50%";
            div__noteid__div__div.appendChild(div__noteid__div__div__img);

            var div__noteid__div__div2 = document.createElement("div");
            div__noteid__div__div2.className = "content__titlenamedate";

            var div__noteid__div__div2__h4 = document.createElement("h4");
            div__noteid__div__div2__h4.innerHTML = element3[3];
            div__noteid__div__div2__h4.style = "margin: 0;";
            var div__noteid__div__div2__h5 = document.createElement("h5");
            div__noteid__div__div2__h5.innerHTML = element3[4];
            div__noteid__div__div2__h5.style = "margin: 0;";
            var div__noteid__div__div2__h6 = document.createElement("h6");
            div__noteid__div__div2__h6.innerHTML = element3[5];
            div__noteid__div__div2__h6.style = "margin: 0;";

            div__noteid__div__div2.appendChild(div__noteid__div__div2__h4);
            div__noteid__div__div2.appendChild(div__noteid__div__div2__h5);
            div__noteid__div__div2.appendChild(div__noteid__div__div2__h6);
            div__noteid__div.appendChild(div__noteid__div__div);
            div__noteid__div.appendChild(div__noteid__div__div2);

            div__noteid.appendChild(div__noteid__img);
            div__noteid.appendChild(div__noteid__div);

            document.querySelector(".area__notes").appendChild(div__noteid);

        });
    }
    while (filenum != 0) {
        var div__noteid = document.createElement("div");
        div__noteid.id = "tempnone";
        div__noteid.className = "anote call target_by_EachNote";
        div__noteid.style = "display: block; height: 250px; border: 2px solid whitesmoke; border-radius: 8px; margin-bottom: 2%; align-items: center; padding-left: 1%; padding-right: 1%; flex - basis: 16 %; ";
        div__noteid.style.visibility = "hidden";

        var div__noteid__img = document.createElement("img");
        div__noteid__img.className = "anote__img";
        //div__noteid__img.src = "url(" + String(element3[1]) + ");";
        div__noteid__img.style = "margin-top: 4%; width: 100%; height: 150px; object-fit: contain;";

        var div__noteid__div = document.createElement("div");
        div__noteid__div.className = "anote__contents";
        div__noteid__div.style = "width: 100%; height: 90px; object-fit: cover; display: flex; align-items: center; vertical-align: middle;";

        var div__noteid__div__div = document.createElement("div");
        div__noteid__div__div.className = "content__divownerimg";
        div__noteid__div__div.style = "border-radius: 50%; width: 50px; height: 50px; margin-right: 5%;";

        var div__noteid__div__div__img = document.createElement("img");
        div__noteid__div__div__img.className = "content__ownerimg";
        //div__noteid__div__div__img.src = "url(" + String(element3[2]) + ");";
        div__noteid__div__div__img.style.width = "100%";
        div__noteid__div__div__img.style.height = "100%";
        div__noteid__div__div__img.style.borderRadius = "50%";
        div__noteid__div__div.appendChild(div__noteid__div__div__img);

        var div__noteid__div__div2 = document.createElement("div");
        div__noteid__div__div2.className = "content__titlenamedate";

        var div__noteid__div__div2__h4 = document.createElement("h4");
        //div__noteid__div__div2__h4.innerHTML = element3[3];
        div__noteid__div__div2__h4.style = "margin: 0;";
        var div__noteid__div__div2__h5 = document.createElement("h5");
        //div__noteid__div__div2__h5.innerHTML = element3[4];
        div__noteid__div__div2__h5.style = "margin: 0;";
        var div__noteid__div__div2__h6 = document.createElement("h6");
        //div__noteid__div__div2__h6.innerHTML = element3[5];
        div__noteid__div__div2__h6.style = "margin: 0;";

        div__noteid__div__div2.appendChild(div__noteid__div__div2__h4);
        div__noteid__div__div2.appendChild(div__noteid__div__div2__h5);
        div__noteid__div__div2.appendChild(div__noteid__div__div2__h6);
        div__noteid__div.appendChild(div__noteid__div__div);
        div__noteid__div.appendChild(div__noteid__div__div2);

        div__noteid.appendChild(div__noteid__img);
        div__noteid.appendChild(div__noteid__div);
        document.querySelector(".area__notes").appendChild(div__noteid);
        filenum = filenum - 1;
    }

    let targetAfolder = document.querySelectorAll('.target_by_EachFolder');
    targetAfolder.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
    let targetAnote = document.querySelectorAll('.target_by_EachNote');
    targetAnote.forEach((target) => target.addEventListener("mouseover", changeNeonbackInfunc));
    function changeNeonbackInfunc() {
        this.style.boxShadow = "-3px 3px 3px " + String(nowneoncolor);
        this.style.color = String(nowdarkcolor);
        this.style.border = "2px solid " + String(nowdarkcolor);
    }
    targetAfolder.forEach((target) => target.addEventListener("mouseout", changeNeonbackFolderOutfunc));
    function changeNeonbackFolderOutfunc() {
        this.style.color = "";
        this.style.boxShadow = "-3px 3px 3px var(--color-background-gray)";
        this.style.border = "2px solid whitesmoke"
    }

    targetAnote.forEach((target) => target.addEventListener("mouseout", changeNeonbackOutfunc));
    function changeNeonbackOutfunc() {
        this.style.color = "";
        this.style.boxShadow = "-3px 3px 3px var(--color-background-gray)";
        this.style.border = "2px solid whitesmoke";
    }

    targetAnote.forEach((target) => target.addEventListener("click", function () {
        document.getElementById('nowopen__title').className = target.id  //id에 저장
        document.getElementById('nowopen__title').innerHTML = target.getElementsByTagName('h4')[0].innerHTML + "를 여시겠습니까?";
        show__fileopenback();
    }));
    targetAfolder.forEach((target) => target.addEventListener("click", function () {
        console.log(this.id);
        console.log(this);
        document.getElementById(this.id).click();
    }));
    document.querySelector('#notopenfilebtn').addEventListener("click", function () {
        document.querySelector(".openfile__background").className = "openfile__background";
    })
    document.querySelector("#close__openfilebackground").addEventListener("click", function () {
        document.querySelector(".openfile__background").className = "openfile__background";

    });
}

function snapshotToarray(querySnapshot) {
    var foldername = [];
    var files = {}
    var userVideos = {};
    querySnapshot.forEach(function (doc) {
        //console.log(doc.id, "=>", doc.data());
        userVideos[doc.id] = doc.data();
        if (doc.data().folder_name != "") {
            nowkey = doc.data().folder_name;
            if (!(nowkey in files)) {
                files[nowkey] = [];
                foldername.push(nowkey);
            }
            files[nowkey].push([doc.id, doc.data().video_name, { "note": doc.data().note }]);
        }
        else {
            if (!("notinfolder" in files)) {
                files["notinfolder"] = [];
                foldername.push("notinfolder");
            }
            files["notinfolder"].push([doc.id, doc.data().video_name, { "note": doc.data().note }]);
        }
    });
    var returnArr = [foldername, files];
    return returnArr;
}
function loadMypage(nowuser) {
    //비디오 고르기
    db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").get().then(function (querySnapshot) {
        //console.log(userVideos);
        //console.log(files);
        var returnArr2 = snapshotToarray(querySnapshot);
        var returnArr3 = snapshotToarray2(querySnapshot);
        //console.log(returnArr2);
        //console.log("return0");
        //console.log(returnArr2[0]);
        //  loadright("allnote", returnArr3);
        loadleft(returnArr2[0], returnArr2[1], returnArr3[0], returnArr3);
    });
    //get()을 통해서 해당 컬렉션의 정보를 가져온다.
}

window.addEventListener('load', function () {
    //alert("It's loaded!");
    //loadMypage(nowuser);
    //document.getElementById("allnote").click();    
});

//팝업
function show__fileopenback() {
    document.querySelector(".openfile__background").className = "openfile__background openfile__show";
    document.querySelector(".openfile__popup").style.color = String(nowdarkcolor);
    document.querySelector(".openfile__popup").style.border.color = String(nowdarkcolor);
    document.getElementById("openfilebtn").style.border.color = "white";
}

document.getElementById('openfilebtn').addEventListener("click", function () {
    console.log("클릭한 비디오 아이디");
    console.log(document.getElementById('nowopen__title').className);
    //document.getElementById('nowopen__title').className 가 노트 id 번호임
});


//편집 open
var editopen = false;
document.getElementById("editbtn").addEventListener('click', function () {
    editopen = !editopen;
    if (editopen == true) {
        document.getElementById("editbtn").style.color = String(nowdarkcolor);
        document.getElementById('plusbtn').style.display = "flex";
        document.getElementById('deletebtn').style.display = "flex";
        document.getElementById('edit__editfolderbtn').style.display = "flex";
    }
    else {
        document.getElementById("editbtn").style.color = "gray";
        document.getElementById('plusbtn').style.display = "none";
        document.getElementById('deletebtn').style.display = "none";
        document.getElementById('edit__editfolderbtn').style.display = "none";

    }
});

var plusbtnopen = false;
var deletebtnopen = false;
var edit__editfolderbtnopen = false;
document.getElementById("plusbtn").addEventListener('click', function () {
    if (deletebtnopen == true) {
        alert("- 폴더삭제 버튼을 취소하세요");
    } else if (edit__editfolderbtnopen == true) {
        alert("- 폴더수정 버튼을 취소하세요");
    } else {
        plusbtnopen = !plusbtnopen;
        if (plusbtnopen == true) {
            document.getElementById('plusbtn').style.color = String(nowdarkcolor);
            show__plusbtnback();
        }
    }
});

function close__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background";
    plusbtnopen = false;
    document.getElementById('plusbtn').style.color = "gray";
}
//팝업
document.querySelector("#close__plusbtnbackground").addEventListener("click", close__plusbtnback);
function show__plusbtnback() {
    document.querySelector(".plusbtn__background").className = "plusbtn__background plusbtn__show";
    document.querySelector(".plusbtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".plusbtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".foldercreatebtn").style.border.color = String(nowdarkcolor);

    db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").get().then(function (querySnapshot) {
        var returnArr2 = snapshotToarray(querySnapshot);
        console.log(document.getElementById('createtext').value);
        console.log(returnArr2[1]['notinfolder']);
        //<option value="비디오아이디">비디오이름</option>
        returnArr2[1]['notinfolder'].forEach(element => {
            var option = document.createElement("option");
            option.value = element[0];//id
            option.innerHTML = element[1];//제목
            document.querySelector('.plus__selectbtn').appendChild(option);
        });
    });
    document.getElementById('foldercreatebtn').addEventListener('click', createnewfolder);
    function createnewfolder() {
        var selected__file = document.getElementById('selected__file');
        var selected__fileid = selected__file.options[selected__file.selectedIndex].value;
        console.log(selected__fileid);
        db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").doc(selected__fileid).update({ folder_name: document.getElementById('createtext').value });
        console.log("폴더이름-파일이름 이 추가되었습니다.");
        close__plusbtnback();
        //reload 필요!
    }
}




document.getElementById("deletebtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (edit__editfolderbtnopen == true) {
        alert("🪄 폴더수정 버튼을 취소하세요");
    }
    else {
        deletebtnopen = !deletebtnopen;
        if (deletebtnopen == true) {
            document.getElementById('deletebtn').style.color = String(nowdarkcolor);
            show_deletefolderback();
        }
    }
});
document.querySelector("#close__deletebtnbackground").addEventListener("click", close__deletefolderback);
//팝업
function show_deletefolderback() {
    document.querySelector(".deletebtn__background").className = "deletebtn__background deletebtn__show";
    document.querySelector(".deletebtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".deletebtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".deletefolderbtn").style.border.color = String(nowdarkcolor);
    db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").get().then(function (querySnapshot) {
        var returnArr2 = snapshotToarray(querySnapshot);
        var folderlist = returnArr2[0];
        var filelist = returnArr2[1];
        console.log(folderlist);
        console.log(filelist);
        //<option value="폴더이름">폴더이름</option>
        folderlist.sort();
        folderlist.forEach(element => {
            if (element != "notinfolder") {
                var option = document.createElement("option");
                option.value = element;//id
                option.innerHTML = element;//제목
                document.querySelector('.delete__selectbtn').appendChild(option);
            }
        });
        document.getElementById('deletefolderbtn').addEventListener('click', deletefolder);
        function deletefolder() {
            var selected__folder = document.getElementById('delete__selected__folder');
            var selected__folderid = selected__folder.options[selected__folder.selectedIndex].value;
            console.log(filelist[selected__folderid]);
            filelist[selected__folderid].forEach(element => {
                console.log(element[0]);
                //db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").doc(selected__fileid).update({ folder_name: document.getElementById('createtext').value });
                db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").doc(element[0]).update({ folder_name: "" });
                console.log("폴더이름이 삭제되었습니다.");
                console.log(selected__folderid);
                close__deletefolderback();
            });
            //reload 필요!
            //window.location.reload();
        }
    });
}
function close__deletefolderback() {
    document.querySelector(".deletebtn__background").className = "deletebtn__background";
    deletebtnopen = false;
    document.getElementById('deletebtn').style.color = "gray";

}

document.getElementById("edit__editfolderbtn").addEventListener('click', function () {
    if (plusbtnopen == true) {
        alert("+ 폴더추가 버튼을 취소하세요");
    } else if (deletebtnopen == true) {
        alert("- 폴더삭제 버튼을 취소하세요");
    } else {
        edit__editfolderbtnopen = !edit__editfolderbtnopen;
        if (edit__editfolderbtnopen == true) {
            document.getElementById('edit__editfolderbtn').style.color = String(nowdarkcolor);
            show__editfolderback();
        }
    }
});

document.querySelector("#close__editbtnbackground").addEventListener("click", close__editfolderback);
//팝업
function show__editfolderback() {
    document.querySelector(".edit__editfolderbtn__background").className = "edit__editfolderbtn__background edit__editfolderbtn__show";
    document.querySelector(".edit__editfolderbtn__popup").style.color = String(nowdarkcolor);
    document.querySelector(".edit__editfolderbtn__popup").style.border.color = String(nowdarkcolor);
    document.querySelector(".folderinbtn").style.border.color = String(nowdarkcolor);
    document.querySelector(".folderoutbtn").style.border.color = String(nowdarkcolor);
    db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").get().then(function (querySnapshot) {
        var returnArr2 = snapshotToarray(querySnapshot);
        var folderlist = returnArr2[0];
        var filelist = returnArr2[1];
        var fileidname = {};
        var filename = [];
        console.log(folderlist);
        console.log(filelist);
        //폴더 목록 만듬
        //<option value="폴더이름">폴더이름</option>
        folderlist.sort();
        var option = document.createElement("option");
        option.value = "notinfolder";//id
        option.innerHTML = "분류되지 않은 노트";//제목
        document.querySelector('.edit__selectbtn__folder').appendChild(option);
        folderlist.forEach(element => {
            if (element != "notinfolder") {
                var option = document.createElement("option");
                option.value = element;//id
                option.innerHTML = element;//제목
                document.querySelector('.edit__selectbtn__folder').appendChild(option);
            }
        });
        //파일 목록 만듬
        //<option value="파일id">파일 이름</option>
        folderlist.forEach(foldername => {
            filelist[foldername].forEach(file => {
                console.log(file);
                fileidname[file[1]] = file[0];
                filename.push(file[1]);
            });
            //fileidname.push
        });
        console.log(fileidname);
        console.log(filename);
        filename.sort();
        filename.forEach(thefilename => {
            var option = document.createElement("option");
            option.value = fileidname[thefilename];//id
            option.innerHTML = thefilename;//제목
            document.querySelector('.edit__selectbtn__file').appendChild(option);
        });

        document.getElementById('folderinbtn').addEventListener('click', editfolder);
        function editfolder() {
            var selected__folder = document.getElementById('edit__selectbtn__folder');
            var selected__folderid = selected__folder.options[selected__folder.selectedIndex].value;
            console.log(selected__folderid);

            var selected__file = document.getElementById('edit__selectbtn__file');
            var selected__fileid = selected__file.options[selected__file.selectedIndex].value;
            console.log(selected__fileid);

            db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").doc(selected__fileid).update({ folder_name: selected__folderid });
            console.log("파일의 폴더가 변경되었습니다.");
            console.log(selected__folderid);
            close__editfolderback();

            //reload 필요!
            //window.location.reload();
        }
    });
}
function close__editfolderback() {
    document.querySelector(".edit__editfolderbtn__background").className = "edit__editfolderbtn__background";
    edit__editfolderbtnopen = false;
    document.getElementById('edit__editfolderbtn').style.color = "gray";
}