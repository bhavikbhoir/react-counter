import React, { Component } from 'react';
import '../App.css';

const count_LS = 'count_LS';
export default class Decimalcounter extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      count: parseFloat(localStorage.getItem('count_LS')) || 1000.00
    };
    this.tick = this.tick.bind(this);
    this.resetcount = this.resetcount.bind(this);
  }
  tick() {
    if (this.state.count < 1000000000) {
      this.setState(prevState => ({
        count: prevState.count + .05
      }));
      localStorage.setItem(count_LS, parseFloat(this.state.count).toFixed(2));
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  resetcount() {
    localStorage.clear();
    this.setState({count: 1000.00});
  }
  render() {
      return (
        <div>
          <button id="counter-btn"><p>{(this.state.count).toFixed(2)}</p></button>
          <div><button id="reset-btn" onClick={this.resetcount}>Reset</button></div>
        </div>
      )
  }
}

