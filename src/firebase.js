import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqDIYqSir45OX9H9IZNv6UKjym8CnfHKc",
  authDomain: "vue-walkietalkie.firebaseapp.com",
  projectId: "vue-walkietalkie",
  storageBucket: "vue-walkietalkie.appspot.com",
  messagingSenderId: "515422392675",
  appId: "1:515422392675:web:d9607d91edba3d2ce94356",
  measurementId: "G-BW4J25DJ56",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
