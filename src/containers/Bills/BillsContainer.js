import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Button, Segment, Input, Grid} from 'semantic-ui-react'
import Bills from '../../components/Bills/Bills'
import MiniOverviewContainer from '../Overview/MiniOverviewContainer';
import PaymentContainer from './PaymentContainer';
// import {  } from '../actions/actions';

class BillsContainer extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    console.log(this.props, 'This.props BillsContainer');
    return (
      <Container className='billsContainer'>
        <h1>Bills</h1>
        <Grid stretched stackable>
          <Grid.Column width={3}>
            <Segment  className='billsContainerSummary'>
              <MiniOverviewContainer />
            </Segment>
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
      </Container>
      )
  }
}

function mapStateToProps(state) {
  console.log(state, ' billContainer state')
  return {
    billsData:state.reducer.billsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BillsContainer)
