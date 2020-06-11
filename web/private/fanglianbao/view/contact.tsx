import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import HomeTop from 'homeTop';
import AllBottom from 'allBottom';

class Contact extends React.Component<{ index: any }> {
  constructor(props) {
    super(props);
  }

  public state = {
    tagList: [
      { name: "��ϵ����" },
      { name: "��������" },
      { name: "��վ��ͼ" }
    ],
    tagIndex: 0,
  }

  public componentDidMount() {
  }


  public render() {
    return (
      <div className="index">
        <HomeTop />

        <div className="warp">
          <img src="./fangliangbao/image/blueLogo.png" style={{ margin: "61px 0 21px 0" }} />
          <div className="p-br"></div>
          <div className="p-content">
            {this.state.tagList.map((item, index) => {
              return (
                <div key={index} className="p-child-content" style={{ backgroundColor: this.state.tagIndex === index ? "#17A1E6" : "#F2F2F2", color: this.state.tagIndex === index ? "#fff" : "#2E2E2E" }}
                  onClick={() => this.setState({ tagIndex: index })} >
                  <div style={{ float: "left" }}>{item.name}</div>
                </div>
              )
            })
            }
          </div>

          {this.state.tagIndex === 0 ?
            <div className="user-info">
              <div style={{ overflow: "hidden", float: "left" }}>
                <div style={{ marginBottom: "20px" }}>�ͷ��绰��400-808-3066</div>
                <div style={{ marginBottom: "20px" }}>�������䣺service@3dflb.com</div>
                <div style={{ marginBottom: "20px" }}>��˾��ַ���㶫ʡ�����з�خ���ϴ�����ҵ��������廪����ҵ¥2��¥109��</div>
              </div>
              <div style={{ float: "left", marginLeft: "115px" }}>
                <div className="wx-title" style={{ margin: "0 0 8px 10px" }}>������С�����</div>
                <img src="./fangliangbao/image/wx.png" />
                <div style={{ fontSize: "12px", marginLeft: "10px" }}>��΢��ɨһɨ��ʱ�ֻ�����</div>
              </div>
            </div> : null
          }

          {this.state.tagIndex === 1 ?
            <div className="user-info">
              <div style={{ overflow: "hidden", float: "left" }}>
                <div style={{ marginBottom: "20px" }}>������������QQ��2106682312</div>
                <div style={{ marginBottom: "20px", color: "#17A1E6" }}><span>���ؿƼ�</span><span style={{ marginLeft: "50px" }}>3DSVE CLOUD</span></div>
              </div>
            </div> : null
          }

          {this.state.tagIndex === 2 ?
            <div className="user-info">
              <div style={{ overflow: "hidden", float: "left" }}>
                <div style={{ marginBottom: "20px" }}>�칫����</div>
                <div style={{ marginBottom: "20px", color: "#17A1E6", fontSize: "14px" }}><span>����</span><span style={{ marginLeft: "32px" }}>����</span></div>
                <div style={{ overflow: "hidden", marginBottom: "20px" }}>
                  <div style={{ marginBottom: "8px", color: "#333333", fontSize: "14px", fontWeight: 600 }}>����������԰��/д��¥</div>
                  <div className="f1">���԰��/�칫¥</div>
                  <div className="f1">����԰��/�칫¥</div>
                  <div className="f1">��خ԰��/�칫¥</div>
                  <div className="f1">��ɳ԰��/�칫¥</div>
                  <div className="f1">�麣԰��/�칫¥</div>
                </div>
                <div style={{ overflow: "hidden", marginBottom: "20px" }}>
                  <div style={{ marginBottom: "8px", color: "#333333", fontSize: "14px", fontWeight: 600 }}>������Ȧ԰��/д��¥</div>
                  <div className="f1">��ӱ�԰��/�칫¥</div>
                  <div className="f1">��Ԫ԰��/�칫¥</div>
                  <div className="f1">����԰��/�칫¥</div>
                  <div className="f1">��ӹ�԰԰��/�칫¥</div>
                  <div className="f1">��ɽ԰��/�칫¥</div>
                </div>
                <div style={{ overflow: "hidden", marginBottom: "20px" }}>
                  <div style={{ marginBottom: "8px", color: "#333333", fontSize: "14px", fontWeight: 600 }}>���ݵ����߰칫԰��</div>
                  <div className="f1">1�������߰칫԰��</div>
                  <div className="f1">2�������߰칫԰��</div>
                  <div className="f1">3�������߰칫԰��</div>
                </div>
                <div style={{ overflow: "hidden", marginBottom: "20px" }}>
                  <div style={{ marginBottom: "8px", color: "#333333", fontSize: "14px", fontWeight: 600 }}>���ݵ���վ�칫԰��</div>
                  <div className="f1">���ݶ�վ�����칫԰��</div>
                  <div className="f1">��ʿ��԰�����칫԰��</div>
                  <div className="f1">��ʿ��԰�����칫԰��</div>
                </div>
              </div>
            </div> : null
          }

        </div>

        <AllBottom />
      </div>
    )
  }

}

export default Contact;