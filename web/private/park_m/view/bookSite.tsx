import * as React from "react";
import * as RouterDOM from 'react-router-dom';


import DataService from "dataService";

class BookSite extends React.Component {
  public constructor(props) {
    super(props);

    BookSite.toggleView = this.toggleView.bind(this);
  }

  static toggleView(a, id) { };
  public toggleView(a, id) {
    console.log("fl", a);
    console.log("fl", id);
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
      <div className={this.state.BookSitecss}>
        <p className="companyInfotit">
          <RouterDOM.Link to="/home" >
            <i className="iconfont companyInfoicon">&#xe83b;</i>
          </RouterDOM.Link>
          <span>����ԤԼ</span>
        </p>
        <div className={this.state.showList == true ? "show" : "hide"}>
          <BookList />
        </div>
        <div className={this.state.showInfo == true ? "show" : "hide"}>
          <BookInfo />
        </div>
      </div >
    )
  }

  public state = {
    BookSitecss: "bookSite",
    showList: true,
    showInfo: false,
    showBook: false,
  }
}


export default BookSite;

// �����б�
class BookList extends React.Component {
  public constructor(props) {
    super(props);

    this.getRoomBook = this.getRoomBook.bind(this);
  }

  public componentDidMount() {
    //##16.(����Ԥ��ģ��-����)ͨ��԰��id��ȡ԰���ڿ���Ԥ���ĳ����б�ӿ� ###
    this.dataService.getRoomBook(this.getRoomBook, this.state.park_id, name);

  }

  public dataService: DataService = new DataService();
  //��ȡ԰���ڿ���Ԥ���ĳ����б�
  public getRoomBook(data) {
    console.log("returnRoomBook", data);
    this.setState({
      bookData: data.response,
    })
  }

