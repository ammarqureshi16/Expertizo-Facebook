import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs9XtEdmpnwJPXpnJvjQEdbKq-RmLB47Q",
  authDomain: "expertizo-face.firebaseapp.com",
  projectId: "expertizo-face",
  storageBucket: "expertizo-face.appspot.com",
  messagingSenderId: "296239291521",
  appId: "1:296239291521:web:ae877bc004431ef042c180",
  measurementId: "G-4M6HHS5XTB",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const register = (form) => {
  const { email, password } = form;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Successful!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
console.log("Chala", register);

const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Successfully logged in!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
};

export { register, login };
