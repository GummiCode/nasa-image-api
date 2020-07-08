import React from 'react';
import { render } from '@testing-library/react';
import NoImagesMessage from '../components/NoImagesMessage';

test('component NoImagesMessage renders', () => {
  const { asFragment } = render(<NoImagesMessage />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});