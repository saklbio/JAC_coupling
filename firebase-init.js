// firebase-init.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC9MN1S5ANhPjKxkzWIaVc-yadzsDcrxnA",
  authDomain: "jacoupling.firebaseapp.com",
  projectId: "jacoupling",
  storageBucket: "jacoupling.firebasestorage.app",
  messagingSenderId: "1021071980880",
  appId: "1:1021071980880:web:74038cbcac0c98999bd455",
  measurementId: "G-Q3W7WP39B5"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
