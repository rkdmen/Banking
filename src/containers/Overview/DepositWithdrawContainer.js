import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withdrawDeposit, makeDeposit, getBalance } from '../../actions/actions';

class DepositWithdrawContainer extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.state = {
      amount:0,
      currentTime: Math.round((new Date()).getTime() / 1000)
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
        el[0].innerText = 'Invalid Input'
        el[0].style.opacity = 1;
    }
  }

  deposit(){
    let currentBalance = document.getElementsByClassName('miniOverviewBalance')[1].innerText;
    let data = {
      amount: parseFloat(this.state.amount),
      balance: parseFloat(currentBalance)+parseFloat(this.state.amount),
      date: parseFloat(this.state.currentTime),
      desc: 'Deposit'
    }
    if(!isNaN(this.state.amount)  && this.state.amount > 0 ){
      this.props.makeDeposit(data);
      this.props.getBalance();
      let inputs = document.getElementsByTagName('input');
      this.setState({amount:0})
      inputs[0].value = '';
    }
  }

  withdraw(){
    let currentBalance = document.getElementsByClassName('miniOverviewBalance')[1].innerText;
    let data = {
      amount: parseFloat(this.state.amount),
      balance: parseFloat(currentBalance)-parseFloat(this.state.amount),
      date: parseFloat(this.state.currentTime),
      desc: 'Withdraw'
    }
    console.log(currentBalance, ' current balance')
    console.log(this.state.amount, ' amoutn')
    console.log(typeof this.state.amount , typeof currentBalance)
    if(parseFloat(currentBalance) <= 0 || parseFloat(this.state.amount) > parseFloat(currentBalance)){
      let el = document.getElementsByClassName('warningRed');
      el[0].innerText = 'Not enough balance'
      el[0].style.opacity = 1;
      return;
    }

    if(!isNaN(this.state.amount)  && this.state.amount > 0){
      this.props.withdrawDeposit(data);
      this.props.getBalance();
      this.setState({amount:0});
      let inputs = document.getElementsByTagName('input');
      inputs[0].value = '';
    }
  }

  render(){
    console.log(this.props, ' this prop transaction')
    return (
        <div className='inputContainer'>
          <div className='warningRed hideWarning center'>&nbsp;</div>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ withdrawDeposit, makeDeposit, getBalance }, dispatch);
}


export default connect(null, mapDispatchToProps)(DepositWithdrawContainer)
