import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import GlobalAction from "compat";
import DataService from "dataService";

class ParkCompany extends React.Component {
  public constructor(props) {
    super(props);

    ParkCompany.toggleView = this.toggleView.bind(this);
    ParkCompany.getCompanyinfo = this.getCompanyinfo.bind(this);
  }

  public componentDidMount() {
    console.log(12313123);
   
  }

  // ���徲̬�࣬��Ҫ�󶨵�this�ķ����ϣ����ⲿ����;
  // �ⲿ�������ҵid��������ҵ���������ˢ����ҵ�������ݣ�
  static getCompanyinfo(id) { }
  public getCompanyinfo(id) {
    console.log("getCompanyinfo", id);

    this.toggleView("Info", id);
    CompanyInfo.getCompanyinfo(id);
  }

  static toggleView(a, id) { };
  public toggleView(a, id) {
    console.log("ff", a);
    //��ҵid
    console.log("ff", id);
    if (a == "Info") {
      this.setState({
        showList: false,
        showInfo: true,
      })
    } else {
      this.setState({
        showList: true,
        showInfo: false,
      })
    }
    //over
  }

  public render() {
    return (
      <div className={this.state.parkCompanycss}>
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <i className="iconfont companyInfoicon">&#xe83b;</i>
          </RouterDOM.Link>
          <span>԰����ҵ</span>
        </p>
        <div className={this.state.showList == true ? "show" : "hide"}>
          <CompanyList />
        </div>

        <div className={this.state.showInfo == true ? "show" : "hide"}>
          <CompanyInfo />
        </div>

      </div>
    )
  }

  public state = {
    parkCompanycss: "parkCompany",
    showList: true,
    showInfo: false,
    token:"",
  }


  //over
}

// ��˾�б�ҳ
class CompanyList extends React.Component{
  public constructor(props) {
    super(props);

    this.showInfo = this.showInfo.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setCompanys = this.setCompanys.bind(this);
  }

  public componentWillMount() {
    const token = localStorage.getItem('token');
    this.setState({
      token: token,
    });
    console.log("token",this.state)
  }

  public componentDidMount() {
    //��ȡ԰��������ҵ�����б�
    this.dataService.getCompanys(this.setCompanys, this.state.park_id);
    //ͨ��԰��id����԰��������ҵ�б�
    this.dataService.findCompany(this.setCompany, this.state.park_id, this.state.company_type_id, this.state.typeName, this.state.token);
  }

  public dataService: DataService = new DataService();
  // set��ҵ�����б�
  public setCompanys(data) {
    this.setState({
      companyType: data.response,
    });
  }

  // set��ҵ�б�
  public setCompany(data) {
    console.log("setCompany", data.response)
  //  console.log("setCompany", data.response[0].name)
    this.setState({
      companyData: data.response,
    })
  }

