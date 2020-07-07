import React from 'react';
import PropTypes from 'prop-types';
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

const SearchResults = ({ searchResults }) => {

  return (
      <SearchResultsContainer>
        {
          searchResults.map((result) => (
            <ScaledImage
              key={result.id}
              src={result.image}
              alt={result.description}
            />
          ))
        }
      </SearchResultsContainer>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array
}

export default SearchResults;