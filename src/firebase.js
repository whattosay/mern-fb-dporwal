import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRn2ESWVwskSYj4Ruz7aQPnlnDnmbitF4",
  authDomain: "facebookclone-dporwal.firebaseapp.com",
  databaseURL: "https://facebookclone-dporwal.firebaseio.com",
  projectId: "facebookclone-dporwal",
  storageBucket: "facebookclone-dporwal.appspot.com",
  messagingSenderId: "229590850276",
  appId: "1:229590850276:web:8bc4d7ca3c40e197c1aaf1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
