import React from "react";
import { mount, shallow } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import { mockData } from "../mock-data";
import App from "../App";
import Event from "../Event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("the user didn’t open an event", () => {
      AppWrapper = mount(<App />);
    });

    when("the user sees a list of events", () => { });

    then("the user can see the collapsed events by default", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event__Details--description")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({ given, when, then, }) => {
    let EventWrapper;
    given("the user didn’t open an event", () => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    when("the user clicks and opens the selected event", () => {
      EventWrapper.find('.event .details-btn').at(0).simulate("click");
    }
    );

    then("the selected event element expands", () => {
      expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({ given, when, then, }) => {
    let EventWrapper;
    given("the user opened one event from the list to see the details", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ showDetails: true });
    });

    when("the user clicks to close the details of that event element", () => {
      EventWrapper.find('.event .details-btn').at(0).simulate('click');
    }
    );

    then("the event element collapses", () => {
      expect(EventWrapper.find('.event .event__Details--description')).toHaveLength(0);
    });
  });
});