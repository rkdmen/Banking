import React, { Component } from 'react'
import { Router, Link, hashHistory } from 'react-router';
import { Input, Menu, Segment } from 'semantic-ui-react'

class Navbar extends Component {
    constructor() {
    super();
    this.state = { activeItem: 'overview' }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}){
    e.preventDefault();
    console.log(name,'clicked')
    this.setState({ activeItem: name })
    hashHistory.push(`/${name}`);

  }

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <Menu.Item className='main-header navLink' header>Kus<span>Bank</span></Menu.Item>
          <Menu.Item className='navLink' name='overview' active={activeItem === 'overview'} onClick={this.handleItemClick} />
          <Menu.Item className='navLink' name='bills' active={activeItem === 'bills'} onClick={this.handleItemClick} />
          <Menu.Item className='navLink' name='transfer' active={activeItem === 'transfer'} onClick={this.handleItemClick} />
          <Menu.Menu className='navLink' position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}


export default Navbar;