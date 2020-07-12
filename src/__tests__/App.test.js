import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from '../components/App';

test('component App renders', () => {
  const { asFragment } = render(<App />);
  const component = asFragment();
  expect (component).toMatchSnapshot();
});

test('component App renders a loading spinner when resultsLoading is true', () => {
  const { getByTestId } = render( <App /> );
  expect(getByTestId("Loader")).toBeInTheDocument();
})
