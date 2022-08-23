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

console.log("hello index0");

var db = firebase.firestore();

function loadleft(foldername, folder__filedict) {
    console.log(folder__filedict);
    console.log("loadleft 수행");
    console.log(foldername);

    console.log(typeof (foldername));
    foldername.forEach(function (element) {
        console.log(element);
    });
    foldername.forEach(element => function () { //폴더이름별
        console.log("durldurld");
        console.log(element);
        var tempfiles;
        tempfiles
        var div__folder = document.createElement("div");
        div__folder.className = "folder target_by_EachFolder";
        div__folder.id = element;
        div__folder.innerHTML = String(element);

        var div__folder__div = document.createElement("div");
        div__folder__div.className = "folder__icon";

        var div__folder__div__ptag = document.createElement("p");
        div__folder__div__ptag.className = "afolder__icon";
        div__folder__div__ptag.style = "font-size: large;";
        div__folder__div__ptag.innerHTML = "📁";

        div__folder__div.appendChild(div__folder__div);

        var div__folder__h4foldername = document.createElement("h4");
        div__folder__h4foldername.className = "folder__title";
        div__folder__h4foldername.id = String(element) + "__title";
        div__folder__h4foldername.innerHTML = String(element);
        var div__folder__h4num = document.createElement("h4");
        div__folder__h4num.className = "folder__num";
        div__folder__h4num.id = String(element) + "__num";
        console.log("폴더별 갯수");
        console.log(element, len(folder__filedict[element]));
        div__folder__h4num.innerHTML = len(folder__filedict[element]);// 폴더별 파일 갯수

        div__folder.appendChild(div__folder__div);
        div__folder.appendChild(div__folder__h4foldername);
        div__folder.appendChild(div__folder__h4num);

        document.querySelector("#default").appendChild(div__folder);

    });
}

function loadMypage(nowuser) {
    var userColor = "pink";
    var userVideos = {};
    var files = {}
    var foldername = [];
    //배경 색상 선택
    db.collection("doITyourselfDB_user").doc(nowuser).get().then((doc) => {
        if (doc.exists) {
            userColor = doc.data();
            //console.log("Document color:", userColor);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!11");
        }
    });
    //비디오 고르기
    db.collection("doITyourselfDB_user").doc(nowuser).collection("videos").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            //console.log(doc.id, "=>", doc.data());
            userVideos[doc.id] = doc.data();
            if (doc.data().folder_name != "") {
                nowkey = doc.data().folder_name;
                if (!(nowkey in files)) {
                    files[nowkey] = [];
                    foldername.push(nowkey);
                }
                files[nowkey].push([doc.id, { "note": doc.data().note }]);
            }
            else {
                if (!("notinfolder" in files)) {
                    files["notinfolder"] = [];
                    foldername.push("notinfolder");
                }
                files["notinfolder"].push([doc.id, { "note": doc.data().note }]);
            }
        });
        //console.log(userVideos);
        //console.log(files);
    });
    //get()을 통해서 해당 컬렉션의 정보를 가져온다.

    //console.log(nowdb);
    console.log("현재 색상");
    console.log(userColor);
    console.log("비디오 목록");
    console.log(userVideos);
    console.log("files");
    console.log(files);


    //{폴더이름:[[비디오아이디,{"note": 노트내용들들들}]]
    loadleft(foldername, files);
    console.log("끗!!");

}
window.addEventListener('load', function () {
    alert("It's loaded!");
    loadMypage("jstep0000@gmail.com");
});

//{폴더이름:[비디오아이디, note]]
function loading(folders, files) {
    folders.sort();
    //{폴더이름:[[비디오아이디,{"note": 노트내용들들들}]]
    loadleft(folders);
}