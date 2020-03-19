import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import DataService from "dataService";

class RepairsOnline extends React.Component<{ history:any}>{
  public constructor(props) {
    super(props);

    this.setTypeUL = this.setTypeUL.bind(this);
    RepairsOnline.getReqairstpostion = this.getReqairstpostion.bind(this);
  }

  public componentDidMount() {
    //19.(���߱���ģ��-��������)ͨ��԰��id��ȡ���߱�������
    this.dataService.getRepairType(this.setTypeUL);
  }

  public dataService: DataService = new DataService();
  public setTypeUL(data) {
    console.log("getRepairType",data);
    this.setState({
      typeUL: data.response,
    })
  }

  public toggleFold() {
    console.log("reqairsOn");
    if (this.state.reqairscss == "reqairs-all") {
      this.setState({
        reqairscss: "reqairs-part",
        reqairscssul: "reqairsul-part reqairsul"
      })
    } else {
      this.setState({
        reqairscss: "reqairs-all",
        reqairsul: "reqairsul-all reqairsul"
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


  static getReqairstpostion(x, y,building_id, floor_id, room_id){ };
  public getReqairstpostion(x, y, building_id, floor_id, room_id) {
    console.log("getReqairstpostion", x, y, building_id, floor_id, room_id )
    this.setState({
      building_id: building_id,
      floor_id: floor_id,
      room_id: room_id,
      position: "�����뱨��λ��",
      longitude: x,
      latitude: y ,
    })
  }

  // inputѡ����Ƭ
  public reqairsImginput() {

  }

  // ��ʾͼƬ
  public reqairsImgshow() {

  }

  //��ʾ���������б�
  public showTypeUL() {
    this.setState({
      typeULBox: "typeULBox"
    })
  }

  //ѡ�б�������
  public reqairsType(i, id, name) {
    this.setState({
      type_id: id,
      type_name: name,
      indexOf: i,
    })
  }

  // ���������б�  -- ��ȷ�ϡ�
  public gettypeUL() {
    this.setState({
      typeULBox: "hide"
    })
  }

  // ���������б�  -- ��ȡ����
  public hidetypeUL() {
    this.setState({
      typeULBox: "hide",
      type_name: "",
      type_id: "",
    })
  }

  //����λ��  
  public getPosition(event) {
    this.setState({
      position: event.target.value
    })
  }

  //������ҵ
  public reqairsCompany(event) {
    this.setState({
      company: event.target.value,
    })
  }

  //������ϵ��
  public reqairsContacts(event) {
    this.setState({
      contacts: event.target.value,
    })
  }

  //������ϵ�˵绰
  public reqairsPhone(event) {
    this.setState({
      phone: event.target.value,
    })
  }

  //������������   
  public changeDescript(event) {
    this.setState({
      descript: event.target.value,
    })
  }

  //�ύ���޵�
  public sumbitReqairs() {
    console.log("�ύ����", this.state);
    this.dataService.saveRepairInfo(this.sumbitReqairssucceed,this.state);
  }

  //�ύ���޵� -- �ɹ�
  public sumbitReqairssucceed(data) {
    alert(data);
    window.history.back();
  }

  public render() {
    return (
      <div className="repairsOnline">
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <span className="iconfont companyInfoicon">&#xe83b;</span>
          </RouterDOM.Link>
          <span>���߱���</span>
        </p>

        <div className={this.state.reqairscss}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form >
            <ul className={this.state.reqairsul} >
              <li>
                <span className="redStar">*</span>������Ƭ
                  <input type="file" accept="image/*" className="getillImg" value="" onClick={this.reqairsImginput.bind(this)} style={{ "opacity": "0", "position": "absolute", "right": "-16rem" }} />
                <img src={this.state.photo} onClick={this.reqairsImgshow.bind(this)} />
              </li>
              <li>
                <span className="redStar">*</span>��������
                 <input type="text" className="getillType" value={this.state.type_name} placeholder="��ѡ��������"  />
                <span className="iconfont" style={{ "fontSize": "3rem", "float": "right", " padding": " 0 0 0 3rem", "padding": " 0 0 0 4rem" }}
                  onClick={this.showTypeUL.bind(this)}>&#xe827;</span>
              </li>
              <li>
                <span className="redStar">*</span>����λ��
                  <input type="text" value={this.state.position} placeholder="������ͼѡ���޵�" style={{ "margin-left": "4rem","border": "0"}}
                    onChange={this.getPosition.bind(this)}/>
                  <i className="iconfont" style={{ "fontSize": "3rem", "color": "#0B8BF0", "float": "right", "padding": " 0 0 0 4rem" }}>&#xe82c;</i>
              </li>
              <li>
                <span className="redStar">*</span>������ҵ
                <input type="text" value={this.state.company} placeholder="����д������ҵ" style={{ "margin-left": "4rem", "border": "0" }}
                  onChange={this.reqairsCompany.bind(this)} />
              </li>
              <li>
                <span className="redStar">*</span>��ϵ��
                <input type="text" value={this.state.contacts} placeholder="����д��ϵ��" style={{ "margin-left": "6rem", "border": "0" }}
                  onChange={this.reqairsContacts.bind(this)} />
              </li>
              <li>
                <span className="redStar">*</span>�绰���� 
                <input type="text" value={this.state.phone} placeholder="����д��ϵ�绰���� " style={{ "margin-left": "4rem", "border": "0" }}
                  onChange={this.reqairsPhone.bind(this)} />
              </li>
              <li>
                <p><span className="redStar">*</span>����������</p>
                <textarea className="bookContent" value={this.state.descript} placeholder="�뽫��������������������120���ڣ�"
                  onChange={this.changeDescript.bind(this)}></textarea>
              </li>
            </ul>
            <div className="reqairsSumbit" onClick={this.sumbitReqairs.bind(this)}>�ύ</div>
          </form>
        </div>

        <div className={this.state.typeULBox}>
          <ul className="illcauseULcss">
            {this.state.typeUL.map((i, index) => {
              return (
                <li className={this.state.indexOf == index ? "illcauseli-active" : "illcauseli"}
                  onClick={this.reqairsType.bind(this, index, i.id, i.name)}>{i.name}</li>
              )
            })}
          </ul>
          <div className="illCuasedBtn">
            <span className="illCancel" onClick={this.hidetypeUL.bind(this)} >ȡ��</span>
            <span className="illConfirm" onClick={this.gettypeUL.bind(this)}>ȷ��</span>
          </div>
        </div>

      </div>
    )
  }

  public state = {
    reqairscss: "reqairs-part",
    iconfont: "iconfont iconfont-unturn",
    reqairsul: "reqairsul-part reqairsul",
    typeULBox: "hide",
    typeUL: [
      //{ id: "1009",  name: "ˮ�ܱ���"},
      //{ id: "1009",  name: "��ש����" }
    ],
    indexOf:0,
    //԰��id
    park_id: 1001,
    //����id (ˮ�ܱ��޵ȶ�Ӧ��id)
    type_id: 1,
    type_name: "",
    //λ��
    position: "",
    //����
    longitude: "",
    //γ��
    latitude: "",
    //ʹ�ó��ض�Ӧ��¥id��ģ�ͱ��(����ƥ���Ӧ3d��¥)
    building_id: "f",
    //ʹ�ó��ض�Ӧ��¥id��ģ�ͱ��(����ƥ���Ӧ3d��¥)
    floor_id: "5",
    //ʹ�ó���id��ģ�ͱ��(����ƥ���Ӧ3d����)
    room_id: "6",
    //������ҵ
    company: "",
    //��ϵ��
    contacts: "",
    phone:"",
    //����
    descript: "",
    //��Ƭ
    photo: "./mPark/image/photo.png",

  }
}

export default RepairsOnline;