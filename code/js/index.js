// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
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
  appId: "1:687930390947:web:5ca87940b433ec86ac4216",
  measurementId: "G-HZSXSRGHBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);