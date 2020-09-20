import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the logo', () => {
  const { getByLabelText } = render(<App />);
  const mobileLogo = getByLabelText("Skyanchor mobile logo");
  expect(mobileLogo).toBeInTheDocument();

  const desktopLogo = getByLabelText("Skyanchor desktop logo");
  expect(desktopLogo).toBeInTheDocument();
});
