import * as React from "react";
import "css!./styles/informationDetail.css"

interface IProps {
  history: any
}

interface IState {

}

export default class informationDetail extends React.Component {
  public readonly state: Readonly<IState> = {
  }

  public readonly props: Readonly<IProps> = {
    history: this.props.history
  }

  componentWillMount() {
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }


  render() {
    return (
      <div className="isay">
        {parseInt(sessionStorage.getItem("informationId")) === 0 ?
          <div>
            <div className="isay-back">
              <img src="./mpark/image/back.png" style={{ marginBottom: "25px" }} onClick={this.goBack.bind(this)} />
              <span style={{ color: "#6C6C6C", fontSize: "40px", marginLeft: "15px" }}>��������</span>
            </div>
            <div style={{ fontSize: "40px", width: "90%", color: "#333333", margin: "20px auto" }}>
              �����пƼ��ֹ��� 2020��ȹ������ר����Ŀ�걨��֪ͨ
            </div>
            <div style={{ color: "#949494", fontSize: "34px", margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ float: "left" }}>200�����</div>
              <div style={{ float: "right", marginRight: "50px" }}>2020-02-28 14:38:15 ����</div>
            </div>
            <div style={{ border: "2px solid #F2F2F2", marginTop: "25px" }}></div>
            <div style={{ fontSize: "40px", color: "#333333", width: "90%", margin: "30px auto" }}>
              <p style={{ fontSize: "40px" }}>����ص�λ��</p>
              ������������������������������������������������������������������
                  ��������������������������������������������������������������������������������
                  ������������������������������������������������������������������������������������������������������
            </div>
          </div> : null
        }
      </div>
    )
  }
}
