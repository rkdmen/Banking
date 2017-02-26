import React, {Component} from 'react';
import { Button, Segment, Input, Grid, Form } from 'semantic-ui-react'
import MiniOverviewContainer from '../../containers/Overview/MiniOverviewContainer';
import PaymentContainer from '../../containers/Bills/PaymentContainer';


class Bills extends Component {
  render(){
    console.log(this.props, ' this prop in Bills Component')
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


export default Bills;


