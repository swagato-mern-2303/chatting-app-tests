import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import { Provider } from "react-redux";
import store from "./store.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyDIfCyRJH96-PjRxeTezlQLe7XzvyoH1bA",
  authDomain: "chatting-app-test-f3350.firebaseapp.com",
  projectId: "chatting-app-test-f3350",
  storageBucket: "chatting-app-test-f3350.appspot.com",
  messagingSenderId: "858680382367",
  appId: "1:858680382367:web:9f0fed08d01cf247fc63aa",
  measurementId: "G-PM38RJCECQ",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
