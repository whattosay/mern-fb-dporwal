import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKaf6jyjH5hPb47-KZUlxZSYVMaDcJNZg",
  authDomain: "facebookclone-b0437.firebaseapp.com",
  databaseURL: "https://facebookclone-b0437.firebaseio.com",
  projectId: "facebookclone-b0437",
  storageBucket: "facebookclone-b0437.appspot.com",
  messagingSenderId: "349701584909",
  appId: "1:349701584909:web:5e15ec19e3ade373853d44",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
