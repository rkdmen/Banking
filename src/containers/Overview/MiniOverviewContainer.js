import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBalance } from '../../actions/actions';


export class MiniOverviewContainer extends Component {
   constructor(props) {
      super(props);
    }

    componentDidMount() {
        this.props.getBalance();
    }

    render(){
      return(
        <Segment className='miniOverview'>
          <Header as='h3' textAlign='center'>
            <Header.Content>
              Summary
            </Header.Content>
          </Header>
          <div>
            <hr/>
          <Header as='h5' textAlign='center'>
            <Header.Content>
              <span className='centerText'>Checking Balance:&nbsp;</span>${!this.props.totalBalance?'Loading...': <span className='miniOverviewBalance'>{this.props.totalBalance.toFixed(2)}</span>}
            </Header.Content>
          </Header>
          </div>
        </Segment>
        )
    }
}

MiniOverviewContainer.propTypes = {
    totalBalance: React.PropTypes.number,
    getBalance: React.PropTypes.func
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
