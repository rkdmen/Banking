import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Grid, Input, Label, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withdrawDeposit, makeDeposit } from '../../actions/actions';

class DepositWithdrawContainer extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.state = {
      amount:0,
      currentTime: new Date().getTime()
    }
  }

  handleInput(e){
    e.preventDefault();
    let amount = e.target.value;
    let el = document.getElementsByClassName('warningRed');
    let checkAmount = /^\$?[0-9]+\.?[0-9]?[0-9]?$/; //RegExpression for checking amount
    if(amount === '' || checkAmount.test(amount)){
      this.setState({amount:amount})
        el[0].style.opacity = 0;
    } else {
        el[0].style.opacity = 1;
    }
  }
  deposit(){
    console.log(this.state.amount, ' deposit')
  }

  withdraw(){
    console.log(this.state.amount, ' withdraw')

  }

  render(){
    console.log(this.props, ' this prop transaction')
    return (
        <div className='inputContainer'>
          <div className='warningRed hideWarning center'>Invalid Input</div>
          <div style={{width:'100%',clear:'both'}}></div>
          <Input
            className='amount-input-field'
            label={{ basic: true, content: '$' }}
            labelPosition='left'
            placeholder='Amount'
            type='text'
            onChange={this.handleInput}
          />
          <div className='emptySpace'></div>
          <div className='btnWrap'>
            <Button onClick={this.deposit} size='small' basic color='green'>Deposits</Button>
            <Button onClick={this.withdraw} size='small' basic color='red'>Withdraw</Button>
          </div>
        </div>
      )
  }
}


function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ withdrawDeposit, makeDeposit }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DepositWithdrawContainer)
