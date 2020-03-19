import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import DataService from "dataService";

class Parking extends React.Component {
  public constructor(props) {
    super(props);

    Parking.infoClick = this.infoClick.bind(this);
  }

  public toggleFold() {
    console.log("parkingcss");
    if (this.state.parkingcss == "parking") {
      this.setState({
        parkingcss: "parking-part",
      })
    } else {
      this.setState({
        parkingcss: "parking",
      })
    }
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }
  }

  // �л���ʾ�����
  static infoClick(indexof) { };
  public infoClick(indexof) {
    console.log("infoClick", indexof);
    this.setState({
      infoli: indexof,
    });
  }

  public render() {
    return (
      <div className="parkingBox">
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <span className="iconfont companyInfoicon">&#xe83b;</span>
          </RouterDOM.Link>
          <span>ͣ��ҵ��</span>
        </p>

        <div className={this.state.parkingcss}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <ul className="parkingul">
            <li onClick={this.infoClick.bind(this, 0)}>
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#00A447" }}>&#xe832;</i>
              <p>��λ����
                 <i className="iconfont" style={{ "fontSize": "3rem", "color": "#949494", "float": "right" }}>&#xe83c;</i>
              </p>
            </li>
            <li onClick={this.infoClick.bind(this, 1)}>
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#118EEA" }}>&#xe830;</i>
              <p>�ؿ⳵λԤԼ
                  <i className="iconfont" style={{ "fontSize": "3rem", "color": "#949494", "float": "right"}}>&#xe83c;</i>
              </p>
            </li>
            <li onClick={this.infoClick.bind(this, 2)}>
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#E7551C" }}>&#xe82f;</i>
              <p>ͣ��λ���
                  <i className="iconfont" style={{ "fontSize": "3rem", "color": "#949494", "float": "right"}}>&#xe83c;</i>
              </p>

            </li>
            <li onClick={this.infoClick.bind(this, 3)}>
              <i className="iconfont" style={{ "fontSize": "5rem", "color": "#F49C2E" }}>&#xe831;</i>
              <p>���ó���ԤԼ
                  <i className="iconfont" style={{ "fontSize": "3rem", "color": "#949494", "float": "right" }}>&#xe83c;</i>
              </p>
            </li>
          </ul>

        
            <div className={this.state.infoli == 0 ? "show" : "hide"}>
              <Apply />
            </div>
            <div className={this.state.infoli == 1 ? "show" : "hide"}>
              <Appointment />
            </div>
            <div className={this.state.infoli == 2 ? "show" : "hide"}>
              <Alteration />
            </div>
            <div className={this.state.infoli == 3 ? "show" : "hide"}>
              <Visitor />
            </div>
      
        </div>
      </div>
    )
  }

  public state = {
    parkingcss: "parking",
    iconfont: "iconfont iconfont-unturn",
    infoli: 99,
  }
}

export default Parking;

//��λ���� -- apply
class Apply extends React.Component {
  public constructor(props) {
    super(props);

    this.showParking = this.showParking.bind(this);
  }

  public componentDidMount() {}

  public toggleFold() {
    console.log("reqairsOn");
    if (this.state.contentBox == "contentBox-all") {
      this.setState({
        contentBox: "contentBox-part",
       // reqairscssul: "reqairsul-part reqairsul"
      })
    } else {
      this.setState({
        contentBox: "contentBox-all",
       // reqairsul: "reqairsul-all reqairsul"
      })
    }
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }
  }

  //��ʾ�ܱ�
  public showParking() {
    Parking.infoClick(99);
  }

  // ��ʾ��λ�����б�
  public showParkingtype() {

  }

  // ��ʾ���������б�
  public showCartype() {

  }

  //applySumbit �ύ��λ����
  public applySumbit() {
    console.log("applySumbit");
  }

  public render() {
    return (
      <div className={this.state.componentBox}>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showParking}>&#xe83b;</span>
          <span>��λ����</span>
        </p>

        <div className={this.state.contentBox}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form>
            <ul className={this.state.contentUL}>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>������ɫ</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="����д������ɫ" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>���ƺ���</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="����д���ƺ���" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>������</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="����������������" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>�绰����</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="������绰����" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>��˾����</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="�����빫˾����" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>��˾��ַ</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="��**��**��**¥**��" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>��������</span>
                <p className={"bookfromliRight"}>������泵λ</p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>����</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="�����복��" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>����Ʒ��</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="�����복��Ʒ�ƣ��磺����" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>�����ͺ�</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="�����복���ͺţ��磺�߶���" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>������ɫ</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="�����복����ɫ���磺��ɫ" />
                </p>
              </li>
              <li>
                <span className={"bookformLeft"}><span className="redStar">*</span>��������</span>
                <p className={"bookfromliRight"}>
                  <input type="text" value={this.state.car_license_color} placeholder="��ѡ��������" />
                  <span className="iconfont" style={{ "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" }}
                    onClick={this.showCartype.bind(this)}>&#xe827;</span>
                </p>
              </li>
            </ul>
            <div className="bookSumbit" onClick={this.applySumbit.bind(this)}>�ύ</div>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    componentBox: "componentBox-part",
    contentBox: "contentBox-part",
    iconfont: "iconfont iconfont-unturn",
    contentUL: "contentUL-part contentUL",
    //԰��id
    park_id: "1001",
    //������ɫ
    car_license_color: "",
    //���ƺ�
    car_license: "��C10000",
    //������
    applicant: "��xxx",
    //�ֻ�����
    phone: "15211111111",
    //��˾����
    company: "������Ϣ�Ƽ�",
    //��˾��ַ
    company_address: "a��b����¥",
    //ͣ����id
    underground_parking_id: "100001",
    //����ͣ������
    underground_parking_name: "����A��",
    //����
    car_owner: "��xxx",
    //Ʒ��
    car_brand: "����",
    //�ͺ�
    car_model: "������",
    //��ɫ
    car_color: "",
    //��������id
    car_type: "",
  }

}


