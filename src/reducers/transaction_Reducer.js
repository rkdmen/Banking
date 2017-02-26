import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function transaction_reducer(state = initialState, action) {
    console.log(state, ' initData')
    switch (action.type) {

      case type.MAKE_DEPOSIT:
        console.log(state, 'state MAKE_DEPOSIT REDUCER')
        console.log(action, 'action MAKE_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          accData: {
            account: {
              checking: [action.payload, ...state.accData.account.checking]
            }
          }
        });


      case type.WITHDRAW_DEPOSIT:
        console.log(state, 'state WITHDRAW_DEPOSIT REDUCER')
        console.log(action, 'action WITHDRAW_DEPOSIT REDUCER')
        return Object.assign({}, state, {
          accData: {
            account: {
              checking: [action.payload, ...state.accData.account.checking]
            }
          }
        });

      case type.GET_BALANCE:
        console.log(state, 'GET BALANCE REDUCER')
        let totalDepositFilter = state.accData.account.checking.filter(item => item.desc ==='Deposit').map(d => d.amount);
        let totalWithdrawFilter = state.accData.account.checking.filter(item => item.desc ==='Withdraw').map(w => w.amount);
        let totalDep = totalDepositFilter.reduce((a,b) => a+b)
        let totalWith = totalWithdrawFilter.reduce((a,b) => a+b)
        return Object.assign({}, state, {
          totalBalance: totalDep - totalWith
        });


      default:
          return state;
    }

}


