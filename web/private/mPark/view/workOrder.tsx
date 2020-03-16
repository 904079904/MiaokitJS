import * as React from "react";
import "css!./styles/workOrder.css"

interface IProps {

}

interface IState {
  tagList: Array<any>,
  tagIndex: number,
  workOrderArray: Array<any>
}

class WorkOrder extends React.Component {
  public readonly state: Readonly<IState> = {
    tagList: ["ȫ��", "��ҵ��֤", "����Ԥ��", "�ڵ�����", "���߱���"],
    tagIndex: 0,
    workOrderArray: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  changeTag(index) {
    this.setState({ tagIndex: index })
  }

  render() {
    return (
      <div className="work-order">
        <div className="work-order-top">
          <div className="work-order-title">����԰��</div>
        </div>
        <div className="work-order-back">
          <img src="./mpark/image/back.png" style={{ margin: "-10px 10px 0 0" }}/>
          <span>�ҵĹ���</span>
        </div>
        <div className="work-order-tag">
          {
            this.state.tagList.map((item, index) => {
              return <div key={index} className={index === this.state.tagIndex ? "work-order-tag-child-add" : "work-order-tag-child"} onClick={e=>this.changeTag(index)}>
                {item}
              </div>
            })
          }
        </div>
        <div className="work-order-list">
          {
            this.state.workOrderArray.map((item, index) => {
              return <div key={index} className="work-order-list-child">
                <div style={{ overflow: "hidden", margin: "30px 0 0 40px" }}>
                  <div style={{ float: "left", fontSize: "40px", color: "#333333", fontWeight: "600" }}>��ҵ��֤����1</div>
                  <img style={{ float: "right", marginRight: "40px"}} src="./mpark/image/right.png"/>
                </div>
                <div style={{ fontSize: "38px", color: "#949494", margin: "30px 0 0 40px" }}>
                  �����ˣ�ĪXX
                </div>
                <div style={{ fontSize: "38px", color: "#949494", margin: "10px 0 0 40px", overflow: "hidden" }}>
                  <div style={{ float: "left" }}>����ʱ�䣺2020-02-28 14:38:15</div>
                  <div style={{
                    float: "right", backgroundColor: "#0BC491", color: "#ffffff", width: "130px", height: "55px", borderRadius: "50px",
                    marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
                  }}>��ͨ��</div>
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

export default WorkOrder;