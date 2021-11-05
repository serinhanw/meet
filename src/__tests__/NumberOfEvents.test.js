import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />)
  });

  test("render range", () => {
    expect(NumberOfEventsWrapper.find(".events-range")).toHaveLength(1);
  });

  test("render default number of events", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-on-range").prop("value")).toBe(numberOfEvents);
  });

  test("change number of events", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: 12
    });
    const inputValue = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.number-on-range').simulate('change', inputValue);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  })
});
