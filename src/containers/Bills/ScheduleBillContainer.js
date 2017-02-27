import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button, Segment, Input, Grid} from 'semantic-ui-react'
import ScheduleBill from '../../components/Bills/ScheduleBill'

class ScheduleBillContainer extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <Container className='billsContainer'>
        {!this.props.scheBill?'Loading...':this.props.scheBill.map((item, i)=>{
            return (
                <Segment className='BillsOverviewContainerSummary' key={i}>
                  <ScheduleBill
                    acc={item.acc}
                    balance={item.balance}
                    date={item.date}
                  />
                </Segment>
            )
          })
        }
      </Container>
      )
  }
}

function mapStateToProps(state) {
  return {
    scheBill: state.reducer.scheBill
  }
}



export default connect(mapStateToProps, null)(ScheduleBillContainer)
