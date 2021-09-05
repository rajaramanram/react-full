import react,{useState} from 'react';
//import Form from './components/Form';
import FunctionForm from './components/functionForm';
import DashBoard from './components/DashBoard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import useToken from './components/useToken';
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
  const { token, setToken } = useToken();
  console.log(token)
  //const [token,setToken] = useState();
  // return login page if  toke is outdated or false
  if(!token) {
    return <FunctionForm setToken={setToken} />
  }

  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
