import logo from "./logo.svg";
import "./App.css";
import Namedts from "./Components/Namedts";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Namecls from "./Components/Namecls";
import Contactcls from "./Components/Contactcls";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Namecls} />
          <Route exact path="/contact" component={Contactcls} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
