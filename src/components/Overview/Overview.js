import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'
import { unixConverter } from '../../helper/helper';

class Overview extends Component {
   constructor(props) {
      super(props);
    }

    render(){
      let depositWithdrawSpan;
      let amountColored;
      if(this.props.desc === 'Deposit'){
        depositWithdrawSpan = (<span className='greenDeposit'>Deposit</span>)
        amountColored = (<span className='greenDeposit'>${this.props.amount.toFixed(2)}</span>)
      } else if(this.props.desc === 'Withdraw'){
        depositWithdrawSpan = (<span className='redWithdraw'>(Withdraw)</span>)
        amountColored = (<span className='redWithdraw'>(${this.props.amount.toFixed(2)})</span>)
      } else if(this.props.desc === 'Payment'){
        depositWithdrawSpan = (<span className='redWithdraw'>(Payment)</span>)
        amountColored = (<span className='redWithdraw'>(${this.props.amount.toFixed(2)})</span>)
      }
      return(
          <Table.Row className='transactionRow'>
            <Table.Cell>
              <Header as='h4' textAlign='center'>
              <span className='forMobile bold'>Date:&nbsp;</span>
                {unixConverter(this.props.date)}
              </Header>
            </Table.Cell>
            <Table.Cell>
              <Header as='h4' textAlign='center'>
              <span className='forMobile bold'>Transaction ID:&nbsp;</span>{this.props.transId}
              </Header>
            </Table.Cell>
            <Table.Cell className='forDesktop' textAlign='center'>
              <span className='forDesktop'>{depositWithdrawSpan}</span>
            </Table.Cell>
            <Table.Cell textAlign='center'>
              <span className='forMobile bold'>{depositWithdrawSpan}&nbsp;&nbsp;</span>{amountColored}
            </Table.Cell>
            <Table.Cell textAlign='center'>
              <span className='forMobile bold'>Balance:&nbsp;</span>${this.props.balance.toFixed(2)}
            </Table.Cell>
          </Table.Row>
      )
    }
}


export default Overview;
