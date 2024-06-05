import { combineReducers } from 'redux';
import basicInfoReducer from './reducers/basicInfoReducers';
import basicBankReducer from './reducers/bankInfoReducers';
import basicBusinessReducer from './reducers/businessInfoReducers';
import basicDisclaimerReducer from './reducers/basicDisclaimerReducers';

const rootReducer = combineReducers ({
  basicInfo: basicInfoReducer,
  businessInfo: basicBusinessReducer,
  bankInfo: basicBankReducer,
  basicDisclaimerInfo: basicDisclaimerReducer
});

export default rootReducer;