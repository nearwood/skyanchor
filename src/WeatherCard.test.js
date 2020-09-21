import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import WeatherCard from './WeatherCard';

import forecast from './exampleData/forecast.json';

// test('renders learn react link', () => {
//   const { getByText } = render(<WeatherCard period={forecast.properties.periods[0]} />);
//   //const linkElement = getByText(/Today - .*/);
//   //expect(linkElement).toBeInTheDocument();
// });

let container = null;
let unmount = null;

beforeEach(() => {
});

afterEach(() => {
  unmount();
  container = null;
});

xtest("Snapshot: Example WeatherCard", () => {
  act(() => {
    const result = render(
      <WeatherCard period={forecast.properties.periods[0]} />
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});