import * as React from "react";
import * as RouterDOM from 'react-router-dom';

import BottomBtn from "bottomBtn";
import "css!./styles/view.css";

class Home extends React.Component {
    public constructor(props) {
        super(props)
    }

    public componentDidMount() {
        BottomBtn.toggleIcon(1);
    }

    public render() {
        return (
            <div >
                <TopBtn />
                <BottomBtn />
            </div>
            )
    }


    public state = {

    }

    //over
}


// ������ť��
class TopBtn extends React.Component {
    public constructor(props) {
        super(props)

       
    }

    public state = {
        topView: "topView"
    }

    public toggleIconbox(a) {
        console.log('toggleIconbox', a);
        this.setState({
            topView: "topView-big"
        })
    }

    public render() {
        return (
            <div className={this.state.topView}>
                <div className={"iconBox"}>
                    <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
                    <p>��ʾ��</p>
                </div>
                <div className={"iconBox"}>
                    <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
                    <p>��ʾ��</p>
                </div>
                <div className={"iconBox"} onClick={this.toggleIconbox.bind(this, 10)}>
                    <span className="iconfont" style={{ "fontSize": "5rem" }}>&#xe7fa;</span>
                    <p>����</p>
                </div>
            </div>
            )
    }
}

// �۵���ť��
class FoldBtn extends React.Component {
    public constructor(props) {
        super(props)


    }

    public state = {
    }

    public render() {
        return (
            <div>
              foldBtn
            </div>
        )
    }
}



export default Home;