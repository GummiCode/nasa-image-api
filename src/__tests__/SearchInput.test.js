import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../components/SearchInput';

test('component SearchInput renders', () => {
  const { asFragment } = render(<SearchInput/>);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
