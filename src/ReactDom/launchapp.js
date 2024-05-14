import React from "react";  
import './App.css'
import SideBar from '../Components/SideBarSection/sidebar'
import LaunchAppSection from '../Components/LauchAppSection/lauchappSection'
const App = () =>{
  return(
    <>
    <div className="container">
      <SideBar/>
      <LaunchAppSection/>

    </div>
    </>
  )
}
export default App;