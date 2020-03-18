import * as React from "react";
import "css!./styles/rentRoomDetail.css"

interface IProps {
}

interface IState {
  
}

class RentRoomDetail extends React.Component {
  public readonly state: Readonly<IState> = {
   
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="rent-room-detail">
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
        <div className="rent-room-detail-content">
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>��������</div><div style={{ color: "#333333", marginLeft: "30px", float: "left", width: "60%" }}>A��-1F-201��</div>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>ʹ��״̬</div><div style={{ color: "#333333", marginLeft: "30px", float: "left", width: "60%" }}>������</div>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>���õ�λ</div><div style={{ color: "#333333", marginLeft: "30px", float: "left", width: "60%" }}>�㽭������Ϣ�Ƽ����޹�˾</div>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>������</div><div style={{ color: "#333333", marginLeft: "30px", float: "left", width: "60%" }}>С��</div>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>��ϵ�绰</div><div style={{ color: "#333333", marginLeft: "30px", float: "left", width: "60%" }}>123456789</div>
          </div>
          <div style={{ overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ float: "left", width: "22%" }}>��������</div><div style={{ color: "#F53636", marginLeft: "30px", float: "left", width: "60%" }}>2020-03-20 ~ 2021-03-20</div>
          </div>
        </div>
      </div>
    )
  }
}

export default RentRoomDetail;