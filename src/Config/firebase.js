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
  setDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import swal from "sweetalert";

// const firebaseConfig = {
//   apiKey: "AIzaSyCs9XtEdmpnwJPXpnJvjQEdbKq-RmLB47Q",
//   authDomain: "expertizo-face.firebaseapp.com",
//   projectId: "expertizo-face",
//   storageBucket: "expertizo-face.appspot.com",
//   messagingSenderId: "296239291521",
//   appId: "1:296239291521:web:ae877bc004431ef042c180",
//   measurementId: "G-4M6HHS5XTB",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// New work start

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWqi7v_elC2EM7LD9EPBn4sCCwWZb0caU",
  authDomain: "expertizo-olx-43c7a.firebaseapp.com",
  projectId: "expertizo-olx-43c7a",
  storageBucket: "expertizo-olx-43c7a.appspot.com",
  messagingSenderId: "8667806874",
  appId: "1:8667806874:web:36fa082e8a593509563323",
  measurementId: "G-FLXJ4FLK35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// console.log("Firestore", db);

// Sign Up and Create Collection User
async function signUp(form) {
  const { email, password, name } = form;
  // console.log("Jharo lagao");
  // console.log("Chai banny rakh dii");
  const result = await createUserWithEmailAndPassword(auth, email, password);
  console.log("Ris signUp UserID", result.user);
  const uid = result.user.uid;
  await setDoc(doc(db, "user", uid), {
    email,
    name,
    uid,
  });

  await swal({
    title: "Successful Sign Up!",
    text: "",
    icon: "success",
    button: "Ok",
  });

  // console.log("Chai Ban gai");
  // console.log("Bartan Dho lo ab");
  return "kam chala jani";
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
  const userInfo = query(collection(db, "user"));
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

async function uploadImages(file) {
  // console.log("Image File--->>>", file);
  const imageRef = ref(storage, "images" + file.name);

  const imageUpload = await uploadBytes(imageRef, file);
  // console.log("Image Upload--->>>>", imageUpload);
  const url = await getDownloadURL(imageUpload.ref);
  // console.log("->>>>>>>>", url);
  return url;
}

async function updateProfile(data) {
  const uid = auth.currentUser.uid;
  await setDoc(doc(db, "user", uid), data, { marge: true });

  // console.log("abhi jo login ha....", auth.currentUser.uid);
}

export {
  signUp,
  login,
  userAdds,
  getDta,
  getUser,
  uploadImages,
  updateProfile,
};
