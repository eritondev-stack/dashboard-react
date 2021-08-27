import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard'
import Settings from "./pages/Settings";
import Tables from './pages/Tables'
import Teste from './pages/Teste'
import './assets/styles/index.css'
import 'material-icons/iconfont/material-icons.css';


const Routes = () => {
  return (
    <BrowserRouter>
    <Sidebar />
    <div className="md:ml-64">
      <Route component={Dashboard} exact path="/" />
      <Route component={Settings} exact path="/settings" />
      <Route component={Tables} exact path="/tables" />
      <Route component={Teste} exact path="/maps" />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
