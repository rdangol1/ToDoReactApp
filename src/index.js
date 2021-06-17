import React from "react";
import ReactDOM from "react-dom";
import  TodoContextProvider  from './context/TodoContext';
import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <div className="bg-gray-100 min-h-screen">
        <App />
      </div>
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
