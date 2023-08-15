const firebaseConfig = {
  apiKey: "AIzaSyAReSJycYUkdyo1h4cLjMYPP7PDaQgqnSM",
  authDomain: "agrovoltaics-dashboard.firebaseapp.com",
  databaseURL: "https://agrovoltaics-dashboard-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "agrovoltaics-dashboard",
  storageBucket: "agrovoltaics-dashboard.appspot.com",
  messagingSenderId: "995470038751",
  appId: "1:995470038751:web:7764884301d48ea42cfb6a",
  measurementId: "G-74PCF59CEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});
