import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShowData from './components/ShowData';
import DashBoard from './components/DashBoard';

function App() {
  return (

      <BrowserRouter>

      <Switch>
        <Route exact path='/' component = {ShowData}></Route>
        <Route exact path='/DashBoard' component = {DashBoard}></Route>
      </Switch>
      </BrowserRouter>
  )
}

export default App;
