import * as React from "react";
import "css!./styles/rentRoom.css"
import { Link } from 'react-router-dom';

interface IProps {
}

interface IState {
  workOrderArray: Array<any>,
  defaultIndex: number
}

class RentRoom extends React.Component {
  public readonly state: Readonly<IState> = {
    workOrderArray: ["A��-1F-201��", "A��-1F-202��", "A��-1F-203��"],
    defaultIndex: 0
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="rent-room">
        <div className="rent-room-top">
          <div className="rent-room-title">
            ����԰��
          </div>
        </div>
        <div className="rent-room-back">
          <div style={{ float: "left" }} onClick={this.goBack.bind(this)}>
            <img src="./mpark/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
            <span>���÷������</span>
          </div>
        </div>
        <div className="rent-room-list">
          {
            this.state.workOrderArray.map((item, index) => {
              return <Link to="/rentRoomDetail">
                <div key={index} className="rent-room-list-child">
                  <div style={{ overflow: "hidden", margin: "30px 0 0 40px" }}>
                    <div style={{ float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" }}>{item}</div>
                    <img style={{ float: "right", marginRight: "40px" }} src="./mpark/image/right.png" />
                  </div>
                  <div style={{ fontSize: "38px", color: "#949494", margin: "30px 0 0 40px" }}>
                    ʹ��״̬��<span style={{ marginLeft: "30px", color: "#333333" }}>������</span>
                  </div>
                  <div style={{ fontSize: "38px", color: "#949494", margin: "10px 0 0 40px", overflow: "hidden" }}>
                    <div style={{ float: "left" }}>�������ڣ�<span style={{ color: "#F53636", marginLeft: "28px" }}>2020-03-20 ~ 2021-03-20</span></div>
                    {this.state.defaultIndex === index ?
                      <div style={{
                        float: "right", backgroundColor: "#0BC491", color: "#ffffff", width: "160px", height: "55px", borderRadius: "50px",
                        marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                      }}>Ĭ��չʾ</div> : null
                    }
                  </div>
                </div>
              </Link>
            })
          }
          <Link to="/defaultRentRoom">
            <div style={{ width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "50px", color: "#0B8BF0" }}>ѡ��Ĭ��չʾ����</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default RentRoom;