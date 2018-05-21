import React, { Component } from 'react';

//React Router
import { Route } from 'react-router-dom'

import Pg1 from '../pages/Pg1'
import Pg2 from '../pages/Pg2'
import Pg3 from '../pages/Pg3'

class Main extends Component {

  render() {
    return (
      <div className="Main-div">
        <Route exact path='/Pg1' component={Pg1} />
        <Route exact path='/Pg2' component={Pg2} />
        <Route exact path='/Pg3' component={Pg3} />
      </div>
    );
  }
}

export default Main
