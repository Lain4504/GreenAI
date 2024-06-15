import React from "react";
import "./body.css";
import Top from "./TopSection/top";
import Information from "./InformationSection/Information";
import { Collapse } from "antd";
const { Panel } = Collapse;
const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom">
        <Information />
      </div>
      <div className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>FAQ</h2>
            <p>An Overview and Technology Insight of the Project</p>{" "}
          </div>
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              header="What is the core technology of this project?"
              key="1" 
            >
              <p>
                The primary technology driving this project is YOLO (You Only
                Look Once), an advanced object detection algorithm in computer
                vision. With its real-time capabilities and high accuracy, YOLO
                enables our system to swiftly identify and classify diverse
                waste items, crucial for efficient waste management and
                recycling initiatives. YOLOv8 serves as the cornerstone of our
                technology stack, leveraging its advancements to excel in
                real-time object detection. This integration allows for swift
                and accurate identification and classification of various waste
                items, playing a pivotal role in optimizing waste management and
                enhancing recycling efforts.
              </p>
            </Panel>
            <Panel
              header="Where did the establishment of this project originate from?"
              key="2"
            >
              <p>
                This project is a scientific research project initiated by a
                group of students from FPT University in Quy Nhon. With the
                increasing problem of waste mismanagement, where trash is not
                properly sorted and disposed of by the public, we have developed
                this project utilizing YOLOv8 technology to detect and classify
                waste. Our aim is to address the growing concern of waste
                pollution and encourage proper waste management practices.
                Through this project, we hope to contribute to environmental
                conservation efforts and promote sustainable living.
              </p>
            </Panel>
            <Panel
              header="How will the development process of this project unfold?"
              key="3"
            >
              <p >
                This project will be continuously updated and developed in the
                future with additional content and features. We plan to enhance
                and expand its capabilities, adding new functionalities and
                improvements.
              </p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default Body;
