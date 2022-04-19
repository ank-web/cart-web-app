import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAu8Rb4EyTCbdgTJfqLzhGNQqCk3luyngw",
  authDomain: "cart-44423.firebaseapp.com",
  projectId: "cart-44423",
  storageBucket: "cart-44423.appspot.com",
  messagingSenderId: "331234404728",
  appId: "1:331234404728:web:4bcd2bc7ce984e2602408d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
