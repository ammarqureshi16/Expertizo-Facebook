import React from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyCs9XtEdmpnwJPXpnJvjQEdbKq-RmLB47Q",
  authDomain: "expertizo-face.firebaseapp.com",
  projectId: "expertizo-face",
  storageBucket: "expertizo-face.appspot.com",
  messagingSenderId: "296239291521",
  appId: "1:296239291521:web:ae877bc004431ef042c180",
  measurementId: "G-4M6HHS5XTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
// console.log("Firestore", db);

// Sign Up and Create Collection User
async function signUp(form) {
  const { email, password, name } = form;
  // console.log("Jharo lagao");
  // console.log("Chai banny rakh dii");
  await createUserWithEmailAndPassword(auth, email, password);
  await swal({
    title: "Successful Sign Up!",
    text: "",
    icon: "success",
    button: "Ok",
  });

  // console.log("Chai Ban gai");
  await addDoc(collection(db, "user"), {
    name,
    email,
  });
  // console.log("Bartan Dho lo ab");
}

async function login(form) {
  const { name, email, password } = form;
  await signInWithEmailAndPassword(auth, email, password);
  await swal({
    title: "Successfully Log In!",
    text: "",
    icon: "success",
    button: "Ok",
  });
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   alert("Successfully Log In!");
  //   props.changeScreen("home");
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   alert(errorMessage);
  // });
}

// Create Adds Collection
async function userAdds(userDeatail) {
  const { title, price, detail } = userDeatail;

  try {
    await addDoc(collection(db, "adds"), {
      title,
      price,
      detail,
    });
    await swal({
      title: "Your data is add Successfully",
      text: "",
      icon: "success",
      button: "Ok",
    });
  } catch (e) {
    await swal({
      title: e.message,
      text: "",
      icon: "warning",
      button: "Ok",
    });
  }
  return "Bhai";
}

// Get Adds Collection
async function getDta() {
  const q = query(collection(db, "adds"));
  const querySnapshot = await getDocs(q);
  // where(user.uid == user.email));

  let data = [];
  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    // console.log("Adds Collection Get---->>", doc.data().desc);
    // console.log("Adds Collection Get---->>", doc.data());
  });
  return data;
}

async function getUser() {
  const userInfo = query(collection(db, "user"))
  // .doc(getUser.user.uid).get();
  // localStorage.setItem("User Login", JSON.stringify(userInfo.data()));
  const querySnapshot = await getDocs(userInfo);
  // const userInfo = await db.collection("users").doc(getUser.user.uid).get();
  let data = [];

  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()];
    console.log("Adds Collection Get---->>", doc.data());
  });
  return data;
}

export { signUp, login, userAdds, 
  getDta,
   getUser };
