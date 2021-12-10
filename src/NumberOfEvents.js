import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  // state = {
  //   numberOfEvents: 12,
  //   // errorText: '',
  // }

  // handleNumberChange = (event) => {
  //   const value = event.target.value;
  //   // this.props.updateEvents(null, value);
  //   this.setState({
  //     numberOfEvents: value,
  //   });
  //   this.props.updateEventCount(event.target.value);
  // };

  render() {
    // const { numberOfEvents } = this.state;
    return (
      <div className="events-range">
        <h4>Adjust the number of events</h4>
        <RangeSlider
          min={1}
          max={12}
          className="number-on-range"
          // // value={numberOfEvents}
          value={this.props.numberOfEvents}
          // // value={this.state.numberOfEvents}
          // // onChange={this.handleNumberChange}
          // // onChange={(e) => this.handleNumberChange(e)}
          onChange={(e) => this.props.updateEventCount(e)}
        />
        <ErrorAlert text={this.props.errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;