//�ؿ⳵λԤԼ -- appointment 
class Appointment extends React.Component {
  public constructor(props) {
    super(props);

    this.showParking = this.showParking.bind(this);
  }

  public componentDidMount() { }

  public toggleFold() {
    console.log("reqairsOn");
    if (this.state.contentBox == "contentBox-all") {
      this.setState({
        contentBox: "contentBox-part",
        // reqairscssul: "reqairsul-part reqairsul"
      })
    } else {
      this.setState({
        contentBox: "contentBox-all",
        // reqairsul: "reqairsul-all reqairsul"
      })
    }
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }
  }

  //��ʾ�ܱ�
  public showParking() {
    Parking.infoClick(99);
  }

  public render() {
    return (
      <div className={this.state.componentBox}>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showParking}>&#xe83b;</span>
          <span>�ؿ⳵λԤԼ</span>
        </p>

        <div className={this.state.contentBox}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form>
            <ul className={this.state.contentUL}>
              <li>�ؿ⳵λԤԼ111111</li>
            </ul>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    componentBox: "componentBox-part",
    contentBox: "contentBox-part",
    iconfont: "iconfont iconfont-unturn",
    contentUL: "contentUL-part contentUL",
  }
}

//ͣ��λ��� --alteration
class Alteration extends React.Component {
  public constructor(props) {
    super(props);

    this.showParking = this.showParking.bind(this);
  }

  public componentDidMount() { }

  public toggleFold() {
    console.log("reqairsOn");
    if (this.state.contentBox == "contentBox-all") {
      this.setState({
        contentBox: "contentBox-part",
        // reqairscssul: "reqairsul-part reqairsul"
      })
    } else {
      this.setState({
        contentBox: "contentBox-all",
        // reqairsul: "reqairsul-all reqairsul"
      })
    }
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }
  }

  //��ʾ�ܱ�
  public showParking() {
    Parking.infoClick(99);
  }

  public render() {
    return (
      <div className={this.state.componentBox}>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showParking}>&#xe83b;</span>
          <span>ͣ��λ���</span>
        </p>

        <div className={this.state.contentBox}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form>
            <ul className={this.state.contentUL}>
              <li>ͣ��λ���111111</li>
            </ul>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    componentBox: "componentBox-part",
    contentBox: "contentBox-part",
    iconfont: "iconfont iconfont-unturn",
    contentUL: "contentUL-part contentUL",
  }
}


//���ó���ԤԼ -- visitor
class Visitor extends React.Component {
  public constructor(props) {
    super(props);

    this.showParking = this.showParking.bind(this);
  }

  public componentDidMount() { }

  public toggleFold() {
    console.log("reqairsOn");
    if (this.state.contentBox == "contentBox-all") {
      this.setState({
        contentBox: "contentBox-part",
        // reqairscssul: "reqairsul-part reqairsul"
      })
    } else {
      this.setState({
        contentBox: "contentBox-all",
        // reqairsul: "reqairsul-all reqairsul"
      })
    }
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }
  }

  //��ʾ�ܱ�
  public showParking() {
    Parking.infoClick(99);
  }

  public render() {
    return (
      <div className={this.state.componentBox}>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showParking}>&#xe83b;</span>
          <span>���ó���ԤԼ</span>
        </p>

        <div className={this.state.contentBox}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form>
            <ul className={this.state.contentUL}>
              <li>���ó���ԤԼ111111</li>
            </ul>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    componentBox: "componentBox-part",
    contentBox: "contentBox-part",
    iconfont: "iconfont iconfont-unturn",
    contentUL: "contentUL-part contentUL",
  }
}
