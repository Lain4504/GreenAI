import React from "react";
import "./top.css";

import video from "../../Assets/30fps.mp4";
import img from "../../Assets/logo192.png"
import {IoMdSpeedometer} from "react-icons/io";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to GreenAI .</h1>
          <p>Hello User, Welcome back !</p>
        </div>

     
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create an AI app to track garbage</h1>
          <p>The world's fast growing AI</p>
          <div className="buttons flex">
            <button className="btn"> Explore More </button>
            <button className="btn transparent"> Top Sellers </button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
          

            <div src={img} className="imgDiv">

            </div>
          </div>

          <div className="sideBarCard">
        <IoMdSpeedometer className="icon" />
         <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle1"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in Planti, please contact us from for more questions
            .
          </p>
          <button className="btn">Go to help center</button>
        </div> 
        
      </div>
        </div>

      </div>
    </div>
  );
};
export default Top;
