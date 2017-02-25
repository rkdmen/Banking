import React, { Component } from 'react';
import { Button, Grid, Input, Label } from 'semantic-ui-react'

class TransactionDepositWithdraw extends Component {
   constructor(props) {
      super(props);
    }

  render(){
    return (
          <div>
            <Input
              label={{ basic: true, content: '$' }}
              labelPosition='left'
              placeholder='Amount'
              type='number'
            />
            <Grid columns={2} padded>
              <Grid.Column>
            <Button basic color='green'>Deposits</Button>
              </Grid.Column>
              <Grid.Column>
            <Button basic color='red'>Withdraw</Button>
              </Grid.Column>
            </Grid>
          </div>
      )
  }
}


export default TransactionDepositWithdraw;



