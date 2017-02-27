import expect from 'expect';
import * as types from '../src/constants/ActionTypes';
import { bills_reducer } from '../src/reducers/bills_Reducer';
import { accData } from '../src/data/acc-data';


describe('Reducer: bill_reducer', () => {

    const initialState = accData.account.bills;
    it('should return the initial state', () => {
      expect( bills_reducer(undefined, {}) ).toEqual(initialState)
    })
    it('should handle PAY_BILL', () => {
        let data = {
          accId: 'Chase 2299',
          detail: 50,
          code:'P'
        }
        const newState = bills_reducer(data, types.PAY_BILL);
        expect(newState).toEqual(data);
    });

    it('should handle ADD_PAYEE', () => {
        let data = {
          accId: 'Chase 2299',
          detail: 50,
          code:'P'
        }
        const newState = bills_reducer(data, types.ADD_PAYEE);
         expect(newState).toEqual( data);
    });

});
