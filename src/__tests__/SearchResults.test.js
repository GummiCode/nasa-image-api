import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

const mockSearchData = {
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
};

test('component SearchResults renders', () => {
  const { asFragment } = render(
    <SearchResults searchResults={mockSearchData} />
  );
  const component = asFragment();
  expect(component).toMatchSnapshot();
});