  public toggleFold() {
    console.log("tftft")
    if (this.state.bookListcss == "bookList-all") {
      this.setState({
        bookListcss: "bookList-part",
        //leaseul: "leaseul"
      })
    } else {
      this.setState({
        bookListcss: "bookList-all",
        // leaseul: "leaseul-all"
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

  // ������࣬��ʾinfo;����list��������Ҫ����FindLease �ķ�����
  public showInfo(a, id, name, e) {
    BookSite.toggleView(a, id);
    console.log("more", a, id, name, e);
    // ��ID����info�����
    BookInfo.getRoomdata(id);
  }

  public bookActive(index, id) {
    console.log("active", index, id);
    this.setState({
      indexOf: index,
      roomId: id
    });
    console.log("bookActive", this.state)
  }

  // �۽�
  public foucus() {
    if (this.state.inputValue == "����") {
      this.setState({ inputValue: "" })
    }
  }

  // ʧ��
  public blur(event) {
    if (this.state.inputValue == "") {
      this.setState({ inputValue: "����" })
    }
  }

  // ����
  public change(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }


  public searchRoomBook() {
    console.log("����", this.state);
    // �ؼ���ɸѡ name
    this.dataService.getRoomBook(this.getRoomBook, this.state.park_id, this.state.inputValue);
  }

  public render() {
    //<p onClick={this.showInfo.bind(this, "Info", "id", "name")} >���� </p>
    return (
      <div className={this.state.bookListcss}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
        </div>
        <ul className={this.state.bookul}>
          {this.state.bookData.map((i, index) => {
            return (
              <li onClick={this.bookActive.bind(this, index, i.id)} className={this.state.indexOf == index ? "bookli-active" : "bookli"}>
                <div className="bookImgback">
                  <img src={i.headimgurl} />
                </div>
                <div className="bookul-middle">
                  <p style={{ "font-size": "2.4rem", "font-weight": "bold" }}>{i.building_id}-{i.floor_id}-{i.room_id}</p>
                  {i.price.map((it, index) => {
                    return (
                      <p style={{ "font-size": "2.5rem" }}>{it.content}��<span className={"bookPrice"}>{it.price}</span> </p>
                    )
                  })}
                </div>
                <div className="bookul-right">
                  <p onClick={this.showInfo.bind(this, "Info", i.id, "name")} className={this.state.indexOf == index ? "show" : "hide"}>����
                  <i className="iconfont" style={{ "fontSize": "2rem" }}>&#xe827;</i>
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className={"bookBtn"}>
          <div className="searchBox">
            <span className="searchBox-text">
              <span className="iconfont" style={{ "fontSize": "3rem" }}>&#xe810;</span>
              <input className="leaseSearch" type="text" placeholder="����"
                value={this.state.inputValue} onFocus={this.foucus.bind(this)}
                onBlur={this.blur.bind(this)} onChange={this.change.bind(this)} />
            </span>
          </div>
          <span className="searchBtn" onClick={this.searchRoomBook.bind(this)}>����</span>
        </div>
      </div>
    )

  }

  public state = {
    bookListcss: "bookList-part",
    iconfont: "iconfont iconfont-unturn",
    bookul: "bookul",
    indexOf: 0,
    park_id: 1,
    // ����������
    inputValue: "����",
    bookData: []
  }
}


// ����-��������Ϣҳ -- Bookinfo
class BookInfo extends React.Component {
  public constructor(props) {
    super(props);

    BookInfo.showList = this.showList.bind(this);
    this.toggleFold = this.toggleFold.bind(this);
    BookInfo.getRoomdata = this.getRoomdata.bind(this);
    this.setBookdata = this.setBookdata.bind(this);
  }

  public dataService: DataService = new DataService();
  static getRoomdata(id) { }
  public getRoomdata(id) {
    // ͨ��id����ȡ������Ϣ��
    this.dataService.getRoomBookInfo(this.setBookdata, id);
  }

  // ��ȡ�������飬���������ʾ��
  static setBookdata(data) { }
  public setBookdata(data) {
    console.log("setBookdata,setBookdata", data);
    this.setState({
      building: data.response.building_id,
      floor: data.response.floor_id,
      room: data.response.room_id,
    })
    SiteInfos.getInfos(data);
    Notes.getNotes(data);
    BookRoom.getRoomdata(data);
  }

  static showList(a, id) { };
  public showList(a, id) {
    console.log("showList", a);
    BookSite.toggleView(a, id);
    this.setState({
      infoli: 0,
      bookInfocss: "bookInfos",
    })
  }

  // �л����ݿ�css
  public toggleFold() {
    console.log("tftft", this.state.infoli)
    if (this.state.infoli == 2) {
      if (this.state.bookInfocss == "bookInfos") {
        this.setState({
          bookInfocss: "bookInfos-all",
          //leaseul: "leaseul"
        })
      } else {
        this.setState({
          bookInfocss: "bookInfos",
          // leaseul: "leaseul-all"
        })
      }
    } else {
      if (this.state.bookInfocss == "bookInfos") {
        this.setState({
          bookInfocss: "bookInfos-part",
          //leaseul: "leaseul"
        })
      } else {
        this.setState({
          bookInfocss: "bookInfos",
          // leaseul: "leaseul-all"
        })
      }
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
  public infoClick(indexof) {
    console.log("infoClick", indexof);
    this.setState({
      infoli: indexof,
    });
  }

  public render() {
    return (
      <div className={this.state.bookInfocss}>
        <p className="companyInfotit">
          <span className="iconfont companyInfoicon" onClick={this.showList.bind(this, "List", "id-01")}>&#xe83b;</span>
          <span className={this.state.infoli !== 2 ? "show" : "hide"}>{this.state.building}-{this.state.floor}-{this.state.room}</span>
          <span className={this.state.infoli == 2 ? "show" : "hide"}>Ԥ������</span>
        </p>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
        </div>
        <div className={this.state.infoli !== 2 ? "leaseInfoul" : "hide"}>
          <ul className={this.state.bookInfoul}>
            <li className={this.state.infoli == 0 ? "bookInfoli-active" : "bookInfoli"} onClick={this.infoClick.bind(this, 0)} >������Ϣ</li>
            <li className={this.state.infoli == 1 ? "bookInfoli-active" : "bookInfoli"} onClick={this.infoClick.bind(this, 1)} >ʹ����֪</li>
          </ul>
        </div>
        <div className="infoContain">
          <div className={this.state.infoli == 0 ? "show" : "hide"}>
            <SiteInfos />
          </div>
          <div className={this.state.infoli == 1 ? "show" : "hide"}>
            <Notes />
          </div>
          <div className={this.state.infoli == 2 ? "show" : "hide"}>
            <BookRoom />
          </div>
          <div className={this.state.infoli !== 2 ? "bookSumbit" : "hide"} onClick={this.infoClick.bind(this, 2)}>Ԥ��</div>
        </div>
      </div>
    )

  }

  public state = {
    bookInfocss: "bookInfos",
    iconfont: "iconfont iconfont-unturn",
    building: "A",
    floor: "1F",
    room: "206",
    infoli: 0,
    bookInfoul: "bookInfoul",
    leaseInfoul: "leaseInfoul_br",
  }
}

//Ԥ������-��BookingRoom
class BookRoom extends React.Component {
  public constructor(props) {
    super(props);

    BookRoom.getRoomdata = this.getRoomdata.bind(this);
  }

  public componentDidMount() {
    console.log("NotesNotesNotes")
  }

  static getRoomdata(data) { };
  public getRoomdata(data) {
    console.log("getBook", data);
    this.setState({
      id: data.response.id ,
      building_id: data.response.building_id ,
      floor_id: data.response.floor_id ,
      room_id: data.response.room_id ,
    })
  }

  public toggleFold() {
    if (this.state.iconfont == "iconfont iconfont-unturn") {
      this.setState({
        iconfont: "iconfont iconfont-turn",
      })
    } else {
      this.setState({
        iconfont: "iconfont iconfont-unturn",
      })
    }

    if (this.state.bookRoom == "bookRoom-part") {
      this.setState({
        bookRoom: "bookRoom-all",
        bookformcss:"bookform-all "
      })
    } else {
      this.setState({
        bookRoom: "bookRoom-part",
        bookformcss:"bookform-part"
      })
    }
  }

  // �����������
  public changebookContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  //��������
  public changebookTheme(event) {
    this.setState({
      theme: event.target.value,
    });
  }


  public dataService: DataService = new DataService();
  // �ύԤԼ���� 
  public bookSumbit() {
    console.log("bookSumbit",this.state);
    this.dataService.bookingRoom(this.bookSumbitOK, this.state);
  }

  //�ύ�ɹ�
  public bookSumbitOK(data) {
    alert(data);
   //BookInfo.showList("List", "id-01");
  }


  public render() {
    return (
      <div className={this.state.bookRoom}>
        <div className={"foleBtn"} onClick={this.toggleFold.bind(this)}>
          <i className={this.state.iconfont} style={{ "fontSize": "5rem" }}>&#xe849;</i>
        </div>
        <form className={this.state.bookformcss}>
          <ul className={"bookfromul"}>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>������</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.applicant} placeholder="��������ϵ������" />
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}> <span className="redStar">*</span>�ֻ�����</span>
              <p className={"bookfromliRight"}>
                <input type="number" value={this.state.phone} placeholder="��������ϵ������" />
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>������ҵ</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.company} placeholder="��������ҵ����" />
              </p>
          </li>
            <li className={"bookActive"}>
              <span className={"bookformLeft"}><span style={{ "color": "#F2F2F2", "margin-right": "1rem" }}>*</span>ʹ�ó���</span>
              <p className={"bookfromliRight"}>
                {this.state.building_id}-{this.state.floor_id}-{this.state.room_id}  
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>��ʼ����</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.start_date} placeholder="��ѡ��ʼ����" />
                <i className="iconfont" style={{ "color":" #158CE8","float": "right","font-size": "3rem"}}>&#xe82d;</i>
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>��ʼʱ��</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.start_time} placeholder="��ѡ��ʼʱ��" />
                <i className="iconfont" style={{ "color": " #949494", "float": "right", "font-size": "3rem" }}>&#xe827;</i>
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>��������</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.end_date} placeholder="��ѡ���������" />
                <i className="iconfont" style={{ "color": " #158CE8", "float": "right", "font-size": "3rem" }}>&#xe82d;</i>
              </p>
          </li>
          <li>
              <span className={"bookformLeft"}><span className="redStar">*</span>����ʱ��</span>
              <p className={"bookfromliRight"}>
                <input type="text" value={this.state.end_time} placeholder="��ѡ�����ʱ��" />
                <i className="iconfont" style={{ "color": " #949494", "float": "right", "font-size": "3rem" }}>&#xe827;</i>
              </p>
          </li>
          <li>
            <p><span className="redStar">*</span>�������⣺</p>
              <textarea className="bookTheme" value={this.state.theme} placeholder="50����"
                onChange={this.changebookTheme.bind(this)}></textarea>
          </li>
          <li>
            <p><span className="redStar">*</span>��������</p>
              <textarea className="bookContent" value={this.state.content}
                placeholder="50�뽫��������������������200���ڣ�"
                onChange={this.changebookContent.bind(this)}></textarea>
            </li>
          </ul>
          <div className="bookSumbit" onClick={this.bookSumbit.bind(this)}>�ύ</div>
        </form>
      </div>
    )
  }

  public state = {
    iconfont: "iconfont iconfont-unturn",
    bookRoom: "bookRoom-part",
    bookformcss: "bookform-part",
      //id
      id: "",
      //������
      applicant: "��xxx",
      //�ֻ�����
      phone: "15211111111",
      //������ҵ
      company: "������Ϣ�Ƽ�",
      //ʹ�ó���
      room: "",
      //ʹ�ó��ض�Ӧ��¥id��ģ�ͱ��(����ƥ���Ӧ3d��¥)
      building_id: "",
      //ʹ�ó��ض�Ӧ��¥id��ģ�ͱ��(����ƥ���Ӧ3d��¥)
      floor_id: "",
      //ʹ�ó��أ�ģ�ͱ��(����ƥ���Ӧ3d����)
      room_id: "",
      //��ʼ����
      start_date: "2020-02-28",
      //��ʼʱ��
      start_time: "19:30:00",
      //��������
      end_date: "2020-02-28",
      //����ʱ��
      end_time: "19:30:00",
      //����
      theme: "",
      //��������
      content: "", 
  }

}


//��-��������Ϣ siteInfos
class SiteInfos extends React.Component {
  public constructor(props) {
    super(props);

    SiteInfos.getInfos = this.getInfos.bind(this);
  }

  public componentDidMount() {
    console.log("������Ϣ,������Ϣ");
  }

  static getInfos(data) { };
  public getInfos(data) {
    console.log("getinfo", data);
    this.setState({
      descript: data.response.descript,
    })
  }

  public render() {
    return (
      <div className={"siteInfosbox"}>
        <ul>
          {this.state.descript.map((i, index) => {
            return (
              <li>{index + 1}��{i.content} </li>
            )
          })}
        </ul>
      </div>
    )
  }

  public state = {
    descript: [],
  }

}


//��-��ʹ����֪
class Notes extends React.Component {
  public constructor(props) {
    super(props);

    // Picshow.setPicshow = this.setPicshow.bind(this);
    Notes.getNotes = this.getNotes.bind(this);

  }

  public componentDidMount() {
    console.log("ʹ����֪,ʹ����֪")
  }

  static getNotes(data) { };
  public getNotes(data) {
    console.log("NotesNotes", data);
    this.setState({
      guide: data.response.guide,
    })
  }

  public render() {
    return (
      <div className={"notesBox"}>
        <p>�𾴵���ҵ�� ���ã�<span>{this.state.guide}</span></p>
      </div>
    )
  }

  public state = {
    guide: "",
  }

}