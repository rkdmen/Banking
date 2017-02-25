import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'

class Overview extends Component {
   constructor(props) {
      super(props);
    }

    unixConverter(unix){
      let a = new Date(unix * 1000);
      let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
      return `${date} ${month} ${year} ${hour}:${min}`;
    }
    render(){
      let depositWithdrawSpan;
      let amountColored;
      if(this.props.desc === 'Deposit'){
        depositWithdrawSpan = (<span className='greenDeposit'>Deposit</span>)
        amountColored = (<span className='greenDeposit'>${this.props.amount}</span>)
      } else if(this.props.desc === 'Withdraw'){
        depositWithdrawSpan = (<span className='redWithdraw'>Withdraw</span>)
        amountColored = (<span className='redWithdraw'>${this.props.amount}</span>)
      }
      return(

              <Table.Row>
                <Table.Cell>
                  <Header as='h4' textAlign='center'>
                  <span className='forMobile bold'>Date:&nbsp;</span>{this.unixConverter(this.props.date)}
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <span className='forDesktop' >{depositWithdrawSpan}</span>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <span className='forMobile bold'>{depositWithdrawSpan}&nbsp;&nbsp;</span>{amountColored}
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  <span className='forMobile bold'>Balance:&nbsp;</span>${this.props.balance}
                </Table.Cell>
              </Table.Row>

      )
    }
}


export default Overview;
