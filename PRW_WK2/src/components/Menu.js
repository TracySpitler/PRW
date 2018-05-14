import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';

class Menu extends Component {
  render() {
    return (
    <nav className="Nav-side">
      <h3>Menu</h3>
      <a href="" className="Side-icon">
        <MaterialDesign.MdDashboard className="i-sidebar" alt="menu icon" />Dashboard
      </a>
      <a href="" className="Side-icon">
        <FontAwesome.FaCalendarO className="i-sidebar" alt="menu icon" />Calander
      </a>
      <a href="" className="Side-icon">
        <FontAwesome.FaLineChart className="i-sidebar" alt="menu icon" />Reports
      </a>
      <a href="" className="Side-icon">
        <FontAwesome.FaBell className="i-sidebar" alt="menu icon" />Bill Reminders
      </a>
      <a href="" className="Side-icon">
        <FontAwesome.FaDollar className="i-sidebar" alt="menu icon" />Budget
      </a>
    </nav>
    );
  }
}

export default Menu
