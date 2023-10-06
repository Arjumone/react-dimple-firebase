// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOOu5GsBCk1JhgKeL6awCBiBS7K7Av-uk",
  authDomain: "react-dimple-firebase.firebaseapp.com",
  projectId: "react-dimple-firebase",
  storageBucket: "react-dimple-firebase.appspot.com",
  messagingSenderId: "693836376429",
  appId: "1:693836376429:web:a404c8acb42a037c181264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;