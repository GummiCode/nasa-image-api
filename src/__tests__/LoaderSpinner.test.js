import React from 'react';
import { render } from '@testing-library/react';
import LoaderSpinner from '../components/LoaderSpinner';

test('component LoaderSpinner renders', () => {
  const { asFragment } = render(<LoaderSpinner />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});