import React from "react";
import Son from "./son";
import "./index.css";

export default class Index extends React.Component {
  render() {
    const imgs = [
      {
        src: require("./image/11-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/11-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/11-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/11-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/12-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/12-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/12-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/12-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/13-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/13-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/13-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/13-4.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/14-1.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/14-2.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/14-3.jpg"),
        name:
          "AE/PR/AME插件-特殊编码加速输出渲染插件 AfterCodecs v1.7.4 Win破解版+使用教程",
        data: "2019/10/18",
        yuedu: "阅读(1.31K)+",
        pinglun: "评论(1)",
        dianzan: "点赞👍"
      },
      {
        src: require("./image/14-4.jpg"),
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
          <h2 className="h21">FCPX</h2>
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
