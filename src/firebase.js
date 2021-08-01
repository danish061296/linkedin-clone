import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCfg4s7Rj_XjtAxqC4RHtrg0xmuqYCvouk',
  authDomain: 'linkedin-clone-f656f.firebaseapp.com',
  projectId: 'linkedin-clone-f656f',
  storageBucket: 'linkedin-clone-f656f.appspot.com',
  messagingSenderId: '390043792887',
  appId: '1:390043792887:web:ce3e65b997db1db13e6af2',
};

// connect with firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
