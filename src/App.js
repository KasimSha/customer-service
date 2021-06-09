import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { CustomerUpsert } from "./components/CustomerUpsert";
import { CustomerList } from "./components/CustomerList";
import { PolicyUpsert } from "./components/PolicyUpsert";
import { PolicyList } from "./components/PolicyList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";

function App() {
  return (
    <Router>
      <div className="sticky-top">
        <AppNavBar />
      </div>

      <Switch>
        <Route path="/create-policy">
          <PolicyUpsert />
        </Route>

        <Route path="/customer-list">
          <CustomerList />
        </Route>

        <Route path="/policy-list">
          <PolicyList />
        </Route>

        <Route exact path="/">
          <PolicyList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
