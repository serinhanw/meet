import React, { Component } from 'react';
import Event from './Event';
import { Row, Col } from "react-bootstrap";
import { WarningAlert } from "./Alert";


class EventList extends Component {

  render() {
    const { events } = this.props;
    return (
      <Row className="d-flex justify-content-center event-list-row">
        {!navigator.onLine ? (
          <WarningAlert text="You are offline! You're looking at cached data." />
        ) : (
          ""
        )}
        <Col md={10} sm={12} className="event-list-wrapper">

          <ul className="EventList row">
            {events.map(event =>

              <li key={event.id}>
                <Event event={event} />
              </li>

            )}
            {/* {console.log(this.props.events)} */}

          </ul >
        </Col>
      </Row>
    );
  }
}

export default EventList;
