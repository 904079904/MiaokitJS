import * as React from "react";
import * as ReactDOM from "react-dom";

import Home from "home";


import ParkCompany from "parkCompany";
import Photograph from "photograph";
import FindLease from "findLease";
import ApplyPut from "applyPut";
import BookSite from "bookSite";
import RepairsOnline from "repairsOnline";
import Parking from "parking";


import InfoArea from "infoArea";
import Message from "message";
import AboutMe from "aboutMe";
import Narrate from "narrate";

import "css!./styles/view.css"
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';



class Index extends React.Component {
  constructor(props) {
    super(props);

  }

  public componentDidMount() {
  }

  public three() { }

  public render() {
    return (
      <div className={"web"} >
        <Home />

      </div>
    )
  }

}




export default Index;

//԰����ҵ--parkCompany; ������ -- photograph�������ѯ--findLease�� �ڵ�����-- applyPut�� 
//����Ԥ��-- bookSite�����߱���-- repairsOnline��ͣ������-- parking
//Index��3dɳ�̣� ΢Ȧ --infoArea�� ��Ѷ--message���ҵ� --aboutMe��

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Index} />

      <Route exact path="/parkCompany" component={ParkCompany} />
      <Route exact path="/photograph" component={Photograph} />
      <Route exact path="/findLease" component={FindLease} />
      <Route exact path="/applyPut" component={ApplyPut} />
      <Route exact path="/bookSite" component={BookSite} />
      <Route exact path="/repairsOnline" component={RepairsOnline} />
      <Route exact path="/parking" component={Parking} />


      <Route exact path="/infoArea" component={InfoArea} />
      <Route exact path="/message" component={Message} />
      <Route exact path="/aboutMe" component={AboutMe} />
      <Route exact path="/narrate" component={Narrate} />


    </Switch>
  </HashRouter>
  , document.getElementById('viewContainer'));


