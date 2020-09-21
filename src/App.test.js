import React from 'react';
//import { act } from "react-dom/test-utils";
import { render, waitFor, screen } from '@testing-library/react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App, { parseLocation, getHourlySubset } from './App';

import pointData from './exampleData/points.json';
import forecastData from './exampleData/forecast.json';
import hourlyData from './exampleData/hourly.json';
//import alertData from './exampleData/alerts.json';

const server = setupServer(
  rest.get('/points/*', (req, res, ctx) => {
    return res(ctx.json(pointData));
  })
);


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Loads and displays an initial logo', async () => {
  const { getByLabelText } = render(<App />);

  const mobileLogo = getByLabelText("Skyanchor mobile logo");
  expect(mobileLogo).toBeInTheDocument();
});

xtest('Loads and displays a forecast', async () => {
  // await act(async () => {
  //   const result = render(<App />);
  //   container = result.container;
  //   //await waitFor(() => getByText("Mostly Cloudy then Slight Chance Rain Showers"));
  // });

  render(<App />);

  //aria-label="brief forecast"
  // expect(container.querySelector('[aria-label="brief forecast"]').some(x =>
  //   x.textContent === "Mostly Cloudy then Slight Chance Rain Showers")).toBe(true);

  //console.log(container.innerHTML);

  const exampleForecast = await waitFor(() => screen.findAllByLabelText('brief forecast'));

  // const exampleForecast = getByText("Mostly Cloudy then Slight Chance Rain Showers");
  expect(exampleForecast).toBeInTheDocument();

  // expect(screen.getAllByLabel('location')[0]).toHaveTextContent('Baton Rouge, LA');
});

xtest('Shows an error if it cannot load the location grid', async () => {
  server.use(
    rest.get('/points/*', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<App />);

  await waitFor(() => screen.getByRole('alert'));

  expect(screen.getByRole('alert')).toHaveTextContent("Could not obtain NOAA grid point.");
});

test('Parsing locations', () => {
  expect(parseLocation()).toBe('');
  expect(parseLocation(null)).toBe('');
  expect(parseLocation({})).toBe('');
  expect(parseLocation({properties: {}})).toBe('');
  expect(parseLocation({properties: {city: 2}})).toBe('');
  expect(parseLocation({properties: {city: 2, state: 'NJ'}})).toBe('');
  expect(parseLocation({properties: {city: 'LA', state: false}})).toBe('');

  expect(parseLocation({properties: {city: 'Millville', state: 'NJ'}})).toBe('Millville, NJ');
});

test('Split hours data into subsets based on period start/end time', () => {
  const period = forecastData.properties.periods[2];
  const hoursArray = hourlyData.properties.periods;

  const result = getHourlySubset(hoursArray, period);

  expect(result).toHaveLength(12);

  const start = new Date(period.startTime);
  const end = new Date(period.endTime);

  result.forEach(r => {
    const hourStart = new Date(r.startTime);
    const hourEnd = new Date(r.endTime);
    expect(hourStart >= start).toBe(true);
    expect(hourEnd <= end).toBe(true);
  });
});

