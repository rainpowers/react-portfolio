import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio/portfolio_container';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />

      </div>
    );
  }
}
