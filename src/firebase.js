import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFec0YGGSXJvmnUxutFYkhmwM5lfCdr5E",
  authDomain: "lupinproject-da97f.firebaseapp.com",
  projectId: "lupinproject-da97f",
  storageBucket: "lupinproject-da97f.appspot.com",
  messagingSenderId: "1043766608606",
  appId: "1:1043766608606:web:2677e70e87dfcb2be9f84f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
