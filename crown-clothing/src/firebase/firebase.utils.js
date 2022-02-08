import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDyGlHXSXutvPqHdAsJb8x8k68Y1Tykh98",
  authDomain: "crown-db-5dcfc.firebaseapp.com",
  projectId: "crown-db-5dcfc",
  storageBucket: "crown-db-5dcfc.appspot.com",
  messagingSenderId: "866990478246",
  appId: "1:866990478246:web:c6a9c4c4de28343baaf567",
  measurementId: "G-SQ0L9W2ZRJ",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ login_hint: "Select Account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
