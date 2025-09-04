import { useEffect, useState } from "react";

export default function Home() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Visitor IP:", data.ip); // Shows in browser console
        setIp(data.ip); // Saves to state
      });
  }, []);

  return (
    <div>
      <h1>My To-Do App ✅</h1>
      <p>Your IP: {ip}</p>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
