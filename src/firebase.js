import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAggzkGydpe4U5dKoFgAuCxwQT-zc1JlYs",
  authDomain: "dprowal-fb-mern.firebaseapp.com",
  databaseURL: "https://dprowal-fb-mern.firebaseio.com",
  projectId: "dprowal-fb-mern",
  storageBucket: "dprowal-fb-mern.appspot.com",
  messagingSenderId: "705240877955",
  appId: "1:705240877955:web:09d1f4dbcaba861d0a44b6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
