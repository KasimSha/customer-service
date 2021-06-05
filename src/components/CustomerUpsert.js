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
  const [salary, setSalary] = useState(state.customer.refemp.salary);
  const [address, setAddress] = useState(state.customer.refemp.address);
  const [city, setCity] = useState(state.customer.refemp.city);
  const [stateName, setStateName] = useState(state.customer.refemp.stateName);
  const [pinCode, setPinCode] = useState(state.customer.refemp.pinCode);
  const [age, setAge] = useState(state.customer.refemp.age);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);
  const updateSalary = (e) => setSalary(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateStateName = (e) => setStateName(e.target.value);
  const updatePinCode = (e) => setPinCode(e.target.value);
  const updateAge = (e) => setAge(e.target.value);

  const addCustomer = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      userName,
      password,
      email,
      mobile,
      salary,
      address,
      city,
      stateName,
      pinCode,
      age
    );

    // THIS IS REDUX ACTION CALLING
    dispatch(
      createCustomerAction({
        firstName,
        lastName,
        userName,
        email,
        password,
        mobile,
        salary,
        address,
        city,
        stateName,
        pinCode,
        age,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setEmail("");
    setMobile("");
    setSalary("");
    setAddress("");
    setCity("");
    setStateName("");
    setPinCode("");
    setAge("");
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
        salary,
        address,
        city,
        stateName,
        pinCode,
        age,
      })
    );

    // reset the form
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setEmail("");
    setMobile("");
    setSalary("");
    setAddress("");
    setCity("");
    setStateName("");
    setPinCode("");
    setAge("");
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
            placeholder="First name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateLastName(e)}
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={userName}
            onChange={(e) => updateUserName(e)}
            className="form-control"
            placeholder="Username"
          />
        </div>

        <div className="mb-1">
          <input
            type="password"
            value={password}
            onChange={(e) => updatePassword(e)}
            className="form-control"
            placeholder="Password"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={email}
            onChange={(e) => updateEmail(e)}
            className="form-control"
            placeholder="Email"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={age}
            onChange={(e) => updateAge(e)}
            className="form-control"
            placeholder="Age"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={salary}
            onChange={(e) => updateSalary(e)}
            className="form-control"
            placeholder="Salary"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={address}
            onChange={(e) => updateAddress(e)}
            className="form-control"
            placeholder="Address"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={city}
            onChange={(e) => updateCity(e)}
            className="form-control"
            placeholder="City"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={stateName}
            onChange={(e) => updateStateName(e)}
            className="form-control"
            placeholder="State"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={pinCode}
            onChange={(e) => updatePinCode(e)}
            className="form-control"
            placeholder="PinCode"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={mobile}
            onChange={(e) => updateMobile(e)}
            className="form-control"
            placeholder="Mobile"
          />
        </div>

        <div className="mb-1">
          {state.customer.refemp.id ? (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Update Customer"
              onClick={() => updateCustomer()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-secondary w-100"
              value="Add Customer"
              onClick={(e) => addCustomer(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
