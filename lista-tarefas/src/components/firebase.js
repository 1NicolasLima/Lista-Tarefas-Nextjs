// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIxbh4uKQREdaRhVdHHzY_pM2XLcPAHC0",
  authDomain: "agenda-virtual-e0be0.firebaseapp.com",
  projectId: "agenda-virtual-e0be0",
  storageBucket: "agenda-virtual-e0be0.appspot.com",
  messagingSenderId: "1064182278037",
  appId: "1:1064182278037:web:545bfc1f96309c61d5f89c",
  measurementId: "G-MYW3C5NEFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;