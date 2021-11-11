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
      showDetails: false,
    });
    expect(EventWrapper.find(".event__Details")).toHaveLength(0);
  });

  test("name of event shown when collapsed", () => {
    expect(EventWrapper.find(".event__Overview--name")).toHaveLength(1);
  });

  test("date shown when collapsed", () => {
    expect(EventWrapper.find(".event__Overview--date")).toHaveLength(1);
  });

  test("location shown when collapsed", () => {
    expect(EventWrapper.find(".event__Overview--location")).toHaveLength(1);
  });

  test("test that show/hide details button is rendered", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("change state when clicking on show details button", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("change state when clicking on hide details button", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(false);
  });

  test("event details are rendered", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });

});
