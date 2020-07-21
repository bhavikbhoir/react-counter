import React, { Component } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';

const count_LS = 'count';
export default class Decimalcounter extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      seconds: parseFloat(localStorage.getItem('count')) || parseFloat(1.00).toFixed(2)
    };
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
    localStorage.getItem('count');
    this.setState({count: parseFloat(this.state.seconds).toFixed(2)});
    this.interval = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  handleload(){
    this.setState({count: parseFloat(this.state.seconds).toFixed(2)});
      localStorage.setItem(count_LS, parseFloat(this.state.seconds).toFixed(2));
  }

    render() {
      const count = (this.state.count).toFixed(2);
        return (
            <div>
              <Button id="counter-btn" onLoad={this.handleload}><p><NumberFormat value={count} displayType={'text'} thousandSeparator={true} /></p></Button>
            </div>
        )
    }
}

