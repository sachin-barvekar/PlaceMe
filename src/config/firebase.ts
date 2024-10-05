import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA-jLjciD5KFZpAFPLvxoUGRhC-Nr4B2rk',
  authDomain: 'placeme-c7499.firebaseapp.com',
  projectId: 'placeme-c7499',
  storageBucket: 'placeme-c7499.appspot.com',
  messagingSenderId: '971994688281',
  appId: '1:971994688281:web:a71997f38593a34ebc7388'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA-jLjciD5KFZpAFPLvxoUGRhC-Nr4B2rk",
//   authDomain: "placeme-c7499.firebaseapp.com",
//   projectId: "placeme-c7499",
//   storageBucket: "placeme-c7499.appspot.com",
//   messagingSenderId: "971994688281",
//   appId: "1:971994688281:web:a71997f38593a34ebc7388",
//   measurementId: "G-5T21QZH7KN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
