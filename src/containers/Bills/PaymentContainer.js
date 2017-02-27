import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  Button, Input, Form } from 'semantic-ui-react'
import { payBill, getBalance, withdrawDeposit } from '../../actions/actions';

class PaymentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date:null,
      amount:0
    }
    this.handleDate = this.handleDate.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
   }

  handleDate(e){
    //parsing date into Unix time stamp
    this.setState({date:Date.parse(e.target.value)/1000})
  }

  handleAmount(e){
    let amount = e.target.value;
    let checkAmount = /^\$?[0-9]+\.?[0-9]?[0-9]?$/; //RegExpression for checking amount
    if(amount === '' || checkAmount.test(amount)){
      this.setState({amount:amount})
    }
  }


  submitPayment(e){
    e.preventDefault();
    //Checking if both(Date, amount) inputs are valid
    if(!isNaN(this.state.amount) && this.state.amount > 0 && typeof this.state.date === 'number'){
      this.props.payBill(e.target.value, this.state);
      this.props.withdrawDeposit(parseFloat(this.state.amount), 'P');
      this.props.getBalance();
      this.setState({amount:0, date:null})
      let inputs = document.getElementsByTagName('input');
      for(var i = 0; i < inputs.length;i++){
        //Clearing all inputs after submitted
        inputs[i].value = '';
      }
    }
  }

  render() {
    return (
      <Form>
          <Form.Group widths='equal'>
            <Form.Field >
              <Form.Field onChange={this.handleDate} width='8' control={Input} label='Date' type='date' placeholder='Date' />
              <Form.Field onChange={this.handleAmount} width='8' control={Input} label='amount' type='number' placeholder='amount' />
            </Form.Field>
          </Form.Group>
          <Button  value={this.props.accId} onClick={this.submitPayment} type='submit'>Submit</Button>
      </Form>
      )
  }
}

PaymentContainer.propTypes = {
    billsData: React.PropTypes.array,
    totalBalance: React.PropTypes.number,
    accId: React.PropTypes.string,
    withdrawDeposit: React.PropTypes.func,
    getBalance: React.PropTypes.func,
    payBill: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    billsData:state.reducer.billsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ payBill, getBalance, withdrawDeposit}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer)
