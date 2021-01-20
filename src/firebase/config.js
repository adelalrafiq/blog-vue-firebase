import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9JcPi1IJ2RaizYFuFuTelYOMF1RZsRLU",
  authDomain: "posts-46641.firebaseapp.com",
  projectId: "posts-46641",
  storageBucket: "posts-46641.appspot.com",
  messagingSenderId: "240095496716",
  appId: "1:240095496716:web:b79ea450462d7b6049bc29",
  measurementId: "G-HBGNQMDCRL"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp }