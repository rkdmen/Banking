import React, {Component} from 'react';
// import SidebarLeftOverlay from './Sidebar';
import OverviewContainer from '../containers/Overview/OverviewContainer';
import MiniOverview from '../containers/Overview/MiniOverview';
import TransactionDepositWithdraw from './Transaction/TransactionDepositWithdraw';
import { Container, Grid, Segment } from 'semantic-ui-react';

class Main extends Component {
  render(){
    return (
      <Container>
         <Grid stackable columns={1}>
          <div className="sixteen wide column">
            <h1>Accounts</h1>
          </div>
          <Grid.Row  columns={2}>
            <Grid.Column className='deposit-withdraw'>
              <Segment>
              <TransactionDepositWithdraw />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <MiniOverview />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <OverviewContainer />
            </Grid.Column>
          </Grid.Row>
         </Grid>
       </Container>
      )
  }
}


export default Main;
