import expect from 'expect';
import * as types from '../src/constants/ActionTypes';
import  { makeDeposit, withdrawDeposit, getBalance } from '../src/actions/actions';

describe('Actions', () => {

    describe('makeDeposit', () => {
        it('has the ActionType Constant', () => {
            const action = makeDeposit();
            expect(action.type).toEqual(types.MAKE_DEPOSIT);
        });

        it('has the correct payload', () => {
            let data = {
                amount: 30,
                balance : 2421.5,
                date : 1488099721,
                desc : 'Deposit',
                id : "D7812544599"
            }
            const action = makeDeposit(data);
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
                amount: 20,
                balance : 2421.5,
                date : 1488099721,
                desc : 'Withdraw',
                id : "D7812544599"
            }
            const action = withdrawDeposit(data);
            expect(action.payload).toEqual(data);
        });
    });

    describe('getBalance', () => {
        it('has the ActionType Constant', () => {
            const action = getBalance();
            expect(action.type).toEqual(types.GET_BALANCE);
        });

    });
});

