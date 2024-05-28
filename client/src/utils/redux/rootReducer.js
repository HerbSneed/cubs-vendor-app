import { combineReducers } from 'redux';
import basicInfoReducer from './reducers/basicInfoReducers';
import basicBankReducer from './reducers/bankInfoReducers';
import basicBusinessReducer from './reducers/businessInfoReducers';

const rootReducer = combineReducers ({
  basicInfo: basicInfoReducer,
  businessInfo: basicBusinessReducer,
  bankInfo: basicBankReducer
});

export default rootReducer;