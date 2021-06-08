import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { CustomerUpsert } from "./components/CustomerUpsert";
import { CustomerList } from "./components/CustomerList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <div className="sticky-top">
        <AppNavBar />
      </div>

      <Switch>
        <Route path="/create-Customer">
          <CustomerUpsert />
        </Route>

        <Route path="/list-Customer">
          <CustomerList />
        </Route>

        <Route exact path="/">
          <CustomerUpsert />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
