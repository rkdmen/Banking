import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

class Main extends Component {
  render(){
    return (
          <div className="main-container ui two column grid container">
            <div className="two wide column">
            </div>
            <div className="fourteen wide column">
              <h1>Main.js loaded</h1>
              <Button> Testing </Button>
            </div>
          </div>
      )
  }
}


export default Main;
