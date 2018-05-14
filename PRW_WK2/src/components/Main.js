import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';
import ExpenseList from './ExpenseList'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      expenseList: [
        {
          title: 'Rent',
          amount: '715.00',
          id: '0'
        },
        {
          title: 'Electricity',
          amount: '115.03',
          id: '1'
        },
        {
          title: 'Groceries',
          amount: '429.48',
          id: '2'
        }
      ],
    }
    this.addExpense = this.addExpense.bind(this)
    this.changeExpense = this.changeExpense.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
    this.removeExpense = this.removeExpense.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('expenseList')) {
      let expenseList = JSON.parse(localStorage.getItem('expenseList'))
      this.setState({expenseList: expenseList})
    }
  }

  changeExpense(e) {
    e.preventDefault()
    this.setState({'title': e.target.value})
  }

  changeAmount(e) {
    e.preventDefault()
    let cAmount = e.target.value
    cAmount = parseFloat(cAmount).toFixed(2)
    this.setState({'amount': cAmount})
  }

  addExpense(e) {
    e.preventDefault()
    let expenseList = this.state.expenseList
    if (this.state.title === null || this.state.title === "") {
      alert('Please enter a name.')
      return false
    }
    if (this.state.amount === 0 || this.state.amount === "0.00" || isNaN(this.state.amount)) {
      alert('Please enter a valid amount.')
      return false
    }
    else {
      this.state.expenseList.push({'title':this.state.title, 'amount': this.state.amount})
      this.setState({expenseList: this.state.expenseList})
      localStorage.setItem('expenseList', JSON.stringify(expenseList))
    }
  }

  removeExpense(key) {
    let expenseList = this.state.expenseList
    this.state.expenseList.splice(key, 1)
    this.setState({expenseList: this.state.expenseList})
    localStorage.setItem('expenseList', JSON.stringify(expenseList))
  }

  render() {
    let showExpenses = this.state.expenseList.map((val, key) => {
      return<ExpenseList val={val} key={key} id={key} delMe={()=> this.removeExpense(key) } />
    })

    return (
      <div className="Main-div">
        <div className="expense-form">
          <h3>Add an Expense</h3>
          <form>
            <input onChange={this.changeExpense} className="input-field" type="text" name="expense_name" placeholder="Expense Name"/>
            <input onChange={this.changeAmount} className="input-field" type="text" name="expense_amount" placeholder="Expense Amount"/>
            <br></br>
            <a href="" onClick={this.addExpense} className="Add-expense">
              <FontAwesome.FaPlusCircle className="i-add" alt="add expense icon" />
            </a>
          </form>
        </div>

        <div className="expense-table">
          <h3>Current Expenses</h3>
          <table>
            <tbody>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>

            {showExpenses}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Main
