import * as React from "react";
import * as ReactDOM from "react-dom";

import Router from 'router';

import HomeTop from "HomeTop";
import AllBottom from "AllBottom";

class ParkInfo extends React.Component {
  constructor(props) {
    super(props);

  }


  public render() {
    return (
      <div>
        <HomeTop />
        <div className="parkInfo">
          <div className="parkInfoBox_title">
            <ParkInfoOne />
          </div>
          <div className="parkInfoBox_list">
            <ParkInfoTwo />
          </div>
          <div className="parkInfoBox_text">
            <ParkInfoThree />
          </div>
        </div>
        <AllBottom />
      </div>
    )
  }

  public state = {

  }
}

class ParkInfoOne extends React.Component {

  constructor(props) {
    super(props);


  }

  public componentDidMount() {
  }


  public render() {
    return (
      <div className="ParkInfoOne">
        <div className="ParkInfoOne_title">
          <img src="./fangliangbao/image/blueLogo.png" />
          <ul>
            <li style={{ "color": " rgb(23, 161, 230)", "font-weight": "bold" }}>Ʒ��԰��</li>
            <li>���ⷿԴ</li>
            <li>��Դ԰��</li>
          </ul>
        </div>
        <div className="ParkInfoOne_html">
          <p>
            <span>����</span> <span>Ʒ��԰��</span>
            <i className="jiange"> > </i>
              <span>Խ��</span>
           <i className="jiange"> > </i>
              <span>����·</span>
          </p>
        </div>
        <div className="ParkInfoOne_info">
          <p>��Ϣ��ҵ԰</p>
          <ul>
            <li><i className="iconfont " >&#xe83c;</i>�ղ�</li>
            <li><i className="iconfont " >&#xe83c;</i>����</li>
          </ul>
        </div>
      </div>


    )
  }

  public state = {

  }
}

class ParkInfoTwo extends React.Component {

  constructor(props) {
    super(props);


  }

  public componentDidMount() {
   // console.log(($(window).width())
     // $('.parkInfoBox_list').attr("margin", 'auto calc(' + $(window).width() / 95 + '%)')
      $(".parkInfoBox_list").css("margin","auto calc("  + $(window).width() / 95 + ")");
  }


  public render() {
    return (
      <div className="ParkInfoTwo">
        ParkInfoTwo
      </div>
    )
  }

  public state = {

  }
}

class ParkInfoThree extends React.Component {

  constructor(props) {
    super(props);


  }

  public componentDidMount() {
  }


  public render() {
    return (
      <div className="ParkInfoThree">
        ParkInfoThree
      </div>
    )
  }

  public state = {

  }
}

export default ParkInfo;