import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95_9ZBeXZ-OhhlluTC6-oqgq1Lnwro6Y",
  authDomain: "mealstogo-f34b5.firebaseapp.com",
  projectId: "mealstogo-f34b5",
  storageBucket: "mealstogo-f34b5.appspot.com",
  messagingSenderId: "1155372935",
  appId: "1:1155372935:web:ad7030265fd6b38fdf6522",
};

// Initialize Firebase
export const MealApp = initializeApp(firebaseConfig);
// export const MealAuth = getAuth(MealApp);
// export const MealDb = getFireStore(MealApp);
