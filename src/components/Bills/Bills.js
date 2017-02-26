import React, {Component} from 'react';
import { Button, Segment, Input } from 'semantic-ui-react'
import MiniOverviewContainer from '../../containers/Overview/MiniOverviewContainer';

class Bills extends Component {
  render(){
    return (
          <div className="main-container ui two column grid container">
            <div className="two wide column">
              <div>
                list of acc...
              </div>
              <div>
                list of acc...
              </div>

            </div>
            <div className="fourteen wide column">
              <h1>bill.js loaded</h1>
              <Segment style={{maxWidth:'347.5px',maxHeight:'130px'}}>
                <MiniOverviewContainer />
              </Segment>
              <Segment>
                acc0
              </Segment>
              <Segment>
                acc1
              </Segment>

            </div>
          </div>
      )
  }
}


export default Bills;
