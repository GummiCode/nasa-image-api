import React from 'react';
import { render} from '@testing-library/react';
import BlankMessage from '../components/BlankMessage';

test('component BlankMessage renders', () => {
  const { asFragment } = render(<BlankMessage/>);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});
