// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwgmFUt9UrAPtlJ5wrYtXsACRwqPntWU",
  authDomain: "simple-farebase-654ac.firebaseapp.com",
  projectId: "simple-farebase-654ac",
  storageBucket: "simple-farebase-654ac.firebasestorage.app",
  messagingSenderId: "676024950986",
  appId: "1:676024950986:web:9303c802285a4a24c09433"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth