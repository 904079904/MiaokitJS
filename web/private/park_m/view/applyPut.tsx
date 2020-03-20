import * as React from "react";
import * as RouterDOM from 'react-router-dom';
 
import DataService from "dataService";

class ApplyPut extends React.Component {
  public constructor(props) {
    super(props);

    ApplyPut.addapplyPut = this.addapplyPut.bind(this);
    this.delApply = this.delApply.bind(this);
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.applyPutcss == "applyPut-all") {
      this.setState({
        applyPutcss: "applyPut-part",
        applyPutfrom: "applyPutfrom-part applyPutfrom"
      })
    } else {
      this.setState({
        applyPutcss: "applyPut-all",
        applyPutfrom: "applyPutfrom-all applyPutfrom"
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

  //  ��Ӱڵ���Ϣ;
  static addapplyPut(x, y) { };
  public addapplyPut(x, y) {
    let arr = this.state.applyList;
    arr.push({
      address: "����������ڷŵص�", startTime: "2020-03-14", endTime: "2020-03-17", longitude: x, latitude: y
    });
    this.setState({
      applyList: arr
    })
    console.log(this.state)
  }

  // �۽�
  public foucus(event) {
    console.log("�۽�2", event.target.value);
    let index = event.target.getAttribute("data-index");
    console.log("address����index", index);
  }

  // ʧ��
  public blur(event) {
    //if (this.state.address == "") {
    //  this.setState({ address: "����������ڷŵص�" })
    //}
  }

  // ������������
  public changeContent(event) {
   // console.log("content����", event.target.value);
    this.setState({
      content: event.target.value,
    });
  }


  //�޸İڵ��ַ
  public changeAddress(event) {
   let index = event.target.getAttribute("data-index");
  // console.log("address����index", index);
    let applyList = this.state.applyList // ������ֵ����
    applyList[index].address = event.target.value // ���¶��������޸ģ�Ȼ��ֵ����Ҫ�ı�Ķ���
    this.setState({
      applyList: applyList,
    });
  }

  // ɾ����Ŀ-ok
  public delApply(event) {
    let index = event.target.getAttribute("data-index");
     let applyList = this.state.applyList;
      applyList.splice(index, 1);
     this.setState({ applyList: applyList });
    console.log("ɾ����Ŀ2", this.state.applyList);

    //֪ͨ3d��ɾ����λ��
    let longitude = event.target.getAttribute("data-longitude");
    let latitude = event.target.getAttribute("data-latitude");
      
  }

  public dataService: DataService = new DataService();
  //�ύ
  public sumbitApplyput() {
    console.log("�ύ", this);
    console.log("�ύ2", this.state);
    this.dataService.postAdvertisementPoint(this.sumbitApplyputsucceed, this.state);
  }

  // �ڵ������ύ -- �ɹ�
  public sumbitApplyputsucceed(data) {
    alert(data);
    window.history.back();
  }

  public render() {
    return (
      <div>
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <span className="iconfont companyInfoicon">&#xe83b;</span>
          </RouterDOM.Link>
          <span>����ڵ�</span>
        </p>

        <div className={this.state.applyPutcss}>
          <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
            <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
          </div>
          <form >
            <ul className={this.state.applyPutul}>
              <li>
                <span className={"applySpanleft"}><span className="redStar">*</span>������</span><p className={"applyRight"}>{this.state.applicant}</p>
              </li>
              <li>
                <span className="redStar">*</span>�ֻ�����<p className={"applyRight"}>{this.state.phone}</p>
              </li>
              <li>
                <span className="redStar">*</span>���뵥λ<p className={"applyRight"}>{this.state.company}</p>
              </li>
              <li>
                <p><span className="redStar">*</span>�������ݣ�</p>
                <textarea className="getapplyPuttextarea" value={this.state.content} 
                  placeholder="�뽫��������������������200���ڣ�"
                  onChange={this.changeContent.bind(this)}></textarea>
            </li>
            </ul>
            <div className="applyList">
              <p className="theapplyP">��������Ͷ�ŵص������Ͷ�ſ�ʼ������ʱ��</p>
              <ul style={{ "margin": "0" }}>
                <li>
                  <div className="applyAddress">�����õص�</div>
                  <div className="applytime">��ʼʱ��</div>
                  <div className="applytime">����ʱ��</div>
                  <div className="applyicom"> <i className="iconfont" style={{ "color": "#fff" }}>&#xe82d;</i></div>
                </li>
                {
                  this.state.applyList.map((i, index) => {
                    return (
                      <li key={index}>
                        <div className="applyAddress"><span className="applyIndexof">{index + 1}</span>
                          <input className="" type="text" placeholder="����" style={{ " width": "18rem",  "border": 0 }}
                            value={i.address} onFocus={this.foucus.bind(this)} data-longitude={i.longitude} data-latitude={i.latitude}
                            onBlur={this.blur.bind(this)} onChange={this.changeAddress.bind(this)} data-index={index} />
                        </div>
                        <div className="applytime" style={{ "color": "#158CE8" }}>{i.startTime}</div>
                        <div className="applytime" style={{ "color": "#158CE8" }}>{i.endTime}</div>
                        <div className="applyicom" > <i className="iconfont" onClick={this.delApply}
                          data-longitude={i.longitude} data-latitude={i.latitude}
                          data-index={index} style={{ "color": "#158CE8" }} >&#xe81c;</i></div>
                      </li>
                    )
                  })
                }
         
              </ul>
            </div>
            <div className="applyPutSumbit" onClick={this.sumbitApplyput.bind(this)}>�ύ</div>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    inval:"",
    // ������
    applicant: "Ī����",
    //phone
    phone: "13000000000",
    //������ҵ
    company: "������Ϣ�Ƽ�",
    applyPutcss: "applyPut-part ",
    iconfont: "iconfont iconfont-unturn",
    applyPutul: "applyPutul-part applyPutul",
    // �ڵ��б�
    applyList: [ ],
    address: "",
    // �ڵ�����
    content: "ddd",
    inputValue: "",
    value: '2017-01-25',
  
  }
}

export default ApplyPut;

