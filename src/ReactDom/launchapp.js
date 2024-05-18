import React from "react";  
import SideBar from '../Components/SideBarSection/sidebar'
import LaunchAppSection from '../Components/LauchAppSection/lauchappSection'
import Body from '../Components/BodySection/Body'
import "../Components/SideBarSection/sidebar.css";
import "../Components/BodySection/body.css";


const LaunchApp = () =>{
  return(
    <>
    <div className="container">
      <SideBar/>
      <LaunchAppSection/>

    </div>
    </>
  )
}
export default LaunchApp;