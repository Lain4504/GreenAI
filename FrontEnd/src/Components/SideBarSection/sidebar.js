import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

import logo from "../Assets/logo192.png";
import DarkMode from "../DarkMode/DarkMode";

/*Import icon from ant design */
import {
  HomeOutlined,
  PicRightOutlined, 
  QuestionCircleTwoTone,
  RadarChartOutlined,
  
} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>GreenAI</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/" className="menuLink">
              <HomeOutlined className="icon" />
              <span className="smallText">Home</span>
            </Link>
          </li>

          <li className="listItem">
            <a
              href="https://github.com/TieGarcia/GreenAI"
              className="menuLink"
            >
              <PicRightOutlined className="icon" />
              <span className="smallText">Document</span>
            </a>
          </li>

          <li className="listItem">
            <Link to="/launchapp" className="menuLink">
              <RadarChartOutlined className="icon" />
              <span className="smallText">Launch Bot</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
       
        <ul className="menuLists grid">
        <div className="icon-svg"> <DarkMode/> </div>
        
          <li className="listItem">
            <a href="" className="menuLink">

            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <QuestionCircleTwoTone className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle1"></div>

          <h3>Help Center</h3>
          <p>
            Having trouble in GreenAI. <br/> 
            .
          </p>
          <button className="btn"> Contact us by email</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
