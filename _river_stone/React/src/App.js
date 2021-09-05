import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminManagement from './components/AdminManagemet';
import EmailFeature from './components/EmailFeature';
import EmailFeatureNodeMailer from './components/EmailFeatureNodeMailer';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import useToken from './components/useToken';
//import unctionForm from './components/productForm2';

function App() {
  const { token, setToken } = useToken();
  console.log(token)
  /*if(!token) {
    return <UserLogin setToken={setToken} />
  }*/
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={UserLogin}/>
      
      <Route exact path="/user_register" component={UserRegister}/>
      <Route exact path="/admin" component={AdminManagement}/>
      <Route exact path="/email" component={EmailFeature}/>
      <Route exact path="/email_node" component={EmailFeatureNodeMailer}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
