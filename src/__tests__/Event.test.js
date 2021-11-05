import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("extended details hidden by default", () => {
    EventWrapper.setState({
      hidden: true,
    });
    expect(EventWrapper.find(".more-details")).toHaveLength(0);
  });

  test("name of event shown when collapsed", () => {
    expect(EventWrapper.find(".event-name")).toHaveLength(1);
  });

  test("date shown when collapsed", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("location shown when collapsed", () => {
    expect(EventWrapper.find(".event-location")).toHaveLength(1);
  });

  test("show details button seen when collapsed", () => {
    expect(EventWrapper.find(".show-details-btn")).toHaveLength(1);
  });

  test("change state when clicking on show details button", () => {
    EventWrapper.setState({
      hidden: true,
    });
    EventWrapper.find(".show-details-btn").simulate("click");
    expect(EventWrapper.state("hidden")).toBe(false);
  });

  test("show more details about event on show details button click", () => {
    EventWrapper.setState({
      hidden: true,
    });
    EventWrapper.find(".show-details-btn").simulate("click");
    expect(EventWrapper.find(".more-details")).toHaveLength(1);
  });

  test("change state when clicking on hide details button", () => {
    EventWrapper.setState({
      hidden: false,
    });
    EventWrapper.find(".hide-details-btn").simulate("click");
    expect(EventWrapper.state("hidden")).toBe(true);
  });
});
