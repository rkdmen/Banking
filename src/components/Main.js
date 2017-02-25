import React, {Component} from 'react';
// import SidebarLeftOverlay from './Sidebar';
import TransactionOverview from './TransactionOverview';
import { Grid, Button } from 'semantic-ui-react'

class Main extends Component {
  render(){
    return (
      <Grid divided='vertically'>
          <div className="sixteen wide column">
            <h1>Account Overview</h1>
          </div>
        <Grid.Row columns={2}>
          <Grid.Column className='deposit-withdraw'>
            <Button>Deposit</Button>
            <Button>Withdraw</Button>
          </Grid.Column>
          <Grid.Column>
            <div>Overview</div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column className=''>
            <TransactionOverview />
          </Grid.Column>
        </Grid.Row>
       </Grid>
      )
  }
}


export default Main;
