import React, { Component } from 'react'
import { Router, Link, hashHistory } from 'react-router';
import { Input, Menu, Segment } from 'semantic-ui-react'

class Navbar extends Component {
    constructor() {
    super();
    this.state = { activeItem: 'Overview' }
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
          <Menu.Item className='main-header' header>Kus<span>Bank</span></Menu.Item>
          <Menu.Item name='overview' active={activeItem === 'Overview'} onClick={this.handleItemClick} />
          <Menu.Item name='bills' active={activeItem === 'Bill Pays'} onClick={this.handleItemClick} />
          <Menu.Item name='transfer' active={activeItem === 'Transfer money'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
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