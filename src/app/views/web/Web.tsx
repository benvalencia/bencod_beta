import React, { Component } from 'react';
import './Web.scss';
import MenuBar from '../../components/menu-bar/menu-bar';

class Web extends Component {
  state = {
    menuTabs : [
      {
        id: 1,
        name: 'Home',
        url: '/'
      },
      {
        id: 2,
        name: 'About',
        url: '/about'
      },
      {
        id: 3,
        name: 'Contact',
        url: '/contact'
      }
    ]
  };

  render() {
    return (
      <div className="bencod">
        
        {/* menuTabs={this.state.menuTabs} */}
        <MenuBar />
      </div>
    );
  }
}

export default Web;
