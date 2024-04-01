// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyCyYSBqsyPx9FNkTQeky94e2sAVfsoDHSQ",
  authDomain: "practiceproject-64d46.firebaseapp.com",
  projectId: "practiceproject-64d46",
  storageBucket: "practiceproject-64d46.appspot.com",
  messagingSenderId: "915759378103",
  appId: "1:915759378103:web:0bbeee534f93137736a732",
  measurementId: "G-9QWBFWERRJ",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// use for background -> service worker
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  // Customize notification here
  // const notificationTitle = payload.data.message;
  // const notificationOptions = {
  //   body: payload.data.senderName,
  // };

  // self.registration.showNotification(notificationTitle, notificationOptions);
});
