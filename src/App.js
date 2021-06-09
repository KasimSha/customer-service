import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { CustomerUpsert } from "./components/CustomerUpsert";
import { CustomerList } from "./components/CustomerList";
import { PolicyUpsert } from "./components/PolicyUpsert";
import { PolicyList } from "./components/PolicyList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar";
import { PaymentUpsert } from "./components/PaymentUpsert";

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

        <Route path="/Customer-list">
          <CustomerList />
        </Route>

        <Route path="/policy-list">
          <PolicyList />
        </Route>

        <Route path="/payments">
          <PaymentUpsert />
        </Route>

        <div className="d-flex row text-center justify-content-center">
          <Route exact path="/">
            WELCOME TO ONLINE TERM INSURACE
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
