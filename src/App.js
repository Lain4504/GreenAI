import React from "react";  
import './App.css'
import SideBar from './Components/SideBarSection/sidebar'
import Body from './Components/BodySection/Body'
const App = () =>{
  return(
    <>
    <div className="container">
      <SideBar/>
      <Body/>

    </div>
    </>
  )
}
export default App;