import React from "react";
import { Routes, Route } from "react-router-dom";
import Document from "./ReactDom/document";
import LaunchApp from "./ReactDom/launchapp";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/document" element={<Document />} />
        <Route path="/launchapp" element={<LaunchApp />} />
      </Routes>
    </div>
  );
};

export default App;
