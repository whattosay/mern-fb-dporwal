import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsb9PtPCnTvcbnXNRmJ0K0I49OJ2RnXAs",
  authDomain: "mern-facebookclone.firebaseapp.com",
  databaseURL: "https://mern-facebookclone.firebaseio.com",
  projectId: "mern-facebookclone",
  storageBucket: "mern-facebookclone.appspot.com",
  messagingSenderId: "804261269369",
  appId: "1:804261269369:web:b4ee9c0e82aa0d3ecfe9a8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;
