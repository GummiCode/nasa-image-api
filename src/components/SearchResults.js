import React from 'react';
import styled from 'styled-components';


const SearchResultsContainer = styled.div`
  margin: 50px;
`;

const ScaledImage = styled.img`
  width: 270px;
  height: 300px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`


const SearchResults = (props) => {

  return (
      <SearchResultsContainer> 
        <p>Search Results Section</p>
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
      </SearchResultsContainer>
  );
};

export default SearchResults;

