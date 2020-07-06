import React from 'react';
import { render } from '@testing-library/react';
import HeaderImage from '../components/HeaderImage';

test('component HeaderImage renders', () => {
  const { asFragment } = render(<HeaderImage />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});