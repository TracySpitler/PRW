import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';

class ExpenseList extends Component {
  render() {
    return (
      <tr key={this.props.id} className="list">
        <td>{this.props.val.title}</td>
        <td>${this.props.val.amount}</td>
        <td><a href="" onClick={this.props.delMe}><FontAwesome.FaTimesCircle className="i-remove" alt="menu icon" /></a></td>
      </tr>
    );
  }
}

export default ExpenseList
