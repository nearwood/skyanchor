import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import HourlyReport from './HourlyReport';

import hourlyData from './exampleData/hourly.json';

// test('renders learn react link', () => {
//   const { getByText } = render(<HourlyReport hourlyData={hourlyData.properties.periods}/>);
//   //const linkElement = getByText("Temperature");
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

xtest("Snapshot: Example HourlyReport", () => {
  act(() => {
    const result = render(
      <HourlyReport hourlyData={hourlyData.properties.periods.slice(0, 8)}/>
    );
    container = result.container;
    unmount = result.unmount;
  });

  expect(pretty(container.innerHTML)).toMatchSnapshot();
});