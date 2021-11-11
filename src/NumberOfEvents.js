import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    })
  }

  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="events-range">
        <h3>Adjust the number of events</h3>
        <RangeSlider
          min={1}
          max={32}
          className="number-on-range"
          value={numberOfEvents}
          onChange={this.handleNumberChange}
        />
      </div>
    );
  }
}
export default NumberOfEvents;