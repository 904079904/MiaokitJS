import * as React from "react";
import "css!./styles/modificationAuthentication.css"

interface IProps {
}

interface IState {
  inputValue: string
}

class ModificationAuthentication extends React.Component<{ history:any}> {
  public readonly state: Readonly<IState> = {
    inputValue: "�û��ǳ�XXX"
  }

  // �۽�
  focus() {
    if (this.state.inputValue === "�û��ǳ�XXX") {
      this.setState({ inputValue: "" })
    }
  }

  // ʧ��
  blur() {
    if (this.state.inputValue === "") {
      this.setState({ inputValue: "�û��ǳ�XXX" })
    }
  }

  // ����
  change(event) {
    this.setState({ inputValue: event.target.value })
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="modification-authentication">
        <div className="modification-authentication-top">
          <div className="modification-authentication-title">����԰��</div>
        </div>
        <div className="personal-center-tag">
          <div style={{ paddingLeft: "30px", float: "left" }} onClick={this.goBack.bind(this)}>
            <img src="./mpark/image/right.png" style={{ transform: "rotate(180deg)", marginBottom: "10px" }} />
            <span style={{ color: "#6C6C6C" }}>�޸���֤</span>
          </div>
        </div>
        <div className="modification-authentication-tag" style={{marginTop: "15px"}}>
          <div style={{ paddingLeft: "40px", float: "left" }}>
            <span style={{ color: "#333333", fontSize: "42px" }}>�û��ǳ�</span>
            <input value={this.state.inputValue} className="modification-authentication-input"
              onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
          </div>
          <div style={{ float: "right", marginRight: "50px", color: "#0B8BF0" }}>�޸�</div>
        </div>
        <div className="modification-authentication-tag">
          <div style={{ paddingLeft: "40px", float: "left" }}>
            <span style={{ color: "#333333", fontSize: "42px" }}>�����֤</span>
            <span style={{ color: "#949494", fontSize: "42px", marginLeft: "50px" }}>��֤��Ϊ����Ա</span>
          </div>
          <div style={{ float: "right", marginRight: "50px", color: "#0B8BF0" }}>��֤</div>
        </div>
      </div>
    )
  }
}

export default ModificationAuthentication;