import * as React from "react";
import * as RouterDOM from 'react-router-dom';
import DataService from "dataService";

class IdentityAuthentication extends React.Component<{ history: any }> {
  public constructor(props) {
    super(props);

    this.setRoleTypeUL = this.setRoleTypeUL.bind(this);
  }

  public componentDidMount() {
    this.dataService.getRoleType(this.setRoleTypeUL);
  }

  public dataService: DataService = new DataService();

  // ����
  public goBack() {
    this.props.history.goBack()
  }

  public applicantChange(event) {
    this.setState({
      applicant: event.target.value
    })
  }

  public phoneChange(event) {
    this.setState({
      phone: event.target.value
    })
  }

  public companyChange(event) {
    this.setState({
      company: event.target.value
    })
  }

  //��ɫ����ѡ��
  public showRoleTypeBox() {
    console.log(111111)
    this.setState({
      roleTypeBox:"show rollSelectCauseBox",
    })
  }

  // д���ɫ����
  public setRoleTypeUL(data) {
    this.setState({
      roleTypeUL: data.response,
      role_id: data.response[0].id,
      role_name: data.response[0].name,
    })
  }

  //ѡ�н�ɫ����
  inRoleTypeList(i, id, name) {
    this.setState({
      role_id_in: id,
      role_name_in: name,
      roleTypeIndexof: i,
    })
  }

  // ȡ����ɫ����
  hideRoleTypeBox() {
    this.setState({
      roleTypeBox: "hide",
    })
  }

  // ȷ�Ͻ�ɫ����
  getRoleTypeBox() {
    this.setState({
      roleTypeBox: "hide",
      role_id: this.state.role_id_in,
      role_name: this.state.role_name_in,
    })
  }

  sumbit() {
    console.log(this.state)
  }

  public render() {
    return (
      <div className="modification-authentication">
        <div className="personal-center-tag" style={{ "border-bottom": "0rem" }}>
          <div style={{ paddingLeft: "30px", float: "left" }} onClick={this.goBack.bind(this)}>
            <img src="./park_m/image/right.png" style={{ transform: "rotate(180deg)", marginBottom: "10px" }} />
            <span style={{ color: "#6C6C6C" }}>�����֤</span>
          </div>
        </div>
        <form >
          <div className="identityTop">
            <p>
              <span className="redStar">*</span>  ������
                 <input type="text" value={this.state.applicant} placeholder="��������������" style={{ "border": "none", "margin-left": "8rem" }}
                onChange={this.applicantChange.bind(this)} />
            </p>
            <p>
              <span className="redStar">*</span>  ��ϵ����
                 <input type="number" value={this.state.phone} placeholder="������������ϵ����" style={{ "border": "none", "margin-left": "5rem" }}
                onChange={this.phoneChange.bind(this)} />
            </p>
            <p >
              <span className="redStar">*</span>  ��ҵ����
                 <input type="text" value={this.state.company} placeholder="������������ҵ����" style={{ "border": "none", "margin-left": "5rem" }}
                onChange={this.companyChange.bind(this)} />
            </p>
            <p onClick={this.showRoleTypeBox.bind(this)}>
              <span className="redStar">*</span>  ��ɫ����  
                 <input type="text" value={this.state.role_name} placeholder="ѡ����֤�Ľ�ɫ����" style={{ "border": "none", "margin-left": "5rem" }}
                />
              <span className="iconfont" style={{ "fontSize": "3rem", "float": "right" }} >&#xe827;</span>
            </p>
          </div>
          <div className="applyPutSumbit" onClick={this.sumbit.bind(this)}>�ύ</div>
          <div className="identityBotton">
            <p style={{ "color": "#333" }}>��֤����</p>
            <div className="identityBottonBox">
              <i className="iconfont identityBottonIcon" >&#xe821;</i>
              <p>��֤��ҵ����Ա���ϴ��ⷿ��ͬ��Ӫҵִ��</p>
              <p>��֤԰������Ա���ϴ�����</p>
            </div>
            <p>���ߵ绰��ϵ����Ա������Ȩ(<span style={{"color":"#333"}}>0773-1234567</span>)</p>
          </div>
        </form>
        <div className={this.state.roleTypeBox}>
          <ul className="rollSelectCauseULcss">
            {this.state.roleTypeUL.map((i, index) => {
              return (
                <li className={this.state.roleTypeIndexof == index ? "rollSelectCauseli-active" : "rollSelectCauseli"}
                  onClick={this.inRoleTypeList.bind(this, index, i.id, i.name)}
                >{i.name}</li>
              )
            })}
          </ul>
          <div className="rollSelectCuasedBtn">
            <span className="rollSelectCancel" onClick={this.hideRoleTypeBox.bind(this)} >ȡ��</span>
            <span className="rollSelectConfirm" onClick={this.getRoleTypeBox.bind(this)}>ȷ��</span>
          </div>
        </div>
      </div>
    )
  }


  public state = {
    applicant: "",
    phone: "",
    company: "",
    roleType: "",
    // ��˾ѡ��
    roleTypeBox: "hide",
    roleTypeUL: [],
    roleTypeIndexof: 0,
    role_id: "",
    role_id_in: "",
    role_name: "",
    role_name_in: "",
  }

}

export default IdentityAuthentication;