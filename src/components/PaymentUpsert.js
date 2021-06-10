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
  const [cvv, setCvv] = useState(state.payment.refemp.cvv);
  const [cardNumber, setCardNumber] = useState(state.payment.refemp.cardNumber);
  const [expiredDate, setExpiredDate] = useState(
    state.payment.refemp.expiredDate
  );
  //const [policyId, setPolicyId] = useState(state.payment.refemp.policyId);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const updateAmount = (e) => setAmount(e.target.value);
  const updateDate = (e) => setDate(e.target.value);
  const updateCvv = (e) => setCvv(e.target.value);
  const updateCardNumber = (e) => setCardNumber(e.target.value);
  const updateExpiredDate = (e) => setExpiredDate(e.target.value);
  //const updatePolicyId = (e) => setPolicyId(e.target.value);

  const PaymentDone = (e) => {
    e.preventDefault();
    console.log(amount, date, cvv, cardNumber, expiredDate);

    // THIS IS REDUX ACTION CALLING
    dispatch(
      paymentDoneAction({
        amount,
        date,
        cvv,
        cardNumber,
        expiredDate,
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
    setCvv("");
    setCardNumber("");
    setExpiredDate("");
    // setPolicyId("");
  };

  const updatePayment = () => {
    dispatch(
      updatePaymentAction({
        id: state.payment.refemp.id,
        amount,
        date,
        cvv,
        cardNumber,
        expiredDate,
      })
    );

    // reset the form
    setAmount("");
    setDate("");
    setCvv("");
    setCardNumber("");
    setExpiredDate("");
    // setPolicyId("");
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
            type="date"
            value={date}
            onChange={(e) => updateDate(e)}
            className="form-control"
            placeholder="Enter Date"
          />
        </div>

        {/* <div className="mb-1">
          <input
            type="number"
            value={policyId}
            onChange={(e) => updatePolicyId(e)}
            className="form-control"
            placeholder="Enter Policy Id"
          />
        </div> */}
        <label htmlFor="">Enter Card Details</label>
        <div className="mb-1">
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => updateCardNumber(e)}
            className="form-control"
            placeholder="Enter Card Number"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={cvv}
            onChange={(e) => updateCvv(e)}
            className="form-control"
            placeholder="Enter CVV"
          />
        </div>

        <div className="mb-1">
          <input
            type="text"
            value={expiredDate}
            onChange={(e) => updateExpiredDate(e)}
            className="form-control"
            placeholder="Enter Expired Date"
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
