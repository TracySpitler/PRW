import React, { Component } from 'react';
import logo from '../connectdevelop.svg';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav className="App-title">
        <div>
          <h1><FontAwesome.FaConnectdevelop className="i-logo" alt="logo"/>Moolah Magic!</h1>
        </div>
        <span>
          <a href=""><MaterialDesign.MdAccountCircle className="i-titlebar" alt="profile icon"/></a>
          <a href=""><MaterialDesign.MdSettings className="i-titlebar" alt="menu icon"/></a>
        </span>
        </nav>
      </header>
    );
  }
}

export default Header
