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
} from "firebase/firestore";

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

async function signUp(form) {
  const { email, password, name } = form;
  // console.log("Jharo lagao");
  // console.log("Chai banny rakh dii");
  await createUserWithEmailAndPassword(auth, email, password);
  alert("Successful Sign Up");
  // console.log("Chai Ban gai");
  await addDoc(collection(db, "user"), {
    name,
    email,
    // password,
  });
  // console.log("Bartan Dho lo ab");
}

async function login(form) {
  const { email, password } = form;
  await signInWithEmailAndPassword(auth, email, password);
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

async function userAdds(userDeatail) {
  const { title, desc, price } = userDeatail;
  try {
    await addDoc(collection(db, "adds"), {
      title,
      desc,
      price,
    });
    alert("Kardiya Jani add");
  } catch (e) {
    alert(e.message);
  }
  return "Hua jani";
}
//  function getDta () => {
//   const q = query(collection(db, "cities"));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// }

export { signUp, login, userAdds };
