import React, { Component } from 'react';
import '../App.css';

const count_LS = 'count';
export default class Decimalcounter extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      seconds: parseFloat(localStorage.getItem('count')) || 1000.00
    };
  }
  tick() {
    if (this.state.seconds < 1000000000) {
      this.setState(prevState => ({
        seconds: prevState.seconds + .05
      }));
      localStorage.setItem(count_LS, parseFloat(this.state.seconds).toFixed(2));
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleload(){
    this.setState({count: parseFloat(this.state.seconds).toFixed(2)});
      localStorage.setItem(count_LS, parseFloat(this.state.seconds).toFixed(2));
  }
  resetcount =(e) => {
    localStorage.clear();
    this.setState({seconds: 1000.00});
  }
  render() {
      return (
        <div>
          <button id="counter-btn" onLoad={this.handleload}><p>{(this.state.seconds).toFixed(2)}</p></button>
          <div><button id="reset-btn" onClick={this.resetcount}>Reset</button></div>
        </div>
      )
  }
}

