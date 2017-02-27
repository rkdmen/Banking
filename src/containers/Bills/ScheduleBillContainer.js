import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'
import ScheduleBill from '../../components/Bills/ScheduleBill'

class ScheduleBillContainer extends Component {
  constructor(props) {
    super(props);
   }

  render() {
    return (
      <div >
        {!this.props.scheBill?'Loading...':this.props.scheBill.map((item, i)=>{
            return (
                <Segment className='miniOverview' key={i}>
                  <ScheduleBill
                    acc={item.acc}
                    balance={item.balance}
                    date={item.date}
                  />
                </Segment>
            )
          })
        }
      </div>
      )
  }
}

ScheduleBillContainer.propTypes = {
    scheBill: React.PropTypes.array
}


function mapStateToProps(state) {
  return {
    scheBill: state.reducer.scheBill
  }
}

export default connect(mapStateToProps, null)(ScheduleBillContainer)
