import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import HourlyReport from './HourlyReport';

import hourlyData from './exampleData/hourly.json';

test('renders learn react link', () => {
  const { getByText } = render(<HourlyReport hourlyData={hourlyData.properties.periods}/>);
  //const linkElement = getByText("Temperature");
  //expect(linkElement).toBeInTheDocument();
});
