import React from "react";
import { Routes, Route } from "react-router-dom";
import Document from "./ReactDom/document";
import LaunchApp from "./ReactDom/launchapp";
import DashBoard from "./ReactDom/dashboard";
import SideBar from './Components/SideBarSection/sidebar'
import "./App.css"
import Sidebar from "./Components/SideBarSection/sidebar";
import Body from './Components/BodySection/Body'

const App = () => {
  return (
    <div className="container">
      {/* <Routes>
         <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/document" element={<Document />} />
        <Route path="/launchapp" element={<LaunchApp />} />
      </Routes> */}
      <SideBar/>
<Body/>
    </div>
  );
};

export default App;
