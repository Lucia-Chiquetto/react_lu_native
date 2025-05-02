import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyB9mzJRQF5veVUTGw4n7Xlxct1CKOOAq9k",
    authDomain: "reactlunative.firebaseapp.com",
    projectId: "reactlunative",
    storageBucket: "reactlunative.firebasestorage.app",
    messagingSenderId: "382271154633",
    appId: "1:382271154633:web:d58039da31b2d8be102018",
    measurementId: "G-BWBQ7ZTPV2"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;