import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  paymentDoneAction,
  updatePaymentAction,
} from "../redux/PaymentReducer";

export function PaymentUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  console.log(state);

  const [amount, setAmount] = useState(state.payment.refemp.amount);
  const [date, setDate] = useState(state.payment.refemp.date);
  const [accountNum, setAccountNum] = useState(state.payment.refemp.accountNum);
  const [bankName, setBankName] = useState(state.payment.refemp.bankName);
  const [ifscCode, setIfscCode] = useState(state.payment.refemp.ifscCode);
  const [policyId, setPolicyId] = useState(state.payment.refemp.policyId);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateAmount = (e) => setAmount(e.target.value);
  const updateDate = (e) => setDate(e.target.value);
  const updateBankName = (e) => setBankName(e.target.value);
  const updateAccountNum = (e) => setAccountNum(e.target.value);
  const updateIfscCode = (e) => setIfscCode(e.target.value);
  const updatePolicyId = (e) => setPolicyId(e.target.value);

  const PaymentDone = (e) => {
    e.preventDefault();
    console.log(amount, date, accountNum, bankName, ifscCode, policyId);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      paymentDoneAction({
        amount,
        date,
        accountNum,
        bankName,
        ifscCode,
        policyId,
      })
    );

    // A1 sucess
    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 5000);

    // A2: navigate to another page
    // history.push("/list-employee");

    // reset the form
    setAmount("");
    setDate("");
    setAccountNum("");
    setBankName("");
    setIfscCode("");
    setPolicyId("");
  };

  const updatePayment = () => {
    dispatch(
      updatePaymentAction({
        id: state.payment.refemp.id,
        amount,
        date,
        accountNum,
        bankName,
        ifscCode,
        policyId,
      })
    );

    // reset the form
    setAmount("");
    setDate("");
    setAccountNum("");
    setBankName("");
    setIfscCode("");
    setPolicyId("");
  };

  return (
    <div className="row">
      <div className="col-3 col-md-3 d-none d-md-block"></div>
      <div className="col-12 col-md-6">
        <h3 className="alert alert-primary">
          {state.payment.refemp.id ? "Update Payment" : "Payment"}
        </h3>

        {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
        {successOperation && (
          <div className="alert alert-success">Operation Success</div>
        )}

        <div className="mb-1">
          <input
            type="text"
            value={amount}
            onChange={(e) => updateAmount(e)}
            className="form-control"
            placeholder="Enter Amount"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={date}
            onChange={(e) => updateDate(e)}
            className="form-control"
            placeholder="Enter Date"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={accountNum}
            onChange={(e) => updateAccountNum(e)}
            className="form-control"
            placeholder="Enter Account Number"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={bankName}
            onChange={(e) => updateBankName(e)}
            className="form-control"
            placeholder="Enter Bank Name"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => updateIfscCode(e)}
            className="form-control"
            placeholder="Enter IFSC Code"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={policyId}
            onChange={(e) => updatePolicyId(e)}
            className="form-control"
            placeholder="Enter Policy Id"
          />
        </div>

        <div className="mb-1">
          {state.payment.refemp.id ? (
            <input
              type="button"
              className="btn btn-primary w-100"
              value="Update Payment"
              onClick={() => updatePayment()}
            />
          ) : (
            <input
              type="button"
              className="btn btn-primary w-100"
              value="Pay"
              onClick={(e) => PaymentDone(e)}
            />
          )}
        </div>
      </div>
      <div className="col-3 col-md-3  d-none d-md-block"></div>
    </div>
  );
}
