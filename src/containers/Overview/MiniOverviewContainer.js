import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBalance } from '../../actions/actions';


class MiniOverviewContainer extends Component {
   constructor(props) {
      super(props);
    }
    componentDidMount() {
        this.props.getBalance();
    }

    render(){
      console.log(this.props, ' this prop MINIOVERVIEWContainer')
      return(
        <div miniO>
          <Header as='h3' textAlign='center'>
            <Header.Content>
              Summary
            </Header.Content>
          </Header>
          <div className='centerText'>
            <hr/>
            <p className='bold'>
              <span>Account Balance:&nbsp;</span>${!this.props.totalBalance?'Loading...':this.props.totalBalance.toFixed(2)}
            </p>
          </div>
        </div>
        )
    }
}


function mapStateToProps(state) {
  console.log(state , ' map state MINI')
  return {
    totalBalance: state.reducer.balanceData.totalBalance
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBalance }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MiniOverviewContainer)
