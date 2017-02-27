import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function scheduleBill_reducer(state = initialState.accData.account.scheduledPayment, action) {
    switch (action.type) {

      case type.PAY_BILL:
        let scheduled = {
          date: action.payload.detail.date,
          acc: action.payload.accId,
          balance: action.payload.detail.amount
        }
        return [...state, scheduled];

      default:
          return state;
    }
}
