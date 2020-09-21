import React from 'react';
//import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import App from './App';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import pointData from './exampleData/points.json';
import forecastData from './exampleData/forecast.json';
import hourlyData from './exampleData/hourly.json';
import alertData from './exampleData/alerts.json';


const server = setupServer(
  rest.get('/points/*', (req, res, ctx) => {
    return res(ctx.json(pointData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
  render(<App />);

  //fireEvent.click(screen.getByText('Load Greeting'));

  // const { getByText } = render(<App />);
  //   const linkElement = getByText("Mostly Cloudy then Slight Chance Rain Showers");
  //   expect(linkElement).toBeInTheDocument();

  // await waitFor(() => screen.getByRole('heading'));

  // expect(screen.getAllByLabel('location')[0]).toHaveTextContent('Baton Rouge, LA');
});

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   render(<App />);

//   fireEvent.click(screen.getByText('Load Greeting'));

//   await waitFor(() => screen.getByRole('alert'));

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
//   expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
// });