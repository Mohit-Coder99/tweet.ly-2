// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBhqCqwFUUz_wM9uep4qfk6JJvpTBbjslI",
  authDomain: "tweet-110a6.firebaseapp.com",
  databaseURL: "https://tweet-110a6-default-rtdb.firebaseio.com",
  projectId: "tweet-110a6",
  storageBucket: "tweet-110a6.appspot.com",
  messagingSenderId: "651481533114",
  appId: "1:651481533114:web:bf162bab610aede0039083"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FIREBASE LINKS on top


    var user_name = localStorage.getItem("USERNAME");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!!";

    function addRoom() {
      var room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        room : "room"
      })
      alert("Room Created!");
      document.getElementById("room_name").value = "";


    }

    function logout() {
      window.location = "index.html";
    }


//CODE DON'T TOUCH below
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
