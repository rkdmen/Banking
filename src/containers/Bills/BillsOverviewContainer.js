import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Segment, Input, Grid} from 'semantic-ui-react'
import Bills from '../../components/Bills/Bills'
import MiniOverviewContainer from '../Overview/MiniOverviewContainer';
import ScheduleBillContainer from './ScheduleBillContainer';
import { toTop } from '../../helper/helper';

class BillsOverviewContainer extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <Container className='BillsOverviewContainer'>
        <h1>Bills</h1>
        <Grid stretched stackable>
          <Grid.Column width={3}>
            <Segment  className='BillsOverviewContainerSummary'>
              <MiniOverviewContainer />
            </Segment>
              <ScheduleBillContainer />
          </Grid.Column>
          <Grid.Column width={13}>
            {
              !this.props.billsData?'Loading...':
              this.props.billsData.map((item, idx)=>{
                return (
                    <div key={idx}>
                      <Bills
                        type={item.type}
                        acc={item.acc}
                        dueBalance={item.balance}
                      />
                    </div>
                )
              })
            }
          </Grid.Column>
        </Grid>
        <div onClick={toTop} className='circleDiv'>Top</div>
      </Container>
      )
  }
}

function mapStateToProps(state) {
  return {
    billsData:state.reducer.billsData
  }
}



export default connect(mapStateToProps, null)(BillsOverviewContainer)
