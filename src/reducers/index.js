import { combineReducers } from 'redux';
import { sample_reducer } from './name_Reducer';


const rootReducer = combineReducers({
  testing: sample_reducer
});

export default rootReducer;