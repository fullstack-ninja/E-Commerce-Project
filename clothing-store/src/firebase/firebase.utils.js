import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDk8Kn0AV4yra-RiMJR_CpI9P8q8xTaVZg",
  authDomain: "crownclothing-8daa3.firebaseapp.com",
  databaseURL: "https://crownclothing-8daa3.firebaseio.com",
  projectId: "crownclothing-8daa3",
  storageBucket: "crownclothing-8daa3.appspot.com",
  messagingSenderId: "967754578498",
  appId: "1:967754578498:web:b00a82156289775f24cbdb",
  measurementId: "G-5W783JY51X",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;