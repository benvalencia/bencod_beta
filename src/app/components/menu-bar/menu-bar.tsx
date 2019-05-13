import React, { Component } from 'react';
import './menu-bar.sass';

interface IMenuBar {
    id: number,
    name: string,
    url: string
}

class MenuBar extends Component {

  render() {
    // this.props.menuTabs.map(( menuTabs: IMenuBar ) => (
    //     <div className="menu-bar">
    //         <div>{ menuTabs.name}</div>        
    //     </div>
    return (
        <div className="menu-bar">
          <header className="menu-bar-container">
            <div className='menu-bar-container-image'>
                <img src='src/assets/images/image-placeholder.png' alt="Bencod's Logo"/>
            </div>
            <div className='menu-bar-container-nav'>
                <div>
                    <a href="">Home</a>
                </div>
                <div>
                    <a href="">Contact</a>
                </div>
                <div>
                    <a href="">About</a>
                </div>
                <div>
                    <a href="">What We Do</a>
                </div>
            </div>
          </header>
        </div>
      );
  }
}

export default MenuBar;
