import React from "react";
import Son from "./son";
import "./index.css";

export default class Index extends React.Component {
  render() {
    const imgs = [
      {
        src: require("./image/1-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/1-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/1-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/1-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/2-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/2-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/2-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/2-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/3-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/3-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/3-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/3-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/4-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/4-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/4-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/4-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      }
    ];
    return (
      <div className="flex ">
        <div className="div1">
          <h2>AE插件</h2>
          <p className="p1">After Effects 插件，免费下载AE插件</p>
        </div>
        <div>
          <a href=""></a>
        </div>
        {imgs.map((item, index) => {
          return (
            <Son
              src={item.src}
              name={item.name}
              data={item.data}
              yuedu={item.yuedu}
              pinglun={item.pinglun}
              dianzan={item.dianzan}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
