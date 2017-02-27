import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
import { unixConverterMonthDate } from '../../helper/helper';

class ScheduleBill extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
          <div>
            <p className='bold scheduleHeader'>
              {this.props.acc}
            </p>
          <div className='centerText'>
            <hr/>
            <p>
              <span className='bold'>Scheduled:&nbsp;</span>{unixConverterMonthDate(this.props.date)}
            </p>
            <p>
              <span className='bold'>Amount:&nbsp;</span><span className='redWithdraw'>${this.props.balance}</span>
            </p>
          </div>
          </div>
      )
  }
}


export default ScheduleBill;
