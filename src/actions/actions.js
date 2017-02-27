//Actions
import * as type from '../constants/ActionTypes';

export function makeDeposit(amount, code){
    let payload = {
      amount,
      code
    }
    return {
      type: type.MAKE_DEPOSIT,
      payload
    }
}

export function withdrawDeposit(amount, code){
    let payload = {
      amount,
      code
    }
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

export function payBill(accId, detail, code){
    let payload = {
      accId,
      detail,
      code
    }
    return {
      type: type.PAY_BILL,
      payload
    }
}

export function addPayee(acc){
    return {
      type: type.ADD_PAYEE,
      payload:acc
    }
}
