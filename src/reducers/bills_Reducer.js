import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function bills_reducer(state = initialState.accData.account.bills, action) {
    switch (action.type) {

      case type.PAY_BILL:
        let newData = state.map((acc)=>{
          if(acc.acc === action.payload.accId ){
            acc.balance = parseFloat(acc.balance) - parseFloat(action.payload.detail.amount);
          }
          return acc;
        })
        return [...newData];

      case type.ADD_PAYEE:
      console.log(action.payload, ' payload')
        return [...state, action.payload]


      default:
          return state;
    }

}


