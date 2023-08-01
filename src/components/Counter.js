import React, { Component } from "react";
//import PropTypes from "prop-types";


class Counter extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  }
  
  handleFeedback = (type) => {
    this.setState(
      (prevState) => ({
        [type]: prevState[type] + 1,
      }),
      () => this.Total()
    );
  };

  Total = (e) => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    const positivePercentage = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;
    this.setState({
      total: totalFeedbacks,
      positive: positivePercentage,
    });
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h2> please leave feedback</h2>
        <div>
          <button type="button" onClick={() => this.handleFeedback("good")}>
            Good {step}
          </button>
          <button type="button" onClick={() => this.handleFeedback("neutral")}>
            Neutral {step}
          </button>
          <button type="button" onClick={() => this.handleFeedback("bad")}>
            Bad {step}
          </button>
        </div>

        <div>
          <h2>statistics</h2>
          {this.state.total <= 0 ? (
          <p>There is no feedback</p>
        ) : (
          <ul>
            <li>good: {this.state.good}</li>
            <li>neutral: {this.state.neutral}</li>
            <li>bad: {this.state.bad}</li>
            <li>total: {this.state.total}</li>
            {/*<li>positive feedback: {this.state.positive}</li>*/}
            <li>Positive feedback: {this.state.positive.toFixed(2)}%</li>
          </ul>
        )}
        </div>
      </div>
    );
  }
}

export default Counter;
