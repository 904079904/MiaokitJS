import * as React from "react";
import * as ReactDOM from "react-dom";

//import * as ReactRouter  from 'react-router';
import * as RouterDOM from 'react-router-dom';

import TopNav from "topNav";
import LeftNav from "leftNav";
import IconView from "iconView";
import Data from "data";


import "css!./styles/index.css"




class Index extends React.Component {
    constructor(props) {
        super(props);
        this.toggleShare = this.toggleShare.bind(this);

        Index.g_pIns = this;
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

                <div className={"iconView"}>
                    <IconView />
                </div>
               
                <RouterDOM.Switch>
                    <RouterDOM.Route exact path="/data" component={Data} />
                </RouterDOM.Switch>
               
            </div>
        )
    }

    public state = {
        isShare: false, // ����
        isFullScreen: false, //ȫ��
    }

    public deo: Deo = new Deo();

    // TopNav ,�����ָ��
    public topNavSon = ref => { this.topNavChild = ref };
    public leftNavSon = ref => { this.leftNavChild = ref };

    // ��������� index��������ķ�����
    public btnClick = (a) => {
        this.topNavChild.getValuefromChild(a)
       // this.leftNavChild.getValuefromChild(a)
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
    <RouterDOM.HashRouter>
        <Index />
    </RouterDOM.HashRouter>
    , document.getElementById('viewContainer'));

export default Index;




