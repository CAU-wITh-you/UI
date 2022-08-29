/*const firebaseConfig = {
  apiKey: "AIzaSyAnCGQzZWMcsci2ob13jqW1-gf8Sk-_7aU",
  authDomain: "reserve-gwabang.firebaseapp.com",
  databaseURL: "https://reserve-gwabang-default-rtdb.firebaseio.com",
  projectId: "reserve-gwabang",
  storageBucket: "reserve-gwabang.appspot.com",
  messagingSenderId: "872525073842",
  appId: "1:872525073842:web:2859549ab4a9ff36cfe8ab",
  measurementId: "G-QNC7XQHCLB"
};*/

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

  function loadNote() {
    check = document.getElementById('load_comp');
    if(check.innerHTML != 'false') return
    document.getElementById('load_comp').innerHTML = "true";
    
    user_email = document.getElementById("user_email").innerHTML;
    while(user_email.indexOf('@') == -1){
      user_email = prompt("이메일을 입력해주세요!");
      document.getElementById("user_email").innerHTML = user_email;
      chrome.storage.sync.set({"user_email": user_email}, function() {
          console.log('Value is set to ' + user_email);
      });
    }

    var videoId = videoUrl.searchParams.get("v");
    var docRef = db.collection("doITyourselfDB_user").doc(user_email).collection("videos").doc(videoId);
    docRef.get().then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log("Document note:", doc.get("note"));
        var note = doc.get("note");
        for (i = 1; i <= note.length; i++) {
          var type = note[i - 1].content_type;
          var content = note[i - 1].content;
          var time = note[i - 1].time;
          if (type == "code") {
            if (time == -1) nonemakeCodearea(content);
            else makeCodearea(content, time);
          }
          else if (type == "text") {
            if (time == -1) nonemakeTextarea(content);
            else makeTextarea(content, time);
          }
          else if (type == "img") {
            if (time == -1) nonemakeImgarea(content);
            else makeImgarea(content, time);
          }
        }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!11");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
  
  function promiseLoadNote(){
    return new Promise(loadNote);
  }
  
  function saveNote(){
    user_email = document.getElementById("user_email").innerHTML;
    if(user_email.indexOf('@') == -1) return

    var save = [];
  
    nodeList = document.querySelector(`#sortable`).childNodes;
    childNum = document.querySelector(`#sortable`).childElementCount;
  
    for (i = nodeList.length - childNum; i < nodeList.length; i++) {
      var id = nodeList[i].id.slice(2);
      var codearea = document.querySelector(`#t1${id} > divcodetext > div`);
      var textarea = document.querySelector(`#t1${id}`);
      var imgarea = document.querySelector(`#i${id}`);
      var time = nodeList[i].value;
      if (codearea) {
        save.push({
          content_timestamp: getFormattedDate(Date.now()),
          content_type: "code",
          content: document.querySelector(`#t1${id} > divcodetext > div`).CodeMirror.getValue("\n"),
          time: nodeList[i].value
          //input : document.querySelector(`#t3${id}`).innerText
        });
      }
      else if (textarea) {
        save.push({
          content_timestamp: getFormattedDate(Date.now()),
          content_type: "text",
          content: document.querySelector(`#t1${id}`).innerText,
          time: nodeList[i].value
        });
      }
      else if (imgarea) {
        save.push({
          content_timestamp: getFormattedDate(Date.now()),
          content_type: "img",
          content: document.querySelector(`#i${id}`).url,
          time: nodeList[i].value
        });
      }
    }
    
    if(save != []){
        var videoId = videoUrl.searchParams.get("v");
        //db.collection("doITyourselfDB").doc(user_email).collection("videos").doc(videoId);
        db.collection("doITyourselfDB_user").doc(user_email).collection("videos").doc(videoId).set({
          folder_name: "",
          note: save,
          video_image: document.getElementById("vid_thumbnail").innerHTML,
          video_name: document.getElementById("vid_title").innerHTML,
          videoowner_name: document.getElementById("vid_author").innerHTML,
          note_timestamp: getFormattedDate(Date.now())
        }).then(function (docRef) {
          console.log("저장되었습니다");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  }
  
  
  function getFormattedDate(d) {
    var days = ['일', '월', '화', '수', '목', '금', '토'];
  
    var date = new Date(d)
    var yyyy = date.getFullYear()
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var dd = String(date.getDate()).padStart(2, '0')
    var day = "(" + days[date.getDay()] + ")"
    var hh = String(date.getHours()).padStart(2, '0')
    var MM = String(date.getMinutes()).padStart(2, '0')
  
    var formatted_date = yyyy + "-" + mm + "-" + dd + day + " " + hh + ":" + MM;
    return formatted_date;
  }
  
  function loadMypage(nowUserId) {
    var videoname = db.collection("doITyourselfDB").get();
    var videoname2 = db.collection("doITyourselfDB").doc().data();
    console.log("비디오이름");
    console.log(videoname);
    console.log("비디오이름");
    console.log(videoname2);
  }