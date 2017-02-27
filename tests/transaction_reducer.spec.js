import expect from 'expect';
import * as types from '../src/constants/ActionTypes';
import { transaction_reducer } from '../src/reducers/transaction_Reducer';
import { accData } from '../src/data/acc-data';


describe('Reducer: transaction_reducer', () => {
    const initialState = accData;

    it('should handle GET_BALANCE', () => {
        const newState = transaction_reducer(initialState, types.GET_BALANCE);

        let totalDepositFilter = initialState.account.checking.filter(item => item.desc ==='Deposit').map(d => d.amount);
        let totalWithdrawFilter = initialState.account.checking.filter(item => {
          return item.desc ==='Withdraw' || item.desc ==='Payment'
        }).map(w => w.amount);
        let totalDep = totalDepositFilter.reduce((a,b) => a+b);
        let totalWith = totalWithdrawFilter.reduce((a,b) => a+b);
        // console.log(newinitialState)
         expect(totalDep-totalWith).toEqual(2400.50);
    });

});


      // case type.MAKE_DEPOSIT:
      //   let depositTrans = {
      //     id:hashCode(action.payload.code, unixTime),
      //     amount: parseFloat(action.payload.amount),
      //     balance: parseFloat(action.payload.amount) + parseFloat(initialState.accData.account.checking[0].balance),
      //     date: parseFloat(unixTime),
      //     desc: 'Deposit'
      //   }
      //   return Object.assign({}, state, {
      //     accData: {
      //       account: {
      //         checking: [depositTrans, ...state.accData.account.checking]
      //       }
      //     }
      //   });

      // case type.WITHDRAW_DEPOSIT:
      //   let desc;
      //   if(action.payload.code === 'P'){
      //     desc = 'Payment'
      //   } else if (action.payload.code === 'W'){
      //     desc = 'Withdraw'
      //   }
      //   let withdrawTrans = {
      //     id:hashCode(action.payload.code, unixTime),
      //     amount: parseFloat(action.payload.amount),
      //     balance: parseFloat(state.accData.account.checking[0].balance) - parseFloat(action.payload.amount),
      //     date: parseFloat(unixTime),
      //     desc: desc
      //   }
      //   return Object.assign({}, state, {
      //     accData: {
      //       account: {
      //         checking: [withdrawTrans, ...state.accData.account.checking]
      //       }
      //     }
      //   });

