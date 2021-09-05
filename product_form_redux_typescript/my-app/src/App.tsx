import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionForm from './components/productForm2';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Table from './components/Table';
import {I18nProvider,locales} from './components/react-intl';
import reactIntl from './components/reactIntl';

//
//</div>
function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={FunctionForm}/>
      
      <Route exact path="/Table" component={Table}/>
      <Route exact path="/ReactIntl" component={reactIntl}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
