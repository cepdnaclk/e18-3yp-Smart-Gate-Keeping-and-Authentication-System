import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
// export const storage = getStorage(app);
export const rtdb = getDatabase(app);

