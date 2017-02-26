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
      return(
        <div>
          <Header as='h3' textAlign='center'>
            <Header.Content>
              Summary
            </Header.Content>
          </Header>
          <div className='centerText'>
            <hr/>
            <p className='bold miniOverviewBalance'>
              <span>Account Balance:&nbsp;</span>${!this.props.totalBalance?'Loading...': <span className='miniOverviewBalance'>{this.props.totalBalance.toFixed(2)}</span>}
            </p>
          </div>
        </div>
        )
    }
}


function mapStateToProps(state) {
  return {
    totalBalance: state.reducer.balanceData.totalBalance
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBalance }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MiniOverviewContainer)