  // ������࣬��ʾinfo;����list��������Ҫ����ParkCompany �ķ�����
  // ͨ�� ��˾id����ȡ��������
  public showInfo(a, id, name, e) {
    ParkCompany.toggleView(a, id);
    CompanyInfo.getCompanyinfo(id);
    console.log("more", a, id, name, e);
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.companyListcss == "companyList-all") {
      this.setState({
        companyListcss: "companyList-part",
        companyul: "companyul"
      })
    } else {
      this.setState({
        companyListcss: "companyList-all",
        companyul: "companyul-all"
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

  public foldBtn() {
    console.log("foldBtn");
    if (this.state.companyBtn == "companyBtn-part") {
      this.setState({
        companyBtn: "companyBtn-all"
      })
    } else {
      this.setState({
        companyBtn: "companyBtn-part"
      })
    }

  }

  public globalAction: GlobalAction = new GlobalAction();
  // ѡ��ĳ��ҵ
  public companyActive(data, id) {
    console.log("active", data);
    this.setState({
      indexOf: data,
    });
    // ֪ͨ3d���л���˾��λ��web��ȡ���� ��˾id��
    this.globalAction.switchCompany(id);
    // 
  }

  public typeActive(indexof, name, id) {
    console.log("typeActive", indexof);
    console.log("typeActive", name);
    console.log("typeActive", id);

    this.setState({
      typeIndexof: indexof,
      typeName: name,
      company_type_id: id,
    })
  }

  // �۽�
  public foucus() {
    if (this.state.inputValue == "��������ҵ����") {
      this.setState({ inputValue: "" })
    }
  }

  // ʧ��
  public blur(event) {
    if (this.state.inputValue == "") {
      this.setState({ inputValue: "��������ҵ����" })
    }
  }

  // ����
  public change(event) {
    this.setState({ inputValue: event.target.value })
  }


  //�������������ȡ���ݣ������б�Ч������3.5-δд����1�ύ������������2-css�� 
  public searchCompany() {

    if (this.state.inputValue == "��������ҵ����") {
      this.setState({ inputValue: "" })
    };
    console.log("searchBtn", this.state.inputValue, this.state.company_type_id);
    this.dataService.findCompany(this.setCompany, this.state.park_id, this.state.company_type_id, this.state.inputValue,this.state.token);
  }

  public render() {
    return (
      <div className={this.state.companyListcss}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
        </div>
        <ul className={this.state.companyul}>
          {this.state.companyData.map((i, index) => {
            return (
              <li onClick={this.companyActive.bind(this, index, i.id)} className={this.state.indexOf == index ? "companyli-active" : "companyli"} >
                <div className="companyImgback">
                  <img src={i.headimgurl} />
                </div>
                <div className="companyul-middle">
                  <p className={this.state.indexOf == index ? "companyName-active" : "companyName"} style={{ "font-size": "2.4rem", "font-weight": "bold" }}>{i.name}</p>
                  <p style={{ "font-size": "2.5rem" }}>
                    <i className="iconfont" style={{ "fontSize": "2.5rem" }}>&#xe815;</i>
                    {i.address}</p>
                </div>
                <div className="companyul-right">
                  <p onClick={this.showInfo.bind(this, "Info", i.id, i.name)} className={this.state.indexOf == index ? "show" : "hide"} >����
                    <i className="iconfont" style={{ "fontSize": "2rem" }}>&#xe827;</i>
                  </p>
                  <p className={this.state.indexOf == index ? "companyType-active" : "companyType"} >{i.company_type}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <form>
          <div className={this.state.companyBtn}>
            <div className="searchBox">
              <span className="searchBox-text">
                <i className="iconfont" style={{ "fontSize": "3rem" }}>&#xe810;</i>
                <input className="companySearch" type="text" placeholder="��������ҵ����"
                  value={this.state.inputValue} onFocus={this.foucus.bind(this)}
                  onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
              </span>
              <span onClick={this.foldBtn.bind(this)} className="searchBox-type">
                {this.state.typeName} <i className="iconfont" style={{ "fontSize": "3rem" }}>&#xe828;</i>
              </span>
            </div>
            <ul className="companyTypeul">
              <li className={this.state.typeIndexof == 100 ? "companyTypeli-active" : "companyTypeli"}
                onClick={this.typeActive.bind(this, 100, "ȫ��", "")} style={{ "width": "12rem" }}>ȫ��</li>
              {this.state.companyType.map((i, index) => {
                return (
                  <li onClick={this.typeActive.bind(this, index, i.name, i.id)} className={this.state.typeIndexof == index ? "companyTypeli-active" : "companyTypeli"}>{i.name}</li>
                )
              })}
            </ul>

            <span className="searchBtn" onClick={this.searchCompany.bind(this)}>����</span>
          </div>
        </form>
      </div>
    )
  }

  public state = {
    // ԰��id
    park_id: 1001,
    companyListcss: "companyList-part",
    foleBtn: "foleBtn",
    companyBtn: "companyBtn-part",
    companyul: "companyul",
    //��ҵ�б�
    companyData: [],
    // ��ҵ����
    companyType: [],
    // ��ǰѡ����ҵli�����к�
    indexOf: 0,
    //��ǰѡ���������к�
    typeIndexof: 100,
    //�����ؼ���
    typeName: "ȫ��",
    //������ҵ����id
    company_type_id: "",
    // �����Ĭ��ֵ
    inputValue: "",
    iconfont: "iconfont iconfont-unturn",
    token:"",
  }


  //over
}

// ��˾����ҳ
class CompanyInfo extends React.Component {
  public constructor(props) {
    super(props);

    this.showList = this.showList.bind(this);
    CompanyInfo.getCompanyinfo = this.getCompanyinfo.bind(this);
    this.setCompanyinfo = this.setCompanyinfo.bind(this);
  }

  public dataService: DataService = new DataService();
  static getCompanyinfo(id) { }
  public getCompanyinfo(id) {
    // ͨ����ҵid��set��ҵ���飻
    this.dataService.getCompanyInfo(this.setCompanyinfo, id);
  }

  // ��ȡ��ҵ���飬���������ʾ��
  //  ������ҵ���飬�� CompanyInfos(��ҵ��Ϣ) ��Mien����ҵ��ɣ���Details����ҵ��飩�� Product(��Ʒչʾ)�����
  public setCompanyinfo(data) {
    console.log("getCompanyinfo", data);
    // set��˾name
    this.setState({
      companyName: data.response.name,
    });

    CompanyInfos.setCompanyinfos(data);
    Mien.setCompanymien(data);
    Details.setCompanydetails(data);
    Product.setCompanyproduct(data);
  }

  public showList(a, id) {
    ParkCompany.toggleView(a, id);
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.companyInfocss == "companyInfo") {
      this.setState({
        companyInfocss: "companyInfo-part",
      })
    } else {
      this.setState({
        companyInfocss: "companyInfo",
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

  public infoClick(indexof) {
    console.log("infoClick", indexof);
    this.setState({
      infoli: indexof,
    })
  }

  public render() {
    return (
      <div>
        <p className="companyInfotit">
          <i className="iconfont companyInfoicon" onClick={this.showList.bind(this, "List", "id-01")}>&#xe83b;</i>
          <span>{this.state.companyName}</span>
        </p>
        <div className={this.state.companyInfocss}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <ul className={this.state.companyInfoul}>
            <li className={this.state.infoli == 0 ? "companyInfoli-active" : "companyInfoli"}
              onClick={this.infoClick.bind(this, 0)}
            >��ҵ��Ϣ</li>
            <li className={this.state.infoli == 1 ? "companyInfoli-active" : "companyInfoli"}
              onClick={this.infoClick.bind(this, 1)} >��ҵ���</li>
            <li className={this.state.infoli == 2 ? "companyInfoli-active" : "companyInfoli"}
              onClick={this.infoClick.bind(this, 2)} >��ҵ����</li>
            <li className={this.state.infoli == 3 ? "companyInfoli-active" : "companyInfoli"}
              onClick={this.infoClick.bind(this, 3)} >��Ʒչʾ</li>
          </ul>
          <div className="infoContain">
            <div className={this.state.infoli == 0 ? "show" : "hide"}>
              <CompanyInfos />
            </div>
            <div className={this.state.infoli == 1 ? "show" : "hide"}>
              <Mien />
            </div>
            <div className={this.state.infoli == 2 ? "show" : "hide"}>
              <Details />
            </div>
            <div className={this.state.infoli == 3 ? "show" : "hide"}>
              <Product />
            </div>

          </div>
        </div>
      </div>

    )
  }

  public state = {
    companyInfocss: "companyInfo",
    //  companyId:"",
    companyName: "�㽭������Ϣ�Ƽ����޹�˾",
    companyInfoul: "companyInfoul",
    infoli: 0,
    iconfont: "iconfont iconfont-unturn",
  }

  //over
}

//��ҵ��Ϣ;
class CompanyInfos extends React.Component {
  public constructor(props) {
    super(props);


    CompanyInfos.setCompanyinfos = this.setCompanyinfos.bind(this);
  }

  public componentDidMount() { }

  // ��ʾ��ȡ����ҵ����
  static setCompanyinfos(data) { }
  public setCompanyinfos(data) {
    console.log("setCompanyinfoCCCCCCCCCCC", data);
    this.setState({
      imgurl: data.response.headimgurl,
      name: data.response.name,
      address: data.response.address,
     // type: data.response.service[0].name,
      type: data.response.company_type,
      man: data.response.Contacts,
      tel: data.response.phone,
      http: data.response.website,
    })
  }

  public render() {
    return (
      <div className={"infos"}>
        <img src={this.state.imgurl} />
        <div className={"ifosRight"}>
          <h4 className={"infos-1"}>{this.state.name} </h4>
          <h5 className={"infos-2"}>
            <i className="iconfont" style={{ "fontSize": "3rem" }}>&#xe815;</i>
            {this.state.address}
          </h5>
          <p className={"infos-3"} >{this.state.type}</p>
          <p className={"infos-4"} >
            <span>��ϵ��</span>
            <span>{this.state.man}</span>
          </p>
          <p className={"infos-5"} >
            <span>��ϵ�绰</span>
            <span>{this.state.tel}</span>
          </p>
          <p className={"infos-6"} >
            <span>��ҵ����</span>
            <span >{this.state.http}</span>
          </p>
        </div>
      </div>
    )
  }

  public state = {
    imgurl: "",
    name: "",
    address: "",
    type: "",
    man: "",
    tel: "",
    http: ""
  }

  //over
}

//��ҵ���;
class Mien extends React.Component {
  public constructor(props) {
    super(props);

    Mien.setCompanymien = this.setCompanymien.bind(this);
  }

  public componentDidMount() { }

  // ��ʾ��ȡ����ҵ����
  static setCompanymien(data) { }
  public setCompanymien(data) {
    console.log("setCompanyMienMMMMM", data);
    this.setState({
      mienImg: data.response.elegant,
    })
  }

  public render() {
    return (
      <div className={"mien"}>
        <ul>
          {this.state.mienImg.map((i, index) => {
            return (
              <li>
                <img src={i.pic_url} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  public state = {
    mienImg: []
  }

  //over
}

//��ҵ����
class Details extends React.Component {
  public constructor(props) {
    super(props);

    Details.setCompanydetails = this.setCompanydetails.bind(this);
  }

  public componentDidMount() { }

  // ��ʾ��ȡ����ҵ����
  static setCompanydetails(data) { }
  public setCompanydetails(data) {
    console.log("setCompanyDetailsDDDDD", data);
    this.setState({
      text: data.response.descript,
    })
  }

  public render() {
    return (
      <div className={"details"}>
        <p>
          {this.state.text}
        </p>
      </div>
    )
  }

  public state = { text: "" }
  //over
}

//��Ʒչʾ
class Product extends React.Component {
  public constructor(props) {
    super(props);

    Product.setCompanyproduct = this.setCompanyproduct.bind(this);
  }

  public componentDidMount() { }

  // ��ʾ��ȡ����ҵ����
  static setCompanyproduct(data) { }
  public setCompanyproduct(data) {
    console.log("setCompanyproductPPPP", data);
    this.setState({
      productImg: data.response.product,
    })
  }


  public render() {
    return (
      <div className={"product"}>
        <ul>
          {this.state.productImg.map((i, index) => {
            return (
              <li>
                <img src={i.pic_url} />
              </li>
            )
          })}
        </ul>
      </div>

    )
  }

  public state = {
    productImg: []
  }
  //over
}



export default ParkCompany;