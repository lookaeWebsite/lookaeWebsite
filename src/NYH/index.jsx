import React, { Component } from "react";
import Home from "./home";
import B from "./biji";

export default class index extends Component {
  constructor() {
    super();

    let hash = window.location.hash.substr(1);

    this.state = {
      page: "home"
    };

    // 常量值
    this.DICT = {
      HOME: "home",
      B: "biji"
    };
  }

  // 改变state值
  changeState = name => {
    // 修改state值
    this.setState({
      page: name
    });

    // 修改地址栏的hash值
    window.location.hash = name;
  };

  render() {
    const { HOME, B } = this.DICT;
    let MyCom = <Home />;
    switch (this.state.page) {
      case HOME:
        MyCom = <Home />;
        break;
      case B:
        MyCom = <B />;
        break;
    }

    return (
      <div>
        <div className="nyh-header">
          <div></div>
          <div>
            <ul>
              <li onClick={() => this.changeState(HOME)}>Home</li>
              <li onClick={() => this.changeState(B)}>Biji</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="nyh-center">{MyCom}</div>
        <div className="nyh-footer"></div>
      </div>
    );
  }
}
