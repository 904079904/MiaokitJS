import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import "css!./styles/view.css"




class Narrate extends React.Component {
  public constructor(props) {
    super(props);

  }

  
  public componentDidMount() {
    let audio = document.getElementById("audioTool");
    audio.onended = function () {
      console.log("��Ƶ�������");
    };
  }

  public audioClick(index, name , url) {
    console.log("handleSiblingsClick",index, name , url);
    //�Զ�������Ӧ  play();
    this.setState({
      activeType: index
    })
    console.log("activeType", this.state.activeType);

    let audio = document.getElementById("audioTool");

    audio.src = url;
    audio.play();
  }

  // ���ź���ͣ�л�
  public togglePlay(a) {
    var audio = document.getElementById('audioTool');
    if (audio !== null) {
      //��ⲥ���Ƿ�����ͣ.audio.paused �ڲ���������ʱ����false.
      console.log(audio.paused);
      if (audio.paused) {
        audio.play();//audio.play();// ������ǲ���  
      } else {
        audio.pause();// ���������ͣ
      }
    } 
  }

  public render() {
    return (
      <div>
       
        <audio controls id={"audioTool"}  >
          <source src="" />
        </audio>

        <RouterDOM.Link to="/" >
          <div className={"narrareClose"}>
            <span className="iconfont" style={{ "fontSize": "5rem", "color": "#fff" }}>&#xe7fa;</span>
          </div>
        </RouterDOM.Link>
        <div className={"narrareTitle"}>�Զ�����</div>
        <div className={"audioBox"}>
          <ul className={"flex-layout category-head"}>
            {this.state.parkAudio.map((i, index) => {
              return (
                <li className={this.state.activeType == index ? "flex-active" : "flex"} onClick={this.audioClick.bind(this, index, i.name, i.url)} data-index={index}>{i.name}</li>
                )
            })}
          </ul>
          <div className={"playBtn"} onClick={this.togglePlay.bind(this)}>
            <span className="iconfont" style={{ "fontSize": "5rem", "color": "#fff" }}>&#xe7fa;</span>
          </div>
        </div>
      </div>
      
    )
  }

  public state = {
    activeType: 0,
    parkAudio: [
      { name: "԰����ͨ", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
      { name: "԰������", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
      { name: "԰����ͨ", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
      { name: "԰������", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
    ]
  }
  //over
}

export default Narrate;