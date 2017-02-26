import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'

class Overview extends Component {
   constructor(props) {
      super(props);
    }

    unixConverter(unix){
      let newDate = new Date(unix * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = newDate.getFullYear();
      let month = months[newDate.getMonth()];
      let date = newDate.getDate();
      let hour = newDate.getHours();
      let min =  newDate.getMinutes()<10?'0' + newDate.getMinutes(): newDate.getMinutes();
      return `${month} ${date}, ${year}, ${hour}:${min}`;
    }
    render(){
      let depositWithdrawSpan;
      let amountColored;
      if(this.props.desc === 'Deposit'){
        depositWithdrawSpan = (<span className='greenDeposit'>Deposit</span>)
        amountColored = (<span className='greenDeposit'>${this.props.amount.toFixed(2)}</span>)
      } else if(this.props.desc === 'Withdraw'){
        depositWithdrawSpan = (<span className='redWithdraw'>Withdraw</span>)
        amountColored = (<span className='redWithdraw'>${this.props.amount.toFixed(2)}</span>)
      }
      return(

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' textAlign='center'>
                  <span className='forMobile bold'>Date:&nbsp;</span>{this.unixConverter(this.props.date)}
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
