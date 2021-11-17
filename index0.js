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
var citiesRef = db.collection("Hello");

citiesRef.doc("World").set({
    name: "Korea", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] })
.then(function(docRef) {
  alert("저장되었습니다");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
}); 
