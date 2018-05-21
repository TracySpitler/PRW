import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const expenses = [{name: 'Rent', value: 715.00}, {name: 'Misc', value: 148.52},
                  {name: 'Electricity', value: 301.23}, {name: 'Shopping', value: 208.45},
                  {name: 'Groceries', value: 278.49}, {name: 'Water', value: 89.67}]

const colors = ['#1D0251', '#019081', '#74CC7E', '#D2EBA7', '#240041', '#900048', '#FF4057', '#FF8260', '#45EBA5', '#21ABA5', '#1D566E', '#163A5F', '#a2d169', '#4d934b'];

class Pg1 extends Component {
  render() {
    return (
      <div className="Main-div">
        <PieChart className="piechart" width={800} height={500}>
          <Pie data={expenses} cx="50%" cy="50%" innerRadius={80} outerRadius={200} label>
            {
              expenses.map((entry, index) => (
                <Cell key={'cell-${index}'} fill={colors[index]}/>
              ))
            }
          </Pie>
          <Legend className="legend"/>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default Pg1
