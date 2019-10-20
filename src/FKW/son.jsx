import React, { Component } from 'react'

export default class Son extends Component {
  constructor(){
    super()
    this.state = {
      is: false
    }
  }
  dz = () => {
    // this.setState({
    //   is:this.state.is ? '点赞👍' : '取消赞👍'
    // })
    alert('您已经点过赞了')
  }
  render() {
    return (
      <div id="flex1">
        <img
          src={this.props.src || require("./image/1-1.jpg")}
          width={this.props.width || "293"}
          height={this.props.height || "160"}
          alt="软件"
        />
        <p>{this.props.name || "----"}</p>
        <span>{this.props.data || "----"}</span>
        <span >{this.props.yuedu || "----"}</span>
        <span >{this.props.pinglun || "----"}</span>
        <span onClick={this.dz}  className='dz'>{this.props.dianzan || "----"}</span>
      </div>
    );
  }
}

