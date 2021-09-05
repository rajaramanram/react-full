import react,{useState,useEffect} from 'react';
//import Form from './components/Form';
import FunctionForm from './components/functionForm_redux';
import DashBoard from './components/DashBoard_redux';
import Table from './components/Table';
import CreateTreeView from './components/TreeView_redux';
import WidgetView from './components/TreeViewCheckBox';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

//import useToken from './components/useToken';
/*function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}*/

/*function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}*/


  

function App() {
  //const token = getToken();
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //const { token, setToken } = useToken();
  //console.log(token)
  //const [token,setToken] = useState();
  // return login page if  toke is outdated or false
  /*if(!token) {
    return <FunctionForm setToken={setToken} />
  }*/

  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/DashBoard" component={DashBoard}/>
          <Route exact path="/" component={FunctionForm}/>
          <Route exact path="/TreeView" component={CreateTreeView}/>
          <Route exact path="/TreeViewCheck" component={WidgetView}/>
          <Route exact path="/Table" component={Table}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
