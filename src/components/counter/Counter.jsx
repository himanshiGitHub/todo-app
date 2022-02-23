import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render = () => {
    return (
      <div className="counter">
        <CounterButton
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        ></CounterButton>
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        ></CounterButton>
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        ></CounterButton>
        <span className="count">{this.state.count}</span>
        <div>
          <button className="reset" onClick={this.reset}>
            RESET
          </button>
        </div>
      </div>
    );
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  increment = (by) => {
    this.setState((prevsState) => {
      return { count: prevsState.count + by };
    });
  };

  decrement = (by) => {
    this.setState((prevsState) => {
      return { count: prevsState.count - by };
    });
  };
}

class CounterButton extends Component {
  render = () => {
    return (
      <div className="counterButton">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  };

  increment = () => {
    this.props.incrementMethod(this.props.by);
  };

  decrement = () => {
    this.props.decrementMethod(this.props.by);
  };
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: PropTypes.number,
};

export default Counter;
