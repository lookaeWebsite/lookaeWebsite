import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import Biji from "./biji";
import Home from "./home";

// 刘洋
import Loop from "../LY/child/loop";
import Footer from "../LY/child/footer";

const { Header } = Layout;

// 实例
export default class header extends React.Component {
  constructor() {
    super();

    let hash = window.location.hash.substr(1);

    this.state = {
      page: hash || "fcpxziyuan"
    };

    // 常量值
    this.DICT = {
      Home: "home",
      Biji: "biji"
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
    // 渲染下拉列表
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" href="#">
            Vue
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" href="#">
            React
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" href="#">
            Angular
          </a>
        </Menu.Item>
      </Menu>
    );

    // 更改内容的代码块
    // const { Home, Biji } = this.DICT;
    let MyCom = <Home />;
    switch (this.state.page) {
      case Home:
        MyCom = <Home />;
        break;
      case Biji:
        MyCom = <Biji />;
        break;
    }

    return (
      <div className="header">
        <Layout>
          <Header
            style={{
              position: "fixed",
              zIndex: 1,
              width: "100%"
            }}
            className="nyh-header"
          >
            <div className="nyh-logo">
              <img src="http://www.lookae.com/wp-content/uploads/2019/03/home-logo.png" />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{
                lineHeight: "64px"
              }}
            >
              <Menu.Item key="1">
                <div onClick={() => this.changeState(Home)}>首页</div>
              </Menu.Item>
              <Menu.Item key="2">
                <Dropdown overlay={menu}>
                  <div onClick={() => this.changeState(Biji)}>
                    <a className="ant-dropdown-link" href="#">
                      笔记
                      {/* <Icon type="down" /> */}
                    </a>
                  </div>
                </Dropdown>
              </Menu.Item>
            </Menu>
            <div></div>
            <div className="nyh-login">
              <div>登录/注册</div>
            </div>
          </Header>
          <div className="nyh-content" style={{ marginTop: "90px" }}>
            {MyCom}
          </div>
          <Footer />
        </Layout>
      </div>
    );
  }
}
