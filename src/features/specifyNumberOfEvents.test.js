import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockData } from "../mock-data";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
  test('When the user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
    let AppWrapper;
    given('the user hasn’t specified a number of events to display', () => {
      AppWrapper = mount(<App />);
    });

    when('the user searches', () => {
    });

    then('the user should be able to see 32 events on the events list', () => {
      AppWrapper.update();
      expect(AppWrapper.find(Event)).toHaveLength(mockData.length);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user didn’t change the number of events on the events list', () => {
      AppWrapper = mount(<App />);
    });

    when('the user changes the number of the events', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find("input").simulate("change", { target: { value: 12 } });
    });

    then('the user should be able to see the selected number of the events that they want to see', () => {
      expect(AppWrapper.state("numberOfEvents")).toEqual(12);
    });
  });
});
