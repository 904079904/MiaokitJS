import * as React from "react";
import "css!./styles/informationChild.css"
import { Link } from 'react-router-dom';

interface IProps {
  history: any,
  location: any
}

interface IState {
  inputValue: string,
  listArr: Array<any>,
  tagIndex: number,
  tagArr: Array<any>,
}

export default class InformationChild extends React.Component {
  public readonly state: Readonly<IState> = {
    inputValue: "������Ա", // �����Ĭ��ֵ
    listArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    tagIndex: 0, // ѡ�еı�ǩ
    tagArr: [
      { tagList: ["���Ҽ�", "ʡ��", "�м�", "����"] }, { tagList: ["֪ͨ����", "԰����̬", "����ָ��", "����"] }, { tagList: ["ȫ��", "����", "��ҵ����", "���Ѿۻ�", "�����"] },
      { tagList: ["ȫ��", "�������", "��ֲ����", "��ҵ�ɹ�", "����"]}
    ],
  }

  public readonly props: Readonly<IProps> = {
    history: this.props.history,
    location: this.props.location
  }

  componentWillMount() {
    if (this.props.location.state) {
      sessionStorage.setItem("informationId", this.props.location.state.index)
    }
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

  // ����
  goDetail(index) {
    this.props.history.push({ pathname: "informationDetail", state: { index: index } })
  }

  render() {
    return (
      <div className="information-child">
        <div className="infoarea-top">
          <div className="infoarea-child-top">
            <img src="./park_m/image/whiteBack.png" style={{ margin: "0 10px 30px -15px", padding: "15px 15px 15px 15px" }} onClick={this.goBack.bind(this)} />
            <input className="infoarea-input" value={this.state.inputValue} onFocus={this.foucus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
            <img src="./park_m/image/search.png" className="infoarea-search-img" />
            <span className="search-user-bt">����</span>
          </div>
        </div>
        <div className="information-child-tag">
          {this.state.tagArr[sessionStorage.getItem("informationId")].tagList.map((item, index) => {
            return (
              <div key={index} className={index !== this.state.tagIndex ? "information-child-c" : "information-child-add-c"}
                onClick={e => this.clickTag(index)} style={{ width: 100 / this.state.tagArr[sessionStorage.getItem("informationId")].tagList.length + "%"}}>{item}</div>
            )
          })
          }
        </div>
        <div className="information-child-List">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index} className="information-child-List-child" onClick={e => this.goDetail(index)} >
                <div style={{ fontSize: "42px", color: "#333333", width: "90%", margin: "auto", paddingTop: "30px" }}>
                  �����пƼ��ֹ��� 2020��ȹ������ר����Ŀ�걨��֪ͨ
                </div>
                <div style={{
                  color: "#949494", fontSize: "36px", margin: "10px 0 0 50px", width: "90%", display: "-webkit-box", webkitLineClamp: "3", overflow: "hidden",
                  webkitBoxOrient: "vertical" }}>
                              ����ص�λ������ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô
                              ����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô
                              ����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô����ʲôʲô
                </div>
                <div style={{ color: "#949494", fontSize: "34px", margin: "30px 0 0 50px" }}>
                  <div style={{ float: "left" }}>200�����</div>
                  <div style={{ float: "right", marginRight: "50px" }}>2020-02-28 14:38:15 ����</div>
                </div>
              </div>  
            )
          })
          }
          < div style={{ width: "100%", height: "100px", textAlign: "center", fontSize: "40px", lineHeight: "100px" }}>������~</div>
        </div>
      </div>
    )
  }
}