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
import { PaymentList } from "./components/PaymentList";
//import background from "./images/insurance4.jpg";

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

        <Route path="/payment-list">
          <PaymentList />
        </Route>
        <div
          className="row "
          style={{
            height: "100vh",
            backgroundColor: "cyan",
            fontSize: "80px",
          }}

          //   fontSize: "80px",
          //   backgroundImage: `url(${background}) `,
          // }}
        >
          <div className="col  d-flex justify-content-center align-items-center">
            <Route exact path="/">
              Welcome to online Term Insurance
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
