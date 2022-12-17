// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg72CAX2SWsYzmN0B9NxYAHnE_oFgijVU",
  authDomain: "co300project.firebaseapp.com",
  databaseURL: "https://co300project-default-rtdb.firebaseio.com",
  projectId: "co300project",
  storageBucket: "co300project.appspot.com",
  messagingSenderId: "687930390947",
  appId: "1:687930390947:web:ccebf1c99141c989ac4216",
  measurementId: "G-H8MSVVV3GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);