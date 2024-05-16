import React from "react";
import { Routes, Route } from "react-router-dom";
import Document from "./ReactDom/document";
import LaunchApp from "./ReactDom/launchapp";
import DashBoard from "./ReactDom/dashboard";
import SideBar from './Components/SideBarSection/sidebar'
import "./App.css"
import Body from './Components/BodySection/Body'
import AppFooter from './Components/Footer/Footer'
const App = () => {
  return (
    <div className="container">
    
      <SideBar/>
<Body/>

 

    </div>
    
  );
};

export default App;
