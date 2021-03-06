import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Menu, Icon } from 'semantic-ui-react'

class Navbar extends Component {
    constructor() {
    super();
    this.state = { activeItem: 'overview' }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    e.preventDefault();
    this.setState({ activeItem: name })
    hashHistory.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item className='main-header navLink' header>
            <Icon name='diamond'></Icon>Kus<span>Bank</span>
          </Menu.Item>
          <Menu.Item className='navLink' name='overview' active={activeItem === 'overview'} onClick={this.handleItemClick} />
          <Menu.Item className='navLink' name='bills' active={activeItem === 'bills'} onClick={this.handleItemClick} />
          <Menu.Menu className='navLink' position='right'>
            <Menu.Item className='forDesktop'>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default Navbar;