import React from 'react';
import { render } from '@testing-library/react';
import ResultsRenderer from '../components/ResultsRenderer';

const mockResults = {
  images: [
    {
      id: "id1",
      image: "https://mockaddress.mock/1",
      description: "Mock1"
    },
    {
      id: "id2",
      image: "https://mockaddress.mock/2",
      description: "Mock2"
    },
    {
      id: "id3",
      image: "https://mockaddress.mock/3",
      description: "Mock3"
    },
  ]
}

test('component ResultsRenderer renders', () => {
  const { asFragment } = render(<ResultsRenderer searchResults={mockResults} />);
  const component = asFragment();
  expect (component).toMatchSnapshot();
});

