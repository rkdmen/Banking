import expect from 'expect';
import * as types from '../src/constants/ActionTypes';
import  { makeDeposit, withdrawDeposit, getBalance, payBill, addPayee } from '../src/actions/actions';

describe('Actions', () => {
    describe('makeDeposit', () => {
        it('has the ActionType Constant', () => {
            const action = makeDeposit();
            expect(action.type).toEqual(types.MAKE_DEPOSIT);
        });

        it('has the correct payload', () => {
            let data = {
                amount: 100,
                code : 'D'
            }
            const action = makeDeposit(100, 'D');
            expect(action.payload).toEqual(data);
        });
    });

    describe('withdrawDeposit', () => {
        it('has the ActionType Constant', () => {
            const action = withdrawDeposit();
            expect(action.type).toEqual(types.WITHDRAW_DEPOSIT);
        });

        it('has the correct payload', () => {
            let data = {
                amount: 50,
                code : 'W'
            }
            const action = withdrawDeposit(50, 'W');
            expect(action.payload).toEqual(data);
        });
    });

    describe('getBalance', () => {
        it('has the ActionType Constant', () => {
            const action = getBalance();
            expect(action.type).toEqual(types.GET_BALANCE);
        });
    });

    describe('payBill', () => {
        it('has the ActionType Constant', () => {
            const action = payBill();
            expect(action.type).toEqual(types.PAY_BILL);
        });
        it('has the correct payload', () => {
            let data = {
              accId: 'Chase 2299',
              detail: 50,
              code:'P'
            }
            const action = payBill('Chase 2299', 50, 'P');
            expect(action.payload).toEqual(data);
        });
    });

    describe('addPayee', () => {
        it('has the ActionType Constant', () => {
            const action = addPayee();
            expect(action.type).toEqual(types.ADD_PAYEE);
        });
        it('has the correct payload', () => {
              let account = {
                type:'Credit Card',
                acc:'T-Mobile 2590',
                balance: 0
              }
            const action = addPayee(account);
            expect(action.payload).toEqual(account);
        });
    });

});

