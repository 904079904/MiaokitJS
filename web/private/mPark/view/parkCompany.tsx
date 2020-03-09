import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import GlobalAction from "compat";

class ParkCompany extends React.Component {
  public constructor(props) {
    super(props);

    ParkCompany.toggleView = this.toggleView.bind(this);
  }

  static toggleView(a, e, n) { };
  public toggleView(a, e, n) {
    console.log("ff", a);
    console.log("ff", e);
    console.log("ff", n);

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

  }



  public render() {
    return (
      <div className={this.state.parkCompanycss}>
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <span className="iconfont companyInfoicon">&#xe7fa;</span>
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

  }


  //over
}

// ��˾�б�ҳ
class CompanyList extends React.Component {
  public constructor(props) {
    super(props);

    this.showInfo = this.showInfo.bind(this);
  }


  // ������࣬��ʾinfo;����list��������Ҫ����ParkCompany �ķ�����
  public showInfo(a, e, n) {
    ParkCompany.toggleView(a, e, n);
    CompanyInfo.companyInfo(e);
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.companyListcss == "companyList-all") {
      this.setState({
        companyListcss: "companyList-part",
        companyul:"companyul"
      })
    } else {
      this.setState({
        companyListcss: "companyList-all",
        companyul:"companyul-all"
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

  public companyActive(data, id) {
    console.log("active", data);
    this.setState({
      indexOf: data,
    });
    this.globalAction.switchRoom(id);
  }

  public typeActive(indexof, name, id) {
    console.log("typeActive", indexof);
    console.log("typeActive", name);
    console.log("typeActive", id);

    this.setState({
      typeIndexof: indexof,
      typeName: name,
    })
  }

  //�������������ȡ���ݣ������б�Ч������3.5-δд����1�ύ������������2-css�� 

  public render() {
    return (
      <div className={this.state.companyListcss}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <span style={{ "fontSize": "5rem" }}>--</span>
        </div>
        <ul className={this.state.companyul}>
          {this.state.companyData.map((i, index) => {
            return (
              <li onClick={this.companyActive.bind(this, index, i.id)} className={this.state.indexOf == index ? "companyli-active" : "companyli"} >
                <div className="companyImgback">
                  <img src={i.url} />
                </div>
                <div className="companyul-middle">
                  <p className={this.state.indexOf == index ? "companyName-active" : "companyName"} style={{ "font-size": "2.4rem", "font-weight": "bold" }}>{i.name}</p>
                  <p style={{ "font-size": "2.5rem" }}><span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe7fa;</span>{i.address}</p>
                </div>
                <div className="companyul-right">
                  <p  onClick={this.showInfo.bind(this, "Info", i.id)}>���� ></p>
                  <p className={this.state.indexOf == index ? "companyType-active" : "companyType"} >{i.type}</p>
                </div>
              </li>
            )
          })}
        </ul>
        <form>
        <div className={this.state.companyBtn}>
          <div className="searchBox">
            <span className="searchBox-text">
              <span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe7fa;</span>
              <input className="companySearch" type="text" placeholder="��������ҵ����" />
            </span>
            <span onClick={this.foldBtn.bind(this)} className="searchBox-type">
              {this.state.typeName} <span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe7fa;</span>
            </span>
          </div>
          <ul className="companyTypeul">
            <li className={this.state.typeIndexof == 100 ? "companyTypeli-active" : "companyTypeli"}
              onClick={this.typeActive.bind(this, 100, "ȫ��", "id-ȫ��")} style={{ "width":"12rem"}}>ȫ��</li>
            {this.state.companyType.map((i, index) => { 
              return (
                <li onClick={this.typeActive.bind(this, index, i.name, i.id)} className={this.state.typeIndexof == index ? "companyTypeli-active" : "companyTypeli"}>{i.name}</li>
                )
            })}
            </ul>

            <span className="searchBtn">����</span>
        </div>
        </form>
      </div>
    )
  }

  public state = {
    companyListcss: "companyList-part",
    foleBtn: "foleBtn",
    indexOf: 0,
    companyBtn: "companyBtn-part",
    companyul:"companyul",
    companyData: [
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01",  url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      },
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾2", address: "E��B��-3F-302",
        id: "id-02", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      },
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾3", address: "E��B��-3F-303",
        id: "id-03", url: "./mPark/image/pin-blue.png",  type: "�Ƽ�����"
      },
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      },
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01",  url: "./mPark/image/pin-blue.png",  type: "�Ƽ�����"
      }, ,
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      }, ,
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      }, ,
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      }, ,
      {
        name: "�㽭������Ϣ�Ƽ����޹�˾1", address: "E��B��-3F-301",
        id: "id-01", url: "./mPark/image/pin-blue.png", type: "�Ƽ�����"
      },

    ],
    companyType: [
      { name: "���¼���", id: "id-���¼���" },
      { name: "�Ƽ�����", id: "id-�Ƽ�����" },
      { name: "�Ļ�����", id: "id-�Ļ�����" },
      { name: "���ڱ���", id: "id-���ڱ���" },
      { name: "��������", id: "id-��������" },
      { name: "ó������", id: "id-ó������" },
      { name: "��е�豸", id: "id-��е�豸" },
      { name: "��������", id: "id-��������" },
      { name: "����ҽҩ", id: "id-����ҽҩ" },
    ],
    typeIndexof: 100,
    typeName:"ȫ��"
  }


  //over
}

