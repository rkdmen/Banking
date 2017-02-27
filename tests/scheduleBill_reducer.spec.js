import expect from 'expect';
import * as types from '../src/constants/ActionTypes';
import { scheduleBill_reducer } from '../src/reducers/scheduleBill_Reducer';
import { accData } from '../src/data/acc-data';


describe('Reducer: scheduleBill_reducer', () => {
  const initialState = accData.account.scheduledPayment;
  it('should return the initial state', () => {
    expect( scheduleBill_reducer(undefined, {}) ).toEqual(initialState)
  })
    it('should handle PAY_BILL', () => {
    const newState = scheduleBill_reducer(initialState, types.PAY_BILL);
     expect(newState).toEqual([ { date: 1488396400, acc: 'Chase 7770', balance: 50 } ]);
  });

});

// import * as type from '../constants/ActionTypes';
// let initialState = require('../data/acc-data.js');

// export function scheduleBill_reducer(state = initialState.accData.account.scheduledPayment, action) {
//     switch (action.type) {

//       case type.PAY_BILL:
//         let scheduled = {
//           date: action.payload.detail.date,
//           acc: action.payload.accId,
//           balance: action.payload.detail.amount
//         }
//         return [...state, scheduled];

//       default:
//           return state;
//     }
// }
