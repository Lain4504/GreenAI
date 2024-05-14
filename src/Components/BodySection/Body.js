import React from "react";
import './body.css';
import Top from './TopSection/top'
import Information from './InformationSection/Information'
// import Activity from './ActivitySection/activity'
const Body = () =>{
    return (
        <div className="mainContent">
            <Top/>
            <div className="bottom">
                <Information/>
                 {/* <Activity/>  */}
            </div>
        </div>
    )
}
export default Body;