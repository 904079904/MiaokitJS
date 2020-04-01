import * as React from "react";
import * as RouterDOM from 'react-router-dom';

class IdentityAuthentication extends React.Component<{ history: any }> {


  // ����
  goBack() {
    this.props.history.goBack()
  }

  applicantChange() {

  }

  phoneChange() {

  }

  companyChange() {

  }

  roleTypeChange() {

  }

  //��ɫ����ѡ��
  roleTypeUL() {

  }

  inRoleTypeList() {

  }

  hideRoleTypeBox() {

  }
  getRoleTypeBox() {

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
            <p>
              <span className="redStar">*</span>  ��ҵ����
                 <input type="text" value={this.state.company} placeholder="������������ҵ����" style={{ "border": "none", "margin-left": "5rem" }}
                onChange={this.companyChange.bind(this)} />
            </p>
            <p>
              <span className="redStar">*</span>  ��ɫ����  
                 <input type="text" value={this.state.roleType} placeholder="ѡ����֤�Ľ�ɫ����" style={{ "border": "none", "margin-left": "5rem" }}
                onChange={this.roleTypeChange.bind(this)} />
              <span className="iconfont" onClick={this.roleTypeUL.bind(this)} style={{ "fontSize": "3rem", "float": "right" }} >&#xe827;</span>

            </p>
          </div>

          <div className="identityBotton">
            <p style={{ "color": "#333" }}>��֤����</p>
            <div className="identityBottonBox">

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
    //company_id_in: "",
    //company_name_in: "",
  }

}






export default IdentityAuthentication;