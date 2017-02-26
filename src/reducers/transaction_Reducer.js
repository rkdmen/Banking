import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function transaction_reducer(state = initialState, action) {
    console.log(state, ' initData')
    switch (action.type) {

      case type.MAKE_DEPOSIT:
        console.log(state, 'MAKE_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          balance:action.payload
        });


      case type.WITHDRAW_DEPOSIT:
        console.log(state, 'WITHDRAW_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          balance:action.payload
        });

      case type.GET_BALANCE:
        console.log(state, 'GET BALANCE REDUCER')
        let totalDepositFilter = state.accData.history.filter(item => item.desc ==='Deposit').map(d => d.amount);
        let totalWithdrawFilter = state.accData.history.filter(item => item.desc ==='Withdraw').map(w => w.amount);
        let totalDep = totalDepositFilter.reduce((a,b) => a+b)
        let totalWith = totalWithdrawFilter.reduce((a,b) => a+b)
        return Object.assign({}, state, {
          totalBalance: totalDep - totalWith
        });


      default:
          return state;
    }

}


