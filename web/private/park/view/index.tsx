import * as React from "react";
import * as ReactDOM from "react-dom";

import TopNav from "topNav";
import LeftNav from "leftNav";
import IconView from "iconView";
import Data from "data";
import Share from "share";


import "css!./styles/index.css"
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';


interface IProps {

}

interface IState {
    isFullScreen: boolean,
    isShare: boolean
}

class Index extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.toggleShare = this.toggleShare.bind(this);

        Index.g_pIns = this;
    }

    public readonly state: Readonly<IState> = {
        isFullScreen: false,
        isShare: false
    }
    // 
    public static g_pIns: Index = null;

    // ����
    toggleShare = (e) => {
        this.setState({ isShare: !this.state.isShare })
    }

    // ȫ��
    fullScreen = (e) => {
        this.setState({ isFullScreen: !this.state.isFullScreen })
    }

 

    public sw(a) {
        console.log(this);
        // ���ù�������
        this.deo.sdeo(a);
        // ����TopNav������ķ������ⲿjs��ͨ��UI.����������ķ�����
        this.btnClick(a);
    }

    public doPlay(a) {
        // console.log(a);
        this.btnPlay(a);
    }

    public render() {
        return (
            //<TopNav />

            //{
            //    this.state.isShare ?
            //        <div className={"share"}><Share toggleShare={this.toggleShare} /></div>
            //        : null
            //}
            //<div className={"iconView"}><IconView toggleShare={this.toggleShare} fullScreen={this.fullScreen} /></div>

            <div className={"web"} >
                {this.state.isFullScreen ? null :
                    <span>
                        <TopNav topNavFather={this.topNavSon} /> 
                        <LeftNav leftNavFather={this.leftNavSon} />
                    </span>
                }
                {
                this.state.isShare ?
                    <div className="share"><Share toggleShare={this.toggleShare} /></div>
                    : null
                }
                <div className={"iconView"}>
                    <IconView toggleShare={this.toggleShare} fullScreen={this.fullScreen} iconFather={this.iconSon} />
                </div>
            
               
            </div>
        )
    }


    public deo: Deo = new Deo();

    // ref, ��������, �����ָ��
    public topNavSon = ref => { this.topNavChild = ref };
    public leftNavSon = ref => { this.leftNavChild = ref };
    public iconSon = ref => { this.iconChild = ref };

    // ��������� index��������ķ�����
    public btnClick = (a) => {
        this.topNavChild.getValuefromChild(a)
        // this.leftNavChild.getValuefromChild(a)
    }

    // ��������� iconView��������ķ�����
    public btnPlay = (a) => {
        console.log(a);
        this.iconChild.play(a)
    }
}


// 
class Deo {
    public sdeo(e) {
        console.log("Deo", e);
       // console.log(TopNav);
       // TopNav.sho();
    };


}


ReactDOM.render(
    //<RouterDOM.HashRouter>
    //    <Index />
    //</RouterDOM.HashRouter>

    <HashRouter>
        <>
            <Switch>
                <Route path="/data" component={Data} />
                <Route exact path="/" component={Index} />
            </Switch>
        </>
    </HashRouter>
    , document.getElementById('viewContainer'));

export default Index;




