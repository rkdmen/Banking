import React, {Component} from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import OverviewContainer from '../containers/Overview/OverviewContainer';
import MiniOverviewContainer from '../containers/Overview/MiniOverviewContainer';
import DepositWithdrawContainer from '../containers/Overview/DepositWithdrawContainer';
import { toTop } from '../helper/helper';

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
              <Segment style={{minHeight:'135px'}}>
              <DepositWithdrawContainer />
              </Segment>
            </Grid.Column>
            <Grid.Column>
                <MiniOverviewContainer />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
              <OverviewContainer />
            </Grid.Column>
          </Grid.Row>
         </Grid>
        <div onClick={toTop} className='circleDiv'>Top</div>
      </Container>
      )
  }
}


export default Main;
