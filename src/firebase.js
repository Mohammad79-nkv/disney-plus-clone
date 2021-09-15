import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore,collection } from "firebase/firestore"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';





const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db =getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;






// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
// export default db;