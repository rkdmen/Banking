import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Transfer from '../../components/Transfer/Transfer'

// import {  } from '../actions/actions';

export class TransferContainer extends Component {
  constructor(props) {
    super(props);
   }



  render() {
    return (
      <Container>
        <Transfer />
        <div className='circleDiv'>Top</div>
      </Container>
      )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TransferContainer)
