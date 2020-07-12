import React from 'react';
import { render } from '@testing-library/react';
import LoaderSpinner from '../components/LoaderSpinner';

test('component LoaderSpinner renders', () => {
  const { asFragment } = render(<LoaderSpinner resultsLoading={true} />);
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

test('component LoaderSpinner renders the Loading icon when resultsLoading state is true', () => {
  const { getByTestId } = render(<LoaderSpinner resultsLoading={true} />);
  const loader = getByTestId("Loader");
  expect(loader).toBeInTheDocument();
});

