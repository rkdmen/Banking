import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'

class TransactionOverview extends Component {
   constructor(props) {
      super(props);
    }
    render(){
      return(
        <div>
          <Table celled padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign='center' singleLine>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Description</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Amount</Table.HeaderCell>
                <Table.HeaderCell textAlign='center' singleLine>Available Balance</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' textAlign='center'>Date...</Header>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  DEPOSIT?WITHD
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  $$$
                </Table.Cell>
                <Table.Cell textAlign='center'>
                  $$$
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      )
    }
}


export default TransactionOverview;
