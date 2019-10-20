import React, { Component } from "react";
import AEziyuan from "../FKW/AEziyuan";
import Loop from "../LY/child/loop";

export default class home extends Component {
  render() {
    return (
      <div>
        <Loop />
        <div className="hr"></div>
        <AEziyuan />
      </div>
    );
  }
}
