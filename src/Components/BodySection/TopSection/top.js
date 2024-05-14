import React from "react";
import "./top.css";

import { BiSearchAlt } from "react-icons/bi";
import video from "../../Assets/30fps.mp4";
import img from "../../Assets/logo192.png"
import {IoMdSpeedometer} from "react-icons/io";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Pranti .</h1>
          <p>Hello IsraTech, Welcome back !</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <BiSearchAlt className="icon" />
          <BiSearchAlt className="icon" />
          <div className="adminImage">
            <img src="" alt="Admin Image" />
          </div>
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
            <div className="textDiv">
              <h1> My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Order </small>
                </span>
                <span>
                  Today <br /> <small>4 Order </small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders
              </span>

            </div>



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
