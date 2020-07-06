import React from 'react';
import { render} from '@testing-library/react';
import Header from '../components/Header';

test('component Header renders', () => {
  const {asFragment } = render(<Header/>);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});