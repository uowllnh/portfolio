// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/* DOM: Document Object Model, 웹 문서를 구조화하여 표현한 것 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* App 함수 실행
     */}
  </React.StrictMode>
);
