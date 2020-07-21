import React, { Component } from 'react';
import '../App.css';

const count_LS = 'count';
export default class Decimalcounter extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: parseFloat(localStorage.getItem('count')) || parseFloat(1000.00).toFixed(2) };
  }
  tick() {
    if (this.state.seconds < 1000000000) {
      this.setState(prevState => ({
        seconds: prevState.seconds + .05
      }));
      this.setState({count: parseFloat(this.state.seconds).toFixed(2)});
      localStorage.setItem(count_LS, parseFloat(this.state.seconds).toFixed(2));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

    render() {
        return (
            <div>
                <button id="counter-btn"><p>{this.state.count}</p></button>
            </div>
        )
    }
}

