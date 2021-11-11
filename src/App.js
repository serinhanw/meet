import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
// import logo from './img/meet-logo-192.png';


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 12,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = (location === 'all' && eventCount === 0) ?
        events : location !== 'all' && eventCount === 0
          ? events.filter((event) => event.location === location)
          : events.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  }

  // updateNumberOfEvents = async (e) => {
  //   const newVal = e.target.value ? parseInt(e.target.value) : 32;
  //   await this.setState({ numberOfEvents: newVal });
  //   this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
  // };

  render() {
    return (
      // <div className="App">
      //   <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      //   <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      //   <EventList events={this.state.events} />
      // </div>

      <Container className="App">
        <Row>
          <Col className="CitySearchWrapper" md={6}>
            <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </Col>
          <Col className="NumberInputWrapper" md={6}>
            <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <EventList events={this.state.events} />
          </Col>
        </Row>
      </Container>

    );
  }
}

export default App;
