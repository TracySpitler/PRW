import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import ExpenseList from '../components/ExpenseList'

class Pg2 extends Component {
    state = {
      expenseList: [
        {
          title: 'Rent',
          amount: '715.00',
          id: '0'
        },
        {
          title: 'Electricity',
          amount: '301.23',
          id: '1'
        },
        {
          title: 'Groceries',
          amount: '278.49',
          id: '2'
        },
        {
          title: 'Misc',
          amount: '148.52',
          id: '2'
        },
        {
          title: 'Shopping',
          amount: '208.45',
          id: '2'
        },
        {
          title: 'Water',
          amount: '89.67',
          id: '2'
        }
      ],
    }
    //NOT NEEDED WITH ES7 MUST ALSO UPDATE THE FUNCTION
    // this.addExpense = this.addExpense.bind(this)
    // this.changeExpense = this.changeExpense.bind(this)
    // this.changeAmount = this.changeAmount.bind(this)
    // this.removeExpense = this.removeExpense.bind(this)
  //}

  componentDidMount() {
    if (localStorage.getItem('expenseList')) {
      let expenseList = JSON.parse(localStorage.getItem('expenseList'))
      this.setState({expenseList: expenseList})
    }
  }

  changeExpense = e => {
    e.preventDefault()
    this.setState({'title': e.target.value})
  }

  changeAmount = e => {
    e.preventDefault()
    let cAmount = e.target.value
    cAmount = parseFloat(cAmount).toFixed(2)
    this.setState({'amount': cAmount})
  }

  addExpense = e => {
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
      e.target.reset();
    }
  }

  removeExpense = key => {
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
        <div className="form">
          <h3>Add an Expense</h3>
          <form onSubmit={this.addExpense}>
            <input onChange={this.changeExpense} className="input-field" type="text" name="expense_name" placeholder="Expense Name"/>
            <input onChange={this.changeAmount} className="input-field" type="text" name="expense_amount" placeholder="Expense Amount"/>
            <br></br>
            <button className="Add">
              <FontAwesome.FaPlusCircle className="i-add" alt="add expense icon" />
            </button>
          </form>
        </div>

        <div className="table">
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

export default Pg2
