import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Teste from "./pages/Teste";
import TimeLine from "./components/TimeLineTable";
import "./assets/styles/index.css";
import "material-icons/iconfont/material-icons.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import  ptBR  from "date-fns/locale/pt-BR";


const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <div className="md:ml-64">
          <Route component={Dashboard} exact path="/" />
          <Route component={Settings} exact path="/settings" />
          <Route component={Tables} exact path="/tables" />
          <Route component={Teste} exact path="/maps" />
          <Route component={TimeLine} exact path="/timeline" />
        </div>
      </MuiPickersUtilsProvider>
    </BrowserRouter>
  );
};

export default Routes;
