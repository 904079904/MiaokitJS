import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import BottomBtn from "bottomBtn";

import GlobalAction from "compat";
import "css!./styles/view.css";

class Home extends React.Component {
  public constructor(props) {
    super(props)
  }

  public componentDidMount() {
    BottomBtn.toggleIcon(1);
  }

  public render() {
    return (
      <div >
        <TopBtn />
        <FoldBtn />
        <BottomBtn />
      </div>
    )
  }


  public state = {

  }

  //over
}


// ������ť��
class TopBtn extends React.Component {
  public constructor(props) {
    super(props)


  }

  public state = {
    topView: "topView",
    topIcon1: "iconBox",
    topIcon2: "iconBox",
    topIcon3: "iconBox",
    topIcon4: "iconBox",
    topIcon5: "iconBox",
    topIcon: "iconBox",
    playIcon: "iconBox",
    moreIcon: "iconBox",
    topClose: "hide",
  }

  //��ʾ�����ʶ
  public moreIcon(a) {
    console.log('toggleIconbox', a);
    this.setState({
      topView: "topView-big",
      topIcon1: "iconBox-big",
      topIcon2: "iconBox-big",
      topIcon3: "iconBox-big",
      topIcon4: "iconBox-big",
      topIcon5: "iconBox-big",
      moreIcon: "hide",
      topClose: "topClose",
    });


  }

  // �رո���icon
  public topClose(a) {
    console.log('topClose', a);
    this.setState({
      topView: "topView",
      topIcon1: "iconBox",
      topIcon2: "iconBox",
      topIcon3: "iconBox",
      topIcon4: "iconBox",
      topIcon5: "iconBox",
      moreIcon: "iconBox",
      topClose: "hide",
    })
  }

  public globalAction: GlobalAction = new GlobalAction();

  // �л���ͼ��ʶ
  public switchMark(a) {
    // console.log('switchMark', a);
    this.globalAction.switchMark(a);
    if (a == "��ͨ") {
      if (this.state.topClose == "topClose") {
        this.setState({
          topIcon1: "iconBox-bigIn",
          topIcon2: "iconBox-big",
          topIcon3: "iconBox-big",
          topIcon4: "iconBox-big",
          topIcon5: "iconBox-big",
          topIcon: "iconBox-big",
        })
      } else {
        this.setState({
          topIcon1: "iconBoxIn",
          topIcon2: "iconBox",
          topIcon3: "iconBox",
          topIcon4: "iconBox",
          topIcon5: "iconBox",
          topIcon: "iconBox",
        })
      }

    } else if (a == "��Ȧ") {
      if (this.state.topClose == "topClose") {
        this.setState({
          topIcon1: "iconBox-big",
          topIcon2: "iconBox-bigIn",
          topIcon3: "iconBox-big",
          topIcon4: "iconBox-big",
          topIcon5: "iconBox-big",
          topIcon: "iconBox-big",
        })
      } else {
        this.setState({
          topIcon1: "iconBox",
          topIcon2: "iconBoxIn",
          topIcon3: "iconBox",
          topIcon4: "iconBox",
          topIcon5: "iconBox",
          topIcon: "iconBox",
        })
      }
    } else if (a == "������") {
      this.setState({
        topIcon1: "iconBox-big",
        topIcon2: "iconBox-big",
        topIcon3: "iconBox-bigIn",
        topIcon4: "iconBox-big",
        topIcon5: "iconBox-big",
        topIcon: "iconBox",
      })
    } else if (a == "ȫ��") {
      this.setState({
        topIcon1: "iconBox-big",
        topIcon2: "iconBox-big",
        topIcon3: "iconBox-big",
        topIcon4: "iconBox-bigIn",
        topIcon5: "iconBox-big",
        topIcon: "iconBox",
      })
    } else if (a == "ͣ����") {
      this.setState({
        topIcon1: "iconBox-big",
        topIcon2: "iconBox-big",
        topIcon3: "iconBox-big",
        topIcon4: "iconBox-big",
        topIcon5: "iconBox-bigIn",
        topIcon: "iconBox",
      })
    }

  }

  public render() {
    return (
      <div>
        <div className={this.state.topView}>
          <div className={this.state.topIcon1} onClick={this.switchMark.bind(this, "��ͨ")}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>��ͨ</p>
          </div>
          <div className={this.state.topIcon2} onClick={this.switchMark.bind(this, "��Ȧ")}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>��Ȧ</p>
          </div>
          <div className={this.state.moreIcon} onClick={this.moreIcon.bind(this, 10)}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>����</p>
          </div>
          <div className={this.state.topIcon3} onClick={this.switchMark.bind(this, "������")}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>������</p>
          </div>
          <div className={this.state.topIcon4} onClick={this.switchMark.bind(this, "ȫ��")}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>ȫ��</p>
          </div>
          <div className={this.state.topIcon5} onClick={this.switchMark.bind(this, "ͣ����")}>
            <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
            <p>ͣ����</p>
          </div>
          <div className={this.state.topClose} onClick={this.topClose.bind(this, 10)}>
            <span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe7fa;</span>
          </div>
        </div>

        <RouterDOM.Link to="/narrate" >
          <div className="playIconbox">
            <div className={this.state.playIcon}>
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>����</p>
            </div>
          </div>
        </RouterDOM.Link>
      </div>

    )
  }
}

// �۵���ť��
class FoldBtn extends React.Component {
  public constructor(props) {
    super(props)


  }

  public state = {
    foleIcon: "foleIcon",
    foldView:"foldView-part"
  }

  public toggleFold() {
    if (this.state.foldView == "foldView") {
      this.setState({
        foldView: " foldView-part"
      })
    } else {
      this.setState({
        foldView: "foldView"
      })
    }
  
   
  }

  public render() {
    return (
      <div className={this.state.foldView}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <span style={{ "fontSize": "5rem" }}>--</span>
        </div>

        <div className={"foleIconbox"}>

          <RouterDOM.Link to="/parkCompany" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>԰����ҵ</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/photograph" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>������</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/findLease" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>�����ѯ</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/applyPut" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>�ڵ�����</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/bookSite" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>����Ԥ��</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/repairsOnline" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>���߱���</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/parking" >
            <div className={this.state.foleIcon} >
              <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
              <p>ͣ��ҵ��</p>
            </div>
          </RouterDOM.Link>
        </div>
      </div>
    )
  }
}



export default Home;