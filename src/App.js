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
      <AppNavBar />

      <Switch>
        <Route path="/create-customer">
          <CustomerUpsert />
        </Route>

        <Route path="/list-customer">
          <CustomerList />
        </Route>

        <Route exact path="/">
          <CustomerList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
