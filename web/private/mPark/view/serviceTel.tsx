import * as React from "react";
import "css!./styles/serviceTel.css"

interface IProps {
}

interface IState {
}

class ServiceTel extends React.Component {
  public readonly state: Readonly<IState> = {
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
            <span>�ͷ��绰</span>
          </div>
        </div>
        <div className="service-tel">
          <span>�ͷ��绰</span><span style={{marginLeft: "90px"}}>0773-123456</span><span style={{ float: "right", color: "#0B8BF0", marginRight: "50px" }}>�޸�</span>
        </div>
      </div>
    )
  }
}

export default ServiceTel;