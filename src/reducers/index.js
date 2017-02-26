import { combineReducers } from 'redux';
import { transaction_reducer } from './transaction_Reducer';
import { bills_reducer } from './bills_Reducer';


const rootReducer = combineReducers({
  balanceData: transaction_reducer,
  billsData: bills_reducer
});

export default rootReducer;