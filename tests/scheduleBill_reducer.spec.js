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
