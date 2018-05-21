import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';

//React Router
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
    <nav className="Nav-side">
      <h3>Menu</h3>
      <NavLink to="/Pg1" className="Side-icon">
        <MaterialDesign.MdDashboard className="i-sidebar" alt="dashboard icon" />Dashboard
      </NavLink>
      <NavLink to="/Pg2" className="Side-icon">
        <FontAwesome.FaLineChart className="i-sidebar" alt="menu icon" />Expenses
      </NavLink>
      <NavLink to="/Pg3" className="Side-icon">
        <FontAwesome.FaDollar className="i-sidebar" alt="income icon" />Income
      </NavLink>
    </nav>
    );
  }
}

export default Menu
