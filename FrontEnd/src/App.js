import React from "react";

import SideBar from './Components/SideBarSection/sidebar'
import "./App.css"
import Body from './Components/BodySection/Body'
import DarkMode from "./Components/DarkMode/DarkMode";
const App = () => {
  return (
    <div className="container">
    
      <SideBar/>
<Body/>


    </div>
    
  );
};

export default App;
