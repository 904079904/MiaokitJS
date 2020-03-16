import * as React from "react";
import "css!./styles/information.css"

interface IProps {

}

interface IState {
  informationList: Array<any>
}

class Information extends React.Component {
  public readonly state: Readonly<IState> = {
    informationList: [
      { name: "�Ż�����", imgUrl: "./mpark/image/preferentialPolicy.png" }, { name: "԰����ѯ", imgUrl: "./mpark/image/information.png" },
      { name: "԰���", imgUrl: "./mpark/image/activity.png" }, { name: "����������", imgUrl: "./mpark/image/thirdParty.png" }
    ]
  }

  render() {
    return (
      <div className="information">
        <div className="information-top">
          <div className="information-title">����԰��</div>
        </div>
        <div className="information-headline">
          <div style={{ float: "left", width: "25%", height: "100%" }}><img src="./mpark/image/headline.png" style={{marginBottom: "14px"}} /></div>
          <div style={{ float: "left", width: "75%", height: "100%", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>���ڹ�����Ϣ��ҵ԰԰����ҵ��������Ҫ֪ͨ����������</div>
        </div>
        <div className="information-content">
          {this.state.informationList.map((item, index) => {
            return <div className="information-content-child" key={index}>
              <img src={item.imgUrl} width="130px" height="130px" />
              <div style={{ marginTop: "20px" }}>{item.name}</div>
            </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Information;