import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createCustomerAction,
  updateCustomerAction,
} from "../redux/CustomerReducer";

export function CustomerUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [firstName, setFirstName] = useState(state.customer.refemp.firstName);
  const [lastName, setLastName] = useState(state.customer.refemp.lastName);
  const [userName, setUserName] = useState(state.customer.refemp.userName);
  const [password, setPassword] = useState(state.customer.refemp.password);
  const [email, setEmail] = useState(state.customer.refemp.email);
  const [mobile, setMobile] = useState(state.customer.refemp.mobile);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);

  const addCustomer = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, userName, password, email, mobile);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createCustomerAction({
        firstName,
        lastName,
        userName,
        email,
        password,
        mobile,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  const updateCustomer = () => {
    dispatch(
      updateCustomerAction({
        id: state.customer.refemp.id,
        firstName,
        lastName,
        userName,
        email,
        mobile,
        password,
      })
    );

    // reset the form
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-secondary">
          {state.customer.refemp.id ? "Update Customer" : "Create Customer"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={firstName}
            onChange={(e) => updateFirstName(e)}
            className="form-control"
            placeholder="Enter First name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Enter Lastname"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={userName}
            onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Enter Username"
          />
        </div>

        <div className="mb-1">
          <input
            type="password"
            value={password}
            onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={email}
            onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mobile}
            onChange={(e) => updateMobile(e)}
            className="form-control"
            placeholder="Enter Mobile"
          />
        </div>

        <div className="mb-1">
          {state.employee.refemp.id ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Employee"
              onClick={() => updateEmployee()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Employee"
              onClick={(e) => addEmployee(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
