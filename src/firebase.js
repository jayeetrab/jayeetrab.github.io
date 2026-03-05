// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

// // Init Firebase
// const app = initializeApp(firebaseConfig);

// // Auth
// export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
// export const loginWithGoogle = () => signInWithPopup(auth, provider);
// export const logout = () => signOut(auth);

// // Firestore
// export const db = getFirestore(app);
// src/firebase.js
// Firebase temporarily disabled — fill in config to enable chat feature

export const auth = null;
export const db = null;
export const loginWithGoogle = () => {};
export const logout = () => {};
