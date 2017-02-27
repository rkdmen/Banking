import React, {Component} from 'react';
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
              <span className='bold'>Scheduled:&nbsp;</span>{unixConverterMonthDate(this.props.date)}
            <p>
              <span className='bold'>Amount:&nbsp;</span><span className='redWithdraw'>${this.props.balance}</span>
            </p>
          </div>
          </div>
      )
  }
}

ScheduleBill.propTypes = {
    acc: React.PropTypes.string,
    date: React.PropTypes.number,
    balance: React.PropTypes.number
}


export default ScheduleBill;
