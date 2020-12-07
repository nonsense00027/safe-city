import firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW3zFoTYhti16d_bzfKgUiHNY-WhmNH_Q",
  authDomain: "safe-city-5fb8b.firebaseapp.com",
  databaseURL: "https://safe-city-5fb8b.firebaseio.com",
  projectId: "safe-city-5fb8b",
  storageBucket: "safe-city-5fb8b.appspot.com",
  messagingSenderId: "483730491056",
  appId: "1:483730491056:web:4622137bff8beba6055d75",
  measurementId: "G-ZQ4KX04VMD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
