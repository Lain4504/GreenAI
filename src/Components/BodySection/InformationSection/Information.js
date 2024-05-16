import React from "react";
import "./information.css";

import { Col, Row } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-chart-pie"> </i>,
    title: "High Performance",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "2",
    icon: <i className="fas fa-desktop"></i>,
    title: "Flat Design",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    icon: <i className="fas fa-database"></i>,
    title: "Simplified Workflow",
    content:
      "cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
];
const Information = () => {
  return (
    <div className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About us</h2>
          <p>Best Ai for trash</p>
        </div>
        <div className="contentHolder">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dolor ut lacus interdum suscipit. Mauris non risus vel nisi lacinia fringilla ut ac lacus
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col span={8} key={item.key}>
                <div className="content">
                  <div className="icon-flu">
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
