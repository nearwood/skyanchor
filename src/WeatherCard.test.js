import React from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import WeatherCard from './WeatherCard';

import forecast from './exampleData/forecast.json';

test('renders learn react link', () => {
  const { getByText } = render(<WeatherCard period={forecast.properties.periods[0]} />);
  //const linkElement = getByText(/Today - .*/);
  //expect(linkElement).toBeInTheDocument();
});
