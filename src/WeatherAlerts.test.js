import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import { WeatherAlert } from "./WeatherAlerts";

import alerts from "./exampleData/alerts.json";

let container = null;
let unmount = null;

beforeEach(() => {
});

afterEach(() => {
  unmount();
  container = null;
});

test("Snapshot: Minor WeatherAlert", () => {
  act(() => {
    const result = render(
      <WeatherAlert alert={alerts.features[0]} />
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

test("Snapshot: Moderate WeatherAlert", () => {
  act(() => {
    const result = render(
      <WeatherAlert alert={alerts.features[1]} />
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

test("Snapshot: Severe WeatherAlert", () => {
  act(() => {
    const result = render(
      <WeatherAlert alert={alerts.features[3]} />
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});

test("Snapshot: Extreme WeatherAlert", () => {
  act(() => {
    const result = render(
      <WeatherAlert alert={alerts.features[4]} />
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
