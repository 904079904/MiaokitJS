import { HashRouter, Route, Switch } from 'react-router-dom';
import * as React from "react";
import Index from "index";
import Home from "home";
import ParkCompany from "parkCompany";
import Photograph from "photograph";
import InfoArea from "infoArea";
import Information from "information";
import PersonalCenter from "personalCenter";
import FindLease from "findLease";
import ApplyPut from "applyPut";
import BookSite from "bookSite";
import RepairsOnline from "repairsOnline";
import Parking from "parking";
import Narrate from "narrate";
import Isay from "isay";
import WorkOrder from "workOrder";
import WorkOrderDetail from "workOrderDetail";

//԰����ҵ--parkCompany; ������ -- photograph�������ѯ--findLease�� �ڵ�����-- applyPut�� 
//����Ԥ��-- bookSite�����߱���-- repairsOnline��ͣ������-- parking
//Index��3dɳ�̣� ΢Ȧ --infoArea�� ��Ѷ--information���ҵ� --personalCenter��

class Router extends React.Component {
  render() {
    return(
      <HashRouter>
        <Switch>
            <Route exact path="/index" component={Index} />
            <Route path="/home" component={Home} />
            <Route path="/parkCompany" component={ParkCompany} />
            <Route path="/photograph" component={Photograph} />
            <Route path="/findLease" component={FindLease} />
            <Route path="/applyPut" component={ApplyPut} />
            <Route path="/bookSite" component={BookSite} />
            <Route path="/repairsOnline" component={RepairsOnline} />
            <Route path="/parking" component={Parking} />
            <Route path="/narrate" component={Narrate} />
            <Route path="/isay" component={Isay} />
            <Route path="/workOrder" component={WorkOrder} />
            <Route path="/workOrderDetail" component={WorkOrderDetail} />
            <Route path="/" render={(props) => (
              <Home {...props}>
                <Route path="/infoArea" component={InfoArea} />
                <Route path="/information" component={Information} />
                <Route path="/personalCenter" component={PersonalCenter} />
              </Home>
            )}>
            </Route>
          </Switch>
      </HashRouter>
  )}
}

export default Router;