import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKRfVBgRSPvrxGwvtVm4M8hmB8RaBNL6c",
  authDomain: "dporwal-fbclone-7b383.firebaseapp.com",
  databaseURL: "https://dporwal-fbclone-7b383.firebaseio.com",
  projectId: "dporwal-fbclone-7b383",
  storageBucket: "dporwal-fbclone-7b383.appspot.com",
  messagingSenderId: "979726564032",
  appId: "1:979726564032:web:1843da8704fbcbf6110b25",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
