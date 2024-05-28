import { UPDATE_BASIC_INFO } from "../actions/actions";


const initialBasicState = {
  vendor: "",
  contact_f_name: "",
  contact_l_name: "",
  contact_m_init: "",
  contact_phone_number: "",
  tax_id: "",
  remittance_address: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
  remittance_email: ""
};

const basicInfoReducer = (state = initialBasicState, action) => {
  switch (action.type) {
    case UPDATE_BASIC_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};


export default basicInfoReducer;