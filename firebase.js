// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAzSX3rwEhiZpABOogB0Yehfg08gRFlzs",
    authDomain: "necxis-assignment-c83bb.firebaseapp.com",
    projectId: "necxis-assignment-c83bb",
    storageBucket: "necxis-assignment-c83bb.firebasestorage.app",
    messagingSenderId: "729380847809",
    appId: "1:729380847809:web:8868e13f9a0f614f1ed440",
    measurementId: "G-J08EK8CBMM"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };








// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDAzSX3rwEhiZpABOogB0Yehfg08gRFlzs",
//   authDomain: "necxis-assignment-c83bb.firebaseapp.com",
//   projectId: "necxis-assignment-c83bb",
//   storageBucket: "necxis-assignment-c83bb.firebasestorage.app",
//   messagingSenderId: "729380847809",
//   appId: "1:729380847809:web:8868e13f9a0f614f1ed440",
//   measurementId: "G-J08EK8CBMM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);