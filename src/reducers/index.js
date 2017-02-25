import { combineReducers } from 'redux';
import { transaction_reducer } from './transaction_Reducer';


const rootReducer = combineReducers({
  testing: transaction_reducer
});

export default rootReducer;