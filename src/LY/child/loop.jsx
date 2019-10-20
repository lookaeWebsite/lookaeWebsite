import React, { Component } from "react";

import { Carousel } from "antd";
import "antd/dist/antd.css";
import "../../LY/index.css";

export default class Loop extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay className="ly_loop">
          <div>
            <img
              src="http://www.lookae.com/wp-content/uploads/2019/06/LDSFX2.jpg"
              alt="123"
            />
          </div>
          <div>
            <img
              src="http://www.lookae.com/wp-content/uploads/2019/10/Nik-Collection.jpg"
              alt="456"
            />
          </div>
          <div>
            <img
              src="http://www.lookae.com/wp-content/uploads/2019/10/WZRY-S17.jpg"
              alt="789"
            />
          </div>
          <div>
            <img
              src="http://www.lookae.com/wp-content/uploads/2018/04/Particular3-newT.jpg"
              alt="000"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}
