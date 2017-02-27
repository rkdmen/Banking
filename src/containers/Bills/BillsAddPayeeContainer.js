import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button,  Modal, Input, Select } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { addPayee } from '../../actions/actions';

export class BillsAddPayeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accName:null,
      accNum:'',
      accType:null,
      modalOpen: false
    }
    this.handleAccName = this.handleAccName.bind(this);
    this.handleAccNum = this.handleAccNum.bind(this);
    this.handleAcc = this.handleAcc.bind(this);
    this.submitAcc = this.submitAcc.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
   }

  handleOpen(){
    this.setState({modalOpen: true })
  }

  handleAccName(e){
    this.setState({accName:e.target.value})
  }

  handleAccNum(e){
    let str = e.target.value.toString();
    if(str.length === 4){
      this.setState({accNum:str})
    }
  }

  handleAcc(e, { value }){
    this.setState({accType:value})
  }

  submitAcc(){
    if(typeof this.state.accName === 'string' && this.state.accNum.length ===  4 && typeof this.state.accType === 'string' ){
      let account = {
        type:this.state.accType,
        acc:`${this.state.accName} ${this.state.accNum}`,
        balance: 0
      }
      this.props.addPayee(account);
      this.setState({ accName:null, accNum:'', accType:null})
      let inputs = document.getElementsByTagName('input');
      for(var i = 0; i < inputs.length;i++){
        inputs[i].value = '';
      }
    }
  }

  render() {
      const options = [
      { key: 'Credit Card', text: 'Credit Card', value: 'Credit Card'},
      { key: 'Utility', text: 'Utility', value: 'Utility' },
      { key: 'Other', text: 'Other', value: 'Other' }]
      return (
          <Modal
            closeIcon='close'
            trigger={<Button  onClick={this.handleOpen} className='addPayee-btn'>Add Payee</Button>}
            >
            <Modal.Header>Add Payee Account</Modal.Header>
            <Modal.Content >
              <Modal.Description>
                <Input onChange={this.handleAccName} type='text' placeholder='Payee name'></Input>
                <Input onChange={this.handleAccNum} type='number' placeholder='Last 4 Acc #'></Input>
                <Select className='selection' onChange={this.handleAcc} compact options={options}  />
                <Button onClick={this.submitAcc} type='submit'>Add</Button>
              </Modal.Description>
            </Modal.Content>
          </Modal>
      );
  }
}

BillsAddPayeeContainer.propTypes = {
    addPayee: React.PropTypes.func
}

function mapStateToProps(state) {
  return {
    billsData:state.reducer.billsData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPayee }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps )(BillsAddPayeeContainer);