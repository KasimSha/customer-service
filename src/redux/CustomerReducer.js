const initState = {
  list: [],

  refemp: {},
};

const CUSTOMER_CREATE = "CUSTOMER_CREATE";
const CUSTOMER_UPDATE = "CUSTOMER_UPDATE";
const CUSTOMER_DELETE = "CUSTOMER_DELETE";
const CUSTOMER_GET_ALL = "CUSTOMER_GET_ALL";
const CUSTOMER_GET_BY_ID = "CUSTOMER_GET_BY_ID";

const REF_CUSTOMER = "REF_CUSTOMER";

export function createCustomerAction(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/customer/create";
    const requestBody = { ...payload };

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    dispatch({ type: CUSTOMER_CREATE, payload: payload });
  };
}

export function updateCustomerAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/customer/update/${payload.id}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    dispatch(updateRefCustomer({}));
  };
}

export function deleteCustomerAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/customer/delete/${payload.id}`;
    await fetch(url, { method: "DELETE" });

    dispatch(getAllCustomerAction());
  };
}

export function getAllCustomerAction(payload) {
  return async (dispatch) => {
    const url = "http://localhost:8080/api/customer/findall";

    const response = await fetch(url);
    const customerList = await response.json();
    console.log(customerList);

    dispatch({ type: CUSTOMER_GET_ALL, payload: customerList });
  };
}

export function getByIdCustomerAction(payload) {
  return async (dispatch) => {
    const url = `http://localhost:8080/api/customer/find/${payload.id}`;
    const response = await fetch(url);
    const customerObj = await response.json();

    dispatch(updateRefCustomer(customerObj));
  };
}

export function updateRefCustomer(payload) {
  return { type: REF_CUSTOMER, payload: payload };
}

export function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case CUSTOMER_UPDATE:
      return state;
    case CUSTOMER_DELETE:
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case CUSTOMER_GET_ALL:
      return { ...state, list: action.payload };
    case CUSTOMER_GET_BY_ID:
      return state;

    case REF_CUSTOMER:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
