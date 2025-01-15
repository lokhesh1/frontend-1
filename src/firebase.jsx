import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "eshop-2d9a1.firebaseapp.com",
    projectId: "eshop-2d9a1",
    storageBucket: "eshop-2d9a1.appspot.com",
    messagingSenderId: "777786864172",
    appId: "1:777786864172:web:a9de107072ce935557d789",
    measurementId: "G-BPLKYL5XNK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
