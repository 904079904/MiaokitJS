import * as React from "react";
import "css!./styles/workOrderDetail.css"

interface IProps {

}

interface IState {
}

class workOrderDetail extends React.Component<{ history:any}> {
  public readonly state: Readonly<IState> = {

  }

  // ����
  goBack() {
    this.props.history.goBack()
  }


  render() {
    return (
      <div className="work-order-detail">
        <div className="work-order-detail-top">
          <div className="work-order-detail-title">����԰��</div>
        </div>
        <div className="work-order-detail-back" onClick={this.goBack.bind(this)}>
          <img src="./mpark/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
          <span>�ҵĹ���</span>
        </div>
        <div style={{ padding: "40px 0 0 50px", borderBottom: "4px solid #F2F2F2", width: "100%", height: "140px" }}>
          <span style={{ fontSize: "40px", fontWeight: "600"}}>����Ԥ������</span>
          <span style={{
            float: "right", backgroundColor: "#D50202", color: "#ffffff", width: "130px", height: "55px", borderRadius: "50px",
            marginRight: "40px", fontSize: "32px", textAlign: "center", lineHeight: "55px"
          }}>δͨ��</span>
        </div>
        <div style={{ margin: "30px 0 0 50px"}}>
          <span style={{ color: "#949494", fontSize: "40px" }}>������</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px"}}>С��</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>�ֻ�����</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>15578383040</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>������ҵ</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>�㽭������Ϣ�Ƽ����޹�˾</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>ʹ�ó���</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>A����¥217������</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��ʼ����</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>2020-2-20</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��ʼʱ��</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>9:30</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��������</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>2020-2-20</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>����ʱ��</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>17:30</span>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��������</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "60px" }}>��˾��ѵ����</span>
        </div>
        <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
          <div style={{ color: "#949494", fontSize: "40px", float: "left" }}>��������</div>
          <div style={{ color: "#333333", fontSize: "40px", marginLeft: "60px", float: "left", width: "70%" }}>2020��˾Ա����ѵ���鹫˾Ա����ѵ���鹫˾Ա����ѵ���鹫˾Ա</div>
        </div>
        <div style={{ fontSize: "40px", color: "#949494", float: "right", margin: "30px 50px 0 0" }}>��������ʱ�䣺2020-02-28 14:38:15</div>
        <div style={{ width: "100%", overflow: "hidden", textAlign: "center" }}>
          <div style={{ border: "2px solid #F2F2F2", width: "90%", margin: "30px 0 0 5%"}}></div>
        </div>
        <div style={{ margin: "30px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "25px", fontWeight: "600" }}>С��</span>
          <span style={{ color: "#949494", fontSize: "40px", marginLeft: "25px" }}>�����</span>
          <span style={{ color: "#333333", fontSize: "40px", marginLeft: "25px" }}>2020-02-28 17:38:15</span>
        </div>
        <div style={{ margin: "20px 0 0 50px" }}>
          <span style={{ color: "#949494", fontSize: "40px" }}>��˻ظ�:</span>
        </div>
        <div style={{ margin: "20px 0 0 50px" }}>
          <span style={{ color: "#333333", fontSize: "40px" }}>���ص�����Ҫά��ʩ�����޷�ʹ��</span>
        </div>
      </div>
    )
  }
}

export default workOrderDetail;