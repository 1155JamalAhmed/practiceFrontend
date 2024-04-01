// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";

// the firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCyYSBqsyPx9FNkTQeky94e2sAVfsoDHSQ",
  authDomain: "practiceproject-64d46.firebaseapp.com",
  projectId: "practiceproject-64d46",
  storageBucket: "practiceproject-64d46.appspot.com",
  messagingSenderId: "915759378103",
  appId: "1:915759378103:web:0bbeee534f93137736a732",
  measurementId: "G-9QWBFWERRJ",
};

// Initialize Firebase => a container created
const app = initializeApp(firebaseConfig);

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

export { messaging };

// requests the browser’s permission to send notifications and resolves with a token if the request is granted
export const onMessageListener = () =>
  onMessage(messaging, (payload) => {
    console.log("payload", payload);
    toast.success(payload.notification.title);
    new Notification(payload.notification.title, {
      body: payload.notification.body,
    });
  });
