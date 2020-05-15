
import * as React from "react";
import DataService from "dataService";

interface IProps {
  location: any,
  history: any
}

interface IState {
  isElevator: boolean,
  lift: number,
}

export default class RoomBaseUpdate extends React.Component<{ history: any }>{
  public readonly props: Readonly<IProps> = {
    location: this.props.location,
    history: this.props.history
  }

  public readonly state: Readonly<IState> = {
    isElevator: false��
    lift: JSON.parse(sessionStorage.getItem("roomInfo"))[0].lift, // ����

  }

  public dataService: DataService = new DataService()


  // ����
  goBack() {
    this.props.history.goBack()
  }

  changeElevator() {
    this.setState({ isElevator: !this.state.isElevator })
  }

  closeElevator(flag) {
    this.setState({ isElevator: false, lift: flag ? 1 : 0 })
  }

  // ����
  changeb(event) {
  }

  // �ύ
  submit() {
    let obj = {
      state: this.state.state,
      companyId: this.state.companyId,
      companyName: this.state.companyName,
      user: this.state.user,
      phone: this.state.phone,
      rentDate: this.state.rentDate,
      rentEndDate: this.state.rentEndDate,
      defaultRoom: JSON.parse(sessionStorage.getItem("roomInfo"))[0].use_info.default_room
    }
    for (var key in obj) {
      if (obj[key] === "") {
        return alert("���������������")
      }
    }
    this.dataService.saveRoomRentInfo(this.callBackSaveRoomRentInfo.bind(this), obj)
  }



  render() {
    return (
      <div className="rent-room" style={{ backgroundColor: "#ffffff" }}>
        <div className="rent-room-back">
          <div style={{ float: "left", width: "100%" }} onClick={this.goBack.bind(this)}>
            <img src="./park_m/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
            <span>���������Ϣ�༭-</span><span>{sessionStorage.getItem("roomName")}</span><span>-������Ϣ�޸�</span>
          </div>
        </div>
        <div style={{ width: "100%", height: "15px", backgroundColor: "#F2F2F2" }}></div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>�������</div>
          <input onChange={this.changeb.bind(this)} value=""
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>�ܹ�¥��</div>
          <input onChange={this.changeb.bind(this)} value=""
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%" }}>����¥��</div>
          <input onChange={this.changeb.bind(this)} value=""
            style={{ float: "left", width: "65%", height: "120px", border: "none", outline: "none", marginTop: "-1px", paddingLeft: "30px", color: "#6C6C6C" }}
          />
        </div>
        <div className="service-tel" style={{ fontSize: "40px", color: "#333333", borderBottom: "2px solid #F2F2F2" }} onClick={this.changeElevator.bind(this)}>
          <div className="enterprise-information-star"></div>
          <div style={{ color: "#949494", height: "80px", float: "left", width: "30%", marginRight: "30px" }}>װ�����</div>
          <div style={{ color: "#6C6C6C", float: "left" }}>{this.state.lift == 1 ? "��" : "û��"}</div>
          <div style={{ height: "100%", float: "right" }}>
            <img src="./park_m/image/right.png" style={{ margin: "-10px 40px 0 0", transform: this.state.isElevator ? "rotate(90deg)" : "" }} />
          </div>
          {this.state.isElevator ?
            <div style={{ position: "relative", top: "120px", width: "97%", height: "200px", backgroundColor: "#ffffff", border: "1px solid #797272" }}>
              <div style={{ width: "500px", height: "100px", margin: "auto", paddingRight: "100px" }} onClick={e => this.closeElevator(true)}>��</div>
              <div style={{ width: "500px", height: "100px", margin: "auto", paddingRight: "100px" }} onClick={e => this.closeElevator(false)}>û��</div>
            </div> : null
          }
        </div>
        <div onClick={this.submit.bind(this)}
          style={{ width: "100%", height: "150px", textAlign: "center", lineHeight: "150px", color: "#ffffff", backgroundColor: "#0B8BF0", position: "fixed", bottom: 0, fontSize: "50px" }}>
          �ύ
        </div> 
      </div>
    )
  }
}