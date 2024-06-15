import React from "react";
import "./top.css";

import video from "../../Assets/30fps.mp4";
import img from "../../Assets/logo192.png";
import { IoMdSpeedometer } from "react-icons/io";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to GreenAI</h1>
          <p>Discover the wonders</p>
        </div>
      </div>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>CleanSort: Transforming Trash into Treasure</h1>
          <p>
            Leveraging the power of AI to turn waste into resources, protect the
            environment, <br /> and move towards a greener future.
          </p>
          <div className="buttons flex">
            <button className="btn"> Explore More </button>
            <button className="btn transparent"> Check bot now! </button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div src={img} className="imgDiv"></div>
          </div>

          <div className="sideBarCard">
            {/* <IoMdSpeedometer className="icon" /> */}
            {/* <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle1"></div>

              <h3>Help Center</h3>
              <p>
                Having trouble in GreenAI, please contact for more questions.
              </p>
              <button className="btn">Go to help Center</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
