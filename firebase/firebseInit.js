// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import { getToken } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyYSBqsyPx9FNkTQeky94e2sAVfsoDHSQ",
  authDomain: "practiceproject-64d46.firebaseapp.com",
  projectId: "practiceproject-64d46",
  storageBucket: "practiceproject-64d46.appspot.com",
  messagingSenderId: "915759378103",
  appId: "1:915759378103:web:0bbeee534f93137736a732",
  measurementId: "G-9QWBFWERRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const messaging = getMessaging(app);
// const analytics = getAnalytics(app);

export { messaging };

// requests the browser’s permission to send notifications and resolves with a token if the request is granted
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
