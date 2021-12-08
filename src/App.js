import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import logo from './img/meet-logo-192.png';
// import Header from "./Header";
import { InfoAlert, ErrorAlert, WarningAlert } from "./Alert";
import WelcomeScreen from './WelcomeScreen';


class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: 'all',
    numberOfEvents: 12,
    errorText: '',
    infoText: '',
    warningText: '',
    showWelcomeScreen: undefined,
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


  // async componentDidMount() {
  //   this.mounted = true;
  //   const accessToken = localStorage.getItem('access_token');
  //   const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const code = searchParams.get("code");
  //   this.setState({
  //     showWelcomeScreen: !(
  //       code ||
  //       isTokenValid ||
  //       window.location.hostname === 'localhost'
  //     )
  //   });
  //   if ((code || isTokenValid) && this.mounted) {
  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({
  //           events: events.slice(0, this.state.numberOfEvents),
  //           // events,
  //           locations: extractLocations(events)
  //         });
  //       }
  //     });
  //   }


  //   if (navigator.onLine) {
  //     console.log('online');
  //     this.setState({
  //       warningText: "",
  //     });
  //   } else {
  //     console.log('offline');
  //     this.setState({
  //       warningText: "You are currently using the app offline.",
  //     });
  //   }
  // }

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
  updateEventCount = async (e) => {
    const newVal = e.target.value ? parseInt(e.target.value) : 12;

    if (newVal < 1 || newVal > 12) {
      await this.setState({
        errorText: 'Please choose a number between 1 and 12',
      });
    } else {
      await this.setState({
        errorText: '',
        numberOfEvents: newVal,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    const { locations, numberOfEvents, events } = this.state;
    if (this.state.showWelcomeScreen === undefined);
    return (
      // <div className="App">
      //   <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
      //   <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents} />
      //   <EventList events={this.state.events} />
      // </div>
      <div className="App">
        {/* <Header /> */}
        {/* <Container className="App"> */}
        <main>
          <Container>
            <header>
              <Row>
                {/* <h1 className="header-logo">
                  <img src={logo} alt="Meet Logo" />
                </h1> */}
                <h1>Meet Application</h1>
              </Row>
            </header>
            <Row>
              <WarningAlert text={this.state.warningText} />
              <Col className="CitySearchWrapper" md={6}>
                <CitySearch locations={locations} updateEvents={this.updateEvents} />
              </Col>
              <Col className="NumberInputWrapper" md={6}>
                {/* <NumberOfEvents numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} /> */}
                <NumberOfEvents
                  numberOfEvents={numberOfEvents}
                  updateEventCount={this.updateEventCount}
                  errorText={this.state.errorText} />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <EventList events={events} />
              </Col>
            </Row>
          </Container>
        </main>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>

    );
  }
}

export default App;
