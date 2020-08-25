import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const SearchResultsContainer = styled.div`
  width: calc(100vw - 40px); 
  min-width: 600px; 
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

const renderImages = (searchResults) => {
    return (
      <div data-testid="images-rendered">
        {searchResults.images.map((result) => (
          <ScaledImage
            key={result.id}
            src={result.image}
            alt={result.description}
          />
        ))}
       </div> 
    )
};


const SearchResults = ({ searchResults }) => {

   return (
      <SearchResultsContainer>
        {renderImages(searchResults)}
      </SearchResultsContainer>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.object
}

export default SearchResults;
