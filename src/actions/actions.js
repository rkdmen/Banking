//Actions
import * as type from '../constants/ActionTypes';

export function makeDeposit(payload){
    return {
      type: type.MAKE_DEPOSIT,
      payload
    }
}

export function withdrawDeposit(payload){
    return {
      type: type.WITHDRAW_DEPOSIT,
      payload
    }
}

export function getBalance(){
    return {
      type: type.GET_BALANCE
    }
}

