import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { CustomerReducer } from "./CustomerReducer";
import { PolicyReducer } from "./PolicyReducer";
import { PaymentReducer } from "./PaymentReducer";

const rootReducer = combineReducers({
  customer: CustomerReducer,
  policy: PolicyReducer,
  payment: PaymentReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
