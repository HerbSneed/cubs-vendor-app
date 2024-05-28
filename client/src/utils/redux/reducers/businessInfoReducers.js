import { UPDATE_BUSINESS_INFO } from "../actions/actions";

const initialBusinessState = {
  service_provided: "",
  minority_ownership: "",
  authorized_name: "",
  authorized_phone_number: "",
  authorized_signature: "",
};

const basicBusinessReducer = (state = initialBusinessState, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};




export default basicBusinessReducer;