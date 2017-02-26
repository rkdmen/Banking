import * as type from '../constants/ActionTypes';
let initialState = require('../data/acc-data.js');

export function bills_reducer(state = initialState.accData.account.bills, action) {
    console.log(state, ' initData creditCard')
    switch (action.type) {



      default:
          return state;
    }

}


