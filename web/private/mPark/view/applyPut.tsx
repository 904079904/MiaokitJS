import * as React from "react";
import * as RouterDOM from 'react-router-dom';

class ApplyPut extends React.Component {
  public constructor(props) {
    super(props);

    ApplyPut.addapplyPut = this.addapplyPut.bind(this);
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

  public sumbitApplyputfrom() {

  }

  //  ��Ӱڵ���Ϣ;
  static addapplyPut(a) { };
  public addapplyPut(a) {
    let arr = this.state.applyList;
    arr.push({ address: "����������ڷŵص�", startTime: "2020-03-14", endTime: "2020-03-17" });
    this.setState({
      applyList: arr
    })
    console.log(this.state)
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
          <form className={this.state.applyPutfrom}>
            <p>
              <span className="redStar">*</span>  ������
              <input type="text" value="" className="getillNum" placeholder="���������뵥λ" />
            </p>
            <p><span className="redStar">*</span> �ֻ�����
                <input type="number" value="" className="getillNum" placeholder="�������ֻ�����" />
            </p>
            <p>
              <span className="redStar">*</span> ���뵥λ
               <input type="text" value="" className="getillNum" placeholder="���������뵥λ" />
            </p>
            <p><span className="redStar">*</span> �������ݣ�</p>
            <div>
              <textarea className="getapplyPuttextarea" value="" placeholder="�뽫��������������������200���ڣ�"></textarea>
            </div>

            <div className="applyList">
              <p className="theapplyP">��������Ͷ�ŵص������Ͷ�ſ�ʼ������ʱ��</p>
              <ul style={{"margin":"0"}}>
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
                          <input className="applyAddressInput" type="text" value={i.address} placeholder="����������ڷŵص�" />
                        </div>
                        <div className="applytime" style={{ "color":"#158CE8"}}>{i.startTime}</div>
                        <div className="applytime" style={{ "color": "#158CE8" }}>{i.endTime}</div>
                        <div className="applyicom"> <i className="iconfont" style={{ "color":"#158CE8"}} >&#xe82d;</i></div>
                      </li>
                      )
                  })
                }
              </ul>
            </div>

            <div className="applyPutSumbit" onClick={this.sumbitApplyputfrom.bind(this)}>�ύ</div>
          </form>
        </div>
      </div>
    )
  }

  public state = {
    applyPutcss: "applyPut-part ",
    iconfont: "iconfont iconfont-unturn",
    applyPutfrom: "applyPutfrom-part applyPutfrom",
    applyList: [
      { address: "����������ڷŵص�", startTime: "2020-03-14", endTime:"2020-03-17"  }
    ]
  }
}

export default ApplyPut;