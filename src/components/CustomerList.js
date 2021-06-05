import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteCustomerAction,
  getAllCustomerAction,
  getByIdCustomerAction,
  updateRefCustomer,
} from "../redux/CustomerReducer";
import { CustomerModal } from "./CustomerModal";

export function CustomerList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(state);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllCustomerAction());
  }, []);

  const deleteCustomer = (item, index) => {
    dispatch(deleteCustomerAction(item));

    setSuccessOperation(true);
    setTimeout(() => setSuccessOperation(false), 2000);
  };

  const updateCustomer = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefCustomer(item));

    // form page
    history.push("/create-customer");
  };

  const getCustomerById = (item) => {
    dispatch(getByIdCustomerAction(item));
  };

  return (
    <>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Customer List</h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">USERNAME</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MOBILE</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...state.customer.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.userName}</td>
                  <td>{"********"}</td>
                  <td>{"****@gmail.com"}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => getCustomerById(item)}
                      value="Detail"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      onClick={() => updateCustomer(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                    /
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteCustomer(item, index)}
                      className="btn btn-link text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>

      {/** Customer MODAL */}
      <CustomerModal />
    </>
  );
}
