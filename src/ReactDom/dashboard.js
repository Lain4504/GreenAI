import React from "react";  
import SideBar from '../Components/SideBarSection/sidebar';
import Body from '../Components/BodySection/Body';
import "../Components/SideBarSection/sidebar.css";
import "../Components/BodySection/body.css";

const Document = () =>{
  return(
    <>
    <div className="container">
      <SideBar/>
      <Body/>

    </div>
    </>
  )
}
export default Document;