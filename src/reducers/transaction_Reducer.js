import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');
import { hashCode } from '../helper/helper';

export function transaction_reducer(state = initialState, action) {
    let unixTime = Math.round((new Date()).getTime() / 1000);
    switch (action.type) {

      case type.MAKE_DEPOSIT:
        let depositTrans = {
          id:hashCode(action.payload.code, unixTime),
          amount: parseFloat(action.payload.amount),
          balance: parseFloat(action.payload.amount) + parseFloat(state.accData.account.checking[0].balance),
          date: parseFloat(unixTime),
          desc: 'Deposit'
        }
        return Object.assign({}, state, {
          accData: {
            account: {
              checking: [depositTrans, ...state.accData.account.checking]
            }
          }
        });

      case type.WITHDRAW_DEPOSIT:
        let desc;
        if(action.payload.code === 'P'){
          desc = 'Payment'
        } else if (action.payload.code === 'W'){
          desc = 'Withdraw'
        }
        let withdrawTrans = {
          id:hashCode(action.payload.code, unixTime),
          amount: parseFloat(action.payload.amount),
          balance: parseFloat(state.accData.account.checking[0].balance) - parseFloat(action.payload.amount),
          date: parseFloat(unixTime),
          desc: desc
        }
        return Object.assign({}, state, {
          accData: {
            account: {
              checking: [withdrawTrans, ...state.accData.account.checking]
            }
          }
        });

      case type.GET_BALANCE:
        let totalDepositFilter = state.accData.account.checking.filter(item => item.desc ==='Deposit').map(d => d.amount);
        let totalWithdrawFilter = state.accData.account.checking.filter(item => {
          return item.desc ==='Withdraw' || item.desc ==='Payment'
        }).map(w => w.amount);
        let totalDep = totalDepositFilter.reduce((a,b) => a+b);
        let totalWith = totalWithdrawFilter.reduce((a,b) => a+b);
        return Object.assign({}, state, {
          totalBalance: totalDep - totalWith
        });

      default:
          return state;
    }

}


