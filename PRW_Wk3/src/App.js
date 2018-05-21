import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'

//React Router
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  onClickClose = e => {
    var index = parseInt(this.props.index);
    this.props.removeItem(index);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Menu />
            <Main />
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
