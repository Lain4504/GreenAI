import React from "react";  
import '../Components/BodySection/body.css';
import SideBar from '../Components/SideBarSection/sidebar';
import Activity from '../Components/BodySection/ActivitySection/activity'
import "../Components/SideBarSection/sidebar.css";
import "../Components/BodySection/body.css";
import "../Components/BodySection/ActivitySection/activity.css"
import Top from '../Components/BodySection/TopSection/top'

const Document = () =>{
  return(
    <>
    <div className="container">
      <SideBar/>
      <div className="mainContent">
            <Top/>
            <div className="bottom">
                {/* <Activity/> */}
            </div>
        </div>
    </div>
    </>
  )
}
export default Document;