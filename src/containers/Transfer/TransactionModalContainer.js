import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {  } from '../actions/actions';

export class TransactionModalContainer extends Component {
  constructor(props) {
    super(props);
   }



  render() {
    return (
      <div>
      </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(TransactionModalContainer)
