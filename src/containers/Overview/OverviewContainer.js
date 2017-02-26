import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Header, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getBalance } from '../../actions/actions';
import Overview from '../../components/Overview/Overview';

class OverviewContainer extends Component {
  constructor(props) {
    super(props);
   }

  // componentDidMount() {
  //     console.log('getting balance');
  //     this.props.getBalance();
  // }

  render() {
    console.log(this.props.balanceHistory, ' THIS.PROP OverviewContainer')
    return (
          <Table celled padded>
            <Table.Header className='forDesktop'>
              <Table.Row>
                <Table.HeaderCell textAlign='center' singleLine>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Transaction ID</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Description</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Amount</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Available Balance</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {!this.props.balanceHistory?'Loading...':
              this.props.balanceHistory.map((acc, i)=>{
                return (
                  <Overview
                    key={i}
                    transId={acc.id}
                    amount={acc.amount}
                    balance={acc.balance}
                    date={acc.date}
                    desc={acc.desc}
                  />
                )
              })
            }
            </Table.Body>
          </Table>
      )
  }
}

function mapStateToProps(state) {
  console.log(state , 'mapstate balance history!')
  return {
    balanceHistory: state.reducer.balanceData.accData.account.checking
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBalance }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)
