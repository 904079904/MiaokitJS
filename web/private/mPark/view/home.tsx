import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import BottomBtn from "bottomBtn";

import DataService from "dataService";
import GlobalAction from "compat";
import "css!./styles/iconfont.css";
import "css!./styles/view.css";

class Home extends React.Component {
  public constructor(props) {
    super(props)

    this.setToken = this.setToken.bind(this);
  }

  public componentDidMount() {
    BottomBtn.toggleIcon(1);

   //2 ��¼��ȡ token
   // this.dataService.login(this.setToken);
  }

  public dataService: DataService = new DataService();
  //set token
  public setToken(data) {
    console.log("setToken", data);
    localStorage.setItem("token", data.token);
  }

  public render() {
    return (
      <div >
        <TopBtn />
        <FoldBtn />
        {this.props.children}
        <BottomBtn history={this.props.history} />
      </div>
    )
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
    topViewBack: "",
    topIcon3info: 0,
    topIcon4info: 0,
    topIcon5info: 0,

    mapIcon: [
      { name: "��ͨ" },
      { name: "��Ȧ" },
      { name: "����վ" },
      { name: "ȫ��" },
      { name: "ͣ����" },
      { name: "��ͨ" },
    ]
  }



  //��ʾ�����ʶ
  public moreIcon(a) {
    console.log('toggleIconbox', a);
    this.setState({
      topView: "topView-big",
      moreIcon: "hide",
      topClose: "topClose",
      topIcon1: "iconBox-big",
      topIcon2: "iconBox-big",
      topIcon3: "iconBox-big",
      topIcon4: "iconBox-big",
      topIcon5: "iconBox-big",
      topViewBack:"topViewBack",
    })
    if (this.state.topIcon1 == "iconBoxIn" && this.state.topIcon2 == "iconBoxIn") {
      this.setState({
        topIcon1: "iconBox-bigIn",
        topIcon2: "iconBox-bigIn",
      })
    } else if (this.state.topIcon1 == "iconBoxIn") {
      console.log(this.state.topIcon1)
      this.setState({
        topIcon1: "iconBox-bigIn",
      })
    } else if (this.state.topIcon2 == "iconBoxIn") {
      console.log(this.state.topIcon1)
      this.setState({
        topIcon2: "iconBox-bigIn",
      })
    };
    if (this.state.topIcon3info == 1) {
      this.setState({
        topIcon3: "iconBox-bigIn",
      })
    } if (this.state.topIcon4info == 1) {
      this.setState({
        topIcon4: "iconBox-bigIn",
      })
    } if (this.state.topIcon5info == 1){
        this.setState({
          topIcon5: "iconBox-bigIn",
        })
    }
  }

  // �رո���icon
  public topClose(a) {
    console.log('topClose', a);
    this.setState({
      topView: "topView",
      moreIcon: "iconBox",
      topClose: "hide",
      topViewBack: " ",
    })
    if (this.state.topIcon1 == "iconBox-bigIn" && this.state.topIcon2 == "iconBox-bigIn") {
      this.setState({
        topIcon1: "iconBoxIn",
        topIcon2: "iconBoxIn",
      })
    } else if (this.state.topIcon1 == "iconBox-bigIn") {
      this.setState({
        topIcon1: "iconBoxIn",
        topIcon2: "iconBox",
      })
    } else if (this.state.topIcon1 == "iconBox-bigIn") {
      this.setState({
        topIcon1: "iconBox",
        topIcon2: "iconBoxIn",
      })
    } else {
      this.setState({
        topIcon1: "iconBox",
        topIcon2: "iconBox",
        topIcon3: "iconBox",
        topIcon4: "iconBox",
        topIcon5: "iconBox",
      })
    }
   
  }

  public globalAction: GlobalAction = new GlobalAction();

