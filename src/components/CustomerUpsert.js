import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//import background from "../images/insurance1.jpg";
import {
  createCustomerAction,
  updateCustomerAction,
} from "../redux/CustomerReducer";

export function CustomerUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
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
  const [gender, setGender] = useState(state.customer.refemp.gender);

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
  const updateGender = (e) => setGender(e.target.value);

  const addCustomer = (e) => {
    e.preventDefault();
    console.log(
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
      gender
    );
    console.log(formEL);
    console.log(formEL.current.checkValidity());

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      const re = /^[a-zA-Z0-9\.]+$/;
      const re1 = /^[a-zA-Z\.]+$/;

      const re2 = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (!re.test(userName)) {
        alert("Username should not contain Special Character");
        return;
      }
      if (!re1.test(firstName)) {
        alert("First name should not contain any special character or Number");
        return;
      }

      if (!re1.test(lastName)) {
        alert("Last name should not contain any special character or Number");
        return;
      }

      if (!re2.test(password)) {
        alert("Password Should Contain Atleast One special character");
        return;
      }

      if (age < 18) {
        alert("Your are under Age");
        return;
      }
      if (age > 60) {
        alert("Your are above Age");
        return;
      }

      if (mobile.length < 10) {
        alert("please enter valid mobile number");
        return;
      }

      if (mobile.length > 10) {
        alert("please enter valid mobile number");
        return;
      }

      if (pinCode.length < 6) {
        alert("please enter valid Pincode");
        return;
      }

      if (pinCode.length < 6) {
        alert("please enter valid PinCode");
        return;
      }

      if (password.length < 8) {
        alert("Password Should Contains atleast 8 characters");
        return;
      }

      // if (
      //   !(
      //     gender === "Male" ||
      //     gender === "male" ||
      //     gender === "Female" ||
      //     gender === "female" ||
      //     gender === "Others" ||
      //     gender === "others"
      //   )
      // ) {
      //   alert("Please enter valid gender");
      // }

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
          gender,
        })
      );

      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);

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
      setGender("");
    }
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
        gender,
      })
    );

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
    setGender("");
  };

  return (
    <div
      className="row "
      // style={{
      //   backgroundImage: `url(${background}) `,
      // }}
    >
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className=" text-center  alert bg-success text-black mt-2">
          {state.customer.refemp.id ? "Update Profile" : "New Customer"}
        </h3>

        {successOperation && (
          <div className="alert alert-success">Opeation Success</div>
        )}

        <form ref={formEL} class="needs-validation" novalidate>
          <div className="row">
            <div className="mb-4 col-6">
              <input
                type="text"
                value={firstName}
                onChange={(e) => updateFirstName(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="First name"
                required
              />
            </div>

            <div className="mb-4 col-6">
              <input
                type="text"
                value={lastName}
                onChange={(e) => updateLastName(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => updateUserName(e)}
              className="form-control "
              style={{ backgroundColor: "lightblue", color: "black" }}
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => updatePassword(e)}
              className="form-control "
              style={{ backgroundColor: "lightblue", color: "black" }}
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => updateEmail(e)}
              className="form-control "
              style={{ backgroundColor: "lightblue", color: "black" }}
              placeholder="Email"
              required
            />
          </div>

          <div className="row">
            <div className="mb-4 col-6">
              <input
                type="number"
                value={age}
                onChange={(e) => updateAge(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="Age"
                required
              />
            </div>

            <div className="mb-4 col-6">
              <input
                type="gender"
                value={gender}
                onChange={(e) => updateGender(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="Gender"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="number"
              value={salary}
              onChange={(e) => updateSalary(e)}
              className="form-control "
              style={{ backgroundColor: "lightblue", color: "black" }}
              placeholder="Salary"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={address}
              onChange={(e) => updateAddress(e)}
              className="form-control "
              style={{ backgroundColor: "lightblue", color: "black" }}
              placeholder="Address "
              required
            />
          </div>

          <div className="row">
            <div className="mb-4 col-6">
              <input
                type="text"
                value={city}
                onChange={(e) => updateCity(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="City"
                required
              />
            </div>

            <div className="mb-4 col-6">
              <input
                type="text"
                value={stateName}
                onChange={(e) => updateStateName(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="State"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-4 col-6">
              <input
                type="number"
                value={pinCode}
                onChange={(e) => updatePinCode(e)}
                className="form-control "
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="PinCode"
                // max="999999"
                min="000000"
                required
              />
            </div>

            <div className="mb-4 col-6 ">
              <input
                type="number"
                value={mobile}
                onChange={(e) => updateMobile(e)}
                className="form-control"
                style={{ backgroundColor: "lightblue", color: "black" }}
                placeholder="Mobile"
                //max="9999999999"
                min="0000000000"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            {state.customer.refemp.id ? (
              <input
                type="button"
                className="  alert text-white f-2 w-100"
                style={{ backgroundColor: "blue" }}
                value="Update"
                onClick={() => updateCustomer()}
              />
            ) : (
              <input
                type="button"
                className=" alert text-white f-2 w-100"
                style={{ backgroundColor: "blue" }}
                value="Register"
                onClick={(e) => addCustomer(e)}
              />
            )}
          </div>
        </form>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
