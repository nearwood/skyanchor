import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import WeatherAlerts from './WeatherAlerts';

import alerts from './exampleData/alerts.json';

test('renders learn react link', () => {
  const { container, getByText } = render(<WeatherAlerts data={alerts} open={true} onClose={jest.fn} />);
  //const linkElement = getByText(/Today - .*/);
  //expect(linkElement).toBeInTheDocument();

  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot();
});
