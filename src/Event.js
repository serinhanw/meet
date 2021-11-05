import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Event extends Component {
  state = {
    hidden: true,
  };

  handleShowDetails = () => {
    this.setState({
      hidden: false,
    });
  };
  handleHideDetails = () => {
    this.setState({
      hidden: true,
    });
  };

  render() {
    const { event } = this.props;

    return (
      <div>
        <h2 className="event-name">{event.summary}</h2>
        <p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>
        <p className="event-location">{event.location}</p>

        {this.state.hidden === true && (
          <Button
            className="show-details-btn"
            onClick={this.handleShowDetails}
          >
            More Details</Button>
        )}

        {this.state.hidden === false && (
          <div className="more-details">
            <h3>About this event:</h3>
            <p className="event-description">{event.description}</p>
            <Button
              className="hide-details-btn"
              onClick={this.handleHideDetails}
            >Hide Details</Button>
          </div>
        )}
      </div>
    );
  }
}
export default Event;