import * as React from "react";
import "css!./styles/personalCenter.css"
import { Link } from 'react-router-dom';


interface IProps {
}

interface IState {
  parkList: Array<any>,
  isSpread: boolean, // �Ƿ�չ��
  userInfo: string
}

class PersonalCenter extends React.Component {
  public readonly state: Readonly<IState> = {
    parkList: [
      { name: "ͳ�Ʊ���", imgUrl: "./mpark/image/statistics.png" }, { name: "�������", imgUrl: "./mpark/image/room.png" },
      { name: "�����ɷ�����", imgUrl: "./mpark/image/distribute.png" }, { name: "�ͷ��绰", imgUrl: "./mpark/image/service.png" },
      { name: "���̹���", imgUrl: "./mpark/image/attractInvestment.png" }
    ],
    isSpread: false,
    userInfo: "԰����Ա"
  }

  componentDidMount() {
    sessionStorage.setItem("userInfo", "԰����Ա")
  }

  // չ��
  spread() {
    this.setState({ isSpread: !this.state.isSpread })
  }

  // �л���Ա
  switchMember() {
    switch (this.state.userInfo) {
      case "԰����Ա":
        this.setState({ userInfo: "��ҵ����Ա" })
        sessionStorage.setItem("userInfo", "��ҵ����Ա")
        break;
      case "��ҵ����Ա":
        this.setState({ userInfo: "԰������Ա" })
        sessionStorage.setItem("userInfo", "԰������Ա")
        break;
      default:
        this.setState({ userInfo: "԰����Ա" })
        sessionStorage.setItem("userInfo", "԰����Ա")
    } 
  }

  render() {
    return (
      <div className="personal-center">
        <div className="personal-center-top">
          <div className="personal-center-title">����԰��</div>
          <div className="personal-center-info">
            <div className="personal-center-tx">
              <img src="./mpark/image/tx.jpg" className="personal-center-tx-img" />
            </div>
            <div style={{ float: "left", color: "#FFFFFF", fontSize: "42px", margin: "10px 0 0 36px"}}>
              <div>�û�����</div>
              <div style={{
                color: "#83d5ff", fontSize: "27px", backgroundColor: "#2e9cf3", width: "160px",
                height: "50px", textAlign: "center", lineHeight: "50px", borderRadius: "30px", marginTop: "20px"
              }} onClick={this.switchMember.bind(this)}>{this.state.userInfo}</div>
            </div>
            <Link to="/modificationAuthentication">
              <div className="personal-center-right">
                <img src="./mpark/image/w-right.png" />
              </div>
            </Link>
          </div>
        </div>
        <div className="personal-center-tag">
          <span style={{ margin: "0 50px 0 50px" }}>�ֻ�����</span><span>15578383040</span><span style={{ float: "right", marginRight: "50px", color: "#0B8BF0"}}>�޸�</span>
        </div>
        <div className="personal-center-tag">
          <span style={{ margin: "0 50px 0 50px" }}>������ҵ</span><span>�㽭������Ϣ�Ƽ����޹�˾</span><span style={{ float: "right", marginRight: "50px", color: "#0B8BF0" }}>�޸�</span>
        </div>
        <div className="personal-center-tag">
          <span style={{ margin: "0 50px 0 50px" }}>�ͷ��绰</span><span>0773-123456</span>
        </div>
        <div className="personal-center-my">
          <Link to="/workOrder">
            <div className="personal-center-my-left">
              <div style={{ fontSize: "40px", marginTop: "30px", color: "#333333" }}>5</div>
              <div style={{ fontSize: "40px", marginTop: "5px", color: "#6C6C6C" }}>�ҵĹ���</div>
            </div>
          </Link>
          <div className="personal-center-my-middle">
          </div>
          <Link to="/message">
            <div className="personal-center-my-right">
              <div style={{ fontSize: "40px", marginTop: "30px", color: "#333333"}}>6</div>
              <div style={{ fontSize: "40px", marginTop: "5px", color: "#6C6C6C" }}>�ҵ���Ϣ</div>
            </div>
          </Link>
        </div>
        {sessionStorage.getItem("userInfo") === "��ҵ����Ա" ?
          <div className="personal-center-enterprise">
            <Link to="/enterpriseInformation">
              <div className="personal-center-enterprise-child">
                <img src="./mpark/image/enterprise.png" width="70px" height="70px" style={{marginBottom: "10px"}} />
                <span style={{ fontSize: "40px", color: "#333333", marginLeft: "30px" }}>��ҵ��Ϣ����</span>
                <div style={{ float: "right", height: "100%", width: "120px", textAlign: "center" }}>
                  <img src="./mpark/image/right.png" />
                </div>
              </div>
            </Link>
            <Link to="/rentRoom">
              <div className="personal-center-enterprise-child">
                <img src="./mpark/image/let.png" width="70px" height="70px" style={{ marginBottom: "10px" }} />
                <span style={{ fontSize: "40px", color: "#333333", marginLeft: "30px" }}>���÷������</span>
                <div style={{ float: "right", height: "100%", width: "120px", textAlign: "center" }}>
                  <img src="./mpark/image/right.png" />
                </div>
              </div>
            </Link>
          </div> : null
        }

        {sessionStorage.getItem("userInfo") === "԰������Ա" ?
          <div className="personal-center-park">
            <div className="personal-center-enterprise-child">
              <img src="./mpark/image/park.png" width="60px" height="60px" style={{ marginBottom: "10px" }}/>
              <span style={{ fontSize: "40px", color: "#333333", marginLeft: "30px" }}>԰������</span>
              <div style={{ float: "right", height: "100%", width: "120px", textAlign: "center" }} onClick={ this.spread.bind(this) }>
                <img src="./mpark/image/right.png" className={this.state.isSpread ? "personal-center-bottom-img" : ""} />
              </div>
            </div>
            {this.state.isSpread ?
              <div style={{ backgroundColor: "#ffffff", overflow: "hidden", paddingTop: "30px" }}>
                {
                  this.state.parkList.map((item, index) => {
                    return <div key={index} className="personal-center-park-child">
                      <img src={item.imgUrl} width="110px" height="110px" />
                      <div style={{ marginTop: "10px" }}>{item.name}</div>
                    </div>
                  })
                }
              </div> : null
            }
          </div> : null
        }

      </div>
    )
  }
}

export default PersonalCenter;