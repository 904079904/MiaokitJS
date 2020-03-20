import * as React from "react";
import "css!./styles/message.css"

interface IProps {
}

interface IState {
  tagList: Array<any>,
  tagIndex: number,
  workOrderArray: Array<any>
}

class Message extends React.Component<{ history: any }>  {
  public readonly state: Readonly<IState> = {
    tagList: ["ȫ��", "�������޵���", "��λ����", "����"],
    tagIndex: 0,
    workOrderArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  changeTag(index) {
    this.setState({ tagIndex: index })
  }
  
  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="work-order">
        <div className="work-order-top">
          <div className="work-order-title">����԰��</div>
        </div>
        <div className="work-order-back" onClick={this.goBack.bind(this)}>
          <img src="./mpark/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
          <span>�ҵ���Ϣ</span>
        </div>
        <div className="work-order-tag">
          {
            this.state.tagList.map((item, index) => {
              return <div key={index} className={index === this.state.tagIndex ? "work-order-tag-child-add" : "work-order-tag-child"} onClick={e => this.changeTag(index)}>
                {item}
              </div>
            })
          }
        </div>
        <div className="work-order-list">
          {
            this.state.workOrderArray.map((item, index) => {
              return  <div key={index} className="work-order-list-child">
                <div style={{ overflow: "hidden", margin: "30px 0 0 40px" }}>
                  <div style={{ float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" }}>�������޼�������</div>
                </div>
                <div style={{ fontSize: "38px", color: "#DB0A0A", margin: "30px 0 0 40px" }}>
                  ����λ�ã���Ϣ��ҵ԰A��215��
                </div>
                <div style={{ fontSize: "38px", color: "#DB0A0A", margin: "10px 0 0 40px" }}>
                  ����ʱ�䣺2020-03-28 14:38:15
                </div>
              </div>
            })
          }
          <div style={{ width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginTop: "30px" }}>������~</div>
        </div>
      </div>
    )
  }
}

export default Message;