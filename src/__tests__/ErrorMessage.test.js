import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

const mockData = {
  errorStatus: 400,
  errorText: "Mock Text"
}

test('component ErrorMessage renders with error data passed in', () => {
  const { asFragment } = render(
    <ErrorMessage errorParams = {mockData} />
  );
  const component = asFragment();
  expect (component).toMatchSnapshot();
});

test('component ErrorMessage formats the returned string correctly', () => {
  const { getByText } = render(
    <ErrorMessage errorParams = {mockData} />
  );
  const message = getByText("400 Error: Mock Text");
  expect(message).toBeInTheDocument();
})