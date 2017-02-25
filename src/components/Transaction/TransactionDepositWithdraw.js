import React, { Component } from 'react';
import { Button, Grid, Input, Label, Segment } from 'semantic-ui-react'

class TransactionDepositWithdraw extends Component {
  constructor(props) {
    super(props);
  }

  handleInput(e){
    let amount = e.target.value;
    let checkAmount = /^\$?[0-9]+\.?[0-9]?[0-9]?$/; //RegExpression for checking amount
    let unix = new Date().getTime();

    if(checkAmount.test(amount)){
    }
  }

  render(){
    console.log(this.props, ' this prop transaction')
    return (
        <div className='inputContainer'>
          <Input
            className='amount-input-field'
            label={{ basic: true, content: '$' }}
            labelPosition='left'
            placeholder='Amount'
            type='number'
            onChange={this.handleInput}
          />
          <div className='emptySpace'></div>
          <Button size='small' basic color='green'>Deposits</Button>
          <Button size='small' basic color='red'>Withdraw</Button>
        </div>
      )
  }
}


export default TransactionDepositWithdraw;



