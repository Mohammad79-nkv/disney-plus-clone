import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDD9f20uOS0YV6rT5nJTFs1OLyBSuebJk0",
  authDomain: "disneyplus-clone-36954.firebaseapp.com",
  projectId: "disneyplus-clone-36954",
  storageBucket: "disneyplus-clone-36954.appspot.com",
  messagingSenderId: "574456586846",
  appId: "1:574456586846:web:8238ac35cf05b39cab8acf"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;






// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;