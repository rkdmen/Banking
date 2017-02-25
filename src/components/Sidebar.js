import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeftOverlay extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className='sideBar'>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>

      </div>
    )
  }
}

export default SidebarLeftOverlay;
