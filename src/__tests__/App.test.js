import React from 'react';
import { render, wait } from '@testing-library/react';
import App from '../components/App';
import getImages from '../requests/getImages';
jest.mock('../requests/getImages');


test('component App renders', () => {
  const { asFragment } = render(<App />);
  const component = asFragment();
  expect (component).toMatchSnapshot();
});



/*
  beforeEach(() => {
    getImages.mockResolvedValue({
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
      ],
    });
  });
  
*/
