
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";

import { getAuth } from "firebase/auth";

const firebaseAppConfig = {
  apiKey: "AIzaSyAsDVY35_iBNOy4r7WPFwOSNtsaS-1a2Zg",
  authDomain: "tasty-hour-5423.firebaseapp.com",
  projectId: "tasty-hour-5423",
  storageBucket: "tasty-hour-5423.appspot.com",
  messagingSenderId: "19295056848",
  appId: "1:19295056848:web:ba9f2d143da92913367fd5",
  measurementId: "G-LFEQK0FVM0"
};


const app = initializeApp(firebaseAppConfig);
export const auth = getAuth(app);
export default app;
