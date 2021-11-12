import React, { Component } from "react";
// import { Button } from "react-bootstrap";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
    this.toggleShowDetails = this.toggleShowDetails.bind(this);
  }

  toggleShowDetails() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    let event = this.props.event;

    return (
      <div className="event">
        <h2 className="event__Overview--name">{event.summary}</h2>
        <div>
          <p className="event__Overview--date">{event.start.dateTime} ({event.start.timeZone})</p>
          <p className="event__Overview--location">{event.location}</p>

          {this.state.showDetails === true && (
            <p className="event__Details--description">{event.description}</p>
          )}
        </div>

        <button className="details-btn" onClick={this.toggleShowDetails}>
          {!this.state.showDetails ? 'Show Details' : 'Hide Details'}
        </button>

      </div>
    );
  }
}
export default Event;