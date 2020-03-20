import * as React from "react";
import "css!./styles/isay.css"

interface IProps {
}

interface IState {
  inputValue: string,
  tagArray: Array<any>,
  tagIndex: 0,
  textareaValue: string
}

class Isay extends React.Component<{ history:any}>{
  public readonly state: Readonly<IState> = {
    tagArray: [{ name: "��ѯ" }, { name: "����" }, { name: "Ͷ��" }, { name: "����" }],
    tagIndex: 0,
    inputValue: "��������3�����Ҳ��ܴ���33����", // ����Ĭ��ֵ
    textareaValue: "�뽫������������������200���ڣ�"
  }


  // �۽�
  inputFoucus() {
    if (this.state.inputValue === "��������3�����Ҳ��ܴ���33����") {
      this.setState({ inputValue: "" })
    }
  }

  // ʧ��
  inputBlur() {
    if (this.state.inputValue === "") {
      this.setState({ inputValue: "��������3�����Ҳ��ܴ���33����" })
    }
  }

  // ����
  inputChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  // �۽�
  textareaFoucus() {
    if (this.state.textareaValue === "�뽫������������������200���ڣ�") {
      this.setState({ textareaValue: "" })
    }
  }

  // ʧ��
  textareaBlur() {
    if (this.state.textareaValue === "") {
      this.setState({ textareaValue: "�뽫������������������200���ڣ�" })
    }
  }

  // ����
  textareaChange(event) {
    this.setState({ textareaValue: event.target.value })
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="isay">
        <div className="isay-top">
          <div className="isay-title">����԰��</div>
        </div>
        <div className="isay-back">
          <img src="./mpark/image/back.png" style={{ marginBottom: "25px" }} onClick={this.goBack.bind(this)} />
          <span style={{ color: "#6C6C6C", fontSize: "40px", marginLeft: "15px"}}>���л�˵</span>
        </div>
        <div style={{ fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" }}>
          <div className="isay-star"></div><div style={{ float: "left", marginLeft: "15px" }}>�������:</div>
        </div>
        <div className="isay-tag">
          {this.state.tagArray.map((item, index) => {
            return <div className="isay-tag-child" key={index}>
              <img src="./mpark/image/checked.png" style={{ margin: "-22px 20px 0 0" }} />
              <span style={{ fontSize: "40px", color: "#6C6C6C" }}>{item.name}</span>
            </div>
            })
          }
        </div>
        <div style={{ borderTop: "3px solid #F2F2F2", marginTop: "30px", margin: "0 30px 0 30px" }}></div>
        <div style={{ fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" }}>
          <div className="isay-star"></div><div style={{ float: "left", marginLeft: "15px" }}>��������:</div>
        </div>
        <div className="isay-theme">
          <input className="isay-theme-input" value={this.state.inputValue} onFocus={this.inputFoucus.bind(this)} onBlur={this.inputBlur.bind(this)} onChange={this.inputChange.bind(this)} />
        </div>
        <div style={{ fontSize: "40px", color: "#949494", margin: "30px 0 0 35px", overflow: "hidden" }}>
          <div className="isay-star"></div><div style={{ float: "left", marginLeft: "15px" }}>��������:</div>
        </div>
        <div className="isay-content">
          <textarea className="isay-content-textarea" value={this.state.textareaValue} onFocus={this.textareaFoucus.bind(this)} onBlur={this.textareaBlur.bind(this)} onChange={this.textareaChange.bind(this)} />
        </div>
        <div className="isay-submit">�ύ</div>
      </div>
    )
  }
}

export default Isay;