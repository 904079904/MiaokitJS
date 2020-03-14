import * as React from "react";
import * as ReactDOM from "react-dom";
import "css!./styles/index.css"
import { Link } from 'react-router-dom';
import Router from 'router';
import ParkCompany from "parkCompany";
import FindLease from "findLease";

interface IProps {
}

interface IState {
  inputValue: string,
  city: string,
  parkArr: Array<any>,
  tagArr: Array<any>
}


class Index extends React.Component<{ history: any }>{
  constructor(props) {
    super(props);

    Index.g_pIns = this;
  }
  public static g_pIns: Index = null;

  public readonly state: Readonly<IState> = {
    inputValue: "������԰������", // �����Ĭ��ֵ
    city: "", // ����
    parkArr: [1, 2, 3, 4, 5, 6, 7, 8, 9], // ԰��
    tagArr: ["������Ϣ", "���¼���", "���̷���"] // ��ǩ
  }

  componentDidMount() {
    let _this = this
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function (r) {
      if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        console.log(r.address.city)
        _this.setState({city: r.address.city})
      }
      else {
        if (this.getStatus() === 6) {
          console.log("û��Ȩ��")
        }
        if (this.getStatus() === 8) {
          console.log("���ӳ�ʱ")
        }
      }
    });
  }

  // �۽�
  foucus() {
    if (this.state.inputValue === "������԰������") {
      this.setState({inputValue: ""})
    }
  }

  // ʧ��
  blur() {
    if (this.state.inputValue === "") {
      this.setState({ inputValue: "������԰������" })
    }
  }

  // ����
  change(event) {
    this.setState({inputValue: event.target.value})
  }

  render() {
    return (
      <div className="index">
        <div className="index-top">����԰��</div>
        <div className="index-input-div">
          <div className="index-child-left">
            <input className="index-input" value={this.state.inputValue} onFocus={this.foucus.bind(this)} onBlur={this.blur.bind(this)} onChange={this.change.bind(this)}/>
            <img src="./mpark/image/search.png" className="index-search-img" />
          </div>
          <div className="index-child-right">
            <span >{this.state.city}</span>
            <img src="./mpark/image/bottom.png" width="50px" height="50px" style={{marginTop: "-10px"}} />
          </div>
        </div>
        <div className="index-number">
          <img src="./mpark/image/tower.png" className="tower-img" />����<span style={{color: "#0B8BF0", margin: "0 15px 0 15px"}}>15</span>��԰������
        </div>
        <div className="index-park">
          {this.state.parkArr.map((item, index) => {
            return <Link to="/home"><div className="index-child-park" key={index}>
              <div className="index-child-park-left"><img src="./mpark/image/a.jpg" className="park-img" /></div>
              <div className="index-child-park-right">
                <div className="index-park-name">���ֹ��Ҹ�������Ϣ��ҵ԰</div>
                <div className="index-park-position"><img src="./mpark/image/position.png" width="45px" height="40px" style={{ marginTop: "-18px" }} />
                  <span className="index-park-position-name">���ָ���������·D-12��</span>
                </div>
                <div className="index-tag">
                  {this.state.tagArr.map((item, index) => {
                    return <div key={index} className="index-tag-child">{item}</div>
                  })
                  }
                </div>
              </div>
              <div className="index-child-park-end">
                <div className="index-distance">10.5km</div>
              </div>
            </div></Link>
            })
          }
          <div style={{width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginLeft: "-25px"}}>������~</div>
        </div>
        <div className="index-bottom-logo">
          <img src="./mpark/image/bottomLogo.png" className="index-bottom-logo-img" />
        </div>
      </div>
      )
  }

  //���ⲿ���� -- ������ҵid��ˢ������ҵ��Ϣ���ݣ�
  public refreshCompanyinfo(id) {
    this.props.history.push('/parkCompany');
    ParkCompany.getCompanyinfo(id);
  }

  public refreshLeaseinfo(id) {
    this.props.history.push('/findLease');
    FindLease.getLeaseinfoByroomid(id);
  }

  public addapplyPut(a) {
    this.props.history.push('/applyPut');
    ApplyPut.addapplyPut(a);
  }
}



export default Index;

ReactDOM.render(
  <Router/>
  , document.getElementById('viewContainer'));


