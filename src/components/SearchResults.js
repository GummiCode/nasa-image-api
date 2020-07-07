import React from 'react';
import styled from 'styled-components';


const SearchResultsContainer = styled.div`
  width: auto; 
  min-width: 1000px; 
  margin: 20px;
  display: flex; 
  flex-flow: row wrap;
  justify-content: start;
  align-items: start;
`;

const ScaledImage = styled.img`
  width: 270px;
  height: 300px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  object-fit: cover;
`


const SearchResults = (props) => {

  return (
      <SearchResultsContainer>
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
        <ScaledImage src="https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg" alt="Placeholder Image" />
      </SearchResultsContainer>
  );
};

export default SearchResults;