// ��˾����ҳ
class CompanyInfo extends React.Component {
  public constructor(props) {
    super(props);

    this.showList = this.showList.bind(this);
    CompanyInfo.companyInfo = this.companyInfo.bind(this);
  }

  static companyInfo(data) { }
  public companyInfo(data) {
    this.setState({
      companyId: data
    });
  }

  public showList(a, e, n) {
    ParkCompany.toggleView(a, e, n);
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.companyInfocss == "companyInfo") {
      this.setState({
        companyInfocss: "companyInfo-part",
       // companyul: "companyul"
      })
    } else {
      this.setState({
        companyInfocss: "companyInfo",
       // companyul: "companyul-all"
        //fdsfsdfd
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
    //companyInfo
    //  < p > { this.state.companyId }</p >
    //    <p onClick={this.showList.bind(this, "List", "id-01")}>���� list</p>
    return (
      <div>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showList.bind(this, "List", "id-01")}>&#xe7fa;</span>
          <span>{this.state.companyName}</span>
        </p>
        <div className={this.state.companyInfocss}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <span style={{ "fontSize": "5rem" }}>--</span>
          </div>
          <ul className={this.state.companyInfoul}>
            <li className={this.state.infoli == 0 ? "companyInfoli-active" : "companyInfoli"}
              onClick={this.infoClick.bind(this,0)} 
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
   // companyId: null,
    companyName:"�㽭������Ϣ�Ƽ����޹�˾",
    companyInfoul: "companyInfoul",
    infoli:0,
  }

  //over
}

//��ҵ��Ϣ;
class CompanyInfos extends React.Component {
  public constructor(props) {
    super(props);

  }

  public componentDidMount() {
    
  }

  public render() {
    return (
      <div className={"infos"}>
        <img src={this.state.imgurl} />
        <div className={"ifosRight"}>
          <h4 className={"infos-1"}>{this.state.name} </h4>
          <h5 className={"infos-2"}>
            <span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe7fa;</span>
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
    imgurl: "./mPark/image/pin-blue.png",
    name:"�㽭������Ϣ�Ƽ����޹�˾",
    address: "��������Ϣ��ҵ԰E��B��3F",
    type: "�Ƽ�����",
    man: "XXX",
    tel: "155578383040",
    http:"www.yongtoc.com"
  }

  //over
}

//��ҵ���;
class Mien extends React.Component {
  public constructor(props) {
    super(props);

  }

  public componentDidMount() {
   
  }

  public render() {
    return (
      <div className={"mien"}>
        <ul>
          {this.state.mienImg.map((i, index) => {
            return (
              <li>
                <img src={i.url} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  public state = {
    mienImg: [
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
    ]
  }

  //over
}

//��ҵ����
class Details extends React.Component {
  public constructor(props) {
    super(props);

  }

  public componentDidMount() {
     
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

  public state = {
    text: "�㽭������Ϣ�Ƽ����޹�˾���㽭����ʵҵ���޹�˾���µĿع��ӹ�˾��    ��˾�ɼ����ͼ��ѧ�������Ӧ��ѧ��������������������ר����ɣ���һ��רע����3DΪչ�ַ�ʽ�� �������ռ��ϵ�ļ����ṩ�̣������ڳ�Ϊȫ������3D���ӻ���ҵ��Ϊ�ͻ��ͺ������ȫ���ṩ3D���ӻ������ķ���ʵ����ҵ��Ĳ��컯�������ơ�   "
  }

  //over
}

//��Ʒչʾ
class Product extends React.Component {
  public constructor(props) {
    super(props);


// ffdssdfds
  }

  public componentDidMount() {
    
  }

  public render() {
    return (
      <div className={"product"}>
        <ul>
          {this.state.productImg.map((i, index) => {
            return (
              <li>
                <img src={i.url} />
              </li>
            )
          })}
        </ul>
      </div>
 
    )
  }

  public state = {
    productImg: [
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
      { url: "./mPark/image/i.png" },
    ]
  }
  //over
}



export default ParkCompany;