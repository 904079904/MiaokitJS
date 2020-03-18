import * as React from "react";
import "css!./styles/enterpriseInformation.css"

interface IProps {
}

interface IState {
  imgList: Array<any>,
  modifyState: boolean,
  inputEnterpriseIDValue: string,
  inputEnterpriseNameValue: string,
  inputEnterprisePositionValue: string,
  contactsValue: string,
  officialWebsiteValue: string,
  descriptionValue: string
}

class EnterpriseInformation extends React.Component {
  public readonly state: Readonly<IState> = {
    imgList: ["./mpark/image/tx.jpg", "./mpark/image/tx.jpg", "./mpark/image/tx.jpg", "./mpark/image/tx.jpg", "./mpark/image/tx.jpg"],
    modifyState: false, // �޸�״̬
    inputEnterpriseIDValue: "123456",
    inputEnterpriseNameValue: "��������ҵ����",
    inputEnterprisePositionValue: "��������ϸ��ַ",
    contactsValue: "��������ϵ������",
    officialWebsiteValue: "��������ҵ�ٷ���ַ",
    descriptionValue: "400����"
  }


  // ����
  goBack() {
    this.props.history.goBack()
  }
  // �޸�
  modify() {
    this.setState({ modifyState: !this.state.modifyState })
  }

  // �۽���ҵid
  focusEnterpriseID() {
    if (this.state.inputEnterpriseIDValue === "123456") {
      this.setState({ inputEnterpriseIDValue: "" })
    }
  }

  // ʧ����ҵid
  blurEnterpriseID() {
    if (this.state.inputEnterpriseIDValue === "") {
      this.setState({ inputEnterpriseIDValue: "123456" })
    }
  }

  // ������ҵid
  changeEnterpriseID(event) {
    this.setState({ inputEnterpriseIDValue: event.target.value })
  }

  // �۽���ҵ����
  focusEnterpriseName() {
    if (this.state.inputEnterpriseNameValue === "��������ҵ����") {
      this.setState({ inputEnterpriseNameValue: "" })
    }
  }

  // ʧ����ҵ����
  blurEnterpriseName() {
    if (this.state.inputEnterpriseNameValue === "") {
      this.setState({ inputEnterpriseNameValue: "��������ҵ����" })
    }
  }

  // ������ҵ����
  changeEnterpriseName(event) {
    this.setState({ inputEnterpriseNameValue: event.target.value })
  }

  // �۽���ҵλ��
  focusEnterprisePosition() {
    if (this.state.inputEnterprisePositionValue === "��������ϸ��ַ") {
      this.setState({ inputEnterprisePositionValue: "" })
    }
  }

  // ʧ����ҵλ��
  blurEnterprisePosition() {
    if (this.state.inputEnterprisePositionValue === "") {
      this.setState({ inputEnterprisePositionValue: "��������ϸ��ַ" })
    }
  }

  // ������ҵλ��
  changeEnterprisePosition(event) {
    this.setState({ inputEnterprisePositionValue: event.target.value })
  }

  // �۽���ϵ��
  focusContacts() {
    if (this.state.contactsValue === "��������ϵ������") {
      this.setState({ contactsValue: "" })
    }
  }

  // ʧ����ϵ��
  blurContacts() {
    if (this.state.contactsValue === "") {
      this.setState({ contactsValue: "��������ϵ������" })
    }
  }

  // ������ϵ��
  changeContacts(event) {
    this.setState({ contactsValue: event.target.value })
  }

  // �۽���ҵ����
  focusOfficialWebsite() {
    if (this.state.officialWebsiteValue === "��������ҵ�ٷ���ַ") {
      this.setState({ officialWebsiteValue: "" })
    }
  }

  // ʧ����ҵ����
  blurOfficialWebsite() {
    if (this.state.officialWebsiteValue === "") {
      this.setState({ officialWebsiteValue: "��������ҵ�ٷ���ַ" })
    }
  }

  // ������ҵ����
  changeOfficialWebsite(event) {
    this.setState({ officialWebsiteValue: event.target.value })
  }

  // �۽���ҵ����
  focusDescription() {
    if (this.state.descriptionValue === "400����") {
      this.setState({ descriptionValue: "" })
    }
  }

  // ʧ����ҵ����
  blurDescription() {
    if (this.state.descriptionValue === "") {
      this.setState({ descriptionValue: "400����" })
    }
  }

  // ������ҵ����
  changeDescription(event) {
    this.setState({ descriptionValue: event.target.value })
  }


