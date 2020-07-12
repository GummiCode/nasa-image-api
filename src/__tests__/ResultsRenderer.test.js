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

test(`component ResultsRenderer doesn't render a component when searchResults = {notSearched: True}`, () => {
   const { queryByTestId, queryByText } = render( <ResultsRenderer 
      searchResults={{notSearched: true}} resultsLoading={false} 
    />
  );
  const blank = queryByText("Please enter a search term.");
  expect(blank).not.toBeInTheDocument();
  const noImages = queryByText("No images found.");
  expect(noImages).not.toBeInTheDocument();
  const errorMessage = queryByTestId("error-message");
  expect(errorMessage).not.toBeInTheDocument();
  const imagesRendered = queryByTestId("images-rendered");
  expect(imagesRendered).not.toBeInTheDocument();
});

test(`component ResultsRenderer doesn't render a component when resultsLoading = true`, () => {
  const { queryByTestId, queryByText } = render(
    <ResultsRenderer 
      searchResults={{notSearched: false}} resultsLoading={true} 
    />
  );
  const blank = queryByText("Please enter a search term.");
  expect(blank).not.toBeInTheDocument();
  const noImages = queryByText("No images found.");
  expect(noImages).not.toBeInTheDocument();
  const errorMessage = queryByTestId("error-message");
  expect(errorMessage).not.toBeInTheDocument();
  const imagesRendered = queryByTestId("images-rendered");
  expect(imagesRendered).not.toBeInTheDocument();
});

test('component renders BlankMessage when searchResults.noSearchTerm = true', () => {
  const { queryByText } = render(
    <ResultsRenderer
      searchResults={{ noSearchTerm: true}}
      resultsLoading={false}
    />
  );
  const blank = queryByText("Please enter a search term.");
  expect(blank).toBeInTheDocument();
})