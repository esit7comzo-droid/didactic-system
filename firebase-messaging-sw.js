importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7QNAEKiIgXM_eTzlG6OkWeoQ2k2nOvV4",
  authDomain: "eps-chat-e7acf.firebaseapp.com",
  projectId: "eps-chat-e7acf",
  messagingSenderId: "704961712537",
  appId: "1:704961712537:web:2effa3a4a3ec33b3660308"
});

const messaging = firebase.messaging();
