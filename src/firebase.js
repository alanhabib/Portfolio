import firebase from "firebase/app";
import database from "firebase/database";

<!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-analytics.js"></script>

// <script>
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAvoCGz4y7zBvhLU9uy6Z44c0SzGq9-wjs",
	authDomain: "bloglan.firebaseapp.com",
	databaseURL: "https://bloglan.firebaseio.com",
	projectId: "bloglan",
	storageBucket: "bloglan.appspot.com",
	messagingSenderId: "764260627332",
	appId: "1:764260627332:web:704c2ab63461d7bf3a63d1",
	measurementId: "G-QNMGYXDWWK"
};

let firebaseCache;
export const getFirebase = () => {
	if(firebaseCache) {
		return firebaseCache
	}

// Initialize Firebase
	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	firebaseCache = firebase;
	return firebase;
};
