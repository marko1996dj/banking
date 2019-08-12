// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBeScEU4XA_L7TiWMtPip5Mzyw9swL8z64",
    authDomain: "banking-da534.firebaseapp.com",
    databaseURL: "https://banking-da534.firebaseio.com",
    projectId: "banking-da534",
    storageBucket: "",
    messagingSenderId: "456447949992",
    appId: "1:456447949992:web:b1908634c1691e9c"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;


