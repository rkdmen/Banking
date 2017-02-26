import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');
let sortedByDate = initialState.accData.history.sort((a, b)=>b.date - a.date)


export function transaction_reducer(state = sortedByDate, action) {
    console.log(state, ' initData')
    switch (action.type) {

      case type.MAKE_DEPOSIT:
        console.log(action, 'MAKE_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          balance:action.payload
        });


      case type.WITHDRAW_DEPOSIT:
        console.log(action, 'WITHDRAW_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          balance:action.payload
        });

      case type.GET_BALANCE:
        console.log(action, 'GET BALANCE REDUCER')
        return Object.assign({}, sortedByDate);


      default:
          return state;
    }

}


