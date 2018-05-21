import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import IncomeList from '../components/IncomeList'

class Pg3 extends Component {
    state = {
      incomeList: [
        {
          date: '2018-04-22',
          amount: '715.30',
          id: '0'
        },
        {
          date: '2018-05-06',
          amount: '730.15',
          id: '1'
        },
        {
          date: '2018-05-20',
          amount: '713.50',
          id: '2'
        }
      ],
    }

  componentDidMount() {
    if (localStorage.getItem('incomeList')) {
      let incomeList = JSON.parse(localStorage.getItem('incomeList'))
      this.setState({incomeList: incomeList})
    }
  }

  changeIncome = e => {
    e.preventDefault()
    this.setState({'title': e.target.value})
  }

  changeAmount = e => {
    e.preventDefault()
    let cAmount = e.target.value
    cAmount = parseFloat(cAmount).toFixed(2)
    this.setState({'amount': cAmount})
  }

  addIncome = e => {
    e.preventDefault()
    let incomeList = this.state.incomeList
    if (this.state.title === null || this.state.title === "") {
      alert('Please select a date.')
      return false
    }
    if (this.state.amount === 0 || this.state.amount === "0.00" || isNaN(this.state.amount)) {
      alert('Please enter a valid amount.')
      return false
    }
    else {
      this.state.incomeList.push({'title':this.state.title, 'amount': this.state.amount})
      this.setState({incomeList: this.state.incomeList})
      localStorage.setItem('incomeList', JSON.stringify(incomeList))
      e.target.reset();
    }
  }

  removeIncome = key => {
    let incomeList = this.state.incomeList
    this.state.incomeList.splice(key, 1)
    this.setState({incomeList: this.state.incomeList})
    localStorage.setItem('incomeList', JSON.stringify(incomeList))
  }

  render() {
    let showIncome = this.state.incomeList.map((val, key) => {
      return<IncomeList val={val} key={key} id={key} delMe={()=> this.removeIncome(key) } />
    })

    return (
      <div className="Main-div">
        <div className="form">
          <h3>Add a Paycheck</h3>
          <form onSubmit={this.addIncome}>
            <input onChange={this.changeIncome} className="input-field" type="date" name="income_name" placeholder="Date" required/>
            <input onChange={this.changeAmount} className="input-field" type="text" name="income_amount" placeholder="Paycheck Amount"/>
            <br></br>
            <button className="Add">
              <FontAwesome.FaPlusCircle className="i-add" alt="add expense icon" />
            </button>
          </form>
        </div>

        <div className="table">
          <h3>Previous Paychecks</h3>
          <table>
            <tbody>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>

            {showIncome}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Pg3
