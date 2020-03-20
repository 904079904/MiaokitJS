import * as React from "react";
import "css!./styles/statisticalStatement.css"
import Ring from "ring"

interface IProps {
  history: any
}

interface IState {
  ringList: Array<any>,
  ringRadius: number,
  ringWidth: number,
  fontSize: number,
  RingName: string,
  RingNumber: number
}

class StatisticalStatement extends React.Component {
  public readonly props: Readonly<IProps> = {
    history: this.props.history
  }

  public readonly state: Readonly<IState> = {
    ringList: [
      { color: "pink", percentage: 0.5, position: 0, length: 0 }, { color: "yellow", percentage: 0.1, position: 0, length: 0 }, { color: "greenyellow", percentage: 0.25, position: 0, length: 0 },
      { color: "lavenderblush", percentage: 0.15, position: 0, length: 0 }
    ], // ����
    ringRadius: 300, // ���뾶
    ringWidth: 100, // �����
    fontSize: 50, // �����С
    RingName: "����", // ����
    RingNumber: 1200 // ����
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
        <div className="statistical-statementl-a">
          <Ring ringList={this.state.ringList} ringRadius={this.state.ringRadius} ringWidth={this.state.ringWidth} fontSize={this.state.fontSize}
          RingName={this.state.RingName} RingNumber={this.state.RingNumber}/>
        </div>
      </div>
    )
  }
}

export default StatisticalStatement;