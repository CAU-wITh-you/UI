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

console.log("hello index0");

var db = firebase.firestore();

function loadNote(){
  var videoId = videoUrl.searchParams.get("v");
  
  var docRef = db.collection("Hyejin").doc(videoId);
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          console.log("Document note:", doc.get("note"));
          var note = doc.get("note");
          for(i=1; i<=note.length; i++){
            var type = note[i-1].type;
            var content = note[i-1].content;
            var time = note[i-1].time;
            if(type == "code"){
              if(time==0 || time) makeCodearea(content, time);
              
              else nonemakeCodearea(content);
            }
            else if(type == "text"){
              if(time==0 || time) makeTextarea(content, time);
              
              else nonemakeTextarea(content);
            }
            else if(type == "img"){
              if(time==0 || time) makeImgarea(content, time);
              
              else nonemakeImgarea(content);
            }    
          }
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
/*
          var type = doc.get("type");
          var content = doc.get("content");
          var time = doc.get("time");
          if(type == "code"){
            if(time) makeCodearea(content, time);
            
            else nonemakeCodearea(content);
          }
          else if(type == "text"){
            if(time) makeTextarea(content, time);
            
            else nonemakeTextarea(content);
          }
          else if(type == "img"){
            if(time) makeImgarea(content, time);
            
            else nonemakeImgarea(content);
          }
*/
}

function saveNote(){
  var save = [];

  nodeList = document.querySelector(`#sortable`).childNodes;
  childNum = document.querySelector(`#sortable`).childElementCount;
  
  for(i = nodeList.length-childNum; i < nodeList.length; i++){
      var id = nodeList[i].id.slice(2);
      var codearea = document.querySelector(`#t1${id} > divcodetext > div`);
      var textarea = document.querySelector(`#t1${id}`);
      var imgarea = document.querySelector(`#i${id}`);
      if(codearea){
          save.push({
            type : "code",
            content : document.querySelector(`#t1${id} > divcodetext > div`).CodeMirror.getValue("\n"),
            time : nodeList[i].value
            //input : document.querySelector(`#t3${id}`).innerText
          });
      }
      else if(textarea){
        save.push({
          type : "text",
          content : document.querySelector(`#t1${id}`).innerText,
          time : nodeList[i].value
        });
      }
      else if(imgarea){
        save.push({
          type : "img",
          content : document.querySelector(`#i${id}`).url,
          time : nodeList[i].value
        });
      }
  }
  
  var videoId = videoUrl.searchParams.get("v");

  db.collection("Hyejin").doc(videoId).set({
      date : getFormattedDate(Date.now()),
      note : save
  })
  .then(function(docRef) {
      
      console.log("저장되었습니다");
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
}


function getFormattedDate(d){
  var days = ['일','월','화','수','목','금','토'];

  var date = new Date(d)
  var yyyy = date.getFullYear()
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var dd = String(date.getDate()).padStart(2, '0')
  var day = "("+ days[date.getDay()] +")"
  var hh = String(date.getHours()).padStart(2, '0')
  var MM = String(date.getMinutes()).padStart(2, '0')
  
  var formatted_date = yyyy + "-" + mm + "-" + dd + day + " " + hh + ":" + MM;
  return formatted_date;
}