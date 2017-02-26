import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function bills_reducer(state = initialState.accData.account.bills, action) {
    console.log(state, ' initData creditCard')
    switch (action.type) {

      case type.PAY_BILL:
        let newData = state.map((acc)=>{
          if(acc.acc === action.payload.accId ){
            acc.balance = parseFloat(acc.balance) - parseFloat(action.payload.detail.amount);
          }
          return acc;
        })
        return [...newData];

      default:
          return state;
    }

}


