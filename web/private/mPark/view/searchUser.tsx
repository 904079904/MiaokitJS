import * as React from "react";
import "css!./styles/searchUser.css"

interface IProps {
}

interface IState {
  inputValue: string,
  listArr: Array<any>,
  tagIndex: number,
}

class SearchUser extends React.Component {
  public readonly state: Readonly<IState> = {
    inputValue: "������Ա", // �����Ĭ��ֵ
    listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    tagIndex: 0, // ѡ�еı�ǩ
  }

  // �۽�
  foucus() {
    if (this.state.inputValue === "������Ա") {
      this.setState({ inputValue: "" })
    }
  }

  // ʧ��
  blur() {
    if (this.state.inputValue === "") {
      this.setState({ inputValue: "������Ա" })
    }
  }

  // ����
  change(event) {
    this.setState({ inputValue: event.target.value })
  }

  // ѡ�б�ǩ
  clickTag(index) {
    this.setState({ tagIndex: index })
  }

  // ����
  goBack() {
    this.props.history.goBack()
  }

  render() {
    return (
      <div className="infoarea">
        <div className="infoarea-top">
          <div className="infoarea-title">����԰��</div>
          <div className="infoarea-child-top">
            <img src="./mpark/image/whiteBack.png" style={{ margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }} onClick={this.goBack.bind(this)} />
            <input className="infoarea-input" value={this.state.inputValue} onFocus={this.foucus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
            <img src="./mpark/image/search.png" className="infoarea-search-img" />
            <span className="infoarea-sreach-bt">����</span>
          </div>
        </div>
        <div className="search-user-list">
          {this.state.listArr.map((item, index) => {
            return (
              <div key={index} className="search-user-list-child" onClick={e => this.clickTag(index)}>
                <span style={{ float: "left" }}>С��</span>
                <div style={{ float: "right" }} >
                  <img src={this.state.tagIndex === index ? "./mpark/image/checked.png" : "./mpark/image/unchecked.png"} />
                </div>
              </div>
            )
          })
          }
          <div style={{ width: "100%", height: "350px", textAlign: "center", fontSize: "40px", lineHeight: "100px" }}>������~</div>
        </div>
        <div className="rent-room-detail-bottom">
          <div style={{ float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", color: "#6C6C6C", backgroundColor: "#F2F2F2" }}>ȡ��</div>
          <div style={{ float: "left", width: "50%", height: "100%", textAlign: "center", lineHeight: "130px", backgroundColor: "#0B8BF0", color: "#ffffff" }}>�ύ</div>
        </div>
      </div>
    )
  }
}

export default SearchUser;