  // �л���ͼ��ʶ;0--���ر�ʶ�� 1--��ʾ��ʶ
  public switchMark(a, bInfo) {
    console.log('switchMark', a);
    if (a == "��ͨ") {
      // �жϵ�ǰ�Ƿ�Ϊѡ��״̬
      if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn") {
        if (this.state.topView == "topView-big") {
          this.setState({
            topIcon1: "iconBox-big",
          })
        } else {
          this.setState({
            topIcon1: "iconBox",
          })
        }
        this.globalAction.switchMark(a, 0);
      } else {
        if (this.state.topView == "topView-big") {
          this.setState({
            topIcon1: "iconBox-bigIn",
          })
        } else {
          this.setState({
            topIcon1: "iconBoxIn",
          })
        }
        this.globalAction.switchMark(a, 1);
      }
    } else if (a == "��Ȧ") {
      // �жϵ�ǰ�Ƿ�Ϊѡ��״̬
      if (this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn") {
        if (this.state.topView == "topView-big") {
          this.setState({
            topIcon2: "iconBox-big",
          })
        } else {
          this.setState({
            topIcon2: "iconBox",
          })
        }
        this.globalAction.switchMark(a, 0);
      } else {
        if (this.state.topView == "topView-big") {
          this.setState({
            topIcon2: "iconBox-bigIn",
          })
        } else {
          this.setState({
            topIcon2: "iconBoxIn",
          })
        }
        this.globalAction.switchMark(a, 1);
      }
    } else if (a == "������") {
      if (this.state.topIcon3 == "iconBox-big") {
        this.setState({
          topIcon3: "iconBox-bigIn",
          topIcon3info:1,
        })
        this.globalAction.switchMark(a, 1);
      } else {
        this.setState({
          topIcon3: "iconBox-big",
          topIcon3info: 0,
        })
        this.globalAction.switchMark(a, 0);
      }
    } else if (a == "ȫ��") {
      if (this.state.topIcon4 == "iconBox-big") {
        this.setState({
          topIcon4: "iconBox-bigIn",
          topIcon4info: 1,
        })
        this.globalAction.switchMark(a, 1);
      } else {
        this.setState({
          topIcon4: "iconBox-big",
          topIcon4info: 0,
        })
        this.globalAction.switchMark(a, 0);
      }
    } else if (a == "ͣ����") {
      if (this.state.topIcon5 == "iconBox-big") {
        this.setState({
          topIcon5: "iconBox-bigIn",
          topIcon5info: 1,
        })
        this.globalAction.switchMark(a, 1);
      } else {
        this.setState({
          topIcon5: "iconBox-big",
          topIcon5info: 0,
        })
        this.globalAction.switchMark(a, 0);
      }
    }

  }

  public render() {
    return (
      <div className={this.state.topViewBack}>
        <div className={this.state.topView}>
          <div className={this.state.topIcon1} onClick={this.switchMark.bind(this, "��ͨ")}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe816;</i>
            <p>��ͨ</p>
          </div>
          <div className={this.state.topIcon2} onClick={this.switchMark.bind(this, "��Ȧ")}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe81a;</i>
            <p>��Ȧ</p>
          </div>
          <div className={this.state.moreIcon} onClick={this.moreIcon.bind(this, 10)}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe819;</i>
            <p>����</p>
          </div>
          <div className={this.state.topIcon3} onClick={this.switchMark.bind(this, "������")}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe817;</i>
            <p>������</p>
          </div>
          <div className={this.state.topIcon4} onClick={this.switchMark.bind(this, "ȫ��")}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe818;</i>
            <p>ȫ��</p>
          </div>
          <div className={this.state.topIcon5} onClick={this.switchMark.bind(this, "ͣ����")}>
            <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe81b;</i>
            <p>ͣ����</p>
          </div>
          <div className={this.state.topClose} onClick={this.topClose.bind(this, 10)}>
            <i className="iconfont" style={{ "fontSize": "3rem" }}>&#xe81c;</i>
          </div>
        </div>

        <RouterDOM.Link to="/narrate" >
          <div className="playIconbox" style={{ "color": "#707070" }}>
            <div className={this.state.playIcon}>
              <i className="iconfont" style={{ "fontSize": "5rem" }}>&#xe81d;</i>
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
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }

  }

  public render() {
    return (
      <div className={this.state.foldView}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i> 
        </div>

        <div className={"foleIconbox"}>
          <RouterDOM.Link to="/parkCompany" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#1C90E2", "height": "6rem" }}>&#xe81e;</i> 
              <p>԰����ҵ</p>
            </div>

          </RouterDOM.Link>
          <RouterDOM.Link to="/findLease" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#866FF1", "height": "6rem"}}>&#xe824;</i>
              <p>�����ѯ</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/photograph" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#F0594C", "height": "6rem"}}>&#xe821;</i>
              <p>������</p>
            </div>
          </RouterDOM.Link>
         
          <RouterDOM.Link to="/applyPut" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#208FE6", "height": "6rem"}}>&#xe81f;</i>
              <p>�ڵ�����</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/bookSite" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#208FE6", "height": "6rem" }}>&#xe820;</i>
              <p>����Ԥ��</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/repairsOnline" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#26AC8F", "height": "6rem"}}>&#xe822;</i>
              <p>���߱���</p>
            </div>
          </RouterDOM.Link>
          <RouterDOM.Link to="/parking" >
            <div className={this.state.foleIcon} >
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#208FE6", "height": "6rem"}}>&#xe823;</i>
              <p>ͣ��ҵ��</p>
            </div>
          </RouterDOM.Link>
        </div>
      </div>
    )
  }

  public state = {
    foleIcon: "foleIcon",
    foldView: "foldView-part",
    iconfont: "iconfont iconfont-unturn",
  }
}



export default Home;