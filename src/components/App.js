import React, { Component } from 'react';
import Navbar from './Navbar';
import SidebarLeftOverlay from './Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
export default App;
