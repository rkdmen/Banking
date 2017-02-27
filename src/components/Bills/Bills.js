import React, {Component} from 'react';
import { Segment, Grid } from 'semantic-ui-react'
import PaymentContainer from '../../containers/Bills/PaymentContainer';


class Bills extends Component {
  render(){
    return (
          <Segment>
            <Grid>
              <Grid.Column width={6}>
                <div>
                <p className='bold'>
                  {this.props.type}
                  </p>
                </div>
                <div>
                  <p>
                    <span className='accountId bold'>Account:&nbsp;<br/></span>
                    {this.props.acc}
                  </p>
                </div>
                <div>
                  <p>
                    <span className='bold'>Balance Due:&nbsp;</span>
                    ${this.props.dueBalance.toFixed(2)}
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column width={10}>
                <PaymentContainer
                  accId={this.props.acc}
                 />
              </Grid.Column>
            </Grid>
            <br/>
          </Segment>
      )
  }
}

Bills.propTypes = {
    dueBalance: React.PropTypes.number,
    acc: React.PropTypes.string,
    type: React.PropTypes.string
}


export default Bills;


