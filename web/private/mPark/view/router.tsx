import { HashRouter, Route, Switch } from 'react-router-dom';
import * as React from "react";
import Index from "index";
import Home from "home";
import ParkCompany from "parkCompany";
import Photograph from "photograph";
import InfoArea from "infoArea";
import Message from "message";
import PersonalCenter from "personalCenter";
import FindLease from "findLease";
import ApplyPut from "applyPut";
import BookSite from "bookSite";
import RepairsOnline from "repairsOnline";
import Parking from "parking";
import Narrate from "narrate";
import Isay from "isay";

//԰����ҵ--parkCompany; ������ -- photograph�������ѯ--findLease�� �ڵ�����-- applyPut�� 
//����Ԥ��-- bookSite�����߱���-- repairsOnline��ͣ������-- parking
//Index��3dɳ�̣� ΢Ȧ --infoArea�� ��Ѷ--message���ҵ� --personalCenter��

class Router extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Home}>
              <Route path="/infoArea" component={InfoArea} />
            </Route>
            <Route path="/parkCompany" component={ParkCompany} />
            <Route path="/photograph" component={Photograph} />
            <Route path="/findLease" component={FindLease} />
            <Route path="/applyPut" component={ApplyPut} />
            <Route path="/bookSite" component={BookSite} />
            <Route path="/repairsOnline" component={RepairsOnline} />
            <Route path="/parking" component={Parking} />
            <Route path="/message" component={Message} />
            <Route path="/personalCenter" component={PersonalCenter} />
            <Route path="/narrate" component={Narrate} />
            <Route path="/isay" component={Isay} />
          </Switch>
      </HashRouter>
  )}
}

export default Router;