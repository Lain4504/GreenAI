import React from "react";
import "./information.css";

import { Col, Row } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"> </i>,
    title: "High Performance",
    content:
      "Discover the epitome of efficiency with our High Performance system, engineered to exceed expectations and deliver unparalleled speed and reliability, ensuring your tasks are completed with precision and agility.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
    "Immerse yourself in the sleek elegance of our Flat Design aesthetic, where form meets function seamlessly, offering a visually stunning and intuitive interface that enhances your user experience to new heights."
    ,
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
    "Embark on a journey of effortless productivity with our Simplified Workflow solution, designed to streamline complex processes into intuitive, easy-to-follow steps, empowering you to accomplish more with less effort and time.",
  },
];
const Information = () => {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About us</h2>
          <p> Your premier AI solution for efficient and accurate trash classification.
         </p>
        </div>
        <div className="contentHolder">
          <p>
          In the ever-evolving landscape of environmental consciousness, CleanSort stands as a beacon of innovation, harnessing the power of Artificial Intelligence to revolutionize 
          waste classification. With our cutting-edge technology, we're not just sorting garbage; we're paving the way for a sustainable future.
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{span: 8}} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                    </div>
               <h3>    {item.title}</h3>
                <p>   {item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Information;