  render() {
    return (
      <div className="enterprise-information">
        <div className="enterprise-information-top">
          <div className="enterprise-information-title">����԰��</div>
        </div>
        <div className="enterprise-information-back">
          <div style={{ float: "left" }} onClick={this.goBack.bind(this)}>
            <img src="./mpark/image/back.png" style={{ margin: "-10px 10px 0 0" }} />
            <span>��ҵ��Ϣ����</span>
          </div>
          {this.state.modifyState ? null :
            <span style={{ float: "right", marginRight: "50px", color: "#0B8BF0" }} onClick={this.modify.bind(this)}>�޸�</span>
          }
        </div>
        {this.state.modifyState ?
          <div>
            <div className="enterprise-information-id">
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", marginLeft: "30px", float: "left", width: "25%" }}>��ҵID</div>
              <input className="enterprise-information-id-input" value={this.state.inputEnterpriseIDValue}
                onFocus={this.focusEnterpriseID.bind(this)} onBlur={this.blurEnterpriseID.bind(this)} onChange={this.changeEnterpriseID.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>��ҵ����</div>
              <input className="enterprise-information-name-input" value={this.state.inputEnterpriseNameValue}
                onFocus={this.focusEnterpriseName.bind(this)} onBlur={this.blurEnterpriseName.bind(this)} onChange={this.changeEnterpriseName.bind(this)} />
            </div>
            <div className="enterprise-information-modify-photograph-tag">
              <div className="enterprise-information-photograph-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "160px", float: "left", width: "25%" }}>��ҵlogo</div>
              <div style={{ backgroundColor: "#F2F2F2", height: "120px", width: "120px", float: "left", lineHeight: "120px", textAlign: "center", marginTop: "20px" }}>
                <img src="./mpark/image/photograph.png" width="110px" height="110px" />
              </div>
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>��ҵλ��</div>
              <input className="enterprise-information-name-input" value={this.state.inputEnterprisePositionValue}
                onFocus={this.focusEnterprisePosition.bind(this)} onBlur={this.blurEnterprisePosition.bind(this)} onChange={this.changeEnterprisePosition.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>��ϵ��</div>
              <input className="enterprise-information-name-input" value={this.state.contactsValue}
                onFocus={this.focusContacts.bind(this)} onBlur={this.blurContacts.bind(this)} onChange={this.changeContacts.bind(this)} />
            </div>
            <div className="enterprise-information-modify-tag">
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%" }}>��ҵ����</div>
              <div style={{ color: "#6C6C6C", fontSize: "40px", lineHeight: "120px", width: "50%", float: "left" }}>��ѡ����ҵ����</div>
              <div style={{ float: "right",lineHeight: "120px", textAlign: "center", width: "60px" }}>
                <img src="./mpark/image/right.png" />
              </div>
            </div>
            <div className="enterprise-information-modify-tag">
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "25%", marginLeft: "30px" }}>��ҵ����</div>
              <input className="enterprise-information-name-input" value={this.state.officialWebsiteValue}
                onFocus={this.focusOfficialWebsite.bind(this)} onBlur={this.blurOfficialWebsite.bind(this)} onChange={this.changeOfficialWebsite.bind(this)} />
            </div>
            <div style={{width: "90%", height: "120px", margin: "auto", marginTop: "10px"}}>
              <div className="enterprise-information-star"></div>
              <div style={{ color: "#949494", fontSize: "40px", lineHeight: "120px", float: "left", width: "35%" }}>��ҵ��������:</div>
            </div>
            <textarea style={{ width: "84%", height: "400px", backgroundColor: "#F2F2F2", fontSize: "40px", color: "#949494", border: "none", outline: "none" }} value={this.state.descriptionValue}
              onFocus={this.focusDescription.bind(this)} onBlur={this.blurDescription.bind(this)} onChange={this.changeDescription.bind(this)}></textarea>
            <div className="enterprise-information-upload-a">
              <div>��ҵ���</div>
              <div style={{ width: "200px", height: "200px", backgroundColor: "#F2F2F2", textAlign: "center", marginTop: "30px" }}>
                <img src="./mpark/image/addPicture.png" width="70px" height="70px" style={{ marginTop: "35px" }} />
                <div style={{marginTop: "10px"}}>���</div>
              </div>
            </div>
            <div className="enterprise-information-upload-a">
              <div>��Ʒչʾ</div>
              <div style={{ width: "200px", height: "200px", backgroundColor: "#F2F2F2", textAlign: "center", marginTop: "30px" }}>
                <img src="./mpark/image/addPicture.png" width="70px" height="70px" style={{ marginTop: "35px" }} />
                <div style={{ marginTop: "10px" }}>���</div>
              </div>
            </div>
            <div className="enterprise-information-upload-b">
              <div>ȫ��չʾ</div>
              <div style={{ width: "200px", height: "200px", backgroundColor: "#F2F2F2", textAlign: "center", marginTop: "30px" }}>
                <img src="./mpark/image/addPicture.png" width="70px" height="70px" style={{ marginTop: "35px" }} />
                <div style={{ marginTop: "10px" }}>���</div>
              </div>
            </div>
            <div className="enterprise-information-submit" onClick={this.modify.bind(this)}>
              �ύ
            </div>
          </div> :
          <div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵID</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>123456</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵ����</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>�㽭������Ϣ�Ƽ����޹�˾</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵlogo</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left" }}>
                <img src="./mpark/image/logo.png" />
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵλ��</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>��������Ϣ��ҵ԰E��B��3¥</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ϵ��</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>XXX</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ϵ�绰</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>12345678910</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵ����</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>�Ƽ�����</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵ����</div><div style={{ color: "#333333", fontSize: "40px", float: "left" }}>www.yongtoc.com</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵ����</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>      �㽭������Ϣ�Ƽ����޹�˾���㽭����ʵҵ���޹�˾���µĿع��ӹ�˾��
        ��˾�ɼ����ͼ��ѧ�������Ӧ��ѧ��������������������ר����ɣ���һ��רע����3DΪչ�ַ�ʽ���������ռ��ϵ�ļ����ṩ�̣������ڳ�Ϊȫ������3D���ӻ���ҵ��Ϊ�ͻ��ͺ������ȫ���ṩ3D���ӻ������ķ���ʵ����ҵ��Ĳ��컯�������ơ�</div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��ҵ���</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.imgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item} width="100%" height="100%" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>��Ʒչʾ</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.imgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item} width="100%" height="100%" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div style={{ margin: "30px 0 0 50px", overflow: "hidden" }}>
              <div style={{ color: "#949494", fontSize: "40px", float: "left", width: "25%" }}>ȫ��չʾ</div>
              <div style={{ color: "#333333", fontSize: "40px", float: "left", width: "70%" }}>
                {
                  this.state.imgList.map((item, index) => {
                    return (
                      <div key={index} style={{ float: "left", width: "30%", height: "30%", margin: "0 20px 20px 0" }}>
                        <img src={item} width="100%" height="100%" />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default EnterpriseInformation;