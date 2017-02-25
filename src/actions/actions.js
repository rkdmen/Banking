//Actions
import * as type from '../constants/ActionTypes';

export function makeDeposit(detail){
    return {
      type: type.MAKE_DEPOSIT,
      payload: detail
    }
}

export function WithdrawDeposit(detail){
    return {
      type: type.WITHDRAW_DEPOSIT,
      payload: detail
    }
}

export function getBalance(){
    return {
      type: type.GET_BALANCE
    }
